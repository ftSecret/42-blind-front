import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  NotificationCheckRequestType,
  NotificationCountDataType,
  NotificationDataType,
  NotificationRequestType,
} from 'api/type';
import { METHOD_DELETE } from 'constants/api';
import { env } from 'constants/env';
import { prepareAuth } from 'api/prepareAuth';
import { ResponseType } from './type';

export const blindNotificationAPI = createApi({
  reducerPath: 'blindNotificationAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: env.url.blindAPI,
    prepareHeaders: prepareAuth,
  }),
  endpoints: (builder) => ({
    getBlindNotificationCount: builder.query<ResponseType<NotificationCountDataType>, void>({
      query: () => `notification/count`,
    }),
    getBlindNotification: builder.query<
      ResponseType<NotificationDataType[]>,
      NotificationRequestType
    >({
      query: ({ size, page }) => `notification/page?page=${page}&size=${size}`,
    }),
    checkBlindNotification: builder.mutation<ResponseType<void>, NotificationCheckRequestType>({
      query: ({ notification_id }) => ({
        url: `notification/delete?notification_id=${notification_id}`,
        method: METHOD_DELETE,
      }),
    }),
  }),
});

export const {
  useLazyGetBlindNotificationQuery,
  useGetBlindNotificationCountQuery,
  useCheckBlindNotificationMutation,
} = blindNotificationAPI;
