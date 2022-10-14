import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(process.env);

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NX_BASE_API_URL,
  }),
  endpoints: () => ({}),
});
