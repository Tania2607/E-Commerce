import React, { createContext, useContext, useState, useEffect } from 'react';
import products from '../data/products';

const SearchContext = createContext();

// Get all products from the data file
const useProducts = () => {
  return products;
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const products = useProducts();

  // Clear search results and close dropdown when search term is empty
  React.useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchTerm]);

  const handleSearch = (query) => {
    if (!query || !query.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    // Filter products based on search query
    const results = products.filter(product => 
      (product.name?.toLowerCase()?.includes(query.toLowerCase()) ||
      product.description?.toLowerCase()?.includes(query.toLowerCase()) ||
      product.brand?.toLowerCase()?.includes(query.toLowerCase()))
    );

    setSearchResults(results);
    setShowDropdown(true); // Show dropdown when there are results
  };

  // Handle mouse movement between search bar and results
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = (e) => {
    // Only close dropdown if mouse leaves both search bar and results
    if (!e.relatedTarget || !e.relatedTarget.closest('.search-bar, .search-results-container')) {
      setShowDropdown(false);
    }
  };

  return (
    <SearchContext.Provider value={{ 
      searchTerm, 
      setSearchTerm, 
      searchResults, 
      handleSearch,
      showDropdown,
      setShowDropdown,
      handleMouseEnter,
      handleMouseLeave
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  const { searchTerm, setSearchTerm, searchResults, setShowDropdown, showDropdown, handleSearch } = context;
  return {
    searchTerm,
    setSearchTerm,
    searchResults: searchResults || [],
    setShowDropdown,
    showDropdown,
    handleSearch
  };
};
