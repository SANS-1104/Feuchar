import React, { useState } from "react";
import "./YourMentors.css";
import { useNavigate } from "react-router-dom";

export default function MentorCard({ mentor }) {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleDetailsClick = () => {
    if (mentor.courseLaunched === "yes") {
      navigate(`/course/${mentor.courseName}`);
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Mentors-Area">
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

        <div className="mentor-action">
          <button className="details-btn" onClick={handleDetailsClick}>SHOW DETAILS</button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Stay Tuned!</h3>
            <p>Course launching soon...</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}




{/* <div className="mentor-course-title">
        {mentor.courseTitle}
      </div> */}