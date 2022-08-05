var express = require('express');
var db = require('./db');
var app = express();
const products = require('./routes/products')
app.use(express.static('public'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
var parser = require('body-parser');
app.use('/products', products)

module.exports.app = app;
app.set('port', 8000)

app.get('/loaderio-8e7e8fd6c25ddd8c389258076f9595fe', (req, res) => {
  res.send('loaderio-8e7e8fd6c25ddd8c389258076f9595fe');
});
// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
