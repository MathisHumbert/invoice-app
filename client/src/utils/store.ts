import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import invoiceReducer from '../features/invoice/invoiceSlice';
import asideReducer from '../features/aside/asideSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    invoice: invoiceReducer,
    aside: asideReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
