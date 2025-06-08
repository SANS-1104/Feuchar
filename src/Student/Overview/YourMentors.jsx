// src/components/YourMentors.js
import React, { useState } from "react";
import mentorData from "../../data/mentorData";
import MentorCard from "./MentorCard";
import "./YourMentors.css";

export default function YourMentors() {
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  const visibleMentors = showAll ? mentorData : mentorData.slice(0, 2);

  return (
    <div className="mentor-container">
      <div className="mentor-header">
        <h2>Your Mentor</h2>
        {!showAll && (
          <button onClick={handleSeeAll} className="see-all-btn">See All</button>
        )}
      </div>

      <div className="mentor-table">
        <div className="mentor-header-row">
          <div className="t1">INSTRUCTOR</div>
          <div className="t2">COURSE TYPE</div>
          <div className="t3">COURSE TITLE</div>
          <div className="t4">ACTIONS</div>
        </div>

        {visibleMentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
