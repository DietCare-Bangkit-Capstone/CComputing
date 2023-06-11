const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'profilerdb',
    user: 'root',
    password: '1234'
});

module.exports = connection;