import React, { useState } from "react";
import "./BlogForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BlogForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    image1: null,
    image2: null,
    image3: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  /* ---------- handlers ---------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, imageKey) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [imageKey]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /* Build FormData */
    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("category", formData.category);
    fd.append("content", formData.content);

    [formData.image1, formData.image2, formData.image3]
      .filter(Boolean)
      .forEach((file) => fd.append("images", file)); // field name MUST be images

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        body: fd,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error("Upload error: " + errorText);
      }
      const data = await res.json();

      if (res.ok) {
     
        setToast({ message: "✅ Blog created!", type: "success" });
        setTimeout(() => {
          setToast({ message: "", type: "" });
          onClose();
        }, 3000); // Auto-close toast after 3 seconds
      } else {
        setToast({ message: "❌ " + (data.error || "Failed to create blog"), type: "error" });
        setTimeout(() => setToast({ message: "", type: "" }), 3000);
      }
    } catch (err) {
      console.error("Upload error:", err);
      
      setTimeout(() => setToast({ message: "", type: "" }), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------- ui ---------- */
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add New Blog</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Blog Content"
            rows="6"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>

          {/* three image inputs (same backend field name) */}
          <div className="image-inputs">
            <label>Image 1</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "image1")}
            />
            <label>Image 2</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "image2")}
            />
            <label>Image 3</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "image3")}
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="loading-spinner"></span>
              ) : (
                "Submit"
              )}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Toast Notification */}
        {toast.message && (
          <div className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}