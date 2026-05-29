import { Router } from "express";
import productRouter from "./modules/products/product.route.js"
import orderRouter from "./modules/orders/order.route.js";
import stripeRouter from "./modules/stripe/stripe.route.js";
import authRoute from "./modules/auth/auth.route.js";

const router = Router();
router.use("/products", productRouter);
router.use("/orders", orderRouter);
router.use("/stripe", stripeRouter);
router.use("/auth",authRoute)

export default router;