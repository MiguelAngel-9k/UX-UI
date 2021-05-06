const { request, response } = require('express');
const conn = require('../connection/connection.db');



const getUser = (req = request, res = response) => {
    res.render('login');
}

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
        ) values(?,?,?,?,?,?)`, [body.email ,body.name, body.sName, body.mLastName, body.pLastName, body.password], (err, result) => {

            if (err) {
                console.log(err);
                return;
            }

            console.log(result);
            res.send(result);
            return;
        });
    } catch (error) {
        console.log(error);
        return;
    }
}


module.exports = {

    getUser,
    newUser

}