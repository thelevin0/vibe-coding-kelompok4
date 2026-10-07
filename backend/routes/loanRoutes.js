const express = require('express');
const router = express.Router();

const {
  getLoans,
  createLoan,
  returnLoan
} = require('../controllers/loanController');

const { verifyToken } = require('../middleware/authMiddleware');

// Semua fitur peminjaman wajib login
router.get('/loans', verifyToken, getLoans);
router.post('/loans', verifyToken, createLoan);
router.post('/loans/:loanId/return', verifyToken, returnLoan);

module.exports = router;