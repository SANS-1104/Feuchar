import React, { useState } from 'react';
import "./overview.css"
import { FaMagnifyingGlass } from 'react-icons/fa6';

const OverviewSearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form className="Overviewsearch-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search your course here..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit"><FaMagnifyingGlass /></button>
    </form>
  );
};

export default OverviewSearchBar;
