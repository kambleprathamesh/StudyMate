const cloudinary = require("cloudinary").v2;

exports.cloudinaryUploader = async (file, folder, height, Quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (Quality) {
    options.Quality = Quality;
  }
  options.resource_type = "auto";

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};
