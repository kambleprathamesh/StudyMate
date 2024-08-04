const User = require("../model/user");
const OTP = require("../model/otp");
const profile = require("../model/profile");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailSender = require("../utils/mailSender");
const { passwordUpdate } = require("../Mail/template/passwordUpdate");
require("dotenv").config();
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



exports.signUp = async (req, res) => {
  try {
    // Fetch data
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
    } = req.body;
    console.log("req Body: ", req.body);

    // Validate data--empty
    if (
      !accountType ||
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "Please enter all the fields correctly.",
      });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Password and confirm password do not match!",
      });
    }

    // Check if user already exists
    const checkUser = await User.findOne({ email });
    console.log("Check User: ", checkUser);

    if (checkUser) {
      return res.status(403).json({
        success: false,
        message: "User already exists.",
      });
    }

    // If user not present, find the recent OTP of the user from OTP DB
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log("Recent OTP: ", recentOtp);

    // Validate OTP
    if (recentOtp.length === 0) {
      console.log("OTP length is 0");
      return res.status(404).json({
        success: false,
        message: "Invalid OTP.",
      });
    } else if (otp !== recentOtp[0].otp) {
      console.log("OTP does not match recent OTP.");
      return res.status(405).json({
        success: false,
        message: "OTP does not match.",
      });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashPassword);

    // Create profile in DB
    const profileDetails = await profile.create({
      gender: null,
      about: null,
      dateOfBirth: null,
      contactNumber: null,
    });
    console.log("Profile Details: ", profileDetails);

    // Create entry
    // Determine approval status based on account type
    const approved = accountType === "Instructor" ? false : true;

    // Create the user
    const user = await User.create({
      firstName,
      lastName,
      accountType,
      email,
      password: hashPassword,
      additionalDetails: profileDetails._id,
      approved,
      image: `http://api.dicebear.com/5.x/initials/svg?seed=${firstName}_${lastName}`,
    });
    console.log("User: ", user);

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully.",
    });
  } catch (error) {
    console.log("Error occurred during user registration: ", error);
    return res.status(400).json({
      success: false,
      error,
      message: "Internal server error.",
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
