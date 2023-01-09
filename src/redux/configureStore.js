import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import planentsReducer from './home/homeSlice';

const store = configureStore({
  reducer: {
    planets: planentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
