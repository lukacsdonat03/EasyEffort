const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('mysql://root@localhost:3306/easyeffort_db')
const User = sequelize.define(
    'user',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        fullname:{
            type:DataTypes.STRING(125),
            allowNull: false,
            required:true,
            unique:false
        },
        email:{
            type:DataTypes.STRING(64),
            allowNull:false,
            required:true,
            unique:true
        },
        password:{
            type:DataTypes.STRING(126),
            allowNull:false,
            required:true
        },
        currentWeight:{
            type:DataTypes.DOUBLE,
            required:false,
            allowNull:true
        },
        targetWeight:{
            type:DataTypes.DOUBLE,
            required:false,
            allowNull:true,  
        },
        currentCalorie:{
            type:DataTypes.DOUBLE,
            required:false,
            allowNull:true
        },
        targetCalorie:{
            type:DataTypes.DOUBLE,
            required:false,
            allowNull:true            
        },
        isAdmin:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true,
            defaultValue:0
        }
    },
    {tableName:'user'}
)

module.exports = User