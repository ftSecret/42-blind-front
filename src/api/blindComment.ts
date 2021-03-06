import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  APIPostCommentsType,
  AddCommentRequestType,
  EditCommentRequestType,
  DeleteCommentRequestType,
  ResponseType,
  APICommentMeType,
  GoodCommentRequestType,
} from 'api/type';
import { METHOD_PUT, METHOD_POST, METHOD_DELETE } from 'constants/api';
import { env } from 'constants/env';
import { prepareAuth } from 'api/prepareAuth';

export const blindCommentAPI = createApi({
  reducerPath: 'blindCommentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
    credentials: 'include',
    prepareHeaders: prepareAuth,
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
    goodBlindComment: builder.mutation<ResponseType<APIPostCommentsType>, GoodCommentRequestType>({
      query: (body) => ({
        url: `like/comment`,
        method: METHOD_POST,
        body,
      }),
    }),
  }),
});

export const {
  useGetBlindCommentMeQuery,
  useAddBlindCommentMutation,
  useGoodBlindCommentMutation,
  useEditBlindCommentMutation,
  useDeleteBlindCommentMutation,
} = blindCommentAPI;
