// src/components/MentorCard.js
import React from "react";
import "./YourMentors.css";

export default function MentorCard({ mentor }) {
  return (
    <div className="mentor-row">
      <div className="mentor-info">
        <img src={mentor.image} alt={mentor.name} className="mentor-img" />
        <div className="mentor-name-role">
          <div className="mentor-name">{mentor.name}</div>
          <div className="mentor-role">{mentor.designation}</div>
        </div>
      </div>

      <div className="mentor-course-type">
        <span className="course-pill">{mentor.courseType.toUpperCase()}</span>
      </div>

      <div className="mentor-course-title">
        {mentor.courseTitle}
      </div>

      <div className="mentor-action">
        <button className="details-btn">SHOW DETAILS</button>
      </div>
    </div>
  );
}
