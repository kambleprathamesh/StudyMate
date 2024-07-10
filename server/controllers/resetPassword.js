const user = require("../model/user");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
require("dotenv").config();
// resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    // fetch data
    const { email } = req.body;
    // validate data
    const User = await user.findOne({ email: email });
    if (!User) {
      return res.status(400).json({
        success: false,
        message: "Email is not regisgter with us",
      });
    }
    // generate token
    const token = crypto.randomBytes(20).toString("hex");

    console.log("TOKEN: ", token);
    // update user with token and expiry time
    const updateDetails = await user.findOneAndUpdate(
      { email: email },
      {
        token: token,
        expiresIn: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    console.log("DETAILS", updateDetails);
    // generate link
    const url = `http://localhost:3000/update-password/${token}`;

    // send mail contaning link
    await mailSender(
      email,
      "Password Reset Link",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    // retrun response
    return res.status(200).json({
      success: true,
      message:
        "Passowrd Link sent Succesfully,please check Mail and change Password",
    });
  } catch (error) {
    console.log("Error occured at sending password link ", error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong while sending Reset Pasword Link ",
    });
  }
};

// reset password
exports.resetPassword = async (req, res) => {
  try {
    // fetch data
    const { password, confirmPassword, token } = req.body;
    // validate data
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password Not Matching",
      });
    }
    // get userdetails from db using tokens
    const userDetails = await user.findOne({ token: token });

    // if no entry token invalid
    if (!userDetails) {
      return res.status(500).json({
        success: false,
        message: "Token not found in DB",
      });
    }

    // check token expiry time
    if (userDetails.expiresIn < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Token Expired,Please regenrate your Token",
      });
    }
    // hash pasword
    const hashPassword = await bcrypt.hash(password, 10);

    // update the password in DB
    await user.findOneAndUpdate(
      { token: token },
      { password: hashPassword },
      { new: true }
    );
    //return resposne
    return res.status(200).json({
      success: true,
      message: "Password Rest Succesfully",
    });
  } catch (error) {
    console.log("Error occured while seetting pasowrd link ", error);
    return res.status(400).json({
      success: false,
      message: "Password did not reset",
    });
  }
};
