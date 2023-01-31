module.exports = {
    HOST: '%',
    USER: 'admin',
    PASSWORD: 'admin',
    DB: 'easyeffort',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}