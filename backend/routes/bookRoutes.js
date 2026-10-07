const express = require('express');
const router = express.Router();

const { getBooks, getBookById } = require('../controllers/bookController');
const { verifyToken } = require('../middleware/authMiddleware');

// Stok hanya berubah lewat proses pinjam/kembali (loanController),
// jadi tidak ada endpoint publik untuk mengubah stok.
router.get('/books', verifyToken, getBooks);
router.get('/books/:id', verifyToken, getBookById);

module.exports = router;