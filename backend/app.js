const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
n
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'barbershop'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

const JWT_SECRET = 'your_jwt_secret_key';

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));