const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'altatec_ecomer',
    port: 3306
});

connection.connect((err)=> {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Conectado\n','connected as id ' + connection.threadId);
});

//connection.end();

module.exports = connection;