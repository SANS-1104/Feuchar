import React, { useState } from "react";
import '../About/about.css';

const chipOptions = ["All", "Ordering", "Shipping", "Returns", "Support"];

const ChipGroup2 = ({ onSelect }) => {
  const [active, setActive] = useState("Shipping");

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

export default ChipGroup2;
