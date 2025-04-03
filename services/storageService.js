const cloudinary = require('../config/cloudinary');

exports.uploadFile = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    resource_type: 'auto'
  });
  return result.secure_url;
};

exports.deleteFile = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};