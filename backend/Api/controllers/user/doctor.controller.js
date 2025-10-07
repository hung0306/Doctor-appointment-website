const Doctor = require("../../models/admin/doctor.model");
const searchHelper = require("../../../Helpers/search");

// [GET] /api/doctors
module.exports.index = async (req, res) => {
  const find = {};
  // Bộ lọc theo departmentId
  if (req.query.departmentId) {
    find.departmentId = req.query.departmentId;
  }
  // End Bộ lọc theo departmentId

  // tìm theo location hoặc name
  const objectSearch = searchHelper(req.query);

  if (objectSearch.regex) {
    find.$or = [{ location: objectSearch.regex }, { name: objectSearch.regex }];
  }

  const doctors = await Doctor.find(find);
  res.json(doctors);
};
