import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import '../Overview/overview.css';

const ExploreCourseSearchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value); // call onSearch as user types
  };

  return (
    <div className="Overviewsearch-bar MyCourseSearchBar">
      <input
        type="text"
        placeholder="Search Course Name, Mentor...."
        value={query}
        onChange={handleChange}
      />
      <FaMagnifyingGlass />
    </div>
  );
};

export default ExploreCourseSearchbar;
