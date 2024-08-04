const section = require("../model/section");
const course = require("../model/course");
require("dotenv").config();
// create section
exports.createSection = async (req, res) => {
  try {
    // data fetch
    const { sectionName, courseId } = req.body;

    // data valid
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // create section
    const newSection = await section.create({
      sectionName: sectionName,
    });

    // update course schema push sectionId in cousrse content of teh course scehma
    const updateCourse = await course
      .findByIdAndUpdate(
        courseId,
        {
          $push: {
            courseContent: newSection._id,
          },
        },
        { new: true }
      )
      .populate("courseContent")
      .exec();

    // return response
    return res.status(200).json({
      success: true,
      data: updateCourse,
      message: "Section Created Suucesfully",
    });
  } catch (error) {
    console.log("Error Occured while creating Section ", error);
    return res.status(404).json({
      success: false,
      message: "Section did not created Something went wrong",
    });
  }
};

// update section
exports.updateSection = async (req, res) => {
  try {
    // fetch update name
    const { sectionName, sectionId } = req.body;

    // valid
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // updte the name in section
    const updatedSection = await section.findByIdAndUpdate(
      sectionId,
      { sectionName: sectionName },
      { new: true }
    );
    // return response
    return res.status(200).json({
      success: true,
      message: "SectionName updated SucessFully",
      data:updatedSection
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Section did not update Something went wrong",
    });
  }
};

// delete section
exports.deleteSection = async (req, res) => {
  try {
    // fetch sectionId from params
    const { sectionID, courseId } = req.body;

    // delete
    await section.findByIdAndDelete(sectionID);

    // update the couse schema by removing the deleted section from couse content  checkkk this during testing
    const updateCourseSections = await course.findByIdAndUpdate(
      courseId,
      {
        $pop: {
          courseContent: sectionID,
        },
      },
      { new: true }
    );
    // return response
    return res.status(200).json({
      success: true,
      message: "Section deleted Successfully",
    });
  } catch (error) {
    console.log("error while deleteing section")
    return res.status(404).json({
      success: false,
      message: "Section did not Deleted Something went wrong",
    });
  }
};
// Multimodal Interactive Travel Planner