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


// slash pertains to /questions since we already pointed index.js here
//findAll is a sequlize method, returns a promise
router.get('/', (req, res) => User.findAll()
.then(users => {
    res.send('hello from routes and USER table')
    console.log(users)
})
.catch(err => console.log(err)));

//trying routers for each table to see if they work

router.get('/baby', (req, res) => Baby.findAll()
.then(early => {
    res.send('hello from routes and EARLY table')
    console.log(early)
})
.catch(err => console.log(err)));


router.get('/kid', (req, res) => Kid.findAll()
.then(users => {
    res.send('hello from routes and Kid table')
    console.log(users)
})
.catch(err => console.log(err)));


router.get('/preteen', (req, res) => Preteen.findAll()
.then(users => {
    res.send('hello from routes and Preteen table')
    console.log(users)
})
.catch(err => console.log(err)));


router.get('/tween', (req, res) => Tween.findAll()
.then(users => {
    res.send('hello from routes and Tween table')
    console.log(users)
})
.catch(err => console.log(err)));


router.get('/teenager', (req, res) => Teenager.findAll()
.then(users => {
    res.send('hello from routes and USER table')
    console.log(users)
})
.catch(err => console.log(err)));


router.get('/youngadult', (req, res) => Youngadult.findAll()
.then(users => {
    res.send('hello from routes and youngadults table')
    console.log(users[0].dataValues)
})
.catch(err => console.log(err)));


router.get('/adult', (req, res) => Adult.findAll()
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