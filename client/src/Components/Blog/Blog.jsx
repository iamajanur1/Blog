import React, { useEffect, useState } from "react";
import "./blogmain.css";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="heading-container">
          <div className="back-link">
            <Link to="/">← Back to Home</Link>
          </div>
          <h2 className="section-heading-text coding-skill-text fade_up show">Blogs.</h2>
          <div className="line"></div>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
