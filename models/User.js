const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    user_name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;