const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.get("/about", function(req, res) {
  res.render("about");
});

module.exports = router;
