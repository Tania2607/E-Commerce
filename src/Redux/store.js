import { configureStore } from '@reduxjs/toolkit';
import cartWishlistReducer from './cartWishlistSlice.js';

export const store = configureStore({
  reducer: {
    cartWishlist: cartWishlistReducer,
  },
});
