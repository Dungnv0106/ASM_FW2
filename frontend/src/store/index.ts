import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import authSlice from './users/authSlice';



const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;