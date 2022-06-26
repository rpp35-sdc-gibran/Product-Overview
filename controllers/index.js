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
    },
    // accepts product id and returns product info for this product
    getProductInformation: function(req, res) {
      models.products.getProductInformation(req.params.product_id, function(err, results) {
        if (err) {
          res.sendStatus(404)
        }
        var formattedResults = {
          id: results[0].product_id,
          name: results[0].name,
          slogan: results[0].slogan,
          description: results[0].description,
          category: results[0].category,
          default_price: results[0].default_price,
          features: []
        }

        for (var result of results) {

          formattedResults.features.push({
            feature: result.feature,
            value: result.value
          })
        }
        res.json(formattedResults)
      })
    }

  }
}