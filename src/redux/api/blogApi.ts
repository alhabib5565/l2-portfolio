import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createBlog: build.mutation({
            query: (data) => ({
                url: "/blogs/add-blog",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["blog"],
        }),

        getAllBlogs: build.query({
            query: () => ({
                url: "/blogs",
            }),
            providesTags: ["blog"],
        }),

        getSingleBlog: build.query({
            query: (id) => ({
                url: `/blogs/${id}`,
            }),
            providesTags: ["blog"],
        }),

        deleteBlog: build.mutation({
            query: (id) => ({
                url: `/blog/delete-blog/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blog"],
        }),
    }),
});

export const { useCreateBlogMutation, useGetAllBlogsQuery, useGetSingleBlogQuery, useDeleteBlogMutation } =
    blogApi;