import jwt from "jsonwebtoken";
import User from "../modules/users/user.model.js";

export const verifyToken = async (
  req,
  res,
  next
) => {
  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    /* VERIFY JWT */

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("Decoded Token:", decoded);

    /* FETCH FULL USER FROM MONGODB */

    const user = await User.findById(decoded._id);

    console.log("Mongo User:", user);

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    /* ATTACH FULL MONGO DOCUMENT */

    req.user = user;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token",
    });
  }
};