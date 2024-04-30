import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
  }),
  endpoints: (builder) => ({
    getSintomasPaciente: builder.query({
      query: () => `/sintomasPaciente`,
    }),
    getFallecidosPorMes: builder.query({
      query: () => `/fallecidosPorMes`,
    }),
    getSintomaFatalidad: builder.query({
      query: () => `/sintomaFatalidad`,
    }),
  }),
});

export const {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
} = patientsApi;
