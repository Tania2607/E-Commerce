import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist } from '../features/cartWishlist/cartWishlistSlice';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import Navbar from '../components/Navbar';
import products from '../data/products';
import './ProductDetail.css';
import './ButtonStyles.css';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { wishlistItems, cartItems } = useSelector(state => state.cartWishlist);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === parseInt(id));

  const isInWishlist = wishlistItems.some(item => item.id === product?.id);
  const isInCart = cartItems.some(item => item.id === product?.id);

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Removed from Wishlist 💔");
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }));
      toast.success("Added to Wishlist 💖");
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      alert('Please select a size');
      return;
    }

    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize || product.sizes[0]
    }));

    toast.success("Added to cart!");
  };

  if (!product) {
    return (
      <div className="product-detail-container">
        <Navbar />
        <div className="container">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/shopping')} className="back-btn">
            Back to Shopping
          </button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="product-detail-container">
      <Navbar />
      <div className="product-detail-content">
        <div className="container">
          <button onClick={() => navigate('/shopping')} className="back-btn">← Back to Shopping</button>
          <div className="product-detail-grid">
            <div className="product-image-section">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info-section">
              <div className="product-category">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}'s Collection
              </div>

              <h1>{product.name}</h1>

              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="rating-text">({product.rating})</span>
              </div>

              <div className="product-price">
                <span className="price">{product.price}</span>
              </div>

              <p>{product.description}</p>

              <div className="product-features">
                <h3>Features:</h3>
                <ul>
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {product.sizes.length > 1 && (
                <div className="size-selection">
                  <h3>Size:</h3>
                  <div className="size-options">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="quantity-selection">
                <h3>Quantity:</h3>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="button-group">
                <button onClick={handleAddToCart} className="cart-btn">Add to Cart</button>
                <button onClick={handleWishlist} className="wishlist-btn">
                  {isInWishlist ? <RiHeartFill /> : <RiHeartLine />}
                  {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
