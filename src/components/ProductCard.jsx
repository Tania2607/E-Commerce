// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Navbar from '../components/Navbar';
// import products from '../data/products';
// import './ProductDetail.css';
// import { addToCart, addToWishlist, removeFromWishlist } from '../Redux.js/cartWishlistSlice';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { wishlistItems, cartItems } = useSelector(state => state.cartWishlist);

//   const product = products.find(p => p.id === parseInt(id));
//   const isInWishlist = wishlistItems.some(item => item.id === product.id);
//   const isInCart = cartItems.some(item => item.id === product.id);



//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<span key={i} className="star filled">★</span>);
//     }

//     if (hasHalfStar) {
//       stars.push(<span key="half" className="star half">★</span>);
//     }

//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
//     }

//     return stars;
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart({
//       id: product.id,
//       name: product.title,
//       price: product.price,
//       image: product.image,
//       quantity: 1
//     }));
//   };

//   const handleWishlist = () => {
//     if (isInWishlist) {
//       dispatch(removeFromWishlist(product.id));
//     } else {
//       dispatch(addToWishlist({
//         id: product.id,
//         name: product.title,
//         price: product.price,
//         image: product.image
//       }));
//     }
//   };

//   return (
//     <div className="product-detail-container">
//       <Navbar />
//       <div className="product-detail-content">
//         <div className="container">
//           <button onClick={() => navigate('/shopping')} className="back-btn">
//           Back to Shopping
//           </button>

//           <div className="product-detail-grid">
//             <div className="product-image-section">
//               <div className="main-image">
//                 <img src={product.image} alt={product.title} />
//               </div>
//             </div>

//             <div className="product-info-section">
//               <div className="product-category">
//                 {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
//               </div>

//               <h1 className="product-title">{product.title}</h1>
//               <h3 className="product-author">by {product.author}</h3>

//               <div className="product-rating">
//                 <div className="rating">
//                   {renderStars(product.rating)}
//                   <span className="rating-text">({product.rating})</span>
//                 </div>
//               </div>

//               <div className="product-price">
//                 <span className="price">₹{product.price}</span>
//               </div>

//               <div className="product-actions">
//                 <button
//                   className="add-to-cart"
//                   onClick={handleAddToCart}
//                 >
//                   {isInCart ? 'In Cart' : 'Add to Cart'}
//                 </button>
//                 <button
//                   className={`wishlist-btn ${isInWishlist ? 'active' : ''}`}
//                   onClick={handleWishlist}
//                   title={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
//                 >
//                   {isInWishlist ? '❤️ In Wishlist' : '🤍 Add to Wishlist'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
