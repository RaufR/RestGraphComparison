const express = require("express");
const router = express.Router();

const path = require("path");
const CONTROLLER = require("../controller/appController");

global.appRoot = path.resolve("./");

// router for various input
router.route("/").get(function (req, res) {
  let __dirname = "";
  // res.send("this is the login form");
  res.sendFile(appRoot + "/index.html");
  //res.sendFile("../index.html");
});

router.route("/employees").get(CONTROLLER.list_all_employees);

router.route("/employees/:id").get(CONTROLLER.single_employee_detail);

router.route("/departments").get(CONTROLLER.list_all_departments);
router.route("/managers").get(CONTROLLER.list_all_managers);

module.exports = router;
