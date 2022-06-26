const models = require('../models')

module.exports = {
  // return array of all products
  products: {
    get: function (req, res) {
      models.products.get(function(err, results) {
        if (err) {
          res.sendStatus(404)
        }
        res.json(results)
      })
    }
  }
}