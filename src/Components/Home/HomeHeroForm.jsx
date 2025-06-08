import { useState } from "react";
import "./HeroSection2.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function HomeHeroForm({ onClose }) {
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

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    // Phone validation
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
    } else {
      toast.error("Please fill all fields correctly.");
      }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="HomeHeroForm-wrapper">
      <h2>Book a Live Demo Class!</h2>
      <p>FOR FREE</p>

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
