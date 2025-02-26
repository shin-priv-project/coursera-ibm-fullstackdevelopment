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
      state.items.find(content => content.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      const {name, amount} = action.payload;
      const existingItem = state.items.find(content => content.name === name);
      if (existingItem) {
        existingItem.quantity = amount;
      } else {
        console.log(`The item ${name} has not been added to the cart`);
      };
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
