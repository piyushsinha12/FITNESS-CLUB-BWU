import razorpayInstance from "../utils/razorpay.js";
import Payment from "../models/Payment.js";

// Create order to initiate payment
export const createOrder = async (req, res) => {
  try {
    const { amount, member_id } = req.body;

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpayInstance.orders.create(options);

    // Save order in db with pending status
    const payment = new Payment({
      member_id,
      amount,
      transaction_id: order.id,
      status: "pending"
    });

    await payment.save();

    res.status(201).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating order" });
  }
};

// Verify payment and update payment status
export const verifyPayment = async (req, res) => {
  try {
    const { order_id, payment_id, signature, member_id } = req.body;

    // Use crypto library to generate expected signature and compare
    const crypto = await import("crypto");
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    const isValid = generated_signature === signature;

    if (!isValid) return res.status(400).json({ message: "Invalid payment signature" });

    // Update payment record
    const payment = await Payment.findOneAndUpdate(
      { transaction_id: order_id, member_id: member_id },
      { status: "paid" },
      { new: true }
    );

    if (!payment) return res.status(404).json({ message: "Payment record not found" });

    res.json({ message: "Payment verified", payment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error verifying payment" });
  }
};
