// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'constants/env';
import { Post } from 'types';

export type DefaultResponseType<DataType> = {
  code: number;
  message: string;
  data: DataType;
};

export type AddPostResponseType = {
  code: number;
  data: {
    post_id: number;
  };
  message: string;
};

export type AddPostRequestType = {
  content: string;
  title: string;
};

export type GetPostDataType = {
  modified_at: string;
  created_at: string;
  contents: string;
  user_id: number;
  goods: number;
  title: string;
  views: number;
  id: number;
};

export type GetPostResponseType = DefaultResponseType<GetPostDataType>;

export type GetPostRequestType = {
  page: number;
  size: number;
};

// Define a service using a base URL and expected endpoints
export const blindPostAPI = createApi({
  reducerPath: 'blindPostAPI',
  baseQuery: fetchBaseQuery({ baseUrl: env.url.blindAPI }),
  endpoints: (builder) => ({
    getBlindPost: builder.query<GetPostResponseType, GetPostRequestType>({
      query: ({ size, page }) => `post?size=${size}&page=${page}`,
    }),
    getBlindPostFromMe: builder.query<GetPostResponseType, void>({
      query: () => `post/me`,
    }),
    getBlindPostDetail: builder.query<GetPostResponseType, Pick<Post, 'id'>>({
      query: ({ id }) => `post/detail?post_id=${id}`,
    }),
    getBlindPostPopular: builder.query<GetPostResponseType, void>({
      query: () => `post/popular`,
    }),
    addBlindPost: builder.mutation<AddPostResponseType, Partial<AddPostRequestType>>({
      query: (body) => ({
        url: `post`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBlindPostQuery,
  useAddBlindPostMutation,
  useGetBlindPostDetailQuery,
  useGetBlindPostFromMeQuery,
  useGetBlindPostPopularQuery,
} = blindPostAPI;
