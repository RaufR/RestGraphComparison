const express = require("express");
const router = express.Router();

var path = require("path");
var countriList = require("../controller/appController");

global.appRoot = path.resolve("./");

// router for various input
router.route("/").get(function (req, res) {
  let __dirname = "";
  // res.send("this is the login form");
  res.sendFile(appRoot + "/index.html");
  //res.sendFile("../index.html");
});

router.route("/countries").get(countriList.list_all_countries);

//router.route("/countries/:id").get(nameList.read_single_name);

// router.route("/cities/:?year").get(nameList.read_name_by_year);

// router.route("/state/:name").get(nameList.deatil_by_name);

module.exports = router;
