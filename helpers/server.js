const express = require('express');
const hbs = require('hbs');
const cors = require('cors');

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

        this.app.use( express.urlencoded({extended: false}) );
        
        //Obtener informacion en formato JSON
        this.app.use(express.json());
        
        //Para poder usar paguna estaticas
        this.app.use(express.static('public'));
        
        this.app.set('view engine', 'hbs'); //motor para rendirazar vistas

        hbs.registerPartials(__dirname + '/views/partials');        
    }

    routes() {

        this.app.get('/', (rqs, res)=>{

            res.render('home');

        })

        this.app.use('/login', require('../routes/user.route'))

        this.app.get('/api', (req, res) => {
            res.send("Hola mundo");
        })
    }

    listen() {
        this.app.listen(this.port, () => console.log('listen on port 3000'));
    }

}

module.exports = Server
