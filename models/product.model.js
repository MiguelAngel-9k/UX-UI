

class Product{

	constructor({name, stock, descript, category, rate, price, deiscount, added_on, id_prod, thumbnail}, specs = {}, comment = []){

		this.name = name;
		this.stock = stock;
		this.descript = descript;
		this.category = category;
		this.rate = rate;
		this.price = price;
		this.discount = deiscount;
		this.added_on = added_on;
		this.id_prod = id_prod;
		this.thumbnail = thumbnail;

		this.specs = specs;
		this.comment = comment;

	}
}

module.exports = Product;