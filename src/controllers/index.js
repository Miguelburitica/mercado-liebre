const path = require('path');

const productController = require(path.resolve(
    __dirname,
    'product.controller.js'
));
const userController = require(path.resolve(__dirname, 'user.controller.js'));
const webController = require(path.resolve(__dirname, 'web.controller.js'));

module.exports = { productController, userController, webController };
