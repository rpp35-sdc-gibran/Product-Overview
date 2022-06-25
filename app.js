var express = require('express');
var db = require('./db');
var app = express();

var parser = require('body-parser');

module.exports.app = app;
app.set('port', 3000)

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}