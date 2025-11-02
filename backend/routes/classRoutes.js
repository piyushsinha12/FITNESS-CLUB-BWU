import express from "express";
import {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass
} from "../controllers/classController.js";
import { protect, adminOnly, trainerOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(protect, getAllClasses)
  .post(protect, trainerOnly, createClass);

router.route("/:id")
  .get(protect, getClassById)
  .put(protect, trainerOnly, updateClass)
  .delete(protect, adminOnly, deleteClass);

export default router;
