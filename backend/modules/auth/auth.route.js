import { Router } from "express";

import passport from "../../config/passport.js";

import {
  googleAuthSuccess,
  getCurrentUser,
  logoutUser,
} from "./auth.controller.js";

import { verifyToken } from "../../middlewares/auth.middleware.js";

const authRoute = Router();

/* GOOGLE LOGIN */

authRoute.get(
  "/google",

  passport.authenticate(
    "google",
    {
      scope: [
        "profile",
        "email",
      ],
    }
  )
);

/* GOOGLE CALLBACK */

authRoute.get(
  "/google/callback",

  passport.authenticate(
    "google",
    {
      session: false,

      failureRedirect:
        `${process.env.CLIENT_URL}/login`,
    }
  ),

  googleAuthSuccess
);

/* GET CURRENT USER */

authRoute.get(
  "/me",

  verifyToken,

  getCurrentUser
);

/* LOGOUT */

authRoute.post(
  "/logout",

  logoutUser
);

export default authRoute;