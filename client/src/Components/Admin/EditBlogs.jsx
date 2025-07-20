import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditBlog() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // /edit-blog/:id

  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    content: "",
    images: [],
  });
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    // Try to use state first
    if (location.state) {
      setBlogData(location.state);
    } else {
      // Otherwise fetch from DB
      fetch(`/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => setBlogData(data))
        .catch((err) => console.error("Error fetching blog:", err));
    }
  }, [id, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("category", blogData.category);
    formData.append("content", blogData.content);
    newImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        toast.success("Blog updated successfully!");
        navigate("/admin/blogs"); // back to blog list
      } else {
        toast.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <input
          type="text"
          name="category"
          value={blogData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <textarea
          name="content"
          value={blogData.content}
          onChange={handleChange}
          rows={6}
          placeholder="Content"
          className="w-full border border-gray-300 p-3 rounded-lg"
        ></textarea>
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-gray-300 p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
