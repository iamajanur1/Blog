import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetails.css';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
        setError("Blog not found or server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="blog-loading">Loading blog...</div>;
  if (error) return <div className="blog-error">{error}</div>;
  if (!blog) return null;

  // Function to render content with proper paragraph spacing
  const renderContent = () => {
    if (!blog.content) return null;
    
    // Split content by double newlines to get paragraphs
    const paragraphs = blog.content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      if (paragraph.trim() === '') return null; // Skip empty paragraphs
      
      // Check if paragraph is a heading (starts with #)
      if (paragraph.startsWith('#')) {
        const headingLevel = paragraph.match(/^#+/)[0].length;
        const headingText = paragraph.replace(/^#+\s*/, '');
        
        switch (headingLevel) {
          case 1:
            return <h1 key={index} className="content-heading">{headingText}</h1>;
          case 2:
            return <h2 key={index} className="content-heading">{headingText}</h2>;
          case 3:
            return <h3 key={index} className="content-subheading">{headingText}</h3>;
          default:
            return <h4 key={index} className="content-subheading">{headingText}</h4>;
        }
      }
      
      // Check if paragraph is a list item (starts with - or *)
      if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
        const listItems = paragraph.split('\n').filter(item => item.trim() !== '');
        return (
          <ul key={index} className="content-list">
            {listItems.map((item, i) => (
              <li key={i} className="content-list-item">
                {item.replace(/^[-*]\s*/, '')}
              </li>
            ))}
          </ul>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="content-paragraph">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="blog-details-container">
      {/* Header Section */}
      <div className="blog-header">
        <div className="back-link">
          <Link to="/blog">← Back to Blogs</Link>
        </div>
        
        <h1 className="blog-title">{blog.title}</h1>
        
        <div className="blog-meta">
          <span className="blog-date">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {blog.category && <span className="blog-category">| {blog.category}</span>}
        </div>
      </div>

      {/* Featured Image */}
      {blog.images?.[0] && (
        <div className="featured-image-container">
          <img 
            src={blog.images[0]} 
            alt={blog.title} 
            className="featured-image"
            loading="lazy"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="blog-content">
        {renderContent()}
        
        {/* Additional Images */}
        {blog.images?.slice(1).map((image, index) => (
          <div key={index} className="content-image">
            <img 
              src={image} 
              alt={`${blog.title} - ${index + 1}`} 
              className="blog-image"
              loading="lazy"
            />
            {blog.imageCaptions?.[index] && (
              <p className="image-caption">fig. {blog.imageCaptions[index]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;