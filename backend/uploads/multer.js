// // backend/middlewares/uploadMiddleware.js
// const multer = require('multer');
// const path = require('path');

// const storage = multer.memoryStorage(); // For direct buffer upload to Cloudinary

// const fileFilter = (req, file, cb) => {
//   const ext = path.extname(file.originalname);
//   if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
//     return cb(new Error('Only images are allowed'), false);
//   }
//   cb(null, true);
// };

// const upload = multer({ storage, fileFilter });

// module.exports = upload;
