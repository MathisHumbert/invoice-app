import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../utils/store';

interface InvoiceAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface InvoiceItems {
  id: string;
  name: string;
  price: string;
  total: string;
}

interface Invoice {
  _id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  items: InvoiceItems[];
  total: number;
  createdBy: string;
}

interface InvoiceItem {
  invoices: Invoice[];
  isLoading: boolean;
}

const initialState: InvoiceItem = {
  invoices: [],
  isLoading: false,
};

export const getInvoices = createAsyncThunk<
  Invoice[],
  void,
  { state: RootState }
>('invoice/getInvoices', async (_, thunkApi) => {
  const token = thunkApi.getState().user.token;

  const { data } = await axios.get('/api/v1/invoices', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
});

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET INVOICES
    builder.addCase(getInvoices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInvoices.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.invoices = payload;
    });
  },
});

export default invoiceSlice.reducer;
