import React, { useState, useRef } from 'react';
import './tutor.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TutorForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    education: '',
    experience: '',
    occultEducation: '',
    demoLink: '',
    message: '',
    cv: null,
  });

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'cv') {
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed for CV.");
        e.target.value = null; // reset input
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
  const {
    fullName,
    phone,
    email,
    education,
    experience,
    occultEducation,
    demoLink,
    message,
    cv,
  } = formData;

  if (!fullName || !phone || !email || !cv) {
    toast.error("Please fill all required fields and upload your CV.");
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    toast.error("Phone number must be exactly 10 digits.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error("Invalid email format.");
    return false;
  }

  if (demoLink && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(demoLink)) {
    toast.error("Invalid demo video link. Must start with http or https.");
    return false;
  }

  if (experience && !/^\d+(\.\d{1,2})?$/.test(experience)) {
    toast.error("Experience must be a number. Decimals allowed like 1.5.");
    return false;
  }

  if (cv && cv.type !== "application/pdf") {
    toast.error("Only PDF files are allowed for CV.");
    return false;
  }

  return true;
};



  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) {
      // ❌ DO NOT reset formData on validation failure
      // ❌ DO NOT reset file input either
      return;
    }

    console.log("Form Submitted:", formData);
    toast.success("Application submitted successfully!");

    // ✅ Only reset form on successful submit
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      education: '',
      experience: '',
      occultEducation: '',
      demoLink: '',
      message: '',
      cv: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };



  return (
    <div className='TutorForm-wrapper-outer'>
      <div className="TutorForm-Heading">
        <div className="l1">Become an Astro-guru</div>
        <div className="l2">Apply to be an Astro-guru of occult science and work with us!</div>
      </div>
      <form className="tutorForm-wrapper" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" id="fullName" placeholder="Enter Name" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter Phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="education">Highest Education</label>
            <input type="text" name="education" id="education" placeholder="Enter Education Qualification" value={formData.education} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience</label>
            <input type="text" name="experience" id="experience" placeholder="Enter Experience" value={formData.experience} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="occultEducation">Occult Science Education</label>
            <input type="text" name="occultEducation" id="occultEducation" placeholder="Enter Occult Science Education" value={formData.occultEducation} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="demoLink">Demo Video Link</label>
            <input type="text" name="demoLink" id="demoLink" placeholder="Enter Link" value={formData.demoLink} onChange={handleChange} />
          </div>

          <div className="form-group file-upload">
            <label htmlFor="cv">CV (PDF only)</label>
            <input type="file" name="cv" id="cv" onChange={handleChange} ref={fileInputRef} accept="application/pdf" required />
          </div>
        </div>

        <div className="form-group message-label full-width">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" placeholder="Enter Additional information here.." value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="Tutorform-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default TutorForm;
