const mongoose = require("mongoose");

const categoryScehma = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },

  // category can contain many courses
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
  ],
});

module.exports = mongoose.model("category", categoryScehma);
