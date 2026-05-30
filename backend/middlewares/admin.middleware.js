/* ================================================================
   ADMIN MIDDLEWARE — email whitelist check
   Runs AFTER verifyToken so req.user is already the Mongo document
   ================================================================ */

export const verifyAdmin = (req, res, next) => {
  const allowed = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase());

  const email = req.user?.email?.toLowerCase();

  if (!email || !allowed.includes(email)) {
    return res.status(403).json({
      success: false,
      message: "Forbidden — admin access only",
    });
  }

  next();
};
