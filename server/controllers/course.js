const course = require("../model/course");
const categorySchema = require("../model/category");
const user = require("../model/user");
const { cloudinaryUploader } = require("../utils/imageUploader");
require("dotenv").config();
// create course
exports.createCourse = async (req, res) => {
  try {
    // fetch data
    let {
      courseName,
      courseDesc,
      whatYouWillLearn,
      price,
      category,
      // tag,
      status,
      instructions,
    } = req.body;

    // fetch thumbnail
    // const thumbNail = req.files.thumbNailImg;z

    // validation
    if (
      !courseName ||
      !courseDesc ||
      !whatYouWillLearn ||
      !price ||
      !category
      // !tag ||
      // !thumbNail ||
    ) {
      console.log("category", category);
      return res.status(400).json({
        success: false,

        message: "All fields are required",
      });
    }

    if (!status || status == undefined) {
      status = "Draft";
    }

    // chcek for instructor
    const userId = req.user.id;
    const instructorDetails = await user.findById(userId, {
      accountType: "Instructor",
    });
    console.log("instructorDetails: ", instructorDetails);
    if (!instructorDetails) {
      return res.status(200).json({
        success: false,
        messsage: "Instructor Details  Not Found",
      });
    }

    // check given category is valid or not
    const categoryDetails = await categorySchema.findById(category);
    if (!categoryDetails) {
      return res.status(200).json({
        success: false,
        message: "category Details not found",
      });
    }

    console.log("categoryDetails: ", categoryDetails);

    // upload image to cloudinary
    // const thumbNailImg = await cloudinaryUploader(
    //   thumbNail,
    //   process.env.FOLDER_NAME
    // );
    // console.log("Thumb Nail: ",thumbNail);

    // create entry for new course
    const newCourse = await course.create({
      courseName: courseName,
      courseDesc: courseDesc,
      category: categoryDetails.id,
      instructor: instructorDetails._id,
      price: price,
      // tag: tag,
      // thumbNail: thumbNailImg.secure_url,
      status: status,
      whatYouWillLearn: whatYouWillLearn,
      instructions: instructions,
    });
    console.log("newCourse Details: ", newCourse);

    // update by pushing instructor course list
    await user.findByIdAndUpdate(
      { _id: instructorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    // update category scehma

    await categorySchema.findByIdAndUpdate(
      { _id: categoryDetails._id },
      {
        $push: {
          course: newCourse._id,
        },
      },
      { new: true }
    );

    // return res
    return res.status(200).json({
      success: true,
      message: "New Course created Succesfully",
      courseData: newCourse,
    });
  } catch (error) {
    console.log("Error while creating course ", error);
    return res.status(400).json({
      success: false,
      message: "Failed To create new Course",
    });
  }
};
// getAllCourse
exports.getAllcourses = async (req, res) => {
  try {
    const allCourse = await course
      .find(
        {},
        {
          courseName: true,
          courseDesc: true,
          thumbNail: true,
          price: true,
          instructor: true,
          ratingAndReviews: true,
          studentsEnrolled: true,
        }
      )
      .populate("instructor")
      .exec();

    //   return res
    return res.status(200).json({
      success: true,
      message: "Data for ALl cousres fetched Succesfully",
      allCourse,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch new course",
    });
  }
};

// getCourseDetails
exports.getCourseDetails = async (req, res) => {
  try {
    // get course detail using course id
    const { courseId } = req.body;
    const courseDetails = await course
      .find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      // .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    // validate
    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `could not find the course${courseId}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: `Course details fetched Succesfully`,
      Data: courseDetails,
    });
  } catch (error) {
    console.log("Error occured at while fetching courseDetails ", error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
