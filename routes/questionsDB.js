const express = require('express');
const router = express.Router();
const db = require('../config/database');

const User = require('../models/User');
const Baby = require('../models/Baby');
const Kid = require('../models/Kid');
const Preteen = require('../models/Preteen');
const Tween = require('../models/Tween');
const Teenager = require('../models/Teenager');
const Youngadult = require('../models/YoungAdult');
const Adult = require('../models/Adult');

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

// //setting view engine and where to find views
// app.set("view engine", "ejs");
// app.set("views", "app/views");


let questions = [
    {ageRange: "Baby", ageRangeTitle:"Your Early Childhood", question1: "What was the scary thing that lived in your house?", question2: "Your imaginary friend?", question3: "A made up game you played with your friends/siblings?"},
    {ageRange: "Kid",ageRangeTitle:"Your Kid Times", question1: "What did you get in trouble for most?", question2: "What kind of student were you?", question3: "Biggest fear?"},
    {ageRange: "Preteen",ageRangeTitle:"Your Preteen years", question1: "What did you hate having to eat for dinner?", question2: "Get into any trouble online?", question3: "Favorite thing you did on weekends?"},
    {ageRange: "Tween",ageRangeTitle:"Your Tween Times", question1: "Who was your celebrity crush?", question2: "What song got you pumped at the school dance?", question3: "What did you think you would do when you grew up?"},
    {ageRange: "Teenager",ageRangeTitle:"Your Teenage Years", question1: "What pissed you off more than anything else?", question2: "Biggest surprise about hitting puberty?", question3: "One of the worst things you did?"},
    {ageRange: "Youngadult", ageRangeTitle:"Your Young Adult Years", question1: "What did you eat on a regular basis?", question2: "What was the state of your bedroom?", question3: "What did your dating life look like?"},
    {ageRange: "Adult", ageRangeTitle:"Your Boring Adult Years", question1: "Is this where you saw yourself?", question2: "Do you wear socks with holes in them?", question3: "Where will you be in ten years?"}
]

//bring the question object into this page and then put empty strings that will pertain to what is pulled from the DB, when I pull them from the DB set them = to the key of those empty strings (Like one for each answer. answer1, answer2, answer3) then that object can be passed to the view. use another switch statement. AGE RANGE MUST BE SET IN LOCAL STORAGE


router.post("/getRandom", function(req,res,next) {
    let ageRange = req.body.ageRange;
    let questionSet = questions.find(function(element) {
        return element.ageRange === ageRange;
      });
    let responseObject = {
        ageRange: ageRange,
        ageRangeTitle: questionSet.ageRangeTitle,
        question1: questionSet.question1,
        question2: questionSet.question2,
        question3: questionSet.question3,
        answer1: "",
        answer2: "",
        answer3: ""  
    }
    switch(ageRange) {
        case "Baby":
            Baby.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.dataValues.question_1;
                responseObject.answer2 = user.dataValues.question_2;
                responseObject.answer3 = user.dataValues.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Kid":
            Kid.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Preteen":
            Preteen.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Tween":
            Tween.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Teenager":
            Teenager.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Youngadult":
            Youngadult.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
        case "Adult":
            Adult.findOne({ order: db.random() }).then((user) => {
                responseObject.answer1 = user.question_1;
                responseObject.answer2 = user.question_2;
                responseObject.answer3 = user.question_3;
                res.render('answers', responseObject);
            });
          break;
      }
  });


// slash pertains to /questions since we already pointed index.js here
//findAll is a sequlize method, returns a promise
router.get('/', (req, res) => User.findAll()
.then(users => {
    res.send('hello from routes and USER table')
    console.log(users)
})
.catch(err => console.log(err)));

//the req.body is the object with their answers stored as the values for the keys question1, question2, and question3
//we will store these in the database from here
//should have the ability to prompt them to either see others answers or keep entering more data
router.post("/storeQuestions", function(req,res,next) {
    let ageRange = localStorage.getItem("ageRange");
    switch(ageRange) {
        case "Baby":
            Baby.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Kid":
            Kid.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Preteen":
            Preteen.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Tween":
            Tween.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Teenager":
            Teenager.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Youngadult":
            Youngadult.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
        case "Adult":
            Adult.create({question_1: req.body.question1, question_2: req.body.question2, question_3: req.body.question3})
          break;
      }
    res.send("answers entered");
  });

module.exports = router;