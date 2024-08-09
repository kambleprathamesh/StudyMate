const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();

// auth
exports.auth = async (req, res, next) => {
  try {
    // extract token
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorisation").replace("Bearer", " ").trim();


      console.log("Token ",token)
    // if token is missing, return response
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token is missing",
      });
    }

    // validate token
    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "studyNotion"
      );
      req.user = decoded;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,

      message: "miidle ware Authentication failed",
    });
  }
};

// isStudent
exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Students only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role verification failed, please try again later",
    });
  }
};

// isInstructor
exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Instructor") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Instructors only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role verification failed, please try again later",
    });
  }
};

// isAdmin
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admins only",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role verification failed, please try again later",
    });
  }
};
