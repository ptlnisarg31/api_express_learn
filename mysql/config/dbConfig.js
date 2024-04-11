const mysql = require('mysql');
require('dotenv').config(); // Load environment variables from .env file

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306 // Optionally, include port configuration
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.code);
    if (err.code === 'ECONNREFUSED') {
      console.error('Connection refused: Check if MySQL server is running and accessible.');
    } else if (err.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('Access denied: Check if username and password are correct.');
    } else {
      console.error('Error:', err.message);
    }
    throw err;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
