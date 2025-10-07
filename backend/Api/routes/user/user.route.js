const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../../controllers/user/user.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const uploadCloud = require("../../middlewares/uploadCloud.middleware");

const fileUpload = multer();
// const authMiddleware = require("../middlewares/auth.middleware");
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/detail", authMiddleware.requireAuth, controller.detail);
router.patch(
  "/updateProfile",
  authMiddleware.requireAuth,
  fileUpload.single("avatarUrl"),
  uploadCloud.upload,
  controller.updateProfile
);
// router.post("/password/forgot", controller.forgotPassword);
// router.post("/password/otp", controller.otpPassword);
// router.post("/password/reset", controller.resetPassword);

module.exports = router;
