const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const Early = require('../models/Early');
const Kid = require('../models/Kid');
const Preteen = require('../models/Preteen');
const Tween = require('../models/Tween');
const Teenager = require('../models/Teenager');
const Youngadult = require('../models/YoungAdult');
const Adult = require('../models/Adult');


// slash pertains to /questions since we already pointed index.js here
//findAll is a sequlize method, returns a promise
router.get('/', (req, res) => User.findAll()
.then(users => {
    res.send('hello from routes and USER table')
    console.log(users)
})
.catch(err => console.log(err)));

//trying routers for each table to see if they work

router.get('/early', (req, res) => Early.findAll()
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

module.exports = router;