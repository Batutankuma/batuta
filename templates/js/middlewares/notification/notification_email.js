const nodemailer = require('nodemailer');
// INFORMATION EMAIL
var USERNAME = "exemple@gmail.com"
var PASSWORD = "tonpassworld"
var PORT = 6422
var HOST = "xyzapplication.com"

class Email {
    sendEmail = async (recev, title, message) => {
        let user = USERNAME;
        let pwd = PASSWORD;

        // create transport
        let transporter = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            secureConnection: false,// true for 465, false for other ports
            auth: {
                user: user, // generated ethereal user
                pass: pwd, // generated ethereal password
            },
        });

        // create model send email
        let info = await transporter.sendMail({
            from: `"BatutaJS 👻" ${user}`, // sender address
            to: recev, // list of receivers
            subject: title, // Subject line
            text: message, // plain text body
            html: `<b>${message}</b>`, // html body
        });
        info;
    }
}

module.exports = Email;