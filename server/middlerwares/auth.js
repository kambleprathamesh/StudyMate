const jwt = require("jsonwebtoken");
const user = require("../model/user");
require("dotenv").config();
// const user = require("../model/user");

// auth
exports.auth = async (req, res, next) => {
  try {
    // extract toekn
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorisation").replace("bearer","");

    console.log(token);
    // if token missing,return response
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token is Missing",
      });
    }

    // validate token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = decode;
    } catch (error) {
      console.log("Error occured while validating token", error);
      return res.status(400).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (error) {
    console.log("Erro ocuured while authentication ", error);
    return res.status(400).json({
      success: false,
      message: "Authentication mein Something went wrong",
    });
  }
};

// isStudent
exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(400).json({
        success: false,
        message: "This is a Protected Route for Student",
      });
    }
    next();
  } catch (error) {
    console.log("error while validation student ", error);
    return res.status(500).json({
      success: false,
      message: "user Role not verified ,please try again later",
    });
  }
};

// isInstructor
exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(400).json({
        success: false,
        message: "This is a Protected Route for Instructor",
      });
    }
    next();
  } catch (error) {
    console.log("error while validation Instructor ", error);
    return res.status(500).json({
      success: false,
      message: "user Role not verified ,please try again later",
    });
  }
};

// isAdmin
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(400).json({
        success: false,
        message: "This is a Protected Route for Admin",
      });
    }
    next();
  } catch (error) {
    console.log("error while validation Admin ", error);
    return res.status(500).json({
      success: false,
      message: "user Role not verified ,please try again later",
    });
  }
};
