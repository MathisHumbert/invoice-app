import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import invoiceService from './invoiceService';
import { RootState } from '../../utils/store';
import { InvoiceTypes, InvoiceError } from '../../typing';

interface InvoiceItem {
  invoices: null | InvoiceTypes[];
  invoice: null | InvoiceTypes;
  isLoading: boolean;
  isError: boolean;
}

const initialState: InvoiceItem = {
  invoices: null,
  invoice: null,
  isLoading: false,
  isError: false,
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
    console.log(error);
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

export const updateInvoice = createAsyncThunk<
  InvoiceTypes,
  { invoiceFormData: InvoiceTypes | { status: string }; id: string },
  { state: RootState; rejectValue: InvoiceError }
>('invoice/updateInvoice', async ({ invoiceFormData, id }, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    return await invoiceService.updateInvoice(token!, id, invoiceFormData);
  } catch (error) {
    return thunkApi.rejectWithValue({
      msg: 'Someting went wrong please try again',
    });
  }
});

export const deleteInvoice = createAsyncThunk<
  string,
  string,
  { state: RootState; rejectValue: InvoiceError }
>('invoice/deleteInvoice', async (id, thunkApi) => {
  try {
    const token = thunkApi.getState().user.token;
    return await invoiceService.deleteInvoice(token!, id);
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
    // UPDATE INVOICE
    builder.addCase(updateInvoice.fulfilled, (state, { payload }) => {
      state.invoice = payload;
    });
    // DELETE INVOICE
    builder.addCase(deleteInvoice.fulfilled, (state, { payload }) => {
      state.invoice = null;
    });
  },
});

export default invoiceSlice.reducer;
export const { resetInvoiceState } = invoiceSlice.actions;
