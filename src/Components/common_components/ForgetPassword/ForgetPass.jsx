// src/Components/ForgetPass.jsx
import React, { useState } from "react";
import ".././auth.css";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../api/axiosClient";

const ForgetPass = ({ onSignup }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!/^\d{10}$/.test(phone)) {
    toast.error("Please enter a valid 10-digit phone number.");
    return;
  }

  try {
    setLoading(true);
    const response = await axiosClient.post("/forgot-password/send-otp", {
      phone,
      channel: "sms"
    });

    if (response?.data?.status) {
      toast.success("OTP sent to your mobile number");
      setPhone("");
      navigate("/forgetPass-verify-otp", { state: { phone } });
    } else {
      toast.error(response?.data?.message || "Phone not found.");
    }
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      toast.error(error.response.data.message);  // e.g. "Phone number not registered"
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
            <img src="/images/navlogo3.jpg" alt="logo" />
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
            <div className="phoneBox Box">
              <label htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your 10-digit Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
