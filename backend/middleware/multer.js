const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create Cloudinary storage engine
const storage = new CloudinaryStorage({
  cloudinary,
 params: async (req, file) => ({
  folder: 'blogs',
  public_id: `${Date.now()}-${file.originalname.split('.')[0]}`, // remove extension
}),
});

// Initialize upload with cloudinary storage
const upload = multer({ storage });

module.exports = upload;
