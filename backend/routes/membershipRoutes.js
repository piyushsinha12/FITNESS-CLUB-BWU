import express from "express";
import {
  createMembership,
  getAllMemberships,
  getMembershipById,
  updateMembership,
  deleteMembership
} from "../controllers/membershipController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(protect, getAllMemberships)
  .post(protect, adminOnly, createMembership);

router.route("/:id")
  .get(protect, getMembershipById)
  .put(protect, adminOnly, updateMembership)
  .delete(protect, adminOnly, deleteMembership);

export default router;
