const Sequelize = require('sequelize');
const db = require('../config/database');

const Early = db.define('early', {
    question_1: {
        type: Sequelize.STRING
    },
    question_2: {
        type: Sequelize.STRING
    },
    question_3: {
        type: Sequelize.STRING
    }
});

module.exports = Early;