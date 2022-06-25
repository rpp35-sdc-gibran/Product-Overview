var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'root',
  database: 'sdc'
});

connection.connect();

module.exports = connection;