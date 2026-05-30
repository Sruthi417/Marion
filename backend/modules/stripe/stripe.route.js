import { Router } from "express";

import { createCheckoutSession, verifyAndCreateOrder } from "./stripe.controller.js";

import { verifyToken } from "../../middlewares/auth.middleware.js";

const stripeRouter = Router();

/* CREATE CHECKOUT SESSION */

stripeRouter.post("/create-checkout-session", verifyToken, createCheckoutSession);

/* VERIFY STRIPE PAYMENT AND CREATE ORDER */

stripeRouter.post("/verify-and-create-order", verifyToken, verifyAndCreateOrder);

export default stripeRouter;
