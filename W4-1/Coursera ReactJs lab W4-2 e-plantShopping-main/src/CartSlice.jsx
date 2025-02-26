import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log("The funciton addItem was provoked.");
      const {item, index} = action.payload;
      const existingItem = state.items.find(content => content.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity ++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      };
      // console.log(`${action.payload.name} added; ${state.items[index]}`);
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
