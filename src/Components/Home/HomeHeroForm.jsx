import { useState } from "react";
import "./HeroSection2.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../api/axiosClient";

export default function HomeHeroForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    // Full Name validation
    if (!formData.fullName.trim()) {
      toast.error("Full name is required.");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email.");
      return false;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (!phoneRegex.test(formData.phone)) {
      toast.error("Enter a valid 10-digit Indian phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const requestBody = {
      full_name: formData.fullName,
      email: formData.email,
      phone_number: `+91${formData.phone}`,
      type: "book demo class"
    };

    try {
      const response = await axiosClient.post("/book-demo-class", requestBody);
      if (response.data.status) {
        toast.success("Live demo class booked successfully! Check your email for details.");
        setFormData({ fullName: "", email: "", phone: "" });
      } else {
        toast.error("Booking failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while booking. Please try again later.");
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
          </div>
        </div>

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}
