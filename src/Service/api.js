// require("dotenv").config();
const BASE_URL = "http://localhost:5000/api/v1";
// AUTH APIS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/verifyEmail",
  SIGNUP_API: BASE_URL + "/auth/signUp-Page",
  LOGIN_API: BASE_URL + "/auth/login-Page",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-Password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-Password",
};

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/courses/getAllCategory",
};


export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}