import { configureStore } from '@reduxjs/toolkit';
import { patientsApi } from './api/patientsApi';

const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([patientsApi.middleware]),
});

export default store;
