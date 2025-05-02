import express from "express";
import {
  login,
  logout,
  onboard,
  signup,
  sendOtp,
  verifyOtp,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

// check if user is logged in
router.get("/me", protectRoute, (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});

export default router;
