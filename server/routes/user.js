const express = require("express");
const router = express.Router();

// import controllers of login,signup,otp,changepassword,resetPasswordtoekn,resetPassword

const {
  logIn,
  signUp,
  sendOTP,
  changePassword,
} = require("../controllers/auth");

const {
  resetPassword,
  resetPasswordToken,
} = require("../controllers/resetPassword");

const {
  auth,
  isStudent,
  isAdmin,
  isInstructor,
} = require("../middlerwares/auth");
const otp = require("../model/otp");

// create Routes
// SignUp
router.post("/signUp-Page", signUp);

// Login
router.post("/login-Page", logIn);

// sendOtp
router.post("/verifyEmail", sendOTP);

// changePAssword
router.post("/changePassword", auth, changePassword);

// reset Passwords
router.post("/reset-Password-token", resetPasswordToken);
router.post("/reset-Password", resetPassword);

module.exports = router;
