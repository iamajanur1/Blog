// backend/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const blogController = require('../controllers/blogController');

router.post('/', upload.array('images', 3), blogController.createBlog); // up to 3 images
router.get('/', blogController.getBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
