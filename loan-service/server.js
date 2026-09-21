const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Library untuk memanggil Book Service

const app = express();
app.use(cors());
app.use(express.json());

// Data peminjaman sementara (in-memory)
let loans = [];

const MAX_ACTIVE_LOANS = 3;
// URL untuk berkomunikasi dengan Book Service
const BOOK_SERVICE_URL = 'http://localhost:3001/api/books';

// 1. API: Lihat daftar peminjaman berdasarkan NIM mahasiswa
app.get('/api/loans/:nim', (req, res) => {
  const myLoans = loans.filter(loan => loan.nim === req.params.nim);
  res.json(myLoans);
});

// 2. API: Pinjam Buku
app.post('/api/loans', async (req, res) => {
  const { nim, bookId, judul } = req.body;

  // Validasi: Cek batas maksimal 3 buku aktif
  const activeLoans = loans.filter(loan => loan.nim === nim);
  if (activeLoans.length >= MAX_ACTIVE_LOANS) {
    return res.status(400).json({ message: `Gagal: Anda sudah memiliki ${MAX_ACTIVE_LOANS} buku aktif.` });
  }

  try {
    // Komunikasi Antar-Service: Minta Book Service mengurangi stok
    await axios.put(`${BOOK_SERVICE_URL}/${bookId}/reduce-stock`);

    // Jika berhasil, catat data peminjaman (jatuh tempo 7 hari)
    const borrowDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    const newLoan = {
      id: "L" + Date.now(),
      nim,
      bookId,
      judul,
      borrowDate: borrowDate.toISOString(),
      dueDate: dueDate.toISOString()
    };

    loans.push(newLoan);
    res.json({ message: "Buku berhasil dipinjam", loan: newLoan });
  } catch (error) {
    // Tangkap error jika Book Service menolak (misal stok habis)
    res.status(400).json({ message: error.response?.data?.message || "Gagal meminjam buku" });
  }
});

// 3. API: Kembalikan Buku
app.post('/api/loans/return/:loanId', async (req, res) => {
  const { nim } = req.body;
  const loanIndex = loans.findIndex(l => l.id === req.params.loanId);

  if (loanIndex === -1) return res.status(404).json({ message: "Data peminjaman tidak ditemukan" });

  const loan = loans[loanIndex];

  // Validasi kepemilikan (Sesuai perbaikan di laporan tugas sebelumnya)
  if (loan.nim !== nim) {
    return res.status(403).json({ message: "Anda tidak dapat mengembalikan buku yang bukan milik Anda" });
  }

  try {
    // Komunikasi Antar-Service: Minta Book Service menambah stok
    await axios.put(`${BOOK_SERVICE_URL}/${loan.bookId}/add-stock`);

    // Hapus dari daftar peminjaman aktif
    loans.splice(loanIndex, 1);
    res.json({ message: "Buku berhasil dikembalikan" });
  } catch (error) {
    res.status(500).json({ message: "Sistem gagal mengembalikan buku" });
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Loan Service berjalan di http://localhost:${PORT}`);
});