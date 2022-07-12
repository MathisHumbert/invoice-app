const Invoice = require('../models/Invoice');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const checkPermission = require('../utils/checkPermission');

const getAllInvoices = async (req, res) => {
  const invoices = await Invoice.find({ createdBy: req.user.userID });
  res.status(StatusCodes.OK).json(invoices);
};

const getInvoice = async (req, res) => {
  const invoiceID = req.params.id;

  const invoice = await Invoice.findOne({ _id: invoiceID });
  checkPermission(req.user, invoice.createdBy);
  invoice.__v = undefined;

  if (!invoice) {
    throw new NotFoundError(`No invoice with the id ${invoiceID}`);
  }
  res.status(StatusCodes.OK).json(invoice);
};

const createInvoice = async (req, res) => {
  req.body.createdBy = req.user.userID;
  const invoice = await Invoice.create(req.body);
  res.status(StatusCodes.CREATED).json(invoice);
};

const updateInvoice = async (req, res) => {
  const invoiceID = req.params.id;
  const invoice = await Invoice.findOne({ _id: invoiceID });
  if (!invoice) {
    throw new NotFoundError(`No invoice with the id ${invoiceID}`);
  }
  checkPermission(req.user, invoice.createdBy);

  const updatedInvoice = await Invoice.findOneAndUpdate(
    { _id: invoiceID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.OK).json(updatedInvoice);
};

const deleteInvoice = async (req, res) => {
  const invoiceID = req.params.id;

  const invoice = await Invoice.findOne({ _id: invoiceID });
  if (!invoice) {
    throw new NotFoundError(`No invoice with id ${invoiceID}`);
  }
  checkPermission(req.user, invoice.createdBy);

  await invoice.remove();
  res.status(StatusCodes.OK).send('Invoice removed');
};

module.exports = {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
