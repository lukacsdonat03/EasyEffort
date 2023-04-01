const {Sequelize} = require('sequelize')
const User = require('../models/UserModel')
const Comment = require('../models/CommentModel')
const Calorie = require('../models/CalorieModel')

const sequelize = new Sequelize('mysql://root@localhost:3306/easyeffort_db',{
    logging: (...msg) => console.log(msg)
})


//check the connection
try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully...');
} catch (error) {
    console.error('Unable to connect the database: ',error);
}

//Sync all model
await sequelize.sync({force:true})


//Associations

Calorie.hasMany(User,{
    foreignKey:'userId'
})

User.belongsTo(Calorie,{
    foreignKey:'id'
})

//TODO:átírni úgy hogy mindel táble egy objektum fieldje

Comment.hasMany(User,{
    foreignKey:'userId'
})

User.belongsTo(Comment,{
    foreignKey:'id'
})

//TODO: export 