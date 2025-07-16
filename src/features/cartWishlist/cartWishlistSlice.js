import { createSlice } from '@reduxjs/toolkit';

// Parse price to number (remove currency symbols like ₹, $, etc.)
const parsePrice = (price) => {
  if (typeof price === 'string') {
    return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
  }
  return Number(price) || 0;
};

const getInitialStateFromLocalStorage = () => {
  const savedState = localStorage.getItem('cartWishlist');
  if (savedState) {
    const parsed = JSON.parse(savedState);
    // Clean up any string prices from old data
    parsed.cartItems = parsed.cartItems.map(item => ({
      ...item,
      price: parsePrice(item.price)
    }));
    return parsed;
  }
  return {
    wishlistItems: [],
    cartItems: [],
    total: 0,
  };
};

const initialState = getInitialStateFromLocalStorage();

const cartWishlistSlice = createSlice({
  name: 'cartWishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlistItems.find(i => i.id === item.id);
      if (!exists) {
        state.wishlistItems.push(item);
        localStorage.setItem('cartWishlist', JSON.stringify(state));
      }
    },

    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(item => item.id !== itemId);
      localStorage.setItem('cartWishlist', JSON.stringify(state));
    },

    moveToCartFromWishlist: (state, action) => {
      const item = action.payload;
      const price = parsePrice(item.price);
      const existsInCart = state.cartItems.find(i => i.id === item.id);

      if (!existsInCart) {
        state.cartItems.push({ ...item, price, quantity: 1 });
      } else {
        existsInCart.quantity += 1;
      }

      state.total += price;
      state.wishlistItems = state.wishlistItems.filter(i => i.id !== item.id);
      localStorage.setItem('cartWishlist', JSON.stringify(state));
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const price = parsePrice(item.price);
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...item,
          price,
          quantity: item.quantity || 1
        });
      }

      state.total += price * (item.quantity || 1);
      localStorage.setItem('cartWishlist', JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find(cartItem => cartItem.id === itemId);
      if (item) {
        state.total -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cartWishlist', JSON.stringify(state));
      }
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(cartItem => cartItem.id === id);
      if (item) {
        const diff = quantity - item.quantity;
        state.total += diff * item.price;
        item.quantity = quantity;
        localStorage.setItem('cartWishlist', JSON.stringify(state));
      }
    }
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  moveToCartFromWishlist,
  removeFromCart,
  updateCartQuantity,
  addToCart
} = cartWishlistSlice.actions;

export default cartWishlistSlice.reducer;
