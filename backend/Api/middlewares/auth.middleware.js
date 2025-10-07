const User = require("../models/user/user.model");

module.exports.requireAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    // tách chuỗi thành mảng ví dụ chuỗi "baeze token" thì lấy cái phần tử thứ 1 là token
    const token = req.headers.authorization.split(" ")[1];
    const user = await User.findOne({
      token: token,
      deleted: false,
    }).select("-password");
    // t sua lai la ko gui ve pass
    if (!user) {
      res.json({
        code: 403,
        message: "khong thanh cong",
      });
    } else {
      req.user = user;
      next();
    }
  } else {
    res.json({
      code: 403,
      message: "khong thanh cong",
    });
  }
};
