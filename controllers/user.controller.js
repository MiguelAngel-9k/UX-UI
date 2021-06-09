require('colors');
const { request, response } = require('express');
const Connecton = require('../connection/connection.db');
const User = require('../models/user.model.js');
const WishList = require('../models/wish_list.model');
const Mailer = require('../helpers/sendMail');

const connection = new Connecton();
const mailer = new Mailer();

//Registrar a un nuevo usuario
const register = (req = response, res = request) => {
    const { body } = req;

    /*upload(req, res, (err) => {
        if (err)
            console.log(`${'UPLOAD ERROR:'.red.bold }${err}`);
    })*/

    const user = new User(body);

    console.log(user);

    connection.pool.query('call register_user (?, ?, ?, ?, ?, ?, ?)',
        [
            user.name,
            user.s_name,
            user.lastName_p,
            user.lastName_m,
            user.email,
            user.password,
            ""
        ], (err, rows) => {

            if (err) {
                console.log('QUERY ERROR: '.red.bold, err.message);
                //res.send(' Query Fail');
                res.status(200).send(null);
                return;
            } else {

                mailer.sendMail(user.email, 'Atatec-Registro');

                res.status(200).send('succes');
                return;
            }
        })
}

const login = (req = request, res = response) => {

    const { query } = req;

    connection.pool.query('call login(?, ?)', [query.logInEmail, query.logInpassword], (err, rows) => {

        if (err) {
            console.log('QUERY ERROR: '.red.bold, err.message);
            //res.send(' Query Fail');
            res.redirect('/login');
        } else if (!rows[0][0]) {
            console.log('USER DOESNT EXISTS: '.red.bold);
            res.send(`${query.logInEmail} User Doesnt Exists`);
            return;
        }

        res.redirect(rows[0][0].email);
        return

    })
}

const profile = (req = request, res = response) => {
    const { email } = req.params;
    let data = {};
    let user;
    let lists = [];
    let purchase = [];
    let purchaseList = [];

    //GET USER INFO
    connection.pool.query('call sp_user_info (?, ?)', [email, 'ADRESS'], (err, rows) => {

        if (err) {
            console.log('QUERY ERROR: '.red.bold, err.message);
            res.status(404).send('Not Found');
        } else {            
            console.log('user'.yellow, rows[0][0]);
            data.user = new User(rows[0][0]);
            //res.render('user', {user});

            connection.pool.query('call sp_user_info (?, ?)', [email, 'LISTS'], (err, rows) => {

                if (err) {
                    console.log('QUERY ERROR: '.red.bold, err.message);
                } else {

                    if (rows[0]) {
                        Object.keys(rows[0]).forEach(row => {
                            lists.push(new WishList(rows[0][row]));
                        });

                        data.lists = lists;
                        //console.log('Lists'.yellow, data.lists);
                    }

                    //GET USER PURCHASES
                    connection.pool.query('call sp_user_info (?, ?)', [email, 'PURCHASE'], (err, rows) => {

                        if (err) {
                            console.log('QUERY ERROR: '.red.bold, err.message);
                        } else {
                            if (rows[0]) {
                                console.log('RECENT PURCHASE ROWS', rows[0]);
                                Object.keys(rows[0]).forEach(row => purchase.push(rows[0][row]));
                                data.purchase = purchase;
                                //console.log('purchase'.yellow, data.purchase);
                            }
                            //PURCHASE TABLE
                            connection.pool.query('select*from vw_purchase where user = ?', email, (err, rows) => {

                                if (err) {
                                    console.log('QUERY ERROR: '.red.bold, err.message);
                                } else {
                                    if (rows) {
                                        //console.log('PURCHASE ROWS', rows);
                                        Object.keys(rows).forEach(product => purchaseList.push(rows[product]));
                                        data.purchaseList = purchaseList;
                                        //console.log('PURCHASE LIST'.yellow.bold, data.purchaseList);
                                    }

                                    res.render('user', {
                                        user: data.user,
                                        lists: data.lists,
                                        purchase: data.purchase,
                                        purchaseList: data.purchaseList
                                    });
                                }
                            })

                        }
                    })
                }

            })
        }
    })
}

const personalInfo = (req = request, res = resposnse) => {

    const { body } = req;
    const user = new User(body);
    //console.log('USER'.yellow, user);
    connection.pool.query('call sp_update_user(?, ?, ?, ?, ?, ? ,? ,? ,?, ?, ?)', [
        user.name,
        user.s_name,
        user.lastName_p,
        user.lastName_m,
        user.password,
        0,
        '',
        '',
        '',
        user.email,
        'USER'
    ], (err, rows) => {

        if (err) {
            console.log('QUERY ERROR: '.red.bold, err.message);
            res.send('succed');
            return;
        } else {
            res.send('succed');
            return;
        }
    })

}

const adressInfo = (req = request, res = resposnse) => {

    const { body } = req;
    const user = new User(body);
    //console.log('USER'.yellow, user);
    connection.pool.query('call sp_update_user(?, ?, ?, ?, ?, ? ,? ,? ,?, ?, ?)', [
        '',
        '',
        '',
        '',
        '',
        user.number,
        user.street,
        user.city,
        user.state,
        user.email,
        'ADRESS'
    ], (err, rows) => {

        if (err) {
            console.log('QUERY ERROR: '.red.bold, err.message);
            res.send('succed');
            return;
        } else {
            res.send('succed');
            return;
        }
    })
}

const getOnboard = (req = request, res = response)=>{

    console.log(req.body);
    res.send(1);

}

const setOnboard = (req = request, res = response)=>{

    const { onboard, email } = req.body;

    connection.pool.query('update user set first = ? where email = ?', [onboard, email], (err, rows)=>{
        if(err){
            console.log('QUERY ERROR: '.red.bold, err.message);
            res.send('Fail');
            return;
        }

        res.send('succed');
        return;

    })
    //set 1 in user table
}

const estUserImage = (req = request, res = response)=>{

    /*
        *Guardar la imagen en la base de datos

        *Volver a reenviar a la pagina del usuario con la nueva imagen de perfil
    */

    const avatar = 'assets/img/'+req.file.filename;
    console.log(req.file);
    const { Avataremail } = req.body;

    connection.pool.query('update user set avatar = ? where email = ?', [avatar, Avataremail], (err, rows)=>{
        if(err)
            console.log('QUERY ERROR: '.red.bold, err.message);


        res.redirect(Avataremail);
    })
}

module.exports = {
    register,
    login,
    profile,
    personalInfo,
    adressInfo,
    getOnboard,
    setOnboard,
    estUserImage
}

/*
    *Primero recvir la informacion del producto y el usuario
    *solo recivira informacion de tres paginas, inicio, categoria, pagina del producto
    *Revisar si el usuario ya tiene un carrito y no tiene, agregarlo al arreglo de objetos

*/