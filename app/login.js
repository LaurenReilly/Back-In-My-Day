const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/login", function(req, res) {
  res.send("I'm the login page");
});

module.exports = router;
