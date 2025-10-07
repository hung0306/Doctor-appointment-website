const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    userId: String,
    doctorId: String,
    date: Date,
    time: String,
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
    notes: String,
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model(
  "Appointment",
  AppointmentSchema,
  "appointments"
);

module.exports = Appointment;
