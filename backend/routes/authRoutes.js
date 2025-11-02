import express from "express";
import { loginUser, resetPassword, updatePassword, registerUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.put("/update-password/:token", updatePassword);
router.post("/signup", registerUser); // Signup endpoint

export default router;
