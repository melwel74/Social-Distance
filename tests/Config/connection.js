const Sequelize = require('sequelize');
require('dotenv').config();

//create connection to database
const sequelize = new Sequelize('socialDistance', 'root', 'Sevenfour74',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
module.exports = sequelize;