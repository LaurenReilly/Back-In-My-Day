const Sequelize = require('sequelize');

module.exports = new Sequelize(
  'd68g5cn9hqoukl', //database
  'dpodsthlznztic', //username
  '5fc7c2d864282715601bb38851c4ff2e30e4b9adc944566ea8e5ee3ed7d9e33e', //password
  {
    host: 'ec2-107-22-162-8.compute-1.amazonaws.com',
    dialect: 'postgres',
    protocol: 'postgres',
    port: '5432',
    operatorsAliases: false,
    dialectOptions: {
      ssl: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);