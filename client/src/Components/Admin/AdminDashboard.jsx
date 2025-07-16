import React, { useState } from "react";
import BlogForm from "./BlogForm";
import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";

export default function AdminDashboard() {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div
            onClick={() => setShowForm(true)}
            className="cursor-pointer bg-blue-100 border border-blue-300 p-6 rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              ➕ Add Blog
            </h2>
            <p className="text-gray-600">
              Create a new blog post and upload images.
            </p>
          </div>

          <div
            onClick={() => navigate("/admin/blogs")}
            className="cursor-pointer bg-green-100 border border-green-300 p-6 rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              📚 View All Blogs
            </h2>
            <p className="text-gray-600">See and manage all blog entries.</p>
          </div>
        </div>

        {/* Show the modal form */}
        {showForm && (
          <BlogForm onClose={() => setShowForm(false)} />
        )}

        <Link className="text-blue-600 hover:underline" to="/">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
