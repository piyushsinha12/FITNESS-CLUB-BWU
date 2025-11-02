import AttendanceGeneral from "../models/AttendanceGeneral.js";
import AttendanceClass from "../models/AttendanceClass.js";

// General Gym Check-in
export const checkinGym = async (req, res) => {
  try {
    const { member_id, checkin_time } = req.body;
    const record = new AttendanceGeneral({
      member_id,
      checkin_time,
      checkin_date: new Date(),
    });
    await record.save();
    res.status(201).json({ message: "Check-in recorded", record });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// General Gym Check-out
export const checkoutGym = async (req, res) => {
  try {
    const { member_id, checkout_time } = req.body;
    const record = await AttendanceGeneral.findOne({ member_id }).sort({ checkin_date: -1 });
    if (!record) return res.status(404).json({ message: "No check-in record found" });
    record.checkout_time = checkout_time;
    await record.save();
    res.json({ message: "Check-out recorded", record });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Class Attendance Marking
export const markClassAttendance = async (req, res) => {
  try {
    const { member_id, attendance_status } = req.body;
    const { class_id } = req.params;
    const attendanceRecord = new AttendanceClass({
      member_id,
      class_id,
      attendance_status: attendance_status || "present"
    });
    await attendanceRecord.save();
    res.status(201).json({ message: "Class attendance marked", attendanceRecord });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Attendance Records for a Member
export const getMemberAttendance = async (req, res) => {
  try {
    const { member_id } = req.params;
    const generalAttendance = await AttendanceGeneral.find({ member_id });
    const classAttendance = await AttendanceClass.find({ member_id });
    res.json({ generalAttendance, classAttendance });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
