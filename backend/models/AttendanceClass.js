import mongoose from "mongoose";

const attendanceClassSchema = new mongoose.Schema({
  member_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
  attendance_status: { type: String, enum: ["present", "absent"], default: "present" },
});

export default mongoose.model("AttendanceClass", attendanceClassSchema);
