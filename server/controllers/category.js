const category = require("../model/category");
require("dotenv").config();
// create Categories
exports.createCategory = async (req, res) => {
  try {
    // fetch category from body
    const { name, description } = req.body;

    // validation
    if (!name || !description) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }

    // create etry in DB
    const categoryDetails = await category.create({
      name: name,
      description: description,
    });

    console.log(categoryDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "category created Suucessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// getAll categories
exports.getAllCategory = async (req, res) => {
  try {
    const getAllCategory = await category.find(
      {},
      { name: true, description: true }
    );
    console.log(getAllCategory);
    // return response
    return res.status(200).json({
      success: true,
      data:getAllCategory,
      message: "All category returned Suucessfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get category wise cousres
exports.categoryCourses = async (req, res) => {
  try {
    // get category id
    const {categoryId} = req.body;
    // find courses on the category id
    const selectedCategoryCourses = await category
      .find({
        _id: categoryId,
      })
      .populate("course")
      .exec();
    //validate wether any courses found or not
    if (!selectedCategoryCourses) {
      return res.status(400).json({
        success: false,
        message: "No course Found",
      });
    }
    // show digfferent category courses
    const diffrenetCourses = await category
      .find({
        _id: { $ne: categoryId },
      })
      .populate("course")
      .exec();
    // show top selling course --hw
    //return response
    return res.status(200).json({
      success: true,
      data: { diffrenetCourses, selectedCategoryCourses },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
