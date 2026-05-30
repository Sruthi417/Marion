import Order from "../orders/order.model.js";
import User from "../users/user.model.js";

/* ================================================================
   GET ALL ORDERS
   ================================================================ */

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email image")
      .populate("products.product", "name thumbnail")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("getAllOrders error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   GET SINGLE ORDER (admin — full detail incl. address)
   ================================================================ */

export const getAdminOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email image")
      .populate("products.product", "name thumbnail slug");

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("getAdminOrder error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   UPDATE ORDER STATUS (admin)
   ================================================================ */

export const adminUpdateOrderStatus = async (req, res) => {
  try {
    const { orderStatus, paymentStatus } = req.body;

    const update = {};
    if (orderStatus) update.orderStatus = orderStatus;
    if (paymentStatus) update.paymentStatus = paymentStatus;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    )
      .populate("user", "name email")
      .populate("products.product", "name thumbnail");

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({ success: true, message: "Order updated", order });
  } catch (error) {
    console.error("adminUpdateOrderStatus error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   GET ALL USERS
   ================================================================ */

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    // attach order count to each user
    const usersWithCount = await Promise.all(
      users.map(async (u) => {
        const orderCount = await Order.countDocuments({ user: u._id });
        return { ...u.toObject(), orderCount };
      })
    );

    res.status(200).json({ success: true, users: usersWithCount });
  } catch (error) {
    console.error("getAllUsers error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   GET SINGLE USER + THEIR ORDERS
   ================================================================ */

export const getAdminUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const orders = await Order.find({ user: req.params.id })
      .populate("products.product", "name thumbnail")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, user, orders });
  } catch (error) {
    console.error("getAdminUser error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   DELETE USER
   ================================================================ */

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("deleteUser error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ================================================================
   DASHBOARD STATS
   ================================================================ */

export const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const totalUsers  = await User.countDocuments();

    const revenueResult = await Order.aggregate([
      { $match: { paymentStatus: "paid" } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } },
    ]);
    const totalRevenue = revenueResult[0]?.total || 0;

    const recentOrders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: { totalOrders, totalUsers, totalRevenue },
      recentOrders,
    });
  } catch (error) {
    console.error("getAdminStats error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
