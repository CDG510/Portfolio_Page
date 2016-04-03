//require controllers
var User = require('./../controllers/User.js')
var nodemailer = require('nodemailer');

var mongoose = require('mongoose');

    var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'christian.d.gonzalez.92@gmail.com',
        pass: 'Greenman666'
    }
};

module.exports = function(app){

    app.post("/sendMail", function(req, res){
        var mailOptions = {
    from: req.body.email + ' <'+req.body.email+'>', // sender address
    to: 'christian.d.gonzalez.92@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: req.body.message + req.body.phone+' ' ,// plaintext body
    html: '<b>'+req.body.message+ req.body.phone+'</b>' // html body
};
console.log(mailOptions)

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

    });

    //setup post to blog function

    //setup edit/delete blog


}
