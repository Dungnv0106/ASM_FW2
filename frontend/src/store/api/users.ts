import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterData, RegisterResponse } from "../../interfaces/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),

  endpoints: (builder) => ({
    // api cho đăng nhập
    login: builder.mutation({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    // api cho đang kí
    register: builder.mutation<RegisterResponse, RegisterData>({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
