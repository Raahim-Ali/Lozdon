const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: `waqassarwar012@gmail.com`,
    pass: `ghevnkcbfrkufrly`,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Mail transport error", error);
  } else {
    // console.log('Mail server is started');
  }
});

module.exports = transporter;
