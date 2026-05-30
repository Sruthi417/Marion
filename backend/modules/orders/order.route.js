import { Router } from "express";

import {
  createOrder,
  getUserOrders,
  getSingleOrder,
  updateOrderStatus,
} from "./order.controller.js";

import { verifyToken } from "../../middlewares/auth.middleware.js";

const orderRouter = Router();

/* CREATE ORDER */

orderRouter.post("/create", verifyToken,createOrder); // verifyToken,

/* GET USER ORDERS */

orderRouter.get("/my-orders",verifyToken, getUserOrders); // verifyToken,

/* GET SINGLE ORDER */

orderRouter.get("/:id", verifyToken, getSingleOrder);

/* UPDATE ORDER STATUS */

orderRouter.put("/update/:id", verifyToken, updateOrderStatus);

export default orderRouter;
