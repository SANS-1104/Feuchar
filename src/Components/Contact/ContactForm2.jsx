import React, { useState } from 'react';
import './contact.css';
import states from '../../data/states.json';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, phone, state, message } = formData;

  // Validate all fields
  if (!name.trim()) return toast.error("Name is required.");
  if (!email.trim()) return toast.error("Email is required.");
  if (!validateEmail(email)) return toast.error("Please enter a valid email address.");

  if (!phone.trim()) return toast.error("Phone number is required.");
  if (!/^\d{10}$/.test(phone)) return toast.error("Please enter a valid 10-digit phone number.");

  if (!state.trim()) return toast.error("Please select a state.");
  if (!message.trim()) return toast.error("Message cannot be empty.");

  // Success
  // console.log("Form submitted successfully:", formData);
  toast.success("Your message has been sent successfully!");

  // Reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    state: "",
    message: "",
    subscribe: false,
  });
};


  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="phone no"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <select name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group textBox-label full-width">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message.."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label htmlFor="subscribe">
            subscribe to receive the latest news and exclusive offers
          </label>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
        <img src='/images/letter_send.png' alt='' className='letterSend hideSmall' />
      </form>
    </div>
  );
}

export default ContactForm2;
