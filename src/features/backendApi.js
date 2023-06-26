import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
});
