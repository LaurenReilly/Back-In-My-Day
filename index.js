const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const about = require("./app/about");
const login = require("./app/login");
// const passport = require("passport");

//to parse form data
var multer = require("multer");
var upload = multer();

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

//setting view engine and where to find views
app.set("view engine", "ejs");
app.set("views", "app/views");

//telling our server where the files to serve are located
app.use(express.static(__dirname + "/app"));

app.use("/", login);

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("app"));

let questions = [
  {
    ageRange: "early",
    ageRangeTitle: "Your Early Childhood",
    question1: "What was the scary thing that lived in your house?",
    question2: "Your imaginary friend?",
    question3: "A made up game you played with your friends/siblings?"
  },
  {
    ageRange: "kid",
    ageRangeTitle: "Your Kid Times",
    question1: "What did you get in trouble for most?",
    question2: "What kind of student were you?",
    question3: "Biggest fear?"
  },
  {
    ageRange: "preteen",
    ageRangeTitle: "Your Preteen years",
    question1: "What did you hate having to eat for dinner?",
    question2: "Get into any trouble online?",
    question3: "Favorite thing you did on weekends?"
  },
  {
    ageRange: "tween",
    ageRangeTitle: "Your Tween Times",
    question1: "Who was your celebrity crush?",
    question2: "What song got you pumped at the school dance?",
    question3: "What did you think you would do when you grew up?"
  },
  {
    ageRange: "teenager",
    ageRangeTitle: "Your Teenage Years",
    question1: "What pissed you off more than anything else?",
    question2: "Biggest surprise about hitting puberty?",
    question3: "One of the worst things you did?"
  },
  {
    ageRange: "youngAdult",
    ageRangeTitle: "Your Young Adult Years",
    question1: "What did you eat on a regular basis?",
    question2: "What was the state of your bedroom?",
    question3: "What did your dating life look like?"
  },
  {
    ageRange: "adult",
    ageRangeTitle: "Your Boring Adult Years",
    question1: "Is this where you saw yourself?",
    question2: "Do you wear socks with holes in them?",
    question3: "Where will you be in ten years?"
  }
];

app.get("/", function(req, res, next) {
  // res.send("I'm the home page");
  res.render("about");
});

//creating a users homepage that will ideally show all of their answers to their question sets
//here I am passing an object whose value is the questions array from above. The ejs view will map through
//this array for now but eventually when we have our database set up will also pull answers from the database!

app.get("/home", function(req,res,next) {
  res.render('home', {questions: questions});
});

//send response back with list of questions based on which ageRange they selected
//form data is sent in the req.body as an object. key is the name attribute of the <select> element (ageRange) and the value
//is the value attribute of the age range they selected. Those values correspond to keys in the questions array.
//used Array.find() to return the object where the ageRange value matches the ageRange passed from the select form.
app.post("/questions", function(req, res, next) {
  let ageRange = req.body.ageRange;
  let questionSet = questions.find(function(element) {
    return element.ageRange === ageRange;
  });
  res.render('questions', questionSet);
});

app.get("/dataDisplay", function(req,res,next) {
  res.render('dataDisplay');
});

//the req.body is the object with their answers stored as the values for the keys question1, question2, and question3
//we will store these in the database from here
//should have the ability to prompt them to either see others answers or keep entering more data
app.post("/storeQuestions", function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Starting app on ${PORT}`);
});
