import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/products";

interface productState {
  products: IProduct[];
}

const initialState: productState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getAll: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },

    createProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<IProduct>) => {
      const newProduct = action.payload;
      state.products = state.products.map((item: any) =>
        item._id == newProduct._id ? newProduct : item
      );
    },
    deleteProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { getAll } = productSlice.actions;

export default productSlice.reducer;
