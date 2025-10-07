const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user/user.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
// const authMiddleware = require("../middlewares/auth.middleware");
router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/detail", authMiddleware.requireAuth, controller.detail);
// router.post("/password/forgot", controller.forgotPassword);
// router.post("/password/otp", controller.otpPassword);
// router.post("/password/reset", controller.resetPassword);

module.exports = router;
