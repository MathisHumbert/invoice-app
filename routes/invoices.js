const express = require('express');
const router = express.Router();

const {
  getAllInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require('../controllers/invoices');

router.route('/').post(createInvoice).get(getAllInvoices);
router.route('/:id').get(getInvoice).delete(deleteInvoice).patch(updateInvoice);

module.exports = router;
