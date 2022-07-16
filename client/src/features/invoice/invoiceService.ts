import axios from 'axios';

import { InvoiceTypes } from '../../typing';

const getInvoices = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get('/api/v1/invoices', config);
  return response.data;
};

const getInvoice = async (token: string, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/v1/invoices/${id}`, config);
  return response.data;
};

const createInvoice = async (token: string, data: InvoiceTypes) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post('/api/v1/invoices', data, config);
  return response.data;
};

const updateInvoice = async (
  token: string,
  id: string,
  data: InvoiceTypes | { status: string }
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.patch(`/api/v1/invoices/${id}`, data, config);
  return response.data;
};

const deleteInvoice = async (token: string, id: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`/api/v1/invoices/${id}`, config);
  return response.data;
};

const invoiceService = {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};

export default invoiceService;
