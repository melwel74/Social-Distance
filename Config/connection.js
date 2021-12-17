const Sequelize = require('sequelize');
require('dotenv').config();

//create connection to database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PW,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
});
module.exports = sequelize;