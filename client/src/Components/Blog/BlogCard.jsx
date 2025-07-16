// BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./blogcard.css";

function BlogCard({ blog }) {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="custom-blog-card">
      <div className="custom-card-image-wrapper">
        <img
          src={blog.images?.[0]}
          alt={blog.title}
          className="custom-card-img"
        />
      </div>
      <div className="custom-card-content">
        <span className="custom-card-date">{formattedDate}</span>
        <h3 className="custom-card-title">{blog.title}</h3>
        <p className="custom-card-desc">
          {blog.content.length > 150
            ? blog.content.slice(0, 150) + "..."
            : blog.content}
        </p>
         <Link to={`/blog/${blog._id}`} className="custom-readmore-btn">
          Read More »
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;