const path = require("path");
const ejs = require("ejs");
const transport = require("./transport");

const sendRegisterEmail = async ({
  Name,
  email,
  contact,
  message,
  business,
}) => {
  try {
    const requirePath = path.join(
      process.cwd(),
      "app/api/viewsContact",
      "registerEmail.ejs"
    );
    const data = await ejs.renderFile(requirePath, {
      Name: Name,
      email: email,
      contact: contact,
      message: message,
      business: business,
    });
    let emailMessage = {
      from: "waqassarwar12@gmail.com",
      to: "raahimaligcu@gmail.com",
      subject: "Integris Services ",
      html: data,
    };

    return new Promise((resolve, reject) => {
      transport.sendMail(emailMessage, (error, info) => {
        if (error) {
          console.log(
            "Error occurred sending the register email:",
            error.message
          );
          reject(error.message);
        } else {
          console.log("Email sent successfully:", info);
          resolve("Email sent successfully");
        }
      });
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

module.exports = sendRegisterEmail;
