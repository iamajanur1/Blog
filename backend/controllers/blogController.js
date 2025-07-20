// backend/controllers/blogController.js
const Blog = require('../models/Blog');
const cloudinary = require('../utils/cloudinary');

exports.createBlog = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Files:", req.files); // 👈 Check this!

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No images uploaded" });
    }

    const imageUrls = [];
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "blogs",
      });
      imageUrls.push(result.secure_url);
    }

    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      images: imageUrls,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Upload or DB Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ date: -1 });
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog ? res.json(blog) : res.status(404).json({ message: 'Not found' });
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // Handle new images (optional)
    if (req.files && req.files.length > 0) {
      const uploadedImages = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "blogs",
        });
        uploadedImages.push(result.secure_url);
      }
      blog.images = uploadedImages; // Replace existing images
    }

    blog.title = req.body.title || blog.title;
    blog.category = req.body.category || blog.category;
    blog.content = req.body.content || blog.content;

    const updatedBlog = await blog.save();

    res.json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
};


exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
