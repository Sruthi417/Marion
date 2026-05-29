import Product from "./product.model.js";

import cloudinary from "../../config/cloudinary.js";

/* GET ALL PRODUCTS */

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* GET SINGLE PRODUCT */

export const getSingleProduct =
  async (req, res) => {

    try {

      const product =
        await Product.findOne({
          slug: req.params.slug,
        });

      if (!product) {

        return res.status(404).json({
          success: false,
          message:
            "Product not found",
        });
      }

      res.status(200).json({
        success: true,
        product,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};

/* CREATE PRODUCT */

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      slug,
      category,
      gender,
      price,
      oldPrice,
      currency,
      isSale,
      isNew,
      isPopular,
      description,
      fabric,
    } = req.body;

    /* VALIDATE REQUIRED FIELDS */

    if (!name || !slug || !category || !price || !description) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* VALIDATE FILES */

    if (!req.files || !req.files.thumbnail || !req.files.hoverImage) {
      return res.status(400).json({
        success: false,
        message: "Thumbnail and hover image are required",
      });
    }

    /* VALIDATE FILE TYPES */

    const allFiles = [
      ...req.files.thumbnail,
      ...req.files.hoverImage,
      ...(req.files.images || []),
    ];

    for (const file of allFiles) {
      if (!file.mimetype.startsWith("image/")) {
        return res.status(400).json({
          success: false,
          message: "Only image files are allowed",
        });
      }
    }

    /* PARSE ARRAYS */

    const colors = JSON.parse(req.body.colors || "[]");

    const sizes = JSON.parse(req.body.sizes || "[]");

    const tags = JSON.parse(req.body.tags || "[]");

    /* FILES */

    const thumbnailFile = req.files.thumbnail[0];

    const hoverImageFile = req.files.hoverImage[0];

    const galleryImages = req.files.images || [];

    /* UPLOAD HELPER FUNCTION */

    const uploadToCloudinary = (buffer, filename) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "marion-products",
            public_id: `${Date.now()}-${filename}`,
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        );

        stream.end(buffer);
      });
    };

    /* CLOUDINARY UPLOADS */

    const thumbnailUpload = await uploadToCloudinary(
      thumbnailFile.buffer,
      `thumbnail-${Date.now()}`,
    );

    const hoverUpload = await uploadToCloudinary(
      hoverImageFile.buffer,
      `hover-${Date.now()}`,
    );

    const uploadedImages = await Promise.all(
      galleryImages.map(async (file, index) => {
        const result = await uploadToCloudinary(
          file.buffer,
          `image-${Date.now()}-${index}`,
        );

        return result.secure_url;
      }),
    );

    /* CREATE PRODUCT */

    const parsedIsSale = isSale === "true";

    const parsedIsNew = isNew === "true";

    const parsedIsPopular = isPopular === "true";

    const parsedOldPrice =
      oldPrice && oldPrice !== "null" ? Number(oldPrice) : null;

    const product = await Product.create({
      name,
      slug,
      category,
      gender,

      price,

      oldPrice: parsedOldPrice,

      currency,

      isSale: parsedIsSale,

      isNew: parsedIsNew,

      isPopular: parsedIsPopular,

      description,

      fabric,

      colors,

      sizes,

      tags,

      thumbnail: thumbnailUpload.secure_url,

      hoverImage: hoverUpload.secure_url,

      images: uploadedImages,
    });

    res.status(201).json({
      success: true,

      message: "Product created successfully",

      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* UPDATE PRODUCT */

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,

      message: "Product updated successfully",

      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* DELETE PRODUCT */

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,

      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
