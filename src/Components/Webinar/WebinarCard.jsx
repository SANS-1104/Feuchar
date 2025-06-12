import React from "react";
import "./webinar.css";

const WebinarCard = ({ title, dateOfWebinar, cardIntroimage }) => {
  return (
    <div className="webinarcard">
      <div className="webinarcard-image"><img src={cardIntroimage} alt={title}  /></div>
      <div className="webinarcard-text">
        <div className="webinartitle">{title}</div>
        <div className="webinardate">Date: {dateOfWebinar}</div>
      </div>
    </div>
  );
};

export default WebinarCard;
