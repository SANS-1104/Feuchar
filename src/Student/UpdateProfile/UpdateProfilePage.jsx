import React, { useEffect, useState } from "react";
import "./updateProfile.css";
import { toast } from "react-toastify";
import axiosClient from "../../api/axiosClient";

export default function UpdateProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    language: "",
    avatar: "", 
    bio: "",
  });

  // Fetch user profile on mount
  useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    const user = JSON.parse(storedUser);
    const profile = user.profile || {};

    setFormData({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      dob: profile.dob || "",
      gender: profile.gender || "",
      password: "", 
      language: profile.language || "",
      avatar: profile.avatar || "",
      bio: profile.bio || "",
    });
  } else {
    toast.error("User data not found. Please log in again.");
  }
}, []);


  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "avatar") {
      setFormData({ ...formData, avatar: files[0]?.name }); 
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, phone, gender, language } = formData;

  // Basic validation
  if (!name || !email || !phone || !gender || !language) {
    toast.error("Please fill all required fields.");
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  // Phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    toast.error("Phone number must be exactly 10 digits.");
    return;
  }

  try {
    const payload = { ...formData };
    const res = await axiosClient.put("/profile/update", payload);
    toast.success("Profile updated successfully!");
  } catch (error) {
    console.error("Error updating profile:", error);
    toast.error("Failed to update profile.");
  }
};


  return (
    <div className="UpdateProfilePage-wrapper">
      <div className="updateProfile-inner-wrapper">
        <div className="title">Update Your Profile Here..</div>
        <form className="update-form" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} disabled/>
          </div>

          {/* Phone & DOB */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" value={formData.phone} disabled/>
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required/>
          </div>

          {/* Gender & Password */}
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="******" disabled />
          </div>

          {/* Language & Avatar */}
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input type="text" id="language" name="language" value={formData.language} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="avatar">Avatar</label>
            <input type="file" id="avatar" name="avatar" onChange={handleChange}/>
            {formData.avatar && <small>Current: {formData.avatar}</small>}
          </div>

          {/* Bio */}
          <div className="form-group full-width">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" rows="4" value={formData.bio} onChange={handleChange}></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-group full-width">
            <button type="submit" className="update-btn">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}
