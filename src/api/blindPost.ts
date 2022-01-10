// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AddPostDataType,
  AddPostRequestType,
  APIPostCommentType,
  GetPostRequestType,
  IsGoodType,
} from 'api/type';
import { env } from 'constants/env';
import {
  APIPostType,
  ResponseType,
  DeletePostRequestType,
  EditPostRequestType,
  GetPostDetailRequestType,
  GoodPostRequestType,
} from './type';

// Define a service using a base URL and expected endpoints
export const blindPostAPI = createApi({
  reducerPath: 'blindPostAPI',
  baseQuery: fetchBaseQuery({ baseUrl: env.url.blindAPI, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlindPost: builder.query<ResponseType<APIPostType[]>, GetPostRequestType>({
      query: ({ size, page }) => `post?size=${size}&page=${page}`,
    }),
    getBlindPostFromMe: builder.query<ResponseType<APIPostType[]>, void>({
      query: () => `post/me`,
    }),
    getBlindPostDetail: builder.query<
      ResponseType<APIPostCommentType & IsGoodType>,
      GetPostDetailRequestType
    >({
      query: ({ post_id }) => `post/detail?post_id=${post_id}`,
    }),
    getBlindPostPopular: builder.query<ResponseType<APIPostType[]>, void>({
      query: () => `post/popular`,
    }),
    addBlindPost: builder.mutation<ResponseType<AddPostDataType>, AddPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: 'POST',
        body,
      }),
    }),
    goodBlindPost: builder.mutation<ResponseType<APIPostCommentType>, GoodPostRequestType>({
      query: (body) => ({
        url: `like/post`,
        method: 'POST',
        body,
      }),
    }),
    editBlindPost: builder.mutation<ResponseType<APIPostType>, EditPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: 'PUT',
        body,
      }),
    }),
    deleteBlindPost: builder.mutation<ResponseType<number>, DeletePostRequestType>({
      query: (post_id) => ({
        url: `post/delete?post_id=${post_id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetBlindPostQuery,
  useGetBlindPostDetailQuery,
  useGetBlindPostFromMeQuery,
  useGetBlindPostPopularQuery,
  useAddBlindPostMutation,
  useEditBlindPostMutation,
  useGoodBlindPostMutation,
  useDeleteBlindPostMutation,
} = blindPostAPI;
