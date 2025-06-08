import React, { useState } from 'react';
import './contact.css';
import cities from '../../data/cities.json';

function ContactForm2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    subscribe: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setError("");
    setSuccess("");

    const { name, email, phone, city, message } = formData;

    // Simple validation
    if (!name || !email || !phone || !city || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted successfully:", formData);
    setSuccess("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
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
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="abc@"
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
              placeholder="+1 012 3456 789"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <select name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
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

        {/* Feedback Messages */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}

        <button type="submit" className="submit-btn">Send Message</button>
        <img src='/images/letter_send.png' alt='' className='letterSend' />
      </form>
    </div>
  );
}

export default ContactForm2;
