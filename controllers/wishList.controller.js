require('colors');
const { request, response } = require('express');
const Connection = require('../connection/connection.db');
const User = require('../models/user.model.js');
const WishList = require('../models/wish_list.model');

const connection = new Connection();

const printError = err => console.log('QUERY ERROR: '.red.bold, err.message);

const lists = (req = request, res = response) => {

    const { email } = req.params;
    const user = new User({});
    const wishLists = [];

    //GET USER FIRST
    connection.pool.query(
        'select email ,avatar, name, midelname, f_lastName, lastName from user where email = ?',
        [email],
        (err, rows) => {

            if (err) {
                printError(err);
                res.status(400).send('user not found');
                return;
            }
            user.setName(rows[0]);

            //GET LISTS
            connection.pool.query('call sp_user_info(?, ?)', [email, 'LISTS'], (err, rows) => {

                if (err) {
                    printError(err);
                    res.render('wish_list', { user, wishLists });
                    return;
                }

                if (rows[0]) {
                    Object.keys(rows[0]).forEach(list => wishLists.push(new WishList(rows[0][list])));

                    connection.pool.query(
                        'select  product as pName, descript as pDescript, id_prod as pID  from vw_list_items  where user = ? and list = ?',
                        [email, wishLists[0].list],
                        (err, rows) => {

                            if (err) {
                                printError(err);
                                res.render('wish_list', { user, wishLists });
                                return;
                            }

                            Object.keys(rows).forEach(item => wishLists[0].setItems(rows[item]))
                            res.render('wish_list', { user, wishLists });
                        });
                }
                //GET LISTS ITEMS
                else {
                    res.render('wish_list', { user, wishLists });
                }

            });
        });
}

const userList = (req = request, res = response) => {

    const { email, list } = req.params;
    const user = new User({});
    const wishLists = [];

    //GET USER FIRST
    connection.pool.query(
        'select email ,avatar, name, midelname, f_lastName, lastName from user where email = ?',
        [email],
        (err, rows) => {

            if (err) {
                printError(err);
                res.status(400).send('user not found');
                return;
            }
            user.setName(rows[0]);

            //GET LISTS
            connection.pool.query('call sp_user_info(?, ?)', [email, 'LISTS'], (err, rows) => {

                if (err) {
                    printError(err);
                    res.render('wish_list', { user, wishLists });
                    return;
                }

                if (rows[0]) {
                    Object.keys(rows[0]).forEach(list => wishLists.push(new WishList(rows[0][list])));

                    connection.pool.query(
                        'select  product as pName, descript as pDescript, id_prod as pID, thumbnail as pThumbnail  from vw_list_items  where user = ? and list = ?',
                        [email, list],
                        (err, rows) => {

                            if (err) {
                                printError(err);
                                res.render('wish_list', { user, wishLists });
                                return;
                            }

                            Object.keys(rows).forEach(item => wishLists[0].setItems(rows[item]))
                            console.log('Wish List'.yellow.italic,wishLists[0].product)
                            res.render('wish_list', { user, wishLists });
                        });
                }
                //GET LISTS ITEMS
                else {
                    console.log('Wish List'.yellow.italic,wishLists.product)
                    res.render('wish_list', { user, wishLists });
                }

            });
        });

}

const addList = (req = request, res = response) => {

    const { user, listName } = req.body;

    if (listName !== '' && user !== '') {
        connection.pool.query('call sp_list (?, ?, ?)', [listName, user, 'INSERT'], (err, rows) => {

            if (err)
                printError(err);

            res.redirect('/wish-list/' + user);
        })
    }
    return;

}

const removeList = (req = request, res = response) => {

    const { email, list } = req.params;

    if(email !== '' && list !== ''){
    	connection.pool.query('call sp_list (?, ?, ?)', [list, email, 'DELETE'], (err, rows)=>{

    		if(err)
    			printError(err);

            res.redirect('/wish-list/' + email);
    		return;

    	})
    }

}

module.exports = {
    lists,
    userList,
    addList,
    removeList
}