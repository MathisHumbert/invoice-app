import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import invoiceReducer from '../features/invoice/invoiceSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
