const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    departmentId: String,
    name: String,
    specialty: String,
    experience: Number,
    phone: String,
    location: String,
    email: String,
    bio: String,
    image: String,
    availableDates: [Date],
    availableTimes: [String],
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", DoctorSchema, "doctors");

module.exports = Doctor;
