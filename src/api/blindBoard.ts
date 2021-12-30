// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from 'constants/env';
import { _BoardResponse } from 'types';

// Define a service using a base URL and expected endpoints
export const blindBoardAPI = createApi({
  reducerPath: 'blindBoardAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
  }),
  endpoints: (builder) => ({
    getBlindBoard: builder.query<_BoardResponse, string>({
      //   ex) query: (name) => `post/${name}`,
      query: () => ({
        url: `board`,
        // credentials: 'same-origin',
      }),
    }),
    postBlindBoard: builder.query<_BoardResponse, string>({
      //   ex) query: (name) => `post/${name}`,
      query: () => ({
        url: `board`,
        method: 'post',
        headers: {
          withCredential: 'true',
        },
        credentials: 'same-origin',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlindBoardQuery, usePostBlindBoardQuery } = blindBoardAPI;
