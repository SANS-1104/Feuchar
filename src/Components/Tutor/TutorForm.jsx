// src/Components/TutorForm.jsx
import React, { useState } from 'react';
import './tutor.css';

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
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
          <input type="text" name="fullName" id="fullName" placeholder="Enter Name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" placeholder="Enter Phone" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="education">Highest Education</label>
          <input type="text" name="education" id="education" placeholder="Enter Education Qualification" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <input type="text" name="experience" id="experience" placeholder="Enter Experience" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="occultEducation">Occult Science Education</label>
          <input type="text" name="occultEducation" id="occultEducation" placeholder="Enter Occult Science Education" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="demoLink">Demo Video Link</label>
          <input type="text" name="demoLink" id="demoLink" placeholder="Enter Link" onChange={handleChange} />
        </div>

        <div className="form-group file-upload">
          <label htmlFor="cv">CV</label>
          <input type="file" name="cv" id="cv" onChange={handleChange} placeholder='Upload CV'/>
        </div>
      </div>

      <div className="form-group message-label full-width">
        <label htmlFor="message" className=''>Message</label>
        <textarea name="message" id="message" placeholder="Enter Additional information here.." onChange={handleChange}></textarea>
      </div>

      <button type="submit" className="Tutorform-submit-btn">Submit</button>
    </form>
    </div>
  );
};

export default TutorForm;
