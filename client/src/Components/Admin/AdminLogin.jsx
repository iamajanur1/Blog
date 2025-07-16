// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Admin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const adminCredentials = {
    username: "admin",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="back-link">
        <Link to="/">← Back to Home</Link>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <h2>Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <div className="password-input-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
