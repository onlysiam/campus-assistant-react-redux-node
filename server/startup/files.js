const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

const cloudinaryUpload = async (file) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: "nsuaide",
    });
    console.log(uploadResponse);
    return uploadResponse;
  } catch (error) {
    return error;
  }
};

module.exports = { cloudinaryUpload };
