const { request, response } = ('express');
const Connecton = require('../connection/connection.db');
const Cart = require('../helpers/addCart');
const Product = require('../models/product.model');

const connection = new Connecton();

const printError = err => console.log('QUERY ERROR:'.red.bold, err.message);

const addItem = (req = request, res = response)=>{

	const { email, product } = req.params;

	connection.pool.query('call sp_product (?)', [product], (err, rows) => {
		if(err){
			printError(err);
		}

		const product = new Product(rows[0][0]);
		console.log('Product'.yellow.italic ,product);
		const cart = new Cart(email, product);

		//cart.loadCart();

		res.json(rows[0][0]);
	})	
}

module.exports = {
	addItem
}
