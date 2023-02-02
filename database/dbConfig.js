const mysql = require('mysql')
const connention =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passwor: '',
    database: 'easyeffort'
})

module.exports = connention