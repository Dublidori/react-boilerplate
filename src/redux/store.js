import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './rootReducer';

const store = configureStore({ reducer: createRootReducer() });

export default store;

