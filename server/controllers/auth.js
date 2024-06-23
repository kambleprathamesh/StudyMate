const User = require("../model/user");
const OTP = require("../model/otp");
const profile = require("../model/profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const { passwordUpdate } = require("../Mail/template/passwordUpdate");
require("dotenv").config();
// signup
exports.signUp = async (req, res) => {
  try {
    // 1 fetch data
    // 2 data validate --->empty
    // 3 check password match
    // 4 find the latest otp from db if user has generated multiple otp and validate
    // 5 validate otp
    // 6 hashed password
    //  7 stored in DB
    // 8 return res

    // fetch data
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
    } = req.body;

    // validate data--empty
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).jsosn({
        success: false,
        message: "Enter All the fields Correctly",
      });
    }

    // 3 check password match
    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Password and confirmPassword Do Not Match!",
      });
    }

    // check user exist
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      return res.status(403).json({
        success: false,
        message: "User Already Exist",
      });
    }
    console.log("Check User", checkUser);
    // if user not present find the recent otp of the user from OTP DB
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("recent OTP", recentOtp);

    //   validate otp
    if (recentOtp.length === 0) {
      return res.status(403).json({
        success: false,
        message: "Invalid OTP",
      });
    } else if (otp != recentOtp[0].otp) {
      return res.status(403).json({
        success: false,
        message: "OTP not MAtched",
      });
    }

    // hashed password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    // create profile in db
    const profileDetails = await profile.create({
      gender: null,
      about: null,
      dateOfBirth: null,
      contactNumber: null,
      // proffesion: null,
    });
    console.log(profileDetails);
    // create entry
    // Create the user
    let approved = "";
    approved === "Instructor" ? (approved = false) : (approved = true);

    const user = await User.create({
      firstName,
      lastName,
      accountType,
      email,
      password: hashPassword,
      additionalDetails: profileDetails._id,
      approved:approved,
      image: `http://api.dicebear.com/5.x/initials/svg?seed=${firstName}_${lastName}`,
    });
    console.log(user);
    return res.status(200).json({
      success: true,
      user,
      message: "User Registered Succesfull",
    });
  } catch (error) {
    console.log("Error occured at Registering User", error);
    return res.status(400).json({
      success: false,
      error: error,
      message: "Internal  Error",
    });
  }
};

// send OTP
exports.sendOTP = async (req, res) => {
  try {
    // fecth email from req body
    const { email } = req.body;

    // check user already presnt
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(401).json({
        status: false,
        message: "User Already Register",
      });
    }

    //   generate otp

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("Genarated OTP", otp);
    // console.log("cant go ahead of this");
    // check uniqueness of OTP
    const result = await OTP.findOne({ otp: otp }); //left otp ---checking in db right otp
    console.log(result);

    // if no unique otp generate otp until unique otp is not found
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      // result = await OTP.findOne({ otp: otp });
    }
    console.log("Result: ", result);
    const otpPayLoad = { email, otp };
    //   make entry of the otp in DB
    const otpBody = await OTP.create(otpPayLoad);
    console.log(otpBody);
    return res.status(200).json({
      success: true,
      message: "OTP  sent Sucesfully",
      otp,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "OTP not Sent",
    });
  }
};

// login
exports.logIn = async (req, res) => {
  try {
    // fect data
    const { email, password } = req.body;

    // validate data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Fill all the details correctly",
      });
    }
    // check user exist
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(400).json({
        success: false,
        message: "user doesn't exist",
      });
    }
    // passowrd match
    if (await bcrypt.compare(password, checkUser.password)) {
      // generatae JWT tokens
      const payLoad = {
        email: checkUser.email,
        id: checkUser._id,
        accountType: checkUser.accountType,
      };

      const token = jwt.sign(payLoad, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      checkUser.token = token;
      checkUser.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        checkUser,
        message: "User LogedIN",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Password Incorrect",
      });
    }
    // create cookies
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failed.Please Try Again",
    });
  }
};

// change passowrd
exports.changePassword = async (req, res) => {
  try {
    // get user id
    const userId = req.user.id;

    // fetch data  email,oldpass ,newpass,confirm newPass
    const { email, oldPassowrd, newPassword, confirmNewPassowrd } = req.body;

    // perform basic validation on password
    if (!email || !oldPassowrd || !newPassword || !confirmNewPassowrd) {
      return res.status(400).jsosn({
        success: false,
        message: "Enter Password All correctly",
      });
    }

    // validate user
    const userDetails = await User.findById(userId);
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // validate old passowrd and password present  in the db
    const isPasswordMatch = await bcrypt.compare(
      oldPassowrd,
      userDetails.password
    );
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Unauthorised Access",
      });
    }

    // check passsowrds confirm password validations

    if (newPassword !== confirmNewPassowrd) {
      return res.status(400).json({
        success: false,
        message: "Passowrds do Not match",
      });
    }

    // hashe password
    const hashChanagePassword = await bcrypt.hash(confirmNewPassowrd, 10);

    // update the passowrd into database
    const updatePassword = await user.findOneAndUpdate(
      {
        _id: userId,
      },
      { password: hashChanagePassword },
      { new: true }
    );
    console.log(updatePassword);

    // mail send
    try {
      const mailResponse = mailSender(
        userDetails.email,
        pasowrdUpdate(
          userDetails.email,
          `Password updated successfully for ${userDetails.firstName} ${userDetails.lastName}`
        )
      );

      console.log("Email sent successfully:", mailResponse.response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "error Occured while sending email",
        error: error.message,
      });
    }

    // return response
    return res.status(200).json({
      success: true,
      message: "Password Updated Succesfully",
    });
  } catch (error) {
    console.error("Error occurred while updating password:", error);
    return res.status(400).json({
      success: false,
      message: "Password Failed to Update ",
      error: error.message,
    });
  }
};
