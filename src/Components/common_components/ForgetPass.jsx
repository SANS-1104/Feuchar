// src/Components/ForgetPass.jsx
import React, { useState } from "react";
import "./auth.css";
import { FaArrowRight } from "react-icons/fa";


const ForgetPass = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Dummy user credentials for checking
  const dummyUser = {
    email: "test@example.com",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyUser.email) {
      alert("Password reset link sent to your email.");
      setEmail(""); // Clear email field
      setError("");
    } else {
      setError("Email not found. Please check and try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/images/login.png" alt="Forget Password Illustration" />
        <div className="auth-left-text">
          <div className="LoginContentImg"><img src="/images/navlogo3.jpg" alt="" /></div>
          <div className="LoginContentTitle">Improve your skill with Feuchar!</div>
          <div className="LoginContentDesc">Log in to continue your spiritual learning journey. Access your personalized dashboard, track your course progress, download certificates, and stay updated with the latest webinars, offers, and exclusive student content.</div>
        </div>
      </div>
      <div className="auth-right">
        <div className="goToHome"><a href="/">Go To Home <FaArrowRight /></a> </div>
        <h2>Forget Password</h2>
        <p className="user">
          New user? <span className="link" onClick={() => {
                console.log("Create account clicked");
                onSignup();
                }}>Create an account</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="loginGroup Group">
            <div className="emailBox Box">
              <label htmlFor="reset-email">Email</label>
              <input
                type="email"
                id="reset-email"
                placeholder="Cristopher@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
