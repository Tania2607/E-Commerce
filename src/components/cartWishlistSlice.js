import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishlistItems: [],
  totalQuantity: 0,
};

const cartWishlistSlice = createSlice({
  name: "cartWishlist",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existing = state.cartItems.find(i => i.id === id);
      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.cartItems = state.cartItems.filter(i => i.id !== id);
      }
    },

    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlistItems.find(i => i.id === item.id);
      if (!exists) {
        state.wishlistItems.push(item);
      }
    },

    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.wishlistItems = state.wishlistItems.filter(i => i.id !== id);
    },

    moveToCartFromWishlist: (state, action) => {
      const item = action.payload;
      const existsInCart = state.cartItems.find(i => i.id === item.id);
      if (!existsInCart) {
        state.cartItems.push({ ...item, quantity: 1 });
        state.totalQuantity += 1;
      } else {
        existsInCart.quantity += 1;
        state.totalQuantity += 1;
      }

      state.wishlistItems = state.wishlistItems.filter(i => i.id !== item.id);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  moveToCartFromWishlist,
} = cartWishlistSlice.actions;

export default cartWishlistSlice.reducer;

