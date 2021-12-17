const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const { post } = require('../configure/connection');

class User extends Model {}

User.init({
    authorId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true  
    }
})
