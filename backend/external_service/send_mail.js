var nodemailer = require('nodemailer');

var send_email = function() {

    // To send email to users using Nodemailer module about the ticket details
    this.mail = function(email, regID, password){ 
        var receiver = email;
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trainticketer@gmail.com',
            pass: 'iloveudarling'
        }
        });

        var output=`Dear Sir/Madam, Your courseweb account has been created successfully. \n Your Login ID is ${regID} and password is "${password}".`;

        var mailOptions = {
            from: '"Courseweb" <trainticketer@gmail.com>',
            to: receiver,
            subject: 'Courseweb Credentials',
            text: output
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    }

}

module.exports=new send_email();