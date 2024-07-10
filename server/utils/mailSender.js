const nodemailer = require("nodemailer");
require("dotenv").config();
const mailSender = async (email, title, body) => {
  try {
    // create Transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // send mail
    let info = await transporter.sendMail({
      from: "StudyNotion",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
