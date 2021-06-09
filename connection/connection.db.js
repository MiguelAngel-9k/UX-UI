const mysql = require('mysql');

class Connection {

    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 20,
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'Miguel90',
            database: process.env.DB || 'ALTATEC_DB',
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