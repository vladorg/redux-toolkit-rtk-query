import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const postsAPI = createApi({
  reducerPath: 'postsAPI', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Posts'],
  endpoints: (build) => ({
    fetchPosts: build.query({
      query: () => ({
        url: '/posts'
      }),
      providesTags: result => ['Posts']
    }),
    addPost: build.mutation({
      query: (body) => ({
        url: '/posts',
        method: 'POST', 
        body
      }),
      invalidatesTags: ['Posts']
    }),
    updatePost: build.mutation({
      query: (body) => ({
        url: '/posts/' + body.id,
        method: 'PUT', 
        body
      }),
      invalidatesTags: ['Posts']
    }),
    deletePost: build.mutation({
      query: (body) => ({
        url: '/posts/' + body.id,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
  })
});

export const { useFetchPostsQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsAPI
