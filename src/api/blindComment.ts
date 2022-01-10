import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  APIPostCommentType,
  AddCommentRequestType,
  EditCommentRequestType,
  DeleteCommentRequestType,
  APICommentType,
  ResponseType,
} from 'api/type';
import { METHOD_PUT, METHOD_POST, METHOD_DELETE } from 'constants/api';
import { env } from 'constants/env';

export const blindCommentAPI = createApi({
  reducerPath: 'blindCommentAPI',
  baseQuery: fetchBaseQuery({ baseUrl: env.url.blindAPI, credentials: 'include' }),
  endpoints: (builder) => ({
    getBlindCommentMe: builder.query<ResponseType<APICommentType[]>, void>({
      query: () => `comment/me`,
    }),
    addBlindComment: builder.mutation<ResponseType<APIPostCommentType>, AddCommentRequestType>({
      query: (body) => ({
        url: `comment`,
        method: METHOD_POST,
        body,
      }),
    }),
    deleteBlindComment: builder.mutation<
      ResponseType<APIPostCommentType>,
      DeleteCommentRequestType
    >({
      query: (body) => ({
        url: `comment/delete/delete}`,
        method: METHOD_DELETE,
        body,
      }),
    }),
    editBlindComment: builder.mutation<ResponseType<APIPostCommentType>, EditCommentRequestType>({
      query: (body) => ({
        url: `comment`,
        method: METHOD_PUT,
        body,
      }),
    }),
  }),
});

export const { useAddBlindCommentMutation, useEditBlindCommentMutation } = blindCommentAPI;
