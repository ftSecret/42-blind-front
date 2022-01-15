import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AddPostDataType,
  AddPostRequestType,
  APIPostCommentsType,
  GetPostRequestType,
} from 'api/type';
import { METHOD_DELETE, METHOD_POST, METHOD_PUT } from 'constants/api';
import { env } from 'constants/env';
import { prepareAuth } from 'api/prepareAuth';
import {
  APIPostType,
  ResponseType,
  DeletePostRequestType,
  EditPostRequestType,
  GetPostDetailRequestType,
  GoodPostRequestType,
} from './type';

export const blindPostAPI = createApi({
  reducerPath: 'blindPostAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
    prepareHeaders: prepareAuth,
  }),
  endpoints: (builder) => ({
    getBlindPost: builder.query<ResponseType<APIPostType[]>, GetPostRequestType>({
      query: ({ size, page }) => `post?size=${size}&page=${page}`,
    }),
    getBlindPostMe: builder.query<ResponseType<APIPostType[]>, void>({
      query: () => `post/me`,
    }),
    getBlindPostDetail: builder.query<ResponseType<APIPostCommentsType>, GetPostDetailRequestType>({
      query: ({ post_id }) => `post/detail?post_id=${post_id}`,
    }),
    getBlindPostPopular: builder.query<ResponseType<APIPostType[]>, void>({
      query: () => `post/popular`,
    }),
    addBlindPost: builder.mutation<ResponseType<AddPostDataType>, AddPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: METHOD_POST,
        body,
      }),
    }),
    goodBlindPost: builder.mutation<ResponseType<APIPostCommentsType>, GoodPostRequestType>({
      query: (body) => ({
        url: `like/post`,
        method: METHOD_POST,
        body,
      }),
    }),
    editBlindPost: builder.mutation<ResponseType<APIPostType>, EditPostRequestType>({
      query: (body) => ({
        url: `post`,
        method: METHOD_PUT,
        body,
      }),
    }),
    deleteBlindPost: builder.mutation<ResponseType<number>, DeletePostRequestType>({
      query: (post_id) => ({
        url: `post/delete?post_id=${post_id}`,
        method: METHOD_DELETE,
      }),
    }),
  }),
});

export const {
  useGetBlindPostQuery,
  useGetBlindPostDetailQuery,
  useGetBlindPostMeQuery,
  useGetBlindPostPopularQuery,
  useAddBlindPostMutation,
  useEditBlindPostMutation,
  useGoodBlindPostMutation,
  useDeleteBlindPostMutation,
} = blindPostAPI;
