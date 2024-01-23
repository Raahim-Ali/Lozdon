const path = require("path");
const ejs = require("ejs");
const transport = require("./transport");

const sendRegisterEmail = async ({
  name,
  companyName,
  budget,
  service,
  message,
}) => {
  try {
    const requirePath = path.join(
      process.cwd(),
      "app/api/views",
      "registerEmail.ejs"
    );
    const data = await ejs.renderFile(requirePath, {
      companyName: companyName,
      name: name,
      budget: budget,
      service: service,
      message: message,
    });
    let emailMessage = {
      from: "waqassarwar12@gmail.com",
      to: "waqas12@gmail.com",
      subject: "Octal Code Service",
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
