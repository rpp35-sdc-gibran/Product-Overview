const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products')

router.get('/', controllers.products.get)

module.exports = router;