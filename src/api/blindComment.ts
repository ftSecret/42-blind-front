import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  APIPostCommentsType,
  AddCommentRequestType,
  EditCommentRequestType,
  DeleteCommentRequestType,
  ResponseType,
  APICommentMeType,
} from 'api/type';
import { METHOD_PUT, METHOD_POST, METHOD_DELETE } from 'constants/api';
import { env } from 'constants/env';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { PATH_LOGIN } from 'components/utils/AppRouter';

const prepareToken = async (
  headers: Headers,
  api: Pick<BaseQueryApi, 'getState' | 'endpoint' | 'type' | 'forced'>,
) => {
  const cookies = new Cookies();
  console.log('[before]', cookies);

  if (cookies.get('refresh') === undefined) {
    // 로그인 화면으로 이동
    window.location.href = `https://42blind.com${PATH_LOGIN}`;
  } else if (cookies.get('jwt') === undefined) {
    // 헬스체크 api 호출
    if (env.url.blindAPI) {
      const test = await axios.get(env.url.blindAPI);
      console.log(test);
    }
  }
  console.log('[after]', new Cookies());
  return headers;
};

export const blindCommentAPI = createApi({
  reducerPath: 'blindCommentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
    credentials: 'include',
    prepareHeaders: prepareToken,
  }),
  endpoints: (builder) => ({
    getBlindCommentMe: builder.query<ResponseType<APICommentMeType[]>, void>({
      query: () => `comment/me`,
    }),
    addBlindComment: builder.mutation<ResponseType<APIPostCommentsType>, AddCommentRequestType>({
      query: (body) => ({
        url: `comment`,
        method: METHOD_POST,
        body,
      }),
    }),
    deleteBlindComment: builder.mutation<
      ResponseType<APIPostCommentsType>,
      DeleteCommentRequestType
    >({
      query: (body) => ({
        url: `comment/delete/delete}`,
        method: METHOD_DELETE,
        body,
      }),
    }),
    editBlindComment: builder.mutation<ResponseType<APIPostCommentsType>, EditCommentRequestType>({
      query: (body) => ({
        url: `comment`,
        method: METHOD_PUT,
        body,
      }),
    }),
  }),
});

export const {
  useGetBlindCommentMeQuery,
  useAddBlindCommentMutation,
  useEditBlindCommentMutation,
  useDeleteBlindCommentMutation,
} = blindCommentAPI;
