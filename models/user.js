const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const { post } = require('../configure/connection');

class User extends Model {}

post.init()