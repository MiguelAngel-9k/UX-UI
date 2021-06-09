const Product = require('./product.model');


class WishList{

	constructor({list, owner, added_on, list_thumbnail}, products = []){

		this.list = list;
		this.owner = owner;
		this.added_on = added_on;
		this.list_thumbnail = list_thumbnail;

		this.products = products;

		//AN ARRAY OF PRODUCTS
		this.product = [];

	}

	setItems(pName, pDescript, pID, pThumbnail){

		const product = new Product({});

		product.name = pName;
		product.descript = pDescript;
		product.id_prod = pID;
		product.thumbnail = pThumbnail;

		this.product.push(product);
	}

}

module.exports = WishList;