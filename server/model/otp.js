const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../Mail/template/emailVerification");
const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

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
    console.log("Mail Response: ", mailResponse);
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
