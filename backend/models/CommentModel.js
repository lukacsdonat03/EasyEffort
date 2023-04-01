const{Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize('mysql://root@localhost:3306/easyeffort_db')

const Comment = sequelize.define(
    'comment',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true        
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true,
        },
        subject:{
            type:DataTypes.STRING(126),
            allowNull:false,
            required:true,
        },
        message:{
            type:DataTypes.STRING(252),
            allowNull:false,
            required:true,
        }
    },
    {tableName:'comment'}
)

module.exports = Comment