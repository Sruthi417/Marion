import Stripe from "stripe";
import { STRIPE_SECRET_KEY, CLIENT_URL } from "../../config/env.js";

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
      success_url: `${CLIENT_URL}/orders`, //checkout-success?session_id={CHECKOUT_SESSION_ID}
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
