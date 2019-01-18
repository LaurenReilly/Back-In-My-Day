const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const passport = require("passport");
const db = require("../../config/database");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/login", function(req, res) {
  // res.send("I'm the login page");
  res.render("login");
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
  passport.authenticate("github", { failureRedirect: "/home" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
//login
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/home" }),
  function(req, res) {
    res.json({ message: req.authInfo.message, status: "OK" });
  }
);

// Logout
router.get("/logout", function(req, res, next) {
  req.logout();
  res.json({ status: "OK" });
});

router.post("/register", function(req, res) {
  console.log(req.body);
  let creds = req.body;

  User.findOne({ where: { user_name: creds.username } }).then(function(user) {
    if (!user) {
      User.create({
        user_name: creds.username,
        password: bcrypt.hashSync(creds.password, 10),
        age: creds.age,
        email: creds.email
      }).then(function(user) {
        res.json({ user: user.dataValues.user_name, status: "OK" });
      });
    } else {
      res.sendStatus(400);
    }
  });
});

module.exports = router;
