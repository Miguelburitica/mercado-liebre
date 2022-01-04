const path = require('path');
const { productModel } = require('../model');

const pathViews = function (nameView) {
	return path.resolve(__dirname, '../views/' + nameView + '.ejs');
};

controller = {
	showHome: function (req, res) {
		let products = productModel.getProducts();
		res.render(pathViews('home'), { products: products });
	},
};

module.exports = controller;
