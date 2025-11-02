import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  member_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  payment_date: { type: Date, default: Date.now },
  payment_mode: { type: String, default: "Razorpay" },
  transaction_id: { type: String, required: true },
  status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);
