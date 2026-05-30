import Stripe from "stripe";
import { STRIPE_SECRET_KEY, CLIENT_URL } from "../../config/env.js";
import Order from "../orders/order.model.js";

const stripe = new Stripe(STRIPE_SECRET_KEY);

/* CREATE CHECKOUT SESSION */

export const createCheckoutSession = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;

    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Products array is required and cannot be empty",
      });
    }

    /* Build line items for Stripe from the products array */
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          ...(product.image && { images: [product.image] }),
        },
        unit_amount: Math.round(product.price * 100), // Stripe expects amount in cents
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${CLIENT_URL}/orders?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/cart`, //checkout-cancel
      metadata: {
        totalAmount: String(totalAmount),
      },
    });

    res.status(200).json({
      success: true,
      id: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* VERIFY STRIPE SESSION AND CREATE ORDER */

export const verifyAndCreateOrder = async (req, res) => {
  try {
    const { sessionId, orderPayload } = req.body;

    if (!sessionId) {
      return res.status(400).json({ success: false, message: "sessionId is required" });
    }

    /* Retrieve the session from Stripe and confirm payment succeeded */
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== "paid") {
      return res.status(400).json({
        success: false,
        message: "Payment not completed. Order will not be created.",
      });
    }

    /* Idempotency: if an order was already created for this session, return it */
    const existing = await Order.findOne({ stripeSessionId: sessionId });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: "Order already exists",
        order: existing,
      });
    }

    /* Payment confirmed — create the order */
    const {
      products,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
    } = orderPayload;

    const order = await Order.create({
      user: req.user._id,
      products,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      stripeSessionId: sessionId,
      paymentStatus: "paid",
      orderStatus: "processing",
    });

    console.log("[Stripe] Order created after payment verification:", order._id);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("[Stripe] verifyAndCreateOrder error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
