import jwt from "jsonwebtoken";

/* GOOGLE AUTH SUCCESS */

export const googleAuthSuccess =
  async (req, res) => {
    try {

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message:
            "Authentication failed",
        });
      }

      /* JWT TOKEN */

      const token = jwt.sign(
        {
          _id: req.user._id,

          email: req.user.email,
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "7d",
        }
      );

      /* COOKIE */

      res.cookie("token", token, {
        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite: "lax",

        maxAge:
          7 *
          24 *
          60 *
          60 *
          1000,
      });

      /* REDIRECT TO FRONTEND CHECKOUT */

      res.redirect(
        `${process.env.CLIENT_URL}`
      );

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* GET CURRENT USER */

export const getCurrentUser =
  async (req, res) => {
    try {

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message:
            "Unauthorized",
        });
      }

      res.status(200).json({
        success: true,

        user: req.user,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* LOGOUT */

export const logoutUser = (
  req,
  res
) => {
  try {

    res.clearCookie("token");

    res.status(200).json({
      success: true,

      message:
        "Logged out successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};