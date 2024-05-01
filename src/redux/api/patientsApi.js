import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
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
    getProfesionesMasAfectadas: builder.query({
      query: () => `/profesionesMasAfectadas`,
    }),
  }),
});

export const {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
  useGetProfesionesMasAfectadasQuery,
} = patientsApi;
