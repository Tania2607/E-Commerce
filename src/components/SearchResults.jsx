import React from 'react';
import { useSearch } from '../contexts/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ showDropdown }) => {
  const { searchResults, setShowDropdown } = useSearch();
  const navigate = useNavigate();

  if (!showDropdown || !searchResults || searchResults.length === 0) return null;

  return (
    <div
      className="search-results-container"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={(e) => {
        const searchBar = document.querySelector('.search-bar');
        if (searchBar && searchBar.contains(e.relatedTarget)) return;
        setShowDropdown(false);
      }}
    >
      <div className="search-results-header">
        <h3>Search Results</h3>
      </div>
      <div className="search-results-list">
        {searchResults.map((product) => (
          <div
            key={product.id}
            className="search-result-item"
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(false);
              navigate(`/product/${product.id}`);
            }}
          >
            <div className="search-result-content">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
