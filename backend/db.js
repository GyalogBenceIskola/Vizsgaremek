const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'barbershop'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL database connected...');
});

module.exports = db;