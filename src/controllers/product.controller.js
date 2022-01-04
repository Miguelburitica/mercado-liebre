const { productModel } = require('../model');
const path = require('path');

function pathViews(localView) {
	return path.resolve(__dirname, '../views/products/' + localView + '.ejs');
}

const controller = {
	getDetail: function (req, res) {
		let id = req.params.id;
		let product = productModel.getOne(id);
		let i = 0;
		let cb = (product) => {
			if (product.id != id && i < 3) {
				i++;
				return product;
			}
		};
		let suggest = productModel.getSomeProducts(cb);
		res.render(pathViews('detail'), { product, suggest });
	},
};

module.exports = controller;
