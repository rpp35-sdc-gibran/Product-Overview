var mysql = require('mysql');


var connection = mysql.createConnection({
  host: '3.88.49.253',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'sdc',
  ssl  : {
    // DO NOT DO THIS
    // set up your ca correctly to trust the connection
    rejectUnauthorized: false
  },

});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;