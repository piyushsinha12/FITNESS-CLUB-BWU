// hash.js
import bcrypt from "bcryptjs";

const password = "5235358Piyush";  // ← your password here

async function generateHash() {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Your Hashed Password:\n", hashedPassword);
  } catch (err) {
    console.error("Error generating hash:", err);
  }
}

generateHash();
// To run this script, use the command: node backend/hash.js
// {
//   "name": "Admin User Piyush",
//   "email": "piyushsinha696@gmail.com",
//   "password": "$2b$10$4Ue2cCW43/orClsd93T0dOmbICGal.Gs6oi9eKslPEDorMynSZ.JO",
//   "role": "admin",
//   "status": "active"
// }
