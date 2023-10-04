const mysql = require('mysql2');

const dbpool = mysql.createPool({
    host: 'containers-us-west-67.railway.app',
    user: 'root',
    password: 'i0Dd3zGnPgRhhAEPkH2B',
    database: 'railway',
  });

  module.exports = dbpool.promise();