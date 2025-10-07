const userRoutes = require("./user.route");
const doctorRoutes = require("./doctor.route");
const departmentRoutes = require("./department.route");
// const authMiddleware = require("../middlewares/auth.middleware");
module.exports = (app) => {
  // use '/api' (no trailing slash) so concatenation yields '/api/users'
  const version = "/api";
  app.use(version + "/users", userRoutes);
  app.use(version + "/doctors", doctorRoutes);
  app.use(version + "/departments", departmentRoutes);
};
