const razorpay = require("razorpay");

exports.instance = new razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_Secret: process.env.RZORPAY_SECRET,
});
