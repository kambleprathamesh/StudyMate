// require("dotenv").config();
const BASE_URL = "http://localhost:5000/api/v1";

// AUTH APIS
export const AuthEndpoints = {
  SENDOTP_API: BASE_URL + "/auth/verifyEmail",
  SIGNUP_API: BASE_URL + "/auth/signUp-Page",
  LOGIN_API: BASE_URL + "/auth/login-Page",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-Password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-Password",
};

// Create-courses API
export const CoursesEndpoint = {
  // DETAILS & CATEGORIES
  GET_ALL_COURSE_API: "",
  COURSE_DETAILS_API: "",
  COURSE_CATEGORIES_API:BASE_URL + "/course/showAllCategories",

  // course
  CREATE_COURSE_API: BASE_URL + "/course/create-Course",
  UPDATE_COURSE_API: "",
  DELETE_COURSE_API: "",

  // section
  CREATE_SECTION_API: BASE_URL + "/course/create-Section",
  UPDATE_SECTION_API: "",
  DELETE_SECTION_API: "",

  // SUBSECTION
  CREATE_SUB_SECTION_API: BASE_URL + "/course/create-Sub-Section",
  UPDATE_SUB_SECTION_API: "",
  DELETE_SUB_SECTION_API: "",

  // INTRUCTOR_COURSE
  GET_ALL_INSTRUCTOR_COURSES_API: "",

  //FULL COURSE DETAILS AUTHENTICATED
  GET_FULL_COURSE_DETAILS_AUTHENTICATED: "",

  //RATING
  CREATE_RATING_API: "",

  //LECTURE COMPLETION
  LECTURE_COMPLETION_API: "",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/courses/getAllCategory",
};

// Contact API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

// profile Endpoints
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
};
