require('colors');
const { request, response } = require('express');
const Connection = require('../connection/connection.db');
const Product = require('../models/product.model');
const Product_specs = require('../models/product_specs.model');
const Comment = require('../models/comments.model');
const WishList = require('../models/wish_list.model')
const User = require('../models/user.model');
const Category = require('../models/category.model');

const connection = new Connection()

const printError = err => console.log('QUERY ERROR:'.red.bold, err.message);

const home = (req = request, res = response) => {

    const products = [];
    const categories = [];

    connection.pool.query('select thumbnail, name, price, id_prod from product where category = 1', [], (err, rows) => {
        if (err) {
            printError(err);
        } else {

            rows.forEach(row => {
                products.push(new Product(row));
            })

            connection.pool.query('select category, id_category from category', (err, rows) => {
                if (err) {
                    printError(err);
                } else {
                    rows.forEach(row => categories.push(new Category(row)))
                    res.render('home', {
                        productList: products,
                        categories,
                        user: null,
                    })
                }

            })
        }
    })
}

const homeUser = (req = request, res = response) => {

    const products = [];
    const categories = [];

    const user = new User({});
    const email = req.params.user;
    console.log('HOME params'.yellow, req.params);

    connection.pool.query('select avatar, email from user where email = ?', [email], (err, rows) => {
        if (err) {
            printError(err);
        }

        user.avatar = rows[0].avatar;        
        user.email = rows[0].email;

        connection.pool.query('select thumbnail, name, price, id_prod from product where category = 1', [], (err, rows) => {
            if (err) {
                printError(err);
            } else {

                rows.forEach(row => {
                    products.push(new Product(row));
                })

                connection.pool.query('select category, id_category from category', (err, rows) => {
                    if (err) {
                        printError(err);
                    } else {
                        rows.forEach(row => categories.push(new Category(row)))
                        res.render('home', {
                            productList: products,
                            categories,
                            user: user,
                        })
                    }

                })
            }
        })
    })
}

const category = (req = request, res = response) => {

    const products = [];
    const categories = [];
    const { id_cat } = req.params;

    connection.pool.query('select thumbnail, name, price, id_prod from product where category = ?', [id_cat], (err, rows) => {
        if (err) {
            printError(err);
        } else {

            rows.forEach(row => {
                products.push(new Product(row));
            })

            connection.pool.query('select category, id_category from category', (err, rows) => {
                if (err) {
                    printError(err);
                } else {
                    rows.forEach(row => categories.push(new Category(row)))
                    /*res.render('home', {
                        productList: products,
                        categories,
                        user: null,
                    })*/
                    res.render('category', {
                        products,
                        categories,
                        user: null
                    })
                }

            })
        }
    })

}

const categoryUser = (req = request, res = response) => {
    const products = [];
    const categories = [];
    const user = new User({});
    const { id_cat, email } = req.params;

    connection.pool.query('select avatar, email from user where email = ?', [email], (err, rows) => {
        if (err) {
            printError(err);
        } else {

            user.avatar = rows[0].avatar;
            user.email = rows[0].email;

            connection.pool.query('select thumbnail, name, price, id_prod from product where category = ?', [id_cat], (err, rows) => {
                if (err) {
                    printError(err);
                } else {

                    rows.forEach(row => {
                        products.push(new Product(row));
                    })

                    connection.pool.query('select category, id_category from category', (err, rows) => {
                        if (err) {
                            printError(err);
                        } else {
                            rows.forEach(row => categories.push(new Category(row)))
                            /*res.render('home', {
                                productList: products,
                                categories,
                                user: null,
                            })*/
                            res.render('category', {
                                products,
                                categories,
                                user
                            })
                        }

                    })
                }
            })
        }
    })
}

const product = (req = request, res = response) => {

    const item = req.params.product;
    let product = {};
    let specs = {};
    let comments = [];
    let categories = [];

    connection.pool.query('call sp_product (?)', [item], (err, rows) => {
        if (err) {
            printError(err);
            res.status(400).send('Product not found');
            return;
        } else {

            //console.log("Category".yellow.bold, item);

            rows[0][0]["category"] != 2 ? product = new Product(rows[0][0]) : product = new Product(rows[0][0]);

            if (rows[0][0]["category"] != 2) {
                const product = new Product(rows[0][0]);
            } else {
                specs = new Product_specs(rows[0][0]);
                product = new Product(rows[0][0], specs);
            }

            connection.pool.query('call sp_commentary (?, ?, ?, ?)', [product.id_prod, 'getComment', '', ''], (err, rows) => {
                if (err) {
                    printError(err);
                }

                rows[0].forEach(row => comments.push(new Comment(row)))
                product.comments = comments;

                connection.pool.query('select category, id_category from category', (err, rows) => {
                    if (err) {
                        printError(err);
                    } else {
                        rows.forEach(row => categories.push(new Category(row)))

                        res.render('product', {
                            product,
                            categories,
                            lists: null,
                            user: null
                        });

                        return;
                    }

                });

            })

        }
    })
}

const productUser = (req = request, res = response) => {

    const { email } = req.params;
    const item = req.params.product;
    let product = {};
    let specs = {};
    let comments = [];
    let categories = [];
    let lists = [];

    const user = new User({});

    connection.pool.query('select avatar, email from user where email = ?', [email], (err, row) => {
        if (err) {
            printError(err)
        } else {

            user.avatar = row[0].avatar;
            user.email = row[0].email;

            //console.log('USER'.yellow.bold, user);

            connection.pool.query('call sp_product (?)', [item], (err, rows) => {
                if (err) {
                    printError(err);
                    res.status(400).send('Product not found');
                   return;
                } else if(rows[0][0]) {                    

                    rows[0][0]["category"] != 2 ? product = new Product(rows[0][0]) : product = new Product(rows[0][0]);

                    if (rows[0][0]["category"] != 2) {
                        const product = new Product(rows[0][0]);
                    } else {
                        specs = new Product_specs(rows[0][0]);
                        product = new Product(rows[0][0], specs);
                    }

                    connection.pool.query('call sp_commentary (?, ?, ?, ?)', [product.id_prod, 'getComment', '', ''], (err, rows) => {
                        if (err) {
                            printError(err);
                        }

                        rows[0].forEach(row => comments.push(new Comment(row)))
                        product.comments = comments;

                        connection.pool.query('select category, id_category from category', (err, rows) => {
                            if (err) {
                                printError(err);
                            } else {
                                rows.forEach(row => categories.push(new Category(row)))

                                connection.pool.query('call sp_user_info (?, ?)', [user.email, 'LISTS'], (err, rows) => {
                                    if (err) {
                                        printError(err);
                                    }


                                    if (rows[0]) {
                                        Object.keys(rows[0]).forEach(row => {
                                            lists.push(new WishList(rows[0][row]));
                                        });
                                    }

                                    console.log('LISTS'.yellow.italic, lists)
                                    res.render('product', {
                                        product,
                                        categories,
                                        lists,
                                        user
                                    });

                                })
                                return;
                            }

                        });

                    })

                }else{
                    res.status(403).send("Este producto no esta disponible")
                }                
            })
        }
    })
}

const comment = (req = request, res = response) => {

    const { user_email, product, content } = req.body;

    connection.pool.query('call sp_commentary (?, ?, ?, ?)', [product, 'postComment', user_email, content], (err, rows) => {
        if (err) {
            printError(err);
        }

        res.redirect(`/product/${product}/${user_email}`);

    })
}

const addListItem = (req = request, res = response) => {

	const { list, user_email, product, thumbnail } = req.body;

	connection.pool.query('call sp_add_list_item (?, ?, ?, ?)', [list, user_email, product, thumbnail], (err, rows)=>{
		if(err)
			printError(err);

		else
			res.redirect(`/product/${product}/${user_email}`);

	})

}

module.exports = {

    home,
    homeUser,
    category,
    categoryUser,
    product,
    productUser,
    comment,
    addListItem

}