var express = require('express');
var db = require('./db');
var app = express();
const products = require('./routes/products')

var parser = require('body-parser');
app.use('/products', products)
module.exports.app = app;
app.set('port', 3000)

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}