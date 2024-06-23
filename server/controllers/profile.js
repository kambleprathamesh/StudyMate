const profile = require("../model/profile");
const user = require("../model/user");
const course = require("../model/course");
const { cloudinaryUploader } = require("../utils/imageUploader");
require("dotenv").config();
// update profile
exports.updateProfile = async (req, res) => {
  try {
    // fetch data
    const { gender, contactNumber, dateOfBirth = "", about = "" } = req.body;

    // get userId
    const userId = req.user.id;
    console.log("userId: ", userId);
    // valid
    // if (!contactNumber || gender || !userId||!about) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Please required Fields",
    //   });
    // }

    // find profile
    const userDetails = await user.findById(userId);
    console.log("User Details ", userDetails);
    const profileDetails = await profile.findById(
      userDetails.additionalDetails
    );
    console.log("ProfileDeatils: ", profileDetails);

    // console.log("Profile Details ", profileDetails);

    // update profile aanother method
    profileDetails.gender = gender;
    profileDetails.contactNumber = contactNumber;
    profileDetails.dateOfBirth = dateOfBirth;
    profileDetails.about = about;
    // profileDetails.profession = profession;

    await profileDetails.save();
    console.log(profileDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "Profile Updated",
      profileDetails,
    });
  } catch (error) {
    console.log("Error at profile updation: ", error);
    return res.status(404).json({
      success: false,
      message: "Profile not updated Something went Wrong",
    });
  }
};

// exports.updateProfile = async (req, res) => {
//   try {
//     // Fetch data
//     const { gender, contactNumber, dateOfBirth = "", about = "" } = req.body;

//     // Get userId
//     const userId = req.user.id;

//     // Validate
//     if (!contactNumber || !gender || !userId || !about) {
//       return res.status(400).json({
//         success: false,
//         message: "Please provide required fields",
//       });
//     }

//     // Find user details
//     const userDetails = await user.findById(userId);
//     if (!userDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     console.log("User Details ", userDetails);

//     // Find profile
//     const profileDetails = await profile.findOne(userDetails.additionalDetails);
//     if (!profileDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "Profile not found",
//       });
//     }
//     console.log("Profile Details: ", profileDetails);

//     // Update profile
//     profileDetails.gender = gender;
//     profileDetails.contactNumber = contactNumber;
//     profileDetails.dateOfBirth = dateOfBirth;
//     profileDetails.about = about;
//     await profileDetails.save();
//     console.log("Profile Details: ", profileDetails);
//     // Return response
//     return res.status(200).json({
//       success: true,
//       message: "Profile updated",
//       profileDetails,
//     });
//   } catch (error) {
//     console.log("Error at profile update: ", error);
//     return res.status(500).json({
//       success: false,
//       message: "Profile not updated. Something went wrong",
//     });
//   }
// };

// exports.updateProfile = async (req, res) => {
//   try {
//     // Fetch data from the request body
//     const { gender, contactNumber, dateOfBirth = "", about = "" } = req.body;

//     // Get the userId from the request object
//     const userId = req.user.id;
//     console.log("userId: ", userId);

//     // Validate required fields
//     if (!contactNumber || !gender || !userId || !about) {
//       return res.status(400).json({
//         success: false,
//         message: "Please provide required fields",
//       });
//     }

//     // Find user details by userId
//     const userDetails = await user.findById(userId);
//     if (!userDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     console.log("User Details: ", userDetails);

//     // Find profile details using the additionalDetails field from userDetails
//     const profileDetails = await profile.findById(userDetails.additionalDetails);
//     if (!profileDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "Profile not found",
//       });
//     }
//     console.log("Profile Details: ", profileDetails);

//     // Update profile details
//     profileDetails.gender = gender;
//     profileDetails.contactNumber = contactNumber;
//     profileDetails.dateOfBirth = dateOfBirth;
//     profileDetails.about = about;

//     // Save the updated profile
//     await profileDetails.save();
//     console.log("Updated Profile Details: ", profileDetails);

//     // Return response
//     return res.status(200).json({
//       success: true,
//       message: "Profile updated successfully",
//       profileDetails,
//     });
//   } catch (error) {
//     console.log("Error at profile updation: ", error);
//     return res.status(500).json({
//       success: false,
//       message: "Profile not updated. Something went wrong",
//     });
//   }
// };

// hw find account delet scheduling logic

// delete account

exports.deleteAccount = async (req, res) => {
  try {
    // get userId
    const userId = req.user.id;
    // get userDeatils from id
    const userDetails = await user.findById(userId);
    // valid userDetails
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "userDetails not found",
      });
    }
    // delet profile
    await profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
    // delete user from enrolled courses
    // await course.findByIdAndDelete({
    //   _id: userDetails.courses.studentsEnrolled,
    // });
    // delete userID
    await user.findByIdAndDelete({_id:userId});

    // return res
    return res.status(200).json({
      success: true,
      message: "Account Deleted Suucesfully",
    });
  } catch (error) {
    console.log("Error Occured while deleting Profile: ",error)
    return res.status(404).json({
      success: false,
      message: "Internal Server Issue",
    });
  }
};

// getall user Details
exports.getUserDetails = async (req, res) => {
  try {
    // fetch id
    const userId = req.user.id;
    console.log("userId: ", userId);
    //userdetail find
    const userDetails = await user
      .findById(userId)
      .populate("additionalDetails")
      .exec();
    console.log(userDetails);
    // return res
    return res.status(200).json({
      success: true,
      message: "User Data Fetched SuucessFully",
      data: userDetails,
    });
  } catch (error) {
    console.log("Error while fetching usewr Complete Information: ", error);
    return res.status(404).json({
      success: false,
      message: "Internal Server Issue",
    });
  }
};

// update profle image
exports.updateDisplayPicture = async (req, res) => {
  try {
    // get userid
    const userId = req.user.id;
    // get image

    const displayPicture = req.files.displayPicture;
    console.log(userId);
    // validate
    if (!userId || !displayPicture) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    // upload image to cloudinary
    const uploadPicturecloduidnary = await cloudinaryUploader(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    );
    // find the user and update the image secure url to DB
    const updateUserDisplayPictuire = await user.findByIdAndUpdate(
      { _id: userId },
      {
        image: uploadPicturecloduidnary.secure_url,
      },
      { new: true }
    );
    console.log(updateUserDisplayPictuire);
    if (!updateUserDisplayPictuire) {
      return res.status(400).json({
        success: false,
        message: "Profile Picture not Updated SuccesFully",
      });
    }

    return res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updateUserDisplayPictuire,
    });

    // return res
  } catch (error) {
    console.log("error occured while uploading images Catch Part: ", error);
    return res.status(400).json({
      success: false,
      message: "Internal Server error",
      error: error.message,
    });
  }
};

// getEnrolledCourses
exports.getEnrolledCourses = async (req, res) => {
  try {
    // get userid
    const userId = req.user.id;

    // find user in thr DB and validate
    const userDetails = await user.findById(userId).populate("courses").exec();
    // validate
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `user Courses not purchased with Id:${userId}`,
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "UserDetails found",
      data: userDetails.courses,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `internal server Issue`,
      error: error.message,
    });
  }
};
