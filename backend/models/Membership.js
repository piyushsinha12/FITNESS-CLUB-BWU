import mongoose from "mongoose";


const membershipSchema = new mongoose.Schema(
  {
    plan_name: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., "1 month", "12 months"
    price: { type: Number, required: true },
    plan_limits: {
      classes_per_month: { type: String, default: "unlimited" },
    },
    gst: { type: Number, default: 0 },
    auto_renew: { type: Boolean, default: false },
    branch_id: { type: String },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
