const uploadToCloudinary = require("../../Helpers/uploadToCloudinary");

module.exports.upload = async (req, res, next) => {
  try {
    if (req.file) {
      const link = await uploadToCloudinary(req.file.buffer);
      req.body[req.file.fieldname] = link;
      // console.log(req.body[req.file.fieldname]);
      // console.log(link);
    }
    next();
  } catch (err) {
    next(err);
  }
};
