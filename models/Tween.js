const Sequelize = require('sequelize');
const db = require('../config/database');

const Tween = db.define('tween', {
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

module.exports = Tween;