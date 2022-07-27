var express = require('express');
var db = require('./db');
var app = express();
const products = require('./routes/products')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
var parser = require('body-parser');
app.use('/products', products)

module.exports.app = app;
app.set('port', 8000)

app.get('/loaderio-03988d45d8e50df2278b10e8067c00e9', (req, res) => {
  res.send('loaderio-03988d45d8e50df2278b10e8067c00e9');
});
// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}