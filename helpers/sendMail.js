require('colors');
require('dotenv').config();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

class Mailer {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        this.middleware();
    }

    middleware() {
        this.transporter.use('compile', hbs({
            viewEngine: 'express-handlebars',
            viewPath: './'
        }))
    }

    sendMail(to, subject) {
        const mailOptions = {
            from: process.env.EMAIL,
            to,
            subject,
            template: 'main'
        };

        this.transporter.sendMail(mailOptions)
            .then((response) => console.log('Email sent!!'.green.bold))
            .catch((err) => console.log(`${'INTERNAL ERROR: '.red.bold}${err.message}`));
    }
}

module.exports = Mailer;

/*TODO: 
 **HACERLO EN UNA CLASE Y EXPORTARLO O HACERLO UNA FUNCION Y EXPORTARLO / FUNCION
 **DAR ESTILO AL CORREO
 **DEBE RECIBIR EL CORREO AL QUE SE LE MANDARA LA CONFIRMACION
 **CUANDO EL USUARIO SE REGISTRE CON EXITO ENVIAR EL CORREO
 */