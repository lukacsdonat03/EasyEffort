const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize('mysql://root@localhost:3306/easyeffort_db')

const Calorie = sequelize.define(
    'calorie',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false,
        },
        product:{
            type:DataTypes.STRING(128),
            allowNull:false,
            required:true
        },
        amount:{
            type:DataTypes.DOUBLE,
            allowNull:false,
            required:true,
            defaultValue:0
        },
        carbs:{
            type:DataTypes.DOUBLE,
            allowNull:false,
            required:true,
            defaultValue:0
        },
        protein:{
            type:DataTypes.DOUBLE,
            allowNull:false,
            required:true,
            defaultValue:0
        },
        fat:{
            type:DataTypes.DOUBLE,
            allowNull:false,
            required:true,
            defaultValue:0
        },
        totalCalorie:{
            type:DataTypes.DOUBLE,
            allowNull:false,
            defaultValue:0
        },
        userId:{
            type:DataTypes.INTERGER,
            allowNull:false,
            required:true
        },
        evenet_time:{
            type:DataTypes.DATE,
            defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull:false,
            required:true
        }
    },{tableName:'calorie'}
)

module.exports = Calorie