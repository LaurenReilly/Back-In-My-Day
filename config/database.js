const Sequelize = require('sequelize');

module.exports =  new Sequelize('back_in_my_day', 'postgres', null, {
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
