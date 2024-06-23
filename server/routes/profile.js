const express = require("express");
const router = express.Router();

// import controllers and midllewares
const {
  updateProfile,
  getUserDetails,
  deleteAccount,
  updateDisplayPicture,
  getEnrolledCourses,
} = require("../controllers/profile");
const {
  auth,
  isStudent,
  isAdmin,
  isInstructor,
} = require("../middlerwares/auth");

// create Routes
router.put("/updateProfile", auth, updateProfile);
router.put("/updateDisplayProfile", auth, updateDisplayPicture);
router.get("/getEnrolledCourses", auth, getEnrolledCourses);
router.get("/getUserDetails", auth, getUserDetails);
router.delete("/delete-Account", auth, deleteAccount);

module.exports = router;
