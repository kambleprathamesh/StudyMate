const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "courses",
  },
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subSection",
    },
  ],

  
  // about: {
  //   type: String,
  //   trim: true,
  // },
  // contactNumber: {
  //   type: String,
  //   trim: true,
  // },
});

module.exports = mongoose.model("courseProgress", courseProgressSchema);
