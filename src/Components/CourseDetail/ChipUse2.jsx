import React from "react";
import ChipGroup2 from "./ChipGroup2";

const ChipUse2 = () => {
  const handleFilter = (selected) => {
    console.log("Selected filter:", selected);
    // Add logic to filter content based on the selected chip
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ChipGroup2 onSelect={handleFilter} />
      {/* Content goes here */}
    </div>
  );
};

export default ChipUse2;
