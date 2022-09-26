import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spacelaunchnow.me/api/3.3.0/',
  }),
  endpoints: () => ({}),
});
