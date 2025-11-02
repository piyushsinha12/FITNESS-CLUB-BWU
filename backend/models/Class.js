import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    trainer_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    facility_id: { type: String }, // Optional - can be linked later
    date: { type: Date, required: true },
    time: { type: String, required: true },
    max_slots: { type: Number, required: true },
    booked_slots: { type: Number, default: 0 },
    status: { type: String, default: "active" }, // active/inactive
  },
  { timestamps: true }
);

export default mongoose.model("Class", classSchema);
