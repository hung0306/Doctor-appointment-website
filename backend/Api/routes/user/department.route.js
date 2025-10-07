const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user/department.controller");

router.get("/", controller.index);

module.exports = router;
