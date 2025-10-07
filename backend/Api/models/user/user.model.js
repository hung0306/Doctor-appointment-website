const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    token: String,
    phoneNumber: String,
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"] },
    birthDate: String, // ISO format
    address: String,
    avatarUrl: String,

    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
