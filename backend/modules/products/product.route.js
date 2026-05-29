import { Router } from "express";

import {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../products/product.controller.js";

import { upload } from "../../middlewares/upload.middleware.js";

const productRouter = Router();

/* GET */

productRouter.get("/", getProducts);

productRouter.get("/:slug", getSingleProduct);

/* POST */

productRouter.post(
  "/create",

  upload.fields([
    {
      name: "thumbnail",
      maxCount: 1,
    },

    {
      name: "hoverImage",
      maxCount: 1,
    },

    {
      name: "images",
      maxCount: 5,
    },
  ]),
  createProduct,
);



/* UPDATE */

productRouter.put("/update/:id", updateProduct);

/* DELETE */

productRouter.delete("/delete/:id", deleteProduct);

export default productRouter;
