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

database.sequelize.sync({force:false})
    .then(()=>{
        console.log('Sync kész!')
    })

//Kapcsolat 1:M

database.user.hasMany(database.calories,{
    foreignKey: 'calorieId',
    as:'caloriId'
})

database.calories.belongsTo(database.users,{
    foreignKey: 'id',
    as: 'id'
})