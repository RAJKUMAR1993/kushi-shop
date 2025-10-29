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
        itemIndex.totalQuantity += newItem.price;
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
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
