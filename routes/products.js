const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

router.get('/', controllers.products.get)

// get info for one product
router.get('/:product_id', controllers.products.getProductInformation)

// get styles for a single product
router.get('/:product_id/styles', controllers.products.getProductStyles)

module.exports = router;