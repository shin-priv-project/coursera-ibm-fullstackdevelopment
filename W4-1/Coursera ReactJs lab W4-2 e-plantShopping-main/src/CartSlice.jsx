import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Initialize items as an empty array
//   },
//   reducers: {
//     addItem: (state, action) => {
//       console.log("The funciton addItem was provoked.");
//       const item = action.payload;
//       console.log(state.items);
//       const existingItem = state.items.find(content => content.name === item.name);
//       if (existingItem) {
//         existingItem.quantity ++;
//       } else {
//         state.items.push({...item, quantity: 1});
//       };
//     },
//     removeItem: (state, action) => {
//     },
//     updateQuantity: (state, action) => {
//     },
//   },
// });

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    cartToggle: false,
  },
  reducers: {
    addItem: (state, action) => {
      console.log("The function addItem was invoked.");
      const item = action.payload;
      const existingItem = state.items.find(content => content.name === item.name);
      if (existingItem) {
        // console.log("if clause provoked.")
        // console.log(existingItem.name);
        existingItem.quantity++;
      } else {
        // console.log("else clause provoked.")
        state.items.push({ ...item, quantity: 1 });
      }
      // console.log(state.items);
    },
    removeItem: (state, action) => {
      console.log("The function removeItem invoked.")
      state.items = state.items.filter(content => content.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      console.log("The function uddateQuantity invoked.")
      const {plant, amount} = action.payload;
      console.log(plant, amount);
      const existingItem = state.items.find(content => content.name === plant);
      if (existingItem) {
        existingItem.quantity = amount;
      } else {
        console.log(`The item ${plant} is not in the cart`);
      };
    },
    toggleCart: (state, action) => {
      if (state.cartToggle) {
        state.cartToggle = false;
      } else {
        state.cartToggle = true;
      };
    },
  },
});

export const { addItem, removeItem, updateQuantity, toggleCart } = CartSlice.actions;

export default CartSlice.reducer;
