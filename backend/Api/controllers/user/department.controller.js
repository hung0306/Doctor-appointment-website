const Department = require("../../models/admin/department.model");

// [GET] /api/departments
module.exports.index = async (req, res) => {
  const department = await Department.find();
  res.json(department);
};
