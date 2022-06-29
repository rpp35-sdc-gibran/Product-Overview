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
    },
    getProductStyles: function(id, callback) {
      var queryStr = 'select styles.*, photos.*, \
      skus.id as skuId, skus.size, skus.quantity \
       from styles join \
      photos on styles.id = photos.styleId \
      join skus on styles.id = skus.styleId \
      where styles.productId = ?';
      db.query(queryStr, [id], function(err, results) {
        console.log('what are results', results, 'what is id', id)
        callback(err, results);
      })
    }
  }
}