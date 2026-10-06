const express = require('express');
const router = express.Router();

const {
  getLoans,
  createLoan,
  returnLoan
} = require('../controllers/loanController');

router.get('/loans/:nim', getLoans);
router.post('/loans', createLoan);
router.post('/loans/:loanId/return', returnLoan);

module.exports = router;