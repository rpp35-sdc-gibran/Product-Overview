const db = require('../db')

module.exports = {
  products: {
    get: function(callback) {
      var queryStr = 'select * from products limit 5'
      db.query(queryStr, function(err, results) {
        callback(err, results);
      })
    },
    getProductInformation: function(id, callback) {
      var queryStr = 'select * from products join \
      features on products.id = features.product_id \
      where products.id = ?';
      db.query(queryStr, [id], function(err, results) {
        console.log('what are results', results, 'what is id', id)
        callback(err, results);
      })
    }
  }
}