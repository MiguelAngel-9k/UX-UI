const { request, response } = require('express');
const conn = require('../connection/connection.db');

const login = (req = request, res = response) => {
    res.render('login')
}


const getUser = (req = request, res = response) => {
    console.log(req.params.email);
    try {
        conn.query('select * from user where email = ?', [req.params.email], (err, rows, fields) => {

            if (err) {
                console.log(err);
                throw err;
            }

            res.render('user', {
                name: rows[0].user_name
            }) ;

        })

    } catch (error) {
        return null
    }
}

//TODO:
/* 
    *Registrarse-
    *Get para consulatar a la base de datos el correo dado-
        *Join del usuario, sus lista, compras recientes y carrito, direccion
        *Enviarlo para mostrarlo en la vista    
    *Obtener iformacion de usuario
    *Reenviar a pagina principal con su informacion
    *Una vez completado eso, hacer un stored procedure
    *Una vez todo funcione con el patron builder construir mi modelo usuario
*/

const newUser = (req = request, res = response) => {

    const { body } = req;
    try {
        conn.query(`insert into user(
            email,
            user_name,
            s_name,
            m_lastName,
            p_lastName,
            user_password
        ) values(?,?,?,?,?,?)`, [body.email, body.name, body.sName, body.mLastName, body.pLastName, body.password], (err, rows, fields) => {

            if (err) {
                console.log(err);
                return;
            }

          rows.affectedRows > 0 ? res.redirect('/login/'+body.email) : res.send('Not Found');
            //res.render('user', user);
        });
    } catch (error) {
        console.log(error);
        return;
    }
}

const getPurchases = (email = '', model)=> {

    conn.query('select * from purchases_view where email = ?', [email], (err, rows, fields)=>{
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('p',rows);
        model.push(rows[0]);               
        
    });         

}


const signIn = (req = request, res = response) => {

    const { body } = req;
    let userModel = [];

    try {
        conn.query(`call login (?, ?)`, [body.logInEmail, body.logInpassword], (err, rows, fields) => {

            if (err) {
                console.log(err);
                throw err;
            }
            //userModel.push(rows[0][0]);                          
            console.log('u',rows[0][0]);
        })
        
        conn.query('select * from purchases_view where email = ?', [body.logInEmail], (err, rows, fields)=>{
            if (err) {
                console.log(err);
                throw err;
            }
            //console.log('p',rows[0]);
            userModel.push(rows[0]);               
            
        });     
        constole.log(userModel);
        res.json(userModel);


    } catch (error) {
        return null
    }
}

module.exports = {

    getUser,
    login,
    newUser,
    signIn

}