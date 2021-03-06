const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const path = require("path");
const authRoutes = require("./app/routes/auth-login");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const session = require("express-session");
require("dotenv").config();
app.use(session({ secret: "yoo son" }));
app.use(passport.initialize());
app.use(passport.session());

//telling our server where the files to serve are located
app.use(express.static(__dirname + "/app"));

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

// Database
const db = require("./config/database");

//to parse form data
const multer = require("multer");
const upload = multer();

const PORT = process.env.PORT || 3000;

//setting view engine and where to find views
app.set("view engine", "ejs");
app.set("views", "app/views");

app.use("/auth", authRoutes);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

let questions = [
  {
    ageRange: "Baby",
    ageRangeTitle: "Your Precious Baby Years",
    question1: "What was the scary thing that lived in your house?",
    question2: "Describe your favorite toy.",
    question3: "A game you played with your friends/siblings?"
  },
  {
    ageRange: "Kid",
    ageRangeTitle: "Your Playful Kid Years",
    question1: "What did you get in trouble for most?",
    question2: "What kind of student were you?",
    question3: "Biggest fear?"
  },
  {
    ageRange: "Preteen",
    ageRangeTitle: "Your Confused Preteen Years",
    question1: "What did you hate having to eat for dinner?",
    question2: "Get into any trouble online?",
    question3: "Favorite thing you did on weekends?"
  },
  {
    ageRange: "Tween",
    ageRangeTitle: "Your Dreamy Tween Years",
    question1: "Who was your celebrity crush?",
    question2: "What song got you pumped at the school dance?",
    question3: "What did you think you would do when you grew up?"
  },
  {
    ageRange: "Teenager",
    ageRangeTitle: "Your Angsty Teenage Years",
    question1: "What made you angry?",
    question2: "Your favorite outfit?",
    question3: "One of the worst things you did?"
  },
  {
    ageRange: "Youngadult",
    ageRangeTitle: "Your Exciting Young Adult Years",
    question1: "What did you do for work?",
    question2: "What was your living situation?",
    question3: "What did your social circle look like?"
  },
  {
    ageRange: "Adult",
    ageRangeTitle: "Your Boring Adult Years",
    question1: "Is this where you saw yourself?",
    question2: "Any Regrets?",
    question3: "Where do you want to be in ten years?"
  }
];

//This is the about page which will serve as the home page.
app.get("/", function(req, res, next) {
  // res.send("I'm the home page");
  res.render("about");
});

//where user can select a question set and then answer questions
app.get("/index", function(req, res, next) {
  // res.send("I'm the home page");
  res.render("index", { message: "" });
});

//creating a users homepage that will ideally show all of their answers to their question sets
//here I am passing an object whose value is the questions array from above. The ejs view will map through
//this array for now but eventually when we have our database set up will also pull answers from the database!

app.get("/home", function(req, res, next) {
  res.render("home", { questions: questions });
});

//send response back with list of questions based on which ageRange they selected
//form data is sent in the req.body as an object. key is the name attribute of the <select> element (ageRange) and the value
//is the value attribute of the age range they selected. Those values correspond to keys in the questions array.
//used Array.find() to return the object where the ageRange value matches the ageRange passed from the select form.
app.post("/questions", function(req, res, next) {
  let ageRange = req.body.ageRange;
  localStorage.setItem("ageRange", ageRange);
  let questionSet = questions.find(function(element) {
    return element.ageRange === ageRange;
  });
  res.render("questions", questionSet);
});

app.get("/stories", function(req, res, next) {
  res.render("stories");
});

app.get("/privacypolicy", function(req, res) {
  res.send("This is the privacy policy page");
});

//for any route that begins with /questionsDB we will use the questionsDB.js file to define what happens
app.use("/questionsDB", require("./routes/questionsDB"));

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ where: { user_name: username } })
      .then(function(user) {
        if (!user) {
          return done(null, false, { message: "No user exists" });
        }
        const isCorrectPassword = bcrypt.compareSync(password, user.password);
        if (!isCorrectPassword) {
          return done(null, false, { message: "Incorrect Password" });
        }
        return done(null, user, { message: "You've logged in SUCCESSFULLY!'" });
      })
      .catch(function(err) {
        return done(err);
      });
  })
);

passport.use(
  new FacebookStrategy(
    {
      //options for the google strat
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/redirect"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({
        where: {
          user_name: profile.username,
          password: bcrypt.hashSync(profile.id, 10)
        }
      }).spread((user, created) => {
        console.log(
          user.get({
            plain: true
          })
        );
        console.log(created);
        cb();
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  // db.findUserById(userId).then(user => done(null, user));
  User.findById(user.id).then(user => done(null, user));
});

app.listen(PORT, () => {
  console.log(`Starting app on ${PORT}`);
});

