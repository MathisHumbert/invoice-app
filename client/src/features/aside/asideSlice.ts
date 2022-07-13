import { createSlice } from '@reduxjs/toolkit';

interface AsideItem {
  isNewInvoiceAsideOpen: boolean;
  isEditInvoiceAsideOpen: boolean;
}

const initialState: AsideItem = {
  isNewInvoiceAsideOpen: false,
  isEditInvoiceAsideOpen: false,
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
  },
});

export default asideSlice.reducer;
export const { toggleEditInvoiceAside, toggleNewInvoiceAside } =
  asideSlice.actions;
