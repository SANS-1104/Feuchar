// Components/common_components/CardComponent.js
import React from 'react';
import './HomeCSS.css'

function TeacherComponent({ imageSrc, name, title, xlink, linkedin, globe }) {
  return (
    <div className="Teachercard">
      <img src={imageSrc} alt={name} className="card-image" />
      <h3 className="name">{name}</h3>
      <p className='title'>{title}</p>
      <div className='socialLinks'>
        {/* <a href={xlink}><img src='/images/xlink.png' alt=''/></a>
        <a href={linkedin}><img src='/images/linkedin.png' alt=''/></a> */}
        <a href={globe} target='blank'><img src='/images/globe.png' alt=''/></a>
      </div>
    </div>
  );
}

export default TeacherComponent;
