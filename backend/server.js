

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Blog = require('./models/Blog')
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Simple test route
app.get("/", (req, res) => {
  res.send("Server running ✔");
});

const blogRoutes = require('./routes/blogRoutes');
app.use('/api/blogs', blogRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});




// async function insertSampleBlog() {
//   const blog = new Blog({
//     title: 'Test Blog Title',
//     content: 'This is a sample blog for schema creation.',
//     images: [
//       'https://res.cloudinary.com/demo/image/upload/sample1.jpg',
//       'https://res.cloudinary.com/demo/image/upload/sample2.jpg'
//     ],
//     category: 'Sample'
//   });

//   await blog.save();
//   console.log('✅ Sample blog inserted');
// }

// insertSampleBlog();
