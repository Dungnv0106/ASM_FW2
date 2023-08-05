import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    // getAll products
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    // get product by id
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    // create product
    createProduct: builder.mutation({
      query: (product) => ({
        url: `/products/add`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
    //update product
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
    //delete product
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = products;
