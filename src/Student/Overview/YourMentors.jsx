import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons
import mentorData from "../../data/mentorData";
import MentorCard from "./MentorCard";
import "./YourMentors.css";

export default function YourMentors() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const visibleMentors = showAll ? mentorData : mentorData.slice(0, 2);

  return (
    <div className="mentor-container">
      <div className="mentor-header">
        <h2>Your Mentor</h2>
        <button onClick={toggleShowAll} className="see-all-btn">
          {showAll ? (
            <>
              See Less <FaChevronUp />
            </>
          ) : (
            <>
              See All <FaChevronDown />
            </>
          )}
        </button>
      </div>

      <div className="mentor-table">
        <div className="mentor-header-row">
          <div className="t1">INSTRUCTOR</div>
          <div className="t2">COURSE TYPE</div>
          {/* <div className="t3">COURSE TITLE</div> */}
          <div className="t4">ACTIONS</div>
        </div>

        {visibleMentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
