import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../utils/store';

import { InvoiceTypes, InvoiceError } from '../../typing';

interface InvoiceItem {
  invoices: null | InvoiceTypes[];
  isLoading: boolean;
  isError: boolean;
  isFirstFetching: boolean;
}

const initialState: InvoiceItem = {
  invoices: null,
  isLoading: false,
  isError: false,
  isFirstFetching: true,
};

export const getInvoices = createAsyncThunk<
  InvoiceTypes[],
  void,
  { state: RootState; rejectValue: InvoiceError }
>('invoice/getInvoices', async (_, thunkApi) => {
  const token = thunkApi.getState().user.token;

  try {
    const { data } = await axios.get('/api/v1/invoices', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue({
      msg: 'Someting went wrong please try again',
    });
  }
});

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    resetInvoiceState: () => initialState,
  },
  extraReducers: (builder) => {
    // GET INVOICES
    builder.addCase(getInvoices.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getInvoices.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.invoices = [];
    });
    builder.addCase(getInvoices.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.invoices = payload;
      state.isFirstFetching = false;
    });
  },
});

export default invoiceSlice.reducer;
export const { resetInvoiceState } = invoiceSlice.actions;
