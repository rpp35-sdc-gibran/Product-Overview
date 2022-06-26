const db = require('../db')

module.exports = {
  products: {
    get: function(callback) {
      var queryStr = 'select * from products limit 5'
      db.query(queryStr, function(err, results) {
        callback(err, results);
      })
    }
  }
}