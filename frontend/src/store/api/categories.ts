import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      headers.set("authorization", `Bearer ${token}`);
      // modify header theo từng request
      return headers;
    },
  }),

  tagTypes: ["categories"],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/add`,
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["categories"],
    }),
    editCategory: builder.mutation({
      query: (category) => ({
        url: `/categories/update/${category._id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: ["categories"],
    }),
    deleteCategory: builder.mutation({
      query: ({ _id }) => ({
        url: `/categories/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
} = categories;
