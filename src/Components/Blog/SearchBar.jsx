import React from 'react';
import './blog.css';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search article" className="search-input" />
            <button className="search-button">Explore</button>
        </div>
    );
}
