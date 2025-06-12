import React from "react";
import "./course.css";

const CourseCard = ({ title, tutor, image }) => {
  return (
    <div className="Coursecard">
      <div className="Coursecard-image"><img src={image} alt={title}  /></div>
      <div className="Coursecard-text">
        <div className="Coursetitle">{title}</div>
        <div className="Coursetutor">~ By: {tutor}</div>
      </div>
    </div>
  );
};

export default CourseCard;
