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

const invoiceService = {
  getInvoices,
  getInvoice,
  createInvoice,
};

export default invoiceService;
