const fs = require('fs');
const path = require('path');

const model = {
	// get the major id
	lastId: function () {
		let lastId = 0;
		this.getProducts().forEach((product) => (lastId = parseInt(product.id) > lastId ? product.id : lastId));
		return lastId;
	},

	// get the major id plus 1
	newId: function () {
		let lastId = 0;
		this.getProducts().forEach((product) => (lastId = parseInt(product.id) > lastId ? product.id : lastId));
		return (parseInt(lastId) + 1).toString();
	},

	getProducts: function () {
		return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf8'));
	},

	// get some products in an array
	getSomeProducts: function (callBack) {
		return this.getProducts().filter(callBack);
	},

	getOne: function (id) {
		return this.getProducts().find((product) => product.id == id);
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
