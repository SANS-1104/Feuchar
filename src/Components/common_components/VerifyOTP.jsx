import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";
import "./auth.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(120); // 2 minutes
  const [resendEnabled, setResendEnabled] = useState(false);
  const inputsRef = useRef([]);

  // Redirect to signup if email is not available
  useEffect(() => {
    if (!email) {
      toast.error("Access denied. Please Fill All Details First.");
      navigate("/signup");
    }
  }, [email, navigate]);

  // Countdown timer effect
  useEffect(() => {
    if (secondsLeft === 0) {
      setResendEnabled(true);
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next box if current filled
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d{1,6}$/.test(paste)) return;

    const newOtp = Array(6).fill("");
    paste.split("").forEach((char, i) => {
      newOtp[i] = char;
      if (inputsRef.current[i]) inputsRef.current[i].value = char;
    });
    setOtp(newOtp);

    // Focus last filled box
    const lastIndex = paste.length - 1;
    inputsRef.current[lastIndex]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const joinedOtp = otp.join("");
    if (joinedOtp.length !== 6) {
      return toast.error("Please enter a 6-digit OTP.");
    }

    try {
      const res = await axiosClient.post("/verify-otp", { email, otp: joinedOtp, "channel": "sms" });
      toast.success("OTP Verified! You can now log in.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const msg = err.response?.data?.message || "OTP verification failed!";
      setOtp(Array(6).fill(""));
      toast.error(msg);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await axiosClient.post("/resend-otp", { email,"channel": "sms"  });
      toast.success("OTP resent successfully.");
      setSecondsLeft(120);
      setResendEnabled(false);
      setOtp(Array(6).fill(""));
      inputsRef.current[0]?.focus();
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to resend OTP.";
      toast.error(msg);
    }
  };

  return (
    <div className="verifyOTP-container">
      <div className="verifyOTP-inner">
        <div className="title">Enter the OTP to verify your account</div>
        <div className="No">A OTP has been sent to &nbsp;<strong>{email}</strong></div>
        
        <form onSubmit={handleVerify}>
          <div className="otp-input-group">
            {otp.map((digit, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                inputMode="numeric"
                pattern="\d*"
                className="otp-box"
                ref={(el) => (inputsRef.current[i] = el)}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={handlePaste}
                required
              />
            ))}
          </div>
          <button type="submit">Verify OTP</button>
        </form>

        <div className="otp-timer">
          {resendEnabled ? (
            <button onClick={handleResendOtp}>Resend One-Time Password ?</button>
          ) : (
            <p className="countdown">Resend available in {formatTime(secondsLeft)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
