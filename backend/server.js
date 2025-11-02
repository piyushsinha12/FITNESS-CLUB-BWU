import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import membershipRoutes from "./routes/membershipRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
// import equipmentRoutes from "./routes/equipmentRoutes.js";
// import feedbackRoutes from "./routes/feedbackRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173" //  actual frontend domain
}));

app.use(express.json());
app.use(morgan("dev"));
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});



app.get("/", (req, res) => {
  res.send("Fitness Club Management System API is running...");
});

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/memberships", membershipRoutes);
app.use("/api/v1/classes", classRoutes);
app.use("/api/v1/payments", paymentRoutes);
// app.use("/api/v1/equipment", equipmentRoutes);
// app.use("/api/v1/feedback", feedbackRoutes);
app.use("/api/v1/attendance", attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
