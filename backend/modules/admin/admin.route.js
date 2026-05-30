import { Router } from "express";
import { verifyToken } from "../../middlewares/auth.middleware.js";
import { verifyAdmin } from "../../middlewares/admin.middleware.js";
import {
  getAdminStats,
  getAllOrders,
  getAdminOrder,
  adminUpdateOrderStatus,
  getAllUsers,
  getAdminUser,
  deleteUser,
} from "./admin.controller.js";

const adminRouter = Router();

/* All admin routes require: valid JWT + admin email */
adminRouter.use(verifyToken, verifyAdmin);

/* STATS */
adminRouter.get("/stats", getAdminStats);

/* ORDERS */
adminRouter.get("/orders",        getAllOrders);
adminRouter.get("/orders/:id",    getAdminOrder);
adminRouter.put("/orders/:id",    adminUpdateOrderStatus);

/* USERS */
adminRouter.get("/users",         getAllUsers);
adminRouter.get("/users/:id",     getAdminUser);
adminRouter.delete("/users/:id",  deleteUser);

export default adminRouter;
