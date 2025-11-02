import express from "express";
import {
  checkinGym,
  checkoutGym,
  markClassAttendance,
  getMemberAttendance
} from "../controllers/attendanceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/general/checkin", protect, checkinGym);
router.post("/general/checkout", protect, checkoutGym);
router.post("/class/:class_id", protect, markClassAttendance);
router.get("/member/:member_id", protect, getMemberAttendance);

export default router;
