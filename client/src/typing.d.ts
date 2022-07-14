// INVOICE
export interface InvoiceAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoiceItems {
  id?: string;
  name: string;
  quantity?: string;
  price: string;
  total?: string | number;
}

export interface InvoiceTypes {
  _id?: string;
  createdAt: Date;
  paymentDue: Date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: InvoiceAddress;
  clientAddress: InvoiceAddress;
  items: InvoiceItems[];
  total: number;
  createdBy?: string;
}

export interface InvoiceError {
  msg: string;
}
// USER
export interface UserFormInputs {
  name?: string;
  email: string;
  password: string;
}

export interface UserSuccess {
  user: string;
  token: string;
}

export interface UserError {
  msg: string;
}
