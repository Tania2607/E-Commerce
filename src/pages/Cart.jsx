import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartQuantity } from '../features/cartWishlist/cartWishlistSlice';
import '../pages/Shared.css';
import '../pages/Cart.css';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartWishlist = useSelector(state => state.cartWishlist || {});
  const cartItems = cartWishlist.cartItems || [];
 const total = cartItems.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity); 
    return acc + Number(price) * Number(quantity);
  }, 0);
  console.log("💰 Calculated Total:", total);
console.log("🛒 Cart Items:", cartItems);
cartItems.forEach(item => {
  console.log(`🧾 Item -> Price: ${item.price} (${typeof item.price}), Quantity: ${item.quantity} (${typeof item.quantity})`);
});


  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateCartQuantity({ id, quantity: newQuantity }));
  };

  const handleQuantityDecrease = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateCartQuantity({ id, quantity: currentQuantity - 1 }));
    }
  };

  const handleQuantityIncrease = (id, currentQuantity) => {
    dispatch(updateCartQuantity({ id, quantity: currentQuantity + 1 }));
  };

  return (
    <div className="page-container">
     
      <div className="page-header">
        <button onClick={() => navigate('/shopping')} className="back-btn">
            Back to Shopping
          </button>
        <h1 className="page-title">Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-state">
          <img src="https://img.icons8.com/ios-filled/2x/shopping-cart.png" alt="Empty Cart" />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
        </div>
      ) : (
        <div>
          <div className="product-list">
            {cartItems.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="product-actions">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleQuantityIncrease(item.id, item.quantity)}
                    >+</button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleRemove(item.id)}
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="total-section">
            <div className="total-text">
              <span>Total</span>
              <span>${total || 0}</span>
            </div>
            <button 
              className="checkout-btn"
              onClick={() => {
                if (cartItems.length === 0) {
                  toast.error('Your cart is empty!');
                } else {
                  toast.success('Proceeding to checkout...');
                }
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
