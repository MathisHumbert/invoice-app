import { createSlice } from '@reduxjs/toolkit';

interface AsideItem {
  isNewInvoiceAsideOpen: boolean;
  isEditInvoiceAsideOpen: boolean;
  isDeleteInvoiceAsideOpen: boolean;
}

const initialState: AsideItem = {
  isNewInvoiceAsideOpen: false,
  isEditInvoiceAsideOpen: false,
  isDeleteInvoiceAsideOpen: false,
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleNewInvoiceAside: (state) => {
      state.isNewInvoiceAsideOpen = !state.isNewInvoiceAsideOpen;
    },
    toggleEditInvoiceAside: (state) => {
      state.isEditInvoiceAsideOpen = !state.isEditInvoiceAsideOpen;
    },
    toggleDeleteInvoiceAside: (state) => {
      state.isDeleteInvoiceAsideOpen = !state.isDeleteInvoiceAsideOpen;
    },
  },
});

export default asideSlice.reducer;
export const {
  toggleEditInvoiceAside,
  toggleNewInvoiceAside,
  toggleDeleteInvoiceAside,
} = asideSlice.actions;
