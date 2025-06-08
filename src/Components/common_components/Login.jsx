// src/Components/Login.jsx
import React, { useState } from "react";
import "./auth.css";
import { FaArrowRight } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = ({ onSignup, onForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy user credentials (replace with actual backend/Firebase call)
  const dummyUser = {
    email: "test@example.com",
    password: "123",
    username: 'test',
    firstName: 'Test'
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      toast.success("Login successful!", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate(`/dashboard/${dummyUser.username}`);
      }, 2000);

    } else {
       toast.error("Invalid email or password.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/images/login.png" alt="Login Illustration" />
        <div className="auth-left-text">
          <div className="LoginContentImg"><img src="/images/navlogo3.jpg" alt="" /></div>
          <div className="LoginContentTitle">Improve your skill with Feuchar!</div>
          <div className="LoginContentDesc">Log in to continue your spiritual learning journey. Access your personalized dashboard, track your course progress, download certificates, and stay updated with the latest webinars, offers, and exclusive student content.</div>
        </div>
      </div>
      <div className="auth-right">
        <div className="goToHome"><a href="/">Go To Home <FaArrowRight /></a> </div>
        <h2>Sign In</h2>
        <p className="user">
          New user? <span className="link" onClick={onSignup}>Create an account</span>
        </p>

        <form onSubmit={handleLogin}>
          <div className="loginGroup Group">
            <div className="emailBox Box">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                placeholder="Email"
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
            {/* ✅ Updated Link here */}
            <p><span className="link" onClick={onForgot}>Forgot your password?</span></p>
          </div>

          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
