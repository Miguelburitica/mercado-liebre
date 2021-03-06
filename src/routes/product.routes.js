const express = require('express');
const router = express.Router();
const path = require('path');

const { productController } = require(path.resolve(__dirname, '../controllers'));

router.get('/:id', productController.getDetail);

module.exports = router;
