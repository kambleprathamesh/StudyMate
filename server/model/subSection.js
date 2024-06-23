const mongoose = require("mongoose");

const subSectionScehma = new mongoose.Schema({
  title: {
    type: String,
  },
  timeDuration: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  videoUrl: {
    type: String,
  },
});

module.exports = mongoose.model("subSection", subSectionScehma);
