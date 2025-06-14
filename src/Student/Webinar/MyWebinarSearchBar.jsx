import React, { useState } from 'react';
import "../Overview/overview.css"
import { FaMagnifyingGlass } from 'react-icons/fa6';

const MyWebinarSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="Overviewsearch-bar MyCourseSearchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Webinar Name...."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit"><FaMagnifyingGlass /></button>
    </form>
  );
};

export default MyWebinarSearchBar;
