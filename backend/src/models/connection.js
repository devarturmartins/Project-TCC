// require('dotenv').config();

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;