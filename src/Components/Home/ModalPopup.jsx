import React, { useState } from "react";
import "./modal.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with your backend API or email service call
    toast.success(`Callback requested for: ${formData.name}`);
    onClose();
    setFormData({ name: "", email: "", phone: "" });
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
      {/* <ToastContainer
        position="top"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      /> */}
    </>
  );
}

export default ModalPopup;
