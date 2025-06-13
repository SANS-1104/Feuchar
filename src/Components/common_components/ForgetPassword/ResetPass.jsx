import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../../api/axiosClient";
import "./resetPass.css"
export default function ResetPass() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;
  const token = state?.token;

  // Redirect if token or email missing
  if (!email || !token) {
    toast.error("Access denied. Please verify OTP first.");
    navigate("/forgetPass");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations
    if (newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    try {
      const res = await axiosClient.post("/forgot-password/reset", {
        email,
        reset_token: token,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
      });

      if (res?.data?.status) {
        toast.success("Password reset successfully.");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error(res?.data?.message || "Failed to reset password.");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong!";
      toast.error(msg);
    }
  };

  return (
    <div className="ResetPass-wrapper">
      <div className="title">Reset Account Password</div>
      <form onSubmit={handleSubmit}>
        <div className="resetPass-inp">
          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="resetPass-inp">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}
