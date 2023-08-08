import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carts = createApi({
  reducerPath: "carts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),

  endpoints: (builder) => ({
    createBill: builder.mutation({
      query: (bill) => ({
        url: `/carts/add`,
        method: "POST",
        body: bill,
      }),
    }),
    getBillByUser: builder.mutation({
      query: (id) => ({
        url: `/carts/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateBillMutation, useGetBillByUserMutation } = carts;
