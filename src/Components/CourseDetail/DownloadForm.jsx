import { useState } from "react";
import "../Home/HeroSection2.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./CourseDetHero.css"


export default function DownloadForm({ onClose, onSuccess }) {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

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
      setFormData({ fullName: "", email: "", phone: "" });
      if (onSuccess) onSuccess(); 
    } else {
      toast.error("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="HomeHeroForm-wrapper downloadForm-wrapper ">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="signupGroup">
          <div className="fullNameBox demoBox">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="emailBox demoBox">
            <label htmlFor="signup-email">Email</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="phoneBox demoBox">
            <label htmlFor="signup-phone">Phone</label>
            <input
              type="tel"
              id="signup-phone"
              name="phone"
              placeholder="Enter your Phone No"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}
