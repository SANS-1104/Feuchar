// src/Components/ForgetPass.jsx
import React, { useState } from "react";
import ".././auth.css";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axiosClient";

const ForgetPass = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosClient.post("/forgot-password/send-otp", {
        email,
        channel: "email"
      });

      if (response?.data?.status) {
        toast.success("OTP sent to your email");
        setEmail("");
        navigate("/forgetPass-verify-otp", { state: { email } });
      } else {
        toast.error(response?.data?.message || "Email not found.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // e.g. "Email not registered"
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error("Forget password error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-text">
          <div className="LoginContentImg">
            <img src="/images/navlogo3.jpg" alt="" />
          </div>
          <div className="LoginContentTitle">Improve your skill with Feuchar!</div>
          <div className="LoginContentDesc">
            Log in to continue your spiritual learning journey. Access your personalized dashboard, track your course progress, download certificates, and stay updated with the latest webinars, offers, and exclusive student content.
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="goToHome">
          <a href="/">Go To Home <FaArrowRight /></a>
        </div>
        <h2>Forget Password</h2>
        <p className="user">
          New user? <span className="link" onClick={onSignup}>Create an account</span>
        </p>

        <form onSubmit={handleSubmit}>
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
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
