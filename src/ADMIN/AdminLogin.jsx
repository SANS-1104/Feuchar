// src/Components/Login.jsx
import React, { useState } from "react";
import "../Components/common_components/auth.css"
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

const AdminLogin = ({ onSignup, onForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate   = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
       
    //    Email validation
        if (!validateEmail(email)) {
        toast.error("Please enter a valid email address.", { autoClose: 500 });
        return;
        }

    try {
      const response = await axiosClient.post("/login", { email, password });

      const { token, user } = response.data.data;

      
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("User name:", user.name);
      const slug = user.name.trim().replace(/\s+/g, "-").toLowerCase();
      console.log("Slug generated:", slug);


      toast.success("Login successful!", { autoClose: 500, onClose: () => {
        console.log("Navigating to:", `/dashboard/${slug}/overview`);
        navigate(`/dashboard/${slug}/overview`) }
      }); 
      
    } catch (err) {
      const apiMsg =
        err.response?.data?.errors
          ? Object.values(err.response.data.errors).flat()[0]
          : err.response?.data?.message || "Login failed. Please try again.";
      toast.error(apiMsg, { autoClose: 0 });
    }
  };

   const tempLogin = async (e) => {
        e.preventDefault();
        navigate('/admin-dashboard')
   }
    

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
        <h2>Admin Login</h2>
        {/* <form onSubmit={handleLogin}></form> */}
        <form onSubmit={tempLogin}>
          <div className="loginGroup Group">
            <div className="emailBox Box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email-id"
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
