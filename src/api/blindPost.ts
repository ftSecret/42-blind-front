import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AddPostDataType,
  AddPostRequestType,
  APIPostCommentsType,
  GetPostRequestType,
} from 'api/type';
import { METHOD_DELETE, METHOD_POST, METHOD_PUT } from 'constants/api';
import { env } from 'constants/env';
import {
  APIPostType,
  ResponseType,
  DeletePostRequestType,
  EditPostRequestType,
  GetPostDetailRequestType,
  GoodPostRequestType,
} from './type';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { PATH_LOGIN } from 'components/utils/AppRouter';

const prepareToken = async (headers: Headers) => {
  const cookies = new Cookies();
  console.log('[before]', cookies);

  if (cookies.get('refresh') === undefined) {
    // 로그인 화면으로 이동
    window.location.href = `https://42blind.com${PATH_LOGIN}`;
  } else if (cookies.get('jwt') === undefined) {
    // 헬스체크 api 호출
    if (env.url.blindAPI) {
      try {
        const test = await axios.get(env.url.blindAPI);
        console.log(test);
      } catch {
        // throw new Error('jwt를 가져오는데 실패했습니다.');
      }
    }
  }
  headers.set('cookie', `jwt=${cookies.get('jwt')};`);
  console.log('[document.cookie]', document.cookie);
  console.log('[jwt]', cookies.get('jwt'));
  console.log('[after]', new Cookies());
  return headers;
};

export const blindPostAPI = createApi({
  reducerPath: 'blindPostAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
    credentials: 'include',
    prepareHeaders: prepareToken,
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
