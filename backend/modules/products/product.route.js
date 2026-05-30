import { Router } from "express";

import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../products/product.controller.js";

import { upload } from "../../middlewares/upload.middleware.js";
import { verifyToken } from "../../middlewares/auth.middleware.js";
import { verifyAdmin } from "../../middlewares/admin.middleware.js";

const productRouter = Router();

/* PUBLIC — anyone can browse */
productRouter.get("/", getProducts);
productRouter.get("/:slug", getSingleProduct);

/* ADMIN ONLY — product management */
productRouter.post(
  "/create",
  verifyToken,
  verifyAdmin,
  upload.fields([
    { name: "thumbnail",   maxCount: 1 },
    { name: "hoverImage",  maxCount: 1 },
    { name: "images",      maxCount: 5 },
  ]),
  createProduct
);

productRouter.put("/update/:id",   verifyToken, verifyAdmin, updateProduct);
productRouter.delete("/delete/:id", verifyToken, verifyAdmin, deleteProduct);

export default productRouter;
