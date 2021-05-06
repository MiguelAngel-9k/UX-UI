const mysql = require('mysql');
class Connection {

    constructor(){

        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'altatec_ecomer',
            port: 3306
        })

    }

    async connect(){
        
        this.connection.connect((err)=>{
            if(err){
                console.log(err);
                return false;
            }else{
                console.log('Conexion exitosa');
                return true;
            }

        })
    }

    disconnect(){
        this.connection.end();
    }

}

module.exports = Connection