const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bookly',
    password: '0410M!123@'
});

module.exports = pool.promise(); 