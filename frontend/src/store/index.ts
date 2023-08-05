import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/users";
import { products } from "./api/products";
import authSlice from "./feature/authSlice";
import productSlice from "./feature/productSlice";
import { categories } from "./api/categories";
import categorySlice from "./feature/categorySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    category: categorySlice,
    [authApi.reducerPath]: authApi.reducer,
    [products.reducerPath]: products.reducer,
    [categories.reducerPath]: categories.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      products.middleware,
      categories.middleware
    ),
});

export default store;
