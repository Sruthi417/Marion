import Order from "../orders/order.model.js";

/* CREATE ORDER */

export const createOrder = async (
  req,
  res
) => {
  try {

    console.log("REQ USER:", req.user);
    console.log("REQ BODY:", req.body);

    const {
      products,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      stripeSessionId,
    } = req.body;

    console.log("Creating order...");
    console.log("Order payload:", {
      user: req.user._id,
      products,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      stripeSessionId,
    });

    const order = await Order.create({
      user: req.user._id,

      products,

      shippingAddress,

      subtotal,

      shippingFee,

      totalAmount,

      stripeSessionId,

      paymentStatus: "paid",

      orderStatus: "processing",
    });

    console.log("Order created in MongoDB:", order._id);

    res.status(201).json({
      success: true,

      message:
        "Order placed successfully",

      order,
    });

  } catch (error) {

    console.error("createOrder error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* GET USER ORDERS */

export const getUserOrders = async (
  req,
  res
) => {
  try {

    console.log("Fetching orders...");
    console.log("User:", req.user);

    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized — no user on request",
      });
    }

    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("user")
      .populate("products.product")
      .sort({
        createdAt: -1,
      });

    console.log(`Found ${orders.length} orders for user ${req.user._id}`);

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {

    console.error("getUserOrders error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* GET SINGLE ORDER */

export const getSingleOrder = async (
  req,
  res
) => {
  try {

    const order = await Order.findById(
      req.params.id
    )
      .populate("user")
      .populate("products.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {

    console.error("getSingleOrder error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* UPDATE ORDER STATUS */

export const updateOrderStatus =
  async (req, res) => {
    try {

      const order =
        await Order.findById(
          req.params.id
        );

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      order.orderStatus =
        req.body.orderStatus;

      await order.save();

      res.status(200).json({
        success: true,

        message:
          "Order status updated",

        order,
      });

    } catch (error) {

      console.error("updateOrderStatus error:", error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };