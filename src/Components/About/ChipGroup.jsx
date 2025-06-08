import React, { useState } from "react";
import './about.css';

const chipOptions = ["All", "Students", "Astro-Gurus", "Influencers", "General"];

const ChipGroup = ({ onSelect }) => {
  const [active, setActive] = useState("All");

  const handleClick = (option) => {
    setActive(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="chip-group">
      {chipOptions.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`chip ${active === option ? 'active' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ChipGroup;
