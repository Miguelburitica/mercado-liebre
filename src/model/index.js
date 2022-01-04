const path = require('path');

const productModel = require(path.resolve(__dirname, './product.model'));
const userModel = require(path.resolve(__dirname, './user.model'));
const webModel = require(path.resolve(__dirname, './web.model'));

module.exports = {
	productModel: productModel,
	userModel: userModel,
	webModel: webModel,
};
