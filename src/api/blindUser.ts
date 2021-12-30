/*
서비스 관련 로직 회의 후에 사용
*/

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'constants/env';
import { Post } from 'types';

// Define a service using a base URL and expected endpoints
export const blindUserAPI = createApi({
  reducerPath: 'blindUserAPI',
  baseQuery: fetchBaseQuery({ baseUrl: env.url.blindAPI }),
  endpoints: (builder) => ({
    getBlindUser: builder.query<Post, string>({
      //   ex) query: (name) => `post/${name}`,
      query: () => `board`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlindUserQuery } = blindUserAPI;
