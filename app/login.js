const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/login", function(req, res) {
  // res.send("I'm the login page");
  res.render("login");
});

router.post("/login", function(req, res) {
  console.log(req.body);
  res.end();
});

router.post("/register", function(req, res) {
  console.log(req.body);
  res.end();
});

module.exports = router;
