const { request, response } = require('express');
const Connection = require('../connection/connection.db');

const connection = new Connection();


const getUser = (req = request, res = response) => {
    res.send('Hola desde el usuario');
}

const newUser = (req = request, res = response) => {

    const { body } = req;

    connection.connect();


    if(!connection){
        console.log('Conexion fallida');
        return
    }

    connection.connection.query(`insert into user (email) values('${body.email}')`,(err, row) => {

        if(err){
            console.log(err);
            return;
        }

        console.log(row)
        res.send(body.email);

    })
    connection.disconnect();

    return;
}


module.exports = {

    getUser,
    newUser

}