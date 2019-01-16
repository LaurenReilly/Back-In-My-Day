const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require("passport");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/login", function(req, res) {
  // res.send("I'm the login page");
  res.render("login");
});

router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

router.get("/google", (req, res) => {
  //handle with google auth
  res.send("Logging in with google");
});

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/auth/login"
  })
);

router.get("/github", passport.authenticate("github"));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/auth/login"
  })
);

router.post("/login", function(req, res) {
  console.log(req.body);
  res.end();
});

router.post("/register", function(req, res) {
  console.log(req.body);
  res.end();
});

module.exports = router;
