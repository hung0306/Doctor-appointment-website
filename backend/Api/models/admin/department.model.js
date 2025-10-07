const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model(
  "Department",
  DepartmentSchema,
  "departments"
);

module.exports = Department;
