import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import products from '../data/products';
import './Shopping.css';
import { addToWishlist, removeFromWishlist } from '../features/cartWishlist/cartWishlistSlice';

const Shopping = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector(state => state.cartWishlist);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Get category from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToWishlist = (e, product) => {
    e.stopPropagation();
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      const button = e.target;
      button.textContent = 'Add to Wishlist';
      button.style.background = '';
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }));
      const button = e.target;
      button.textContent = 'Added';
      button.style.background = '#1d4ed8';
      button.style.color = 'white';
      button.style.borderColor = 'white';
    }
  };

  return (
    <div className="shopping-container">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <span>Home</span>
          <span className="separator">›</span>
          <span>
            {selectedCategory === 'all' ? 'All Products' : 
             selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </span>
        </div>
      </div>

      <div className="shopping-content">
        <div className="container">
          {/* Header */}
          <div className="shopping-header">
            <div className="header-left">
              <h1>
                {selectedCategory === 'all' ? 'All Products' : 
                 `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}'s Collection`}
              </h1>
              <p className="results-count">
                Showing {sortedProducts.length} products
              </p>
            </div>
            
            {/* Filters */}
            <div className="filters-container">
              <div className="filter-group">
                <label>Sort by:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All ({products.length})
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'men' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('men')}
            >
              Men ({products.filter(p => p.category === 'men').length})
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'women' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('women')}
            >
              Women ({products.filter(p => p.category === 'women').length})
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'children' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('children')}
            >
              Kids ({products.filter(p => p.category === 'children').length})
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {sortedProducts.map(product => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <div className="product-overlay">
                    <button className="quick-view-btn">Quick View</button>
                  </div>
                </div>
                
                <div className="product-info">
                  <div className="product-brand">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s
                  </div>
                  
                  <h3 className="product-title">{product.name}</h3>
                  
                  <div className="product-rating">
                    <div className="rating">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-text">({product.rating})</span>
                  </div>
                  
                  <div className="product-price">
                    <span className="current-price">{product.price}</span>
                  </div>
                  
                  <button 
                    className={`wishlist-btn ${wishlistItems.some(item => item.id === product.id) ? 'active' : ''}`}
                    onClick={(e) => handleAddToWishlist(e, product)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    {wishlistItems.some(item => item.id === product.id) ? 'Added' : 'Add to Wishlist'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-icon">📦</div>
              <h3>No products found</h3>
              <p>Try adjusting your filters or browse other categories</p>
              <button 
                className="browse-all-btn"
                onClick={() => setSelectedCategory('all')}
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopping;