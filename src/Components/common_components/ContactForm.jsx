import React, { useState } from 'react';
import '../CSS/main.css';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axiosClient from '../../api/axiosClient';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return;
    }

    // API request body
    const payload = {
      full_name: name,
      email: email,
      phone_number: `+91${phone}`,
      type: "request callback"
    };

    try {
      const response = await axiosClient.post('/book-demo-class', payload);

      if (response?.data?.status) {
        toast.success("Successfully Signed Up for Latest News!!");
        setFormData({ name: '', email: '', phone: '' });

        if (onClose) onClose();
      } else {
        toast.error(response?.data?.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to signup for Latest News. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contactForm'> 
      <label className='formLabel'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name'
          className='inputBox'
        />
      </label>
      <label className='formComplete'>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='inputBox'
        />
      </label>
      <label className='formComplete'>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone Number'
          className='inputBox'
        />
      </label>
      <button type="submit" className='submitBtn'>
        Send Form <span className="arrow">→</span>
      </button>
    </form>
  );
};

export default ContactForm;
