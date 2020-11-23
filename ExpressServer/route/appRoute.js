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

// router.route("/cities/:?year").get(nameList.read_name_by_year);

// router.route("/state/:name").get(nameList.deatil_by_name);

module.exports = router;
