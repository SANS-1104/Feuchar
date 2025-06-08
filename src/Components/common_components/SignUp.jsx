import React, { useState } from "react";
import "./auth.css";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";


const SignUp = ({ onLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError("");
  };

  const validateForm = () => {
    const { name, email, phone, password, password_confirmation } = formData;

    if (!name.trim()) return toast.error("Full name is required.");
    if (!email.trim()) return toast.error("Email is required.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error("Invalid email format.");
    if (!phone.trim()) return toast.error("Phone number is required.");
    if (!/^\d{10}$/.test(phone)) return toast.error("Phone number must be exactly 10 digits.");
    if (!password.trim()) return toast.error("Password is required.");
    if (password.length < 6) return toast.error("Password must be at least 6 characters.");
    if (password !== password_confirmation) return toast.error("Passwords do not match!");

    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const payload = {
      ...formData,
      "role_id": "1",
    };

    // navigate("/verify-otp", {
    //   state: payload,
    // });
    
    try {
    const response = await axiosClient.post("/register", payload);
    console.log("Response from API:", response.data);
    if (response?.data?.status) {
      toast.success("OTP sent! Please verify.");
      
      navigate("/verify-otp", {
        state: payload,
      });
    } else {
      toast.error(response?.data?.message || "Registration failed.");
    }
  } catch (error) {
    console.error("Registration error:", error);
    const msg = error.response?.data?.message || "Registration failed. Please try again.";
    toast.error(msg);
  }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        {/* <img src="/images/login.png" alt="Sign‑up Illustration" /> */}
        <div className="auth-left-text">
          <div className="LoginContentImg">
            <img src="/images/navlogo3.jpg" alt="Feuchar logo" />
          </div>
          <div className="LoginContentTitle">New Here? Join Feuchar Today</div>
          <div className="LoginContentDesc">
            Sign up to explore powerful courses in numerology, astrology, and other
            occult sciences. Whether you’re here to transform your life or start a
            new income journey, Feuchar gives you the knowledge, support, and
            platform to grow.
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="goToHome">
          <a href="/">Go To Home <FaArrowRight /></a>
        </div>

        <h2 className="signuph2">Create An Account</h2>
        <p className="signupp1">
          Already have an account? <span className="link" onClick={onLogin}>Sign in</span>
        </p>

        <form onSubmit={handleSignUp} method="post">
          <div className="signupGroup loginGroup Group">
            <div className="formBox Box">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formBox Box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formBox Box">
              <label htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                placeholder="10‑digit phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formBox Box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password (min 6 characters)"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formBox Box">
              <label htmlFor="password_confirmation">Confirm Password</label>
              <input
                type="password"
                id="password_confirmation"
                placeholder="Confirm Password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <p className="signupConfirm">
            By Signing Up, I Agree To The Terms & Conditions.
          </p>
          <button type="submit" className="signupBtn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
