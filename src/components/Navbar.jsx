import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSearch } from '../contexts/SearchContext.jsx';
import './navdesign.css';
import '../pages/Profile.css';
import './search.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { cartItems } = useSelector(state => state.cartWishlist);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const { searchTerm, setSearchTerm, handleSearch, showDropdown: isSearchDropdownOpen } = useSearch();

  const handleCategoryClick = (category) => {
    navigate(`/shopping?category=${category}`);
    setIsMobileMenuOpen(false);
  };

  const getUser = localStorage.getItem("RegisterUser");
  const User = JSON.parse(getUser);

  const handleLogout = () => {
    localStorage.removeItem("LoginUser");
    navigate("/login");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      handleSearch(searchTerm);
    }
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
    if (value.trim()) {
      setSearchDropdown(true);
    } else {
      setSearchDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Tania's ShopEase</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="nav-search">
          <SearchBar />
          {isSearchDropdownOpen && (
            <SearchResults showDropdown={isSearchDropdownOpen} />
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <div className="dropdown">
            <button className="nav-link dropdown-btn">
              Categories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="dropdown-content">
              <button onClick={() => handleCategoryClick('men')}>Men's Fashion</button>
              <button onClick={() => handleCategoryClick('women')}>Women's Fashion</button>
              <button onClick={() => handleCategoryClick('children')}>Kids & Baby</button>
            </div>
          </div>
          <Link 
            to="/shopping" 
            className={`nav-link ${location.pathname === '/shopping' ? 'active' : ''}`}
          >
            All Products
          </Link>
          {/* <Link 
            to="/profile" 
            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            Profile
          </Link> */}
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <Link to="/wishlist" className="action-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72723 21.351 5.1208 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">Wishlist</span>
          </Link>
          <Link to="/cart" className="action-btn cart-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19S21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21S9.8 22.5 9 22.5 7.5 21.8 7.5 21 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21S20.8 22.5 20 22.5 18.5 21.8 18.5 21 19.2 19.5 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">Cart</span>
            <span className="cart-count" style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: '8px'
            }}>{totalQuantity}</span>
          </Link>
          {!User ? (
          
          <Link to="/login" className="login-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Login
          </Link>
          ):
          (
  <div className="profile-dropdown">
    <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="profile-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 21V19C4 17.3431 5.34315 16 7 16H17C18.6569 16 20 17.3431 20 19V21" stroke="currentColor" strokeWidth="2" />
      </svg>
    </button>

    {isUserMenuOpen && (
      <div className="dropdown-menu">
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )}

    {/* Search Results */}
    {isSearchDropdownOpen && (
      <SearchResults />
    )}
  </div>
)

          }
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <button className="close-button" onClick={() => setIsMobileMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="mobile-search">
              <SearchBar />
            </div>
            <div className="mobile-links">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/shopping" onClick={() => setIsMobileMenuOpen(false)}>All Products</Link>
              <button onClick={() => handleCategoryClick('men')}>Men's Fashion</button>
              <button onClick={() => handleCategoryClick('women')}>Women's Fashion</button>
              <button onClick={() => handleCategoryClick('children')}>Kids & Baby</button>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;