const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("../../config/database");
const User = require("../../models/User");

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

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.end();
});

router.post("/register", function(req, res) {
  console.log(req.body);
  let creds = req.body;

  User.findOne({ where: { user_name: creds.username } }).then(function(user) {
    if (!user) {
      User.create({
        user_name: creds.username,
        password: creds.password
      }).then(function(user) {
        res.json({ user: user.dataValues.user_name, status: "OK" });
      });
    } else {
      res.sendStatus(400);
    }
  });
});

module.exports = router;
