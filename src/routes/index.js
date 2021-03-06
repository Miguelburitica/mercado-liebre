const express = require('express');
const router = express.Router();
const path = require('path');

const productRoutes = require(path.resolve(__dirname, './product.routes.js'));
const userRoutes = require(path.resolve(__dirname, './user.routes.js'));
const webRoutes = require(path.resolve(__dirname, './web.routes.js'));

router.use('/', webRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
