import React, { useState } from 'react';
import '../CSS/main.css';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const { name, phone } = formData;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return;
    }

    // If validation passes
    console.log('Form Data:', formData);

    toast.success("Signed Up Successfully, Now you will receive Latest Updates");

    // Optional: Clear form or close
    setFormData({ name: '', phone: '' });
    if (onClose) onClose();
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
