// src/Components/Login.jsx
import React, { useState } from "react";
import "./auth.css";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

const Login = ({ onSignup, onForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axiosClient.post("/login", { email, password });

      const { token, user } = response.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      const slug = user.name.trim().replace(/\s+/g, "-").toLowerCase();

      toast.success("Login successful!", {
        autoClose: 500,
        onClose: () => {
          navigate(`/dashboard/${slug}/overview`);
        }
      });
    } catch (err) {
      const apiMsg =
        err.response?.data?.errors
          ? Object.values(err.response.data.errors).flat()[0]
          : err.response?.data?.message || "Login failed. Please try again.";
      toast.error(apiMsg, { autoClose: 0 });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-text">
          <div className="LoginContentImg"><img src="/images/navlogo3.jpg" alt="" /></div>
          <div className="LoginContentTitle">Improve your skill with Feuchar!</div>
          <div className="LoginContentDesc">
            Log in to continue your spiritual learning journey...
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="goToHome">
          <a href="/">Go To Home <FaArrowRight /></a>
        </div>
        <h2>Sign In</h2>
        <p className="user">
          New user? <span className="link" onClick={onSignup}>Create an account</span>
        </p>

        <form onSubmit={handleLogin}>
          <div className="loginGroup Group">
            <div className="emailBox Box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="passBox Box">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="remember-me">
            <div className="checkboxing">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <p><span className="link" onClick={onForgot}>Forgot your password?</span></p>
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
