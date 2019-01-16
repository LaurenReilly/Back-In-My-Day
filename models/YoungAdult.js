const Sequelize = require('sequelize');
const db = require('../config/database');

const User = require('./User');

const YoungAdult = db.define('youngadult', {
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

YoungAdult.User = YoungAdult.belongsTo(User);
module.exports = YoungAdult;