import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup.jsx";


export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEdit = (blog) => {
    navigate(`/admin/edit-blog/${blog._id}`, { state: blog }); // Use _id from MongoDB
  };

  const handleView = (blog) => setSelectedBlog(blog);
  const closePopup = () => setSelectedBlog(null);
  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">View All Blogs</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {blogs.map((blog) => (
  <div key={blog._id} className="bg-green-100 border border-green-300 p-6 rounded-xl hover:shadow-xl">
    <h2 className="text-xl font-semibold text-green-700 mb-2">{blog.title}</h2>
    <p className="text-gray-600 mb-4">{blog.content.substring(0, 50)}...</p>
    <div className="flex space-x-4">
      <button
        onClick={() => handleEdit(blog)}
        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(blog._id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
      <button
        onClick={() => handleView(blog)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        View
      </button>
    </div>
  </div>
))}
        
        </div>
        <Link
          className="text-blue-600 hover:underline"
          to="/admin/dashboard"
        >
          ← Back to Dashboard
        </Link>
        {selectedBlog && <Popup blog={selectedBlog} onClose={closePopup} />}
      </div>
    </div>
  );
}