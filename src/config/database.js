const mysql = require('mysql2');

const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_api',
  });

  module.exports = dbpool.promise();