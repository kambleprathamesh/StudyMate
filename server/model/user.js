const mongoose = require("mongoose");

// trim property is used to remove whiteSpaces  "  hello word" or "hellow World "  or "  Hellow world  "  ---->"helloWorld"

const userScehma = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"course",
      },
    ],
    image: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    expiresIn: {
      type: Date,
    },
    courseProgress: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courseProgress",
      },
    ],
  },
  // Add timestamps for when the document is created and last modified
  { timestamps: true }
);

module.exports = mongoose.model("user", userScehma);
