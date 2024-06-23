const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../Mail/template/emailVerification");
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

// const createMail = async (email, title, body) => {
//   try {
//     // create Transporter
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     // send mail
//     let info = await transporter.sendMail({
//       from: `StudyNotion`,
//       to: `${email}`,
//       subject: `${title}`,
//       html: `<h1>${body}</h1>`,
//     });

//     console.log(info);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// async fun  code to send mail
async function emailVerification(email, otp) {
  // email-->receipient
  try {
    console.log("Email function reaching");
    const mailResponse = await mailSender(
      email,
      "EmailVerification",
      otpTemplate(otp)
    );
    console.log("Mail Response: ",mailResponse)
    console.log("email send Succesfully", mailResponse);
  } catch (error) {
    console.log("error ocured while Sending Mail", error);
  }
}

// pre middleware
otpSchema.pre("save", async function (next) {
  if (this.isNew) {
    await emailVerification(this.email, this.otp);
  }

  next();
});
module.exports = mongoose.model("otp", otpSchema);
