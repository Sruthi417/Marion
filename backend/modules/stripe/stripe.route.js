import { Router } from "express";

import { createCheckoutSession } from "./stripe.controller.js";

import { verifyToken } from "../../middlewares/auth.middleware.js";

const stripeRouter = Router();

/* CREATE CHECKOUT SESSION */

stripeRouter.post("/create-checkout-session", verifyToken, createCheckoutSession);

export default stripeRouter;
