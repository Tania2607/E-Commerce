import React from 'react';
import { useSearch } from '../contexts/SearchContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm, handleSearch, showDropdown, setShowDropdown } = useSearch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      handleSearch(value);
    } else {
      handleSearch('');
    }
  };

  return (
    <div className="search-bar" 
      onMouseEnter={(e) => {
        e.stopPropagation();
        setShowDropdown(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        // Check if mouse is moving to results container
        const resultsContainer = document.querySelector('.search-results-container');
        if (resultsContainer && resultsContainer.contains(e.relatedTarget)) {
          return; // Don't close if moving to results
        }
        setShowDropdown(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setShowDropdown(true);
      }}
    >
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
