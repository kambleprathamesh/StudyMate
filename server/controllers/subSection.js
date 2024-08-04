const subSection = require("../model/subSection");
const section = require("../model/section");
const { cloudinaryUploader } = require("../utils/imageUploader");
require("dotenv").config();
// create subsection
exports.createSubSection = async (req, res) => {
  try {
    // fetch data from body
    const { sectionId, title, timeDuration, description } = req.body;
    console.log("sectionId ", sectionId);
    console.log("title ", title);
    console.log("timeDuration ", timeDuration);
    console.log("description ", description);

    // fetch video from file
    const video = req.files.videoFile;
    console.log("video ", video);

    // valid
    if (!sectionId || !title || !timeDuration || !description || !video) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    // upload video to cloudinary...fetch the secure url

    const cloudinaryVideo = await cloudinaryUploader(
      video,
      process.env.Folder_Name
    );
    // create in DB
    const newSubSection = await subSection.create({
      title: title,
      description: description,
      timeDuration: timeDuration,
      videoUrl: cloudinaryVideo.secure_url,
    });
    // update the section with subsectionID
    const updateSectionDetails = await section
      .findByIdAndUpdate(
        sectionId,
        {
          $push: {
            subSection: newSubSection._id,
          },
        },
        { new: true }
      )
      .populate("subSection");
    console.log(updateSectionDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "subSection created Successfully",
      data: newSubSection,
    });
  } catch (error) {
    console.log("Error while Creating Subsection ", error);
    return res.status(404).json({
      success: false,
      message: "subSection did not created Something went wrong",
    });
  }
};

// update subsection
exports.updateSubSection = async (req, res) => {
  try {
    // fetch data from body
    const { subSectionId, title, timeDuration, description } = req.body;
    const updatedVideofile = req.file.videoFile;

    // valid fetched data
    if (
      !subSectionId ||
      !title ||
      !timeDuration ||
      !description ||
      !updatedVideofile
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // upload updatedVideo to cloudinary
    const updatedVideo = await cloudinary(
      updatedVideofile,
      process.env.Folder_Name
    );

    // store in the db
    const updatedSubsectionDetails = await subSection.findByIdAndUpdate(
      subSectionId,
      {
        title: title,
        description: description,
        videoUrl: updatedVideo.secure_url,
        timeDuration: timeDuration,
      },
      { new: true }
    );

    // return response
    return res.status(200).json({
      success: true,
      message: "subSection updated Successfully",
      data: updatedSubsectionDetails,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "subSection did not updated Something went wrong",
    });
  }
};

// delete subsection
exports.deleteSubSection = async (req, res) => {
  try {
    // fetch data
    const { subSectionId, sectionId } = req.body;

    // validate
    if (!subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // delete the subSection using findbyIdand delete
    await subSection.findByIdAndDelete(subSectionId);

    // update the section schema by deleting this subsectionid from the section schema

    // check the need of this updation in the section schema
    const subSectionDetails = await section.findByIdAndUpdate(sectionId, {
      $pop: {
        subSection: subSectionId,
      },
    });
    // if(subSectionDetails)
    // return response
    return res.status(200).json({
      success: true,
      message: "subSection deleted Successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "subSection did not deleted Something went wrong",
    });
  }
};
