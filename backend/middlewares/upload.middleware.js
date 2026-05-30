import multer from "multer";

/* STORAGE */

const storage = multer.memoryStorage();

/* MULTER CONFIG - NO FILE FILTER */

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
