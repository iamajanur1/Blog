import React, { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./Components/Hero";
import Blog from "./Components/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./Components/Blog/BlogDetails.jsx";
import AdminLogin from "./Components/Admin/AdminLogin.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import ProtectedRoute from "./Components/Admin/ProtectedRoute.jsx";
import ViewBlogs from "./Components/Admin/ViewBlogs.jsx"; // Import ViewBlogs
import EditBlog from "./Components/Admin/EditBlogs.jsx";
import loader from "./assets/Loader2.mp4";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out",
      mirror: true,
      once: false,
      anchorPlacement: "top-bottom",
      debounceDelay: 50,
      throttleDelay: 99,
    });
    Aos.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="video-loader w-full h-full absolute bg-[#0f141c] overflow-hidden">
          <video autoPlay muted loop className="loader-video relative top-0 left-0 w-full h-full">
            <source src={loader} type="video/mp4" />
          </video>
        </div>
      ) : (
        <Routes>
  <Route path="/" element={<Hero />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogDetails />} />

  {/* Admin Routes */}
  <Route path="/admin/login" element={<AdminLogin />} />
  <Route
    path="/admin/dashboard"
    element={
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/admin/blogs"
    element={
      <ProtectedRoute>
        <ViewBlogs key={Date.now()} />
      </ProtectedRoute>
    }
  />

  {/* ✅ Edit Blog Route */}
  <Route
    path="/admin/edit-blog/:id"
    element={
      <ProtectedRoute>
        <EditBlog />
      </ProtectedRoute>
    }
  />
</Routes>

      )}
    </>
  );
}

export default App;