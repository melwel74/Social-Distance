const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {}

User.init({
    author_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true  
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name:{
      type: DataTypes.STRING,
    },
    pw:{
      type: DataTypes.STRING,

    }
    
}, 
{
  sequelize

})
module.exports=User
