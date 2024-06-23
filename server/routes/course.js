const express = require("express");
const router = express.Router();

// import controllres

// import course controllers
const {
  createCourse,
  getAllcourses,
  getCourseDetails,
} = require("../controllers/course");

// import category controllers
const {
  createCategory,
  getAllCategory,
  categoryCourses,
} = require("../controllers/category");
// import section controllers
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/section");

// import subSection controllers
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/subSection");

// import ratind and reviews controllers
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/ratingAndReview");

// import middlerwares
const {
  auth,
  isAdmin,
  isInstructor,
  isStudent,
} = require("../middlerwares/auth");

// *************************************************************************************************
//                          courses can only be created by instructor
// *************************************************************************************************

// ******   createCourse Routes  ****** //
router.post("/create-Course", auth, isInstructor, createCourse);
router.get("/get-All-Courses", getAllcourses);
router.get("/get-Course-Details", getCourseDetails);

// ******  Section Routes  ****** //
router.post("/create-Section", auth, isInstructor, createSection);
router.put("/update-Section", auth, isInstructor, updateSection);
router.delete("/delete-Section", auth, isInstructor, deleteSection);

// ******  Sub Section Routes  ****** //
router.post("/create-Sub-Section", auth, isInstructor, createSubSection);
router.post("/update-Sub-Section", auth, isInstructor, updateSubSection);
router.delete("/delete-Sub-Section", auth, isInstructor, deleteSubSection);

// *************************************************************************************************
//                          Category can only be Handled by Admins
// *************************************************************************************************

// ******  category Routes  ****** //
router.post("/create-Category", auth, isAdmin, createCategory);
router.get("/showAllCategories", getAllCategory);
router.get("/category-Courses", categoryCourses);

// *************************************************************************************************
//                          Ratings and Review
// *************************************************************************************************
router.post("/create-rating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getAllRating", getAllRating);

module.exports = router;
