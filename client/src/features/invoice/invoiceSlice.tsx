import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import invoiceService from './invoiceService';
import { RootState } from '../../utils/store';
import { InvoiceTypes, InvoiceError } from '../../typing';

interface InvoiceItem {
  invoices: null | InvoiceTypes[];
  invoice: null | InvoiceTypes;
  isLoading: boolean;
  isError: boolean;
  isFirstFetching: boolean;
}

const initialState: InvoiceItem = {
  invoices: null,
  invoice: null,
  isLoading: false,
  isError: false,
  isFirstFetching: true,
};

export const getInvoices = createAsyncThunk<
  InvoiceTypes[],
  void,
  { state: RootState; rejectValue: InvoiceError }
>('invoice/getInvoices', async (_, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    return await invoiceService.getInvoices(token!);
  } catch (error) {
    return thunkApi.rejectWithValue({
      msg: 'Someting went wrong please try again',
    });
  }
});

export const getInvoice = createAsyncThunk<
  InvoiceTypes,
  string,
  { state: RootState; rejectValue: InvoiceError }
>('invoice/getInvoice', async (id: string, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    return await invoiceService.getInvoice(token!, id);
  } catch (error) {
    return thunkApi.rejectWithValue({
      msg: 'Someting went wrong please try again',
    });
  }
});

export const createInvoice = createAsyncThunk<
  InvoiceTypes,
  InvoiceTypes,
  { state: RootState; rejectValue: InvoiceError }
>('invoice/createInvoice', async (invoiceFormData: InvoiceTypes, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    return await invoiceService.createInvoice(token!, invoiceFormData);
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
    // GET INVOICE
    builder.addCase(getInvoice.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getInvoice.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.invoice = null;
    });
    builder.addCase(getInvoice.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.invoice = payload;
    });
    // CREATE INVOICE
    builder.addCase(createInvoice.fulfilled, (state, { payload }) => {
      state.invoices = [...state.invoices!, payload];
    });
  },
});

export default invoiceSlice.reducer;
export const { resetInvoiceState } = invoiceSlice.actions;
