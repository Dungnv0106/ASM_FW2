import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICategory } from "../../interfaces/categories";

interface categoryState {
  categories: ICategory[];
}
const initialState: categoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    getAllCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { getAllCategories } = categorySlice.actions;

export default categorySlice.reducer;
