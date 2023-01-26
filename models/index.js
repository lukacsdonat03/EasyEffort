const dbConfig = require('../database/dbConfig')
const {Sequelize,DataTypes}  = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)
//check the connection
sequelize.authenticate()
    .then(()=>{
        console.log('Connected...');
    })
    .catch(err=>{
        console.log(`Errror: ${err}`)
    })

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.users = require('./userModel.js')(sequelize,DataTypes)
database.calories = require('./calorieModel')(sequelize,DataTypes)
database.comments = requrie('./commentModel')(sequelize,DataTypes)

database.sequelize.sync({force:false})
    .then(()=>{
        console.log('Sync kész!')
    })

//Kapcsolat 1:M user-calorie

database.user.hasMany(database.calorie,{
    foreignKey: 'userId',
    as:'userId',
    onUpdate : 'CASCADE',
    onDelete: 'SET NULL'
})

database.calories.belongsTo(database.users,{
    foreignKey: 'id',
    as: 'id'
})

//Kapcsolat user - comment
 database.comments.haOne(database.user,{
    foreignKey: 'userId',
    as:'userId',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
 })

 database.user.belongsTo(database.comments,{
    foreignKey:'id',
    as: 'id'
 })
