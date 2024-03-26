import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 10,
      name: 'Mediterraneo',
      quantity: 2,
      unitPrice: 10,
      totalPrice: 40,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload=newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload=pizzaId
      state.cart = state.cart.filter(
        (order) => order.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      // state.state.cart.map((order) => {
      //   if (order.pizzaId === action.payload) {
      //     order.quantity++;
      //   }
      // });
    },
    decreaseItemQuantity(state, action) {
      // payload=pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // state.cart.map((order) => {
      //   if (order.pizzaId === action.payload) {
      //     order.quantity--;
      //   }
      // });
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

// 'reselect' library for better performance
