const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: 'profilerdb',
    user: 'root',
    password: '1234'
});

module.exports = connection;