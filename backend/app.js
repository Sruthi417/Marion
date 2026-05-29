import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes.js";
import { CLIENT_URL } from "./config/env.js";
import passport from "./config/passport.js";


const app = express();


app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 

const allowedOrigins = [
  CLIENT_URL,
  "http://localhost:3000",
  "https://marion-coral.vercel.app"
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(passport.initialize());

app.use("/api", router);


app.get("/", (req, res) => {
  res.send("Marion Backend Running");
});

export default app;