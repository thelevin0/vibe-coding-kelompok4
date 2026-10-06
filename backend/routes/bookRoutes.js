const express = require('express');
const router = express.Router();

const { getBooks, getBookById } = require('../controllers/bookController');

// Stok hanya berubah lewat proses pinjam/kembali (loanController),
// jadi tidak ada endpoint publik untuk mengubah stok.
router.get('/books', getBooks);
router.get('/books/:id', getBookById);

module.exports = router;
