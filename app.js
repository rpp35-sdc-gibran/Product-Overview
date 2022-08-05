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

app.get('/loaderio-8e3752c0c09f2f120a8f5ec39bfc6738', (req, res) => {
  res.send('loaderio-8e3752c0c09f2f120a8f5ec39bfc6738');
});
// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
