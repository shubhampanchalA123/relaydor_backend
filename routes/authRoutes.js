import express from "express";
import { registerUser, verifyEmailOTP, login, getProfile, updateProfile, verifyMobileOTP, resendEmailOTP, resendMobileOTP, forgotPassword, resetPassword } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// REGISTER ROUTE
router.post("/register", registerUser);
router.post("/verify-email", verifyEmailOTP); // Placeholder for email verification route
router.post("/verify-mobile", verifyMobileOTP); // Placeholder for mobile verification route
router.post("/login", login); // Login route for both admin and user
router.post("/resend-email-otp", resendEmailOTP);
router.post("/resend-mobile-otp", resendMobileOTP);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/profile", authMiddleware, getProfile); // Profile route with auth middleware
router.put("/profile-update", authMiddleware, updateProfile); // Update profile route with auth middleware

export default router;

