import React, { useState } from "react";
import "./modal.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../api/axiosClient";

function ModalPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      type: "request callback",
    };

    try {
      const response = await axiosClient.post("/book-demo-class", payload);

      if (response?.data?.status) {
        toast.success( "Callback Requested successfully!" || response.data.message);
        onClose();
        setFormData({ name: "", email: "", phone: "" });
      } else {
        toast.error( "Something went wrong." || response?.data?.message);
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to request Callback. Please try again.");
    }
  };


  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Request Callback</h2>
        <form onSubmit={handleSubmit} className="callback-form">
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone No:
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Enter 10 digit phone number"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ModalPopup;
