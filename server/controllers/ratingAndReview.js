const ratingAndReview = require("../model/ratingAndReviews");
const course = require("../model/course");
require("dotenv").config();
const mongoose = require("mongoose");

// create rating controller
exports.createRating = async (req, res) => {
  try {
    // fetch data
    const { rating, review, courseId } = req.body;
    // get userID
    const userId = req.user.id;
    // check wether user is enrolled in the course
    const courseDetails = await course.findById(courseId);
    if (!courseDetails.studentsEnrolled.includes(userId)) {
      return res.status(400).josn({
        success: false,
        message: "user Not enrolled in the course",
      });
    }
    // allow user to give review only once
    const alreadyReviewed = await ratingAndReview.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: "user has already reviewd the course",
      });
    }

    // create course
    const ratingReview = await ratingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });

    // update rating and review in course
    const updatedCourseDetails = await course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );
    console.log(updatedCourseDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "Rating and review Done Succesfully",
      ratingReview,
    });
  } catch (error) {
    console.log("error occured at rating and review: ", error);
    return res.status(400).json({
      success: false,
      message: "user has already reviewd the course",
    });
  }
};

// average rating controller
exports.getAverageRating = async (req, res) => {
  try {
    // get course Id
    const courseId = req.body.courseId;

    // calculate rating revies average
    const result = await ratingAndReview.aggregate([
      {
        $match: {
          course: mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
        },
      },
    ]);

    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }

    // if no rating avialable return response
    return res.status(200).json({
      success: true,
      message: "No Artings Given Till Now",
      averageRating: 0,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal error",
    });
  }
};

// getAll rating and revies
exports.getAllRating = async (req, res) => {
  try {
    // get all rating & reviews
    const allRatRev = await ratingAndReview
      .find({})
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      });

    return res.status(200).json({
      success: true,
      message: "All reviews Fetched Succesfully",
      data: allRatRev,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal error",
    });
  }
};
