import React, { useState } from "react";
import "./auth.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const SignUp = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { firstName, lastName, username, email, password, confirmPassword } = formData;

    // Basic validation
    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("firstName", firstName);
    toast.success("Signed Up Successfully!", {autoClose: 2000 });

    // Redirect after a short delay to let toast show
    setTimeout(() => {
      navigate(`/dashboard/${username}`);
    }, 2000);

  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/images/login.png" alt="Signup Illustration" />
        <div className="auth-left-text">
          <div className="LoginContentImg"><img src="/images/navlogo3.jpg" alt="" /></div>
          <div className="LoginContentTitle">New Here? Join Feuchar Today</div>
          <div className="LoginContentDesc">Sign up to explore powerful courses in numerology, astrology, and other occult sciences. Whether you're here to transform your life or start a new income journey, Feuchar gives you the knowledge, support, and platform to grow.</div>
        </div>
      </div>
      <div className="auth-right">
        <div className="goToHome"><a href="/">Go To Home <FaArrowRight /></a> </div>
        <h2 className="signuph2">Create An Account</h2>
        <p className="signupp1">
          Already have an account? <span className="link" onClick={onLogin}>Sign in</span>
        </p>

        <form onSubmit={handleSignUp}>
          <div className="signupGroup Group Group1">
            <div className="firstNameBox Box Box1">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="inpufirstNameBox Box Box1">
              <label htmlFor="last-name" className="last">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="firstNameBox Box Box1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="emailBox Box Box1">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="passBox Box Box1">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="passBox Box Box1">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <p className="signupConfirm">By Signing Up, I Agree To The Terms & Conditions.</p>

          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
          {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
