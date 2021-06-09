const mysql = require('mysql');

class Connection {

    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 20,
            host: 'localhost',
            user: 'root',
            password: 'Miguel90',
            database: 'ALTATEC_DB',
            port: process.env.SERVER_PORT
        });

    }

    disconect(){
        this.pool.destroy();
    }

    release(){
        this.pool.release();
    }

}

module.exports = Connection;