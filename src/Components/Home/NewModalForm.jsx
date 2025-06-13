import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css"; // Your modal styling

export default function NewModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: "", email: "", phone: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Live demo class booked successfully! Check your email for details.");
      setFormData({ fullName: "", email: "", phone: "" });
      onClose();
    } else {
      toast.error("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Book a Free Live Demo Class</h2>
        <form onSubmit={handleSubmit} className="callback-form" noValidate>
          <label>
            Name:
            <input
              name="fullName"  
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Phone No:
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit Indian phone number"
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
