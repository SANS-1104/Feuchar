import React from "react";
import ChipGroup from "./ChipGroup";

const ChipUse = () => {
  const handleFilter = (selected) => {
    console.log("Selected filter:", selected);
    // Add logic to filter content based on the selected chip
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ChipGroup onSelect={handleFilter} />
      {/* Content goes here */}
    </div>
  );
};

export default ChipUse;
