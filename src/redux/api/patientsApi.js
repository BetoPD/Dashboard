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
    getPersonasAtendidas: builder.query({
      query: () => `/personasAtendidas`,
    }),
    getTasaMortalidad: builder.query({
      query: () => `/tasaMortalidad`,
    }),
    getRetrasoRegistro: builder.query({
      query: () => `/retrasoRegistro`,
    }),
    getAntecedentesMuertes: builder.query({
      query: () => `/antecedentesMuertes`,
    }),
    getEvolucion: builder.query({
      query: () => `/evolucion`,
    }),
  }),
});

export const {
  useGetSintomasPacienteQuery,
  useGetFallecidosPorMesQuery,
  useGetSintomaFatalidadQuery,
  useGetProfesionesMasAfectadasQuery,
  useGetPersonasAtendidasQuery,
  useGetTasaMortalidadQuery,
  useGetRetrasoRegistroQuery,
  useGetAntecedentesMuertesQuery,
  useGetEvolucionQuery,
} = patientsApi;
