const mysql = require('mysql2');

const dbpool = mysql.createPool({
    host: 'db4free.net',
    user: 'kevinteguh64',
    password: 'Optimus2x',
    database: 'revoucapstonedb',
    connectTimeout: 60000,
  });

  module.exports = dbpool.promise();
  