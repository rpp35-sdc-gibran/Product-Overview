const models = require('../models')

function contains(result, formattedResults) {
  for (var i = 0; i < formattedResults.length; i++) {
    // console.log('result', result, 'formattedResults', formattedResults)
    if (result.styleId === formattedResults[i].style_id) {

      return formattedResults[i]
    }
  }
  return null
}

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
    },

    // param: product id, response: styles for product
    getProductStyles: function(req, res) {
      models.products.getProductStyles(req.params.product_id, function(err, results) {
        if (err) {
          res.sendStatus(404)
        }

        var formattedResults = {}
        formattedResults.product_id = results[0].productId

        formattedResults.results = []
        for (var result of results) {
          var style = contains(result, formattedResults.results)

          var skuId = result.skuId


          if (style === null) {
            console.log('i made it here')

            formattedResults.results.push({
              style_id: result.styleId,
              name: result.name,
              sale_price: result.sale_price,
              original_price: result.original_price,
              default_style: result.default_style ? true : false,
              photos: [
                {
                  thumbnail_url: result.thumbnail_url,
                  url: result.url
                }
              ],
              skus: {
                [`${skuId}`]: {
                  quantity: result.quantity,
                  size: result.size
                }

              }
            })
          } else {

            style.photos.push({
              thumbnail_url: result.thumbnail_url,
              url: result.url
            })
            style.skus = {
              ...style.skus,
              [`${skuId}`]: {
                quantity: result.quantity,
                size: result.size
              }
            }
          }
        }

        res.json(formattedResults)
      })
    }


  }

}

