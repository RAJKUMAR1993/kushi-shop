import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload; // The product to be added to the cart
      const itemIndex = state.cartProducts.find(
        (item) => item.id === newItem.id
      );
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice = +(itemIndex.totalPrice + newItem.price).toFixed(
          2
        );
      } else {
        state.cartProducts.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          images: newItem.images,
        });
      }
      state.totalPrice = +(state.totalPrice + newItem.price).toFixed(2);
      state.totalQuantity++;
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartProducts.find((p) => p.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice = +(item.totalPrice + item.price).toFixed(2);
        state.totalPrice = +(state.totalPrice + item.price).toFixed(2);
        state.totalQuantity++;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const itemIndex = state.cartProducts.findIndex((p) => p.id === id);
      if (itemIndex !== -1) {
        const item = state.cartProducts[itemIndex];
        if (item.quantity > 1) {
          item.quantity--;
          item.totalPrice = +(item.totalPrice - item.price).toFixed(2);
          state.totalPrice = +(state.totalPrice - item.price).toFixed(2);
          state.totalQuantity--;
        } else {
          // remove item
          state.cartProducts.splice(itemIndex, 1);
          state.totalPrice = +(state.totalPrice - item.price).toFixed(2);
          state.totalQuantity -= 1;
        }
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.cartProducts.findIndex((p) => p.id === id);
      if (itemIndex !== -1) {
        const item = state.cartProducts[itemIndex];
        state.totalPrice = +(state.totalPrice - item.totalPrice).toFixed(2);
        state.totalQuantity -= item.quantity;
        state.cartProducts.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.cartProducts = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
