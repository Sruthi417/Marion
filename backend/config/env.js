import { config } from "dotenv";

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const {
  PORT,
  NODE_ENV,
  db_URI,
  CLIENT_URL,
  SERVER_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
  JWT_EXPIRY,
  STRIPE_SECRET_KEY,
} = process.env;
