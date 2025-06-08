import React from "react";
import "./CourseDetail.css";

export default function DotPlot() {
  return (
    <div className="dotplot-wrapper">
      {/* Left dot */}
      <div className="dot-container">
        <div className="dot small-dot"></div>
        <div className="label-container">
          <div className="arrow">↓</div>
          <div className="label-text">
            Your investment in this course (₹9999)
          </div>
        </div>
      </div>

      {/* Right dot */}
      <div className="dot-container">
        <div className="dot big-dot">Your estimated earning after taking this course (upto INR 2L per month)</div>
      </div>
    </div>
  );
}
