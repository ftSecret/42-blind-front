// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AddPostRequestType,
  AddPostResponseType,
  GetPostRequestType,
  GetPostResponseType,
} from 'api';
import { env } from 'constants/env';
import {
  APIPostType,
  EditPostRequestType,
  GetPostDetailRequestType,
  GetPostDetailResponseType,
  GoodPostRequestType,
  GoodPostResponseType,
} from './type';

// Define a service using a base URL and expected endpoints
export const blindPostAPI = createApi({
  reducerPath: 'blindPostAPI',
  baseQuery: fetchBaseQuery({ baseUrl: env.url.blindAPI, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlindPost: builder.query<GetPostResponseType, GetPostRequestType>({
      query: ({ size, page }) => `post?size=${size}&page=${page}`,
    }),
    getBlindPostFromMe: builder.query<GetPostResponseType, void>({
      query: () => `post/me`,
    }),
    getBlindPostDetail: builder.query<GetPostDetailResponseType, GetPostDetailRequestType>({
      query: ({ post_id }) => `post/detail?post_id=${post_id}`,
    }),
    getBlindPostPopular: builder.query<GetPostResponseType, void>({
      query: () => `post/popular`,
    }),
    addBlindPost: builder.mutation<AddPostResponseType, AddPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: 'POST',
        body,
      }),
    }),
    goodBlindPost: builder.mutation<GoodPostResponseType, GoodPostRequestType>({
      query: (body) => ({
        url: `like/post`,
        method: 'POST',
        body,
      }),
    }),
    editBlindPost: builder.mutation<APIPostType, EditPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useGetBlindPostQuery,
  useAddBlindPostMutation,
  useGoodBlindPostMutation,
  useGetBlindPostDetailQuery,
  useGetBlindPostFromMeQuery,
  useGetBlindPostPopularQuery,
} = blindPostAPI;
