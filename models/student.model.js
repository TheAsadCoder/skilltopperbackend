import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, unique: true },
  fullName: { type: String, required: true },
  fatherName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  qualification: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  cnic: { type: String, unique: true, required: true },
  laptopAvailable: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String },
  paymentScreenshot: { type: String, required: true },
  profileVerified: { type: Boolean, default: false },
  results: {type: Boolean, default: false},
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;
