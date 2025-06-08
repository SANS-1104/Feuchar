import React from "react";
import "./course.css";

const CourseCard = ({ title, subtitle, image }) => {
  return (
    <div className="Coursecard">
      <div className="Coursecard-image"><img src={image} alt={title}  /></div>
      <div className="Coursecard-text">
        <div className="Coursetitle">{title}</div>
        {/* {subtitle && <p>{subtitle}</p>} */}
      </div>
    </div>
  );
};

export default CourseCard;
