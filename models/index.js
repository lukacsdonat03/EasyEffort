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
try{
    await sequelize.authenticate()
    console.log('Adatbázis kapcsolat létrejött ...');
}catch(error){
    console.error('Az adatbázis nem elérhető')
}

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.user = require('./userModel.js')(sequelize,DataTypes)
database.calorie = require('./calorieModel')(sequelize,DataTypes)
database.comment = requrie('./commentModel')(sequelize,DataTypes)

database.sequelize.sync()
    .then(()=>{
        console.log('Sync kész!')
    })

//Kapcsolat 1:M user-calorie

database.user.hasMany(database.calorie,{
    foreignKey: 'userId',
    as:'userId',
})

database.calorie.belongsTo(database.user,{
    foreignKey: 'id',
    as: 'id'
})

//Kapcsolat user - comment
 database.comment.haOne(database.user,{
    foreignKey: 'userId',
    as:'userId',
 })

 database.user.belongsTo(database.comment,{
    foreignKey:'id',
    as: 'id'
 })

 module.exports = database
