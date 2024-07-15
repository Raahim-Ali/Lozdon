const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: ``,
    pass: ``,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Mail transport error", error);
  } else {
  }
});

module.exports = transporter;
