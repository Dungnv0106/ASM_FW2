import { createSlice } from "@reduxjs/toolkit";
interface ICart {
  product_id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: number;
}
export interface ICartState {
  cart: ICart[];
}
const initialState: ICartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      //   const newItem = action.payload;
      //   const existingCart: any = state.cart.find((cart) => cart == newItem);
      //   if (existingCart) {
      //     existingCart.quantity += newItem.quantity;
      //   } else {
      //     state.cart.push(newItem);
      //   }
      const orderExistIndex = state.cart.findIndex(
        (order) => order.name === action.payload.name
      );
      if (orderExistIndex === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[orderExistIndex].quantity += action.payload.quantity;
        state.cart[orderExistIndex].subtotal += action.payload.subtotal;
        state = {
          ...state,
          cart: state.cart,
        };
      }
    },
    removeCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((s) => s.product_id !== itemId.product_id);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
