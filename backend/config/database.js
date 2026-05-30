import mongoose from "mongoose";
import { db_URI } from "./env.js";

export const connectToDatabase = async () => {
  try {

    const connection = await mongoose.connect(
      db_URI
    );

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );

  } catch (error) {

    console.error(
      "MongoDB Connection Failed:",
      error.message
    );

    process.exit(1);
  }
};