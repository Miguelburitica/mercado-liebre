const fs = require('fs');
const path = require('path');

const model = {
	newId: function () {
		let nId = 0;
		let products = this.getProducts();
		products.forEach((element) => {
			if (nId <= element.id) {
				nId = element.id;
			}
		});
		return nId + 1;
	},

	getProducts: function () {
		return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf8'));
	},

	updateProducts: function (products) {
		fs.writeFileSync(path.resolve(__dirname, '../data/products'), JSON.stringify(products, null, 4));
	},

	addProduct: function (product) {
		const newProducts = this.getProducts().push(product);
		this.updateProducts(newProducts);
	},

	editProduct: function (product) {
		let products = this.getProducts();
		products.forEach((element) => {
			if (element.id == product.id) {
				element = product;
			}
		});
		this.updateProducts(products);
	},

	deleteProduct: function (id) {
		const products = this.getProducts();
		products.filter((element) => element.id != id);
		this.updateProducts(products);
	},
};

module.exports = model;
