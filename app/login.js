const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.get("/login", function(req, res) {
  res.render("login");
});

module.exports = router;
