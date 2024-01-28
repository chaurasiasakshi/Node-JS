const nodemailer = require("nodemailer");

const sendMail = async(req, res)=>{
    let testAccount =  nodemailer.createTestAccount();
}

const transporter =  nodemailer.createTransport({
//   connect with smtp
    host: "smtp.ethereal.email",
    port: 587,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'malika.powlowski@ethereal.email',
        pass: 'YvyYMNerrXzPATRa4Q'
    },
  });
// send mail with defined transport object
const info =  transporter.sendMail({
    from: '"sakshiChaurasia 👻" <sk@gmail.com>', // sender address
    to: "bar@example.com, bro@example.com", // list of receivers
    subject: "Hello Sakshi", // Subject line
    text: "Hello SAkshi", // plain text body
    html: "<b>Hello SaKsHi?</b>", // html body
  });
  
  console.log("Message sent: %s", info.messageId);
const sendMails = async(req,res)=>{
    res.send("I am Sending Mail");
};

module.exports = sendMail;