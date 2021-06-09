
require('colors');
const fs = require('fs');

class Cart {

	constructor(_user, _product = {}){

		this.user = _user;
		this.product = _product;			

	}

	loadCart(){

		let exists = false;

		let cartsJson = fs.readFileSync('./cartFile/cartFile.json', 'utf-8');
		this.carts = JSON.parse(cartsJson)

		this.carts.forEach( cart =>{

			if(cart.user = this.email){
				cart.items.push(product)
				exists = true;
				break;
			}			

		})

		if(!exists){
			this.carts.push({
				email,
				items : [product]
			})
		}

		console.log('Carts: '.yellow.italic, this.carts);

		cartsJson = JSON.stringify(this.carts);
		fs.writeFileSyinc('./cartFile/cartFile.json', cartsJson, 'utf-8');

	}
}

module.exports = Cart;