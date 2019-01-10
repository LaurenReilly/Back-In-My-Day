const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const about = require("./app/about");
const login = require("./app/login");

//to parse form data
var multer = require('multer');
var upload = multer();

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

//setting view engine and where to find views
app.set("view engine", "ejs");
app.set("views", "app/views");

app.use("/", about);
app.use("/", login);

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('app'));



let questions = {
  early: {question1: "What was the scary thing that lived in your house?", question2: "Your imaginary friend?", question3: "A made up game you played with your friends/siblings?"},
  kid: {question1: "What did you get in trouble for most?", question2: "What kind of student were you?", question3: "Biggest fear?"},
  preteen: {question1: "What did you hate having to eat for dinner?", question2: "Get into any trouble online?", question3: "Favorite thing you did on weekends?"},
  tween: {question1: "Who was your celebrity crush?", question2: "What song got you pumped at the school dance?", question3: "What did you think you would do when you grew up?"},
  teenager: {question1: "What pissed you off more than anything else?", question2: "Biggest surprise about hitting puberty?", question3: "One of the worst things you did?"},
  youngAdult: {question1: "What did you eat on a regular basis?", question2: "What was the state of your bedroom?", question3: "What did your dating life look like?"},
  adult: {question1: "Is this where you saw yourself?", question2: "Do you wear socks with holes in them?", question3: "Where will you be in ten years?"}
}
 

app.get("/", function(req, res, next) {
  // res.send("I'm the home page");
  res.render('index');
});


//send response back with list of questions based on which ageRange they selected
//form data is sent in the req.body as an object. key is the name attribute of the <select> element (ageRange) and the value
//is the value attribute of the age range they selected. Those values correspond to keys in the questions object.
app.post("/questions", function(req,res,next) {
  let ageRange = req.body.ageRange
  res.render('questionForm', questions[ageRange]);
});



app.listen(PORT, () => {
  console.log(`Starting app on ${PORT}`);
});
