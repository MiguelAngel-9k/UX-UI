require('colors');

const express = require('express');
const hbs = require('hbs');
const cors = require('cors');

const { home, homeUser, category, categoryUser, product, productUser, comment, addListItem } = require('../controllers/product.controller');
//const Connection = require('../connection/connection.db');
//const Product = require('../models/product.model');

//const connection = new Connection()


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        this.midlewares();
        this.routes();

    }

    midlewares() {

        //Rutas de cors
        this.app.use(cors());

        this.app.use(express.urlencoded({ extended: false }));

        //Obtener informacion en formato JSON
        this.app.use(express.json());

        //Para poder usar paguna estaticas
        this.app.use(express.static('public'));
        this.app.use('/category',express.static('public'));
        this.app.use('/category/:id_cat',express.static('public'));
        this.app.use('/product/:product',express.static('public')); 
        this.app.use('/product/:product/:email',express.static('public'));                    
        this.app.use('/user', express.static('public'));
        this.app.use('/wish-list', express.static('public'));
        this.app.use('/wish-list/:email', express.static('public'));
        //this.app.use('/css',express.static('public/assets/css'));        

        this.app.set('view engine', 'ejs'); //motor para rendirazar vistas

        //hbs.registerPartials(__dirname + '/views/partials');        
    }

    routes() {
        //this.app.use('/cart', require('../helpers/addCart'));
        this.app.use('/user', require('../routes/user.route'));
        this.app.use('/wish-list', require('../routes/whisList.route'));
        //this.app.use('/cart', require('../routes/cart.route'));

        this.app.get('/login', (req, res) => {

            res.render('login');

        })

        this.app.get('/', home);
        this.app.get('/:user', homeUser);
        this.app.get('/product/:product', product);
        this.app.get('/product/:product/:email', productUser);        
        this.app.get('/category/:id_cat', category);
        this.app.get('/category/:id_cat/:email', categoryUser);
        this.app.post('/drop-comment', comment);
        this.app.post('/add-item-list', addListItem);        


        this.app.get('/api', (req, res) => {
            res.send("Hola mundo");
        })
    }

    listen() {
        this.app.listen(this.port, () => console.log('listen on port 3000'));
    }

}

module.exports = Server