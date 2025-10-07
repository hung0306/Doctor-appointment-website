const md5 = require("md5");
const User = require("../../models/user/user.model");

const generate = require("../../../Helpers/generate");

// [POST] /api/users/register
module.exports.register = async (req, res) => {
  //   console.log(req.body);
  const existEmail = await User.findOne({
    email: req.body.email,
    deleted: false,
  });
  if (existEmail) {
    res.json({
      code: 400,
      message: "Tài khoản đã tồn tại",
    });
    return;
  }
  const infoUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: md5(req.body.password),
    token: generate.generateRandomString(20),
  };

  // console.log(infoUser);
  const user = new User(infoUser);
  await user.save();
  // console.log(user);
  const token = user.token;
  //luu vao cookie
  res.cookie("token", token);
  res.json({
    code: 200,
    message: "Đăng ký thành công",
    token: token,
  });
};

// [POST] /api/users/login
module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({
    email: email,
    deleted: false,
  });

  if (!user) {
    res.json({
      code: 400,
      message: "Sai tài khoản hoặc mật khẩu",
    });
    return;
  }

  if (md5(password) !== user.password) {
    res.json({
      code: 400,
      message: "Sai tài khoản hoặc mật khẩu",
    });
    return;
  }
  // console.log(email);
  // console.log(password);

  const token = user.token;
  res.cookie("token", token);
  res.json({
    code: 200,
    message: "Đăng nhập thành công",
    token: token,
  });
};
// [POST] /api/v1/users/password/forgot
// module.exports.forgotPassword = async (req, res) => {
//   const email = req.body.email;
//   const user = await User.findOne({
//     email: email,
//     deleted: false,
//   });
//   if (!user) {
//     res.json({
//       code: 400,
//       message: "0 thanh cong",
//     });
//     return;
//   }
//   const otp = generate.generateRandomNumber(4);
//   const timeExpire = 5;
//   const objectForgotPassword = {
//     email: email,
//     otp: otp,
//     expireAt: Date.now() + timeExpire * 60 * 1000,
//   };
//   // console.log(objectForgotPassword);

//   // console.log(email);

//   // viec1: luu vao dtb
//   const forgotPassword = new ForgotPassword(objectForgotPassword);
//   forgotPassword.save();
//   // viec 2: gui otp gmail
//   const subject = "ma otp xac minh mk";
//   const html = `ma otp la ${otp}. su dung trong ${timeExpire} phut`;
//   sendMailHelper.sendMail(email, subject, html);
//   res.json({
//     code: 200,
//     message: "thanh cong da gui otp",
//   });
// };
// [POST] /api/v1/users/password/otp
// module.exports.otpPassword = async (req, res) => {
//   const email = req.body.email;
//   const otp = req.body.otp;
//   const result = await ForgotPassword.findOne({
//     email: email,
//     otp: otp,
//   });
//   if (!result) {
//     res.json({
//       code: 400,
//       message: "0 thanh cong ",
//     });
//     return;
//   }
//   const user = await User.findOne({ email: email });
//   res.cookie("token", user.token);
//   res.json({
//     code: 200,
//     message: "thanh cong ",
//     token: user.token,
//   });
// };
// [POST] /api/v1/users/password/reset
// module.exports.resetPassword = async (req, res) => {
//   const token = req.body.token;
//   const password = req.body.password;
//   // console.log(token);
//   // console.log(password);
//   const user = await User.findOne({
//     token: token,
//     deleted: false,
//   });
//   if (!user) {
//     res.json({
//       code: 400,
//       message: "0 thanh cong ",
//     });
//     return;
//   }
//   if (md5(password) === user.password) {
//     res.json({
//       code: 400,
//       message: "vui long nhap mat khau khac mat khau cu ",
//     });
//     return;
//   }
//   await User.updateOne({ token: token }, { password: md5(password) });
//   res.json({
//     code: 200,
//     message: "doi mk thanh cong ",
//   });
// };
// [GET] /api/v1/users/detail
module.exports.detail = async (req, res) => {
  console.log(req.user);

  res.json({
    code: 200,
    message: "thanh cong",
    info: req.user,
  });
};
// [GET] /api/v1/users/list
// module.exports.list = async (req, res) => {
//   const users = await User.find({
//     deleted: false,
//   }).select("fullName email");
//   res.json({
//     code: 200,
//     message: "thanh cong",
//     info: users,
//   });
// };
