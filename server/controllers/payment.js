const { instance } = require("../config/razorpay");
const course = require("../model/course");
const user = require("../model/user");
const mailSender = require("../utils/mailSender");
require("dotenv").config();
const {
  courseEnrollementEmail,
} = require("../Mail/template/courseEnrollementEmail");
const { default: mongoose } = require("mongoose");

// create payment and initiate the order
exports.capturePayment = async (req, res) => {
  try {
    // get cousreID and user ID
    const { courseID } = req.body;
    const userID = req.user.id;

    // validate courseID and userID
    if (!courseID) {
      return res.status(400).json({
        success: false,
        message: "Provide valid course ID ",
      });
    }

    // validate course Daetails
    let courseDetails;
    try {
      courseDetails = await course.findById(courseID);
      if (!courseDetails) {
        return res.status(400).json({
          success: false,
          message: "Course Deatils not found ",
        });
      }

      // chcek wether user has already purchased the course
      // convert userId from string to objectId
      const uoID = mongoose.Types.ObjectId(userID);
      if (courseDetails.studentsEnrolled.includes(uoID)) {
        return res.status(200).json({
          success: true,
          message: "User has already Purched the course",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(200).json({
        success: false,
        message: error.message,
      });
    }

    // create order
    const amount = course.price;
    const currency = "INR";
    const options = {
      amount: amount * 100,
      currency,
      receipt: Math.random(Date.now()).toString(),
      notes: {
        cousrseId: courseID,
        userID,
      },
    };

    try {
      // initiate payment via razorpay
      const paymentResponse = await instance.orders.create(options);
      console.log(paymentResponse);
      return res.status(200).json({
        success: true,
        courseName: courseName,
        courseDesc: courseDesc,
        thumbNail: thumbNail,
        orderId: paymentResponse.id,
        currency: paymentResponse.currency,
        amount: paymentResponse.amount,
      });
    } catch (error) {
      console.log("Error at creating an order ", error);
      return res.status(400).json({
        success: false,
        message: "Cannot initiate the payment ",
      });
    }

    
  } catch (error) {
    console.log(
      "error occured while intaiating the payment at capture Payment controller ",
      error
    );

    return res.status(400).json({
      success: false,
      message: "Cannot Capture the payment ",
    });
  }
};

// verify signature autho
exports.verifySignature = async (req, res) => {
  const webhooksSecret = "12345678";
  const signature = req.headers("x-razorpay-signature");

  // encrypt webhooksecret using sha256 hashing algo
  const shaSum = crypto.createHash("sha256", webhooksSecret);
  shaSum.update(JSON.stringify(req.body));
  const digest = shaSum.digest("hex");
  // validate signature and shasum
  if (signature == shaSum) {
    console.log("Autoruised");

    //add the purchesd course in the user course arrya and update the course studentenrollement arry
    const { courseId, userID } = req.body.payload.payment.entity.notes;
    try {
      // fnd the course and enroll the student in the course
      const enrolledCourse = await course.findOne(
        courseId,
        {
          $push: {
            studentsEnrolled: userID,
          },
        },
        { new: true }
      );

      if (!enrolledCourse) {
        return res.status(500).json({
          success: false,
          message: "details not found",
        });
      }

      console.log(enrolledCourse);

      // find the student in user scehma and update the user course array
      const updateStudentCourse = await user.findOneAndUpdate(
        { _id: userID },
        {
          $push: {
            courses: courseId,
          },
        },
        { new: true }
      );
      console.log(updateStudentCourse);

      // send mail to user after confirm paynement
      const emailResponse = await mailSender(
        updateStudentCourse.email,
        "congratulations From StudyNotion",
        "Congratulations, You are Enroled in the StudyNotion Course"
      );

      console.log(emailResponse);
      return res.status(200).json({
        success: true,
        message: "Signature Verified and Course Added",
      });
    } catch (error) {
      return res.status(500).json({
        success: true,
        message: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid Request",
    });
  }
};
