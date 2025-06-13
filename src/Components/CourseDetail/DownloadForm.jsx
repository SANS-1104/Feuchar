import { useState } from "react";
import "../Home/HeroSection2.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CourseDetHero.css";
import axiosClient from "../../api/axiosClient";

export default function DownloadForm({ onClose, onSuccess, syllabusURL }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, phone } = formData;

    // Basic validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!fullName || !email || !phone) {
      toast.error("Please fill all the fields.");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosClient.post("/book-demo-class", {
        full_name: fullName,
        email,
        phone_number: phone,
        type: "download syllabus",
      });

      if (response.data?.status) {
        // toast.success("Syllabus Downloaded successfully!");

        // Reset form
        setFormData({ fullName: "", email: "", phone: "" });

        // Trigger syllabus download
        const link = document.createElement("a");
        link.href = syllabusURL;
        link.download = syllabusURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        if (onSuccess) onSuccess();
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="HomeHeroForm-wrapper downloadForm-wrapper">
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

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register Now"}
        </button>
      </form>
    </div>
  );
}
