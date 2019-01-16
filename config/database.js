const Sequelize = require('sequelize');

module.exports =  new Sequelize(
  'back_in_my_day', //database
  'postgres', //username
  null, //password
  {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});


var temp = {
  "development": {
    "username": "zypaekpckbaoul",
    "password": "576f6270576d033e0b97b8e7a9f004794aca808d8dc997e231ece792257cee2a",
    "database": "dd12bc9mhjg1rf",
    "host": "ec2-54-235-67-106.compute-1.amazonaws.com",
    "port": "5432",
    "protocol": "postgres",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}