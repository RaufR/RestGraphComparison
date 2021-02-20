var express = require("express");
var router = express.Router();
var sessions = require("../data/sessions.json");
var _ = require("lodash");

router.use("/:id", (req, res, next) => {
  let session = _.filter(sessions, { id: req.params.id })[0];
  if (session) {
    req.session = session;
    return next();
  }
  return res.sendStatus(404);
});
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(sessions);
});

router.post("/", function (req, res, next) {
  res.json({ message: "not implemented" });
});

router.patch("/:id", function (req, res, next) {
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    req.session[key] = value;
    console.log(req.session);
  });

  res.json(req.session);
});

router.get("/:id", function (req, res, next) {
  res.json(_.filter(sessions, { id: req.params.id })[0]);
});

module.exports = router;
