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

app.get('/loaderio-dfa6c30ac99adf0938e7c776a6eb3856', (req, res) => {
  res.send('loaderio-dfa6c30ac99adf0938e7c776a6eb3856');
});
// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}