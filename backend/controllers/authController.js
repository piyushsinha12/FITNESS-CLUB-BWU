console.log("authController.js loaded");

import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    // Get fields from request body
    const { name, email, password } = req.body;

    // Check for existing user by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (with role always member for public signup)
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: "member"
    });

    await user.save();

    // Optionally don’t return password/hash in response
    res.status(201).json({ message: "User registered successfully.", user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: "Signup failed. Please try again." });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({ token, role: user.role, name: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  res.json({ message: "Password reset link will be sent in future implementation." });
};

export const updatePassword = async (req, res) => {
  res.json({ message: "Password updated successfully (mock endpoint)." });
};
