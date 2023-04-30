const Sequelize = require('sequelize');


const sequelize = new Sequelize('easyeffort', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize