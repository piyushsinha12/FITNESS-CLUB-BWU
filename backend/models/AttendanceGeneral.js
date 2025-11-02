import mongoose from "mongoose";

const attendanceGeneralSchema = new mongoose.Schema({
  member_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checkin_date: { type: Date, required: true, default: Date.now },
  checkin_time: { type: String, required: true },
  checkout_time: { type: String },
});

export default mongoose.model("AttendanceGeneral", attendanceGeneralSchema);
