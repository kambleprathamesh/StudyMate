const mongoose = require("mongoose");
const ratingAndReviewScehma = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    trim: true,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "course",
    index: true,
  },
});

module.exports = mongoose.model("reatingAndReview", ratingAndReviewScehma);
