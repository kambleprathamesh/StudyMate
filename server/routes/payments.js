const express = require("express");
const router = express.Router();

// import payments controller
const { capturePayment, verifySignature } = require("../controllers/payment");
const { auth, isStudent } = require("../middlerwares/auth");

// create routes
router.post("/createPayment", auth, isStudent, capturePayment);
router.post("/verifySignature", verifySignature);

module.exports = router;
