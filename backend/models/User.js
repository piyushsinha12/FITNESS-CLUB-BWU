import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "trainer", "receptionist", "member"],
    default: "member"
  },
  dob: String,
  contact: String,
  address: String,
  membership_id: { type: mongoose.Schema.Types.ObjectId, ref: "Membership" },
  health_info: Object,
  status: { type: String, default: "active" },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", userSchema);
