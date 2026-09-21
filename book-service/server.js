const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Mengizinkan service ini dipanggil dari Frontend
app.use(express.json());

// Data buku sementara (in-memory)
let books = [
  { id: "B001", judul: "Laskar Pelangi", penulis: "Andrea Hirata", stok: 3, sinopsis: "Kisah perjuangan...", lokasi: "Rak A1" },
  { id: "B002", judul: "Bumi Manusia", penulis: "Pramoedya Ananta Toer", stok: 0, sinopsis: "Kisah Minke...", lokasi: "Rak A2" },
  { id: "B003", judul: "Filosofi Teras", penulis: "Henry Manampiring", stok: 5, sinopsis: "Pengantar filsafat Stoa...", lokasi: "Rak B1" },
  { id: "B004", judul: "Cantik Itu Luka", penulis: "Eka Kurniawan", stok: 2, sinopsis: "Kisah keluarga...", lokasi: "Rak A3" },
  { id: "B010", judul: "Da Vinci Code", penulis: "Dan Brown", stok: 3, sinopsis: "Petualangan memecahkan teka-teki...", lokasi: "Rak D2" }
];

// 1. API: Mengambil semua buku (bisa dengan filter & pencarian)
app.get('/api/books', (req, res) => {
  const keyword = req.query.search ? req.query.search.toLowerCase() : "";
  const filter = req.query.filter || "semua";

  const filteredBooks = books.filter(book => {
    const matchesKeyword = book.judul.toLowerCase().includes(keyword);
    let matchesFilter = true;
    if (filter === "tersedia") matchesFilter = book.stok > 0;
    else if (filter === "tidak-tersedia") matchesFilter = book.stok === 0;

    return matchesKeyword && matchesFilter;
  });

  res.json(filteredBooks);
});

// 2. API: Mengambil detail satu buku berdasarkan ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
  res.json(book);
});

// 3. API: Mengurangi stok buku saat dipinjam
app.put('/api/books/:id/reduce-stock', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
  if (book.stok <= 0) return res.status(400).json({ message: "Stok habis" });

  book.stok -= 1;
  res.json({ message: "Stok berhasil dikurangi", book });
});

// 4. API: Menambah stok buku saat dikembalikan
app.put('/api/books/:id/add-stock', (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

  book.stok += 1;
  res.json({ message: "Stok berhasil ditambah", book });
});

// Menjalankan server di port 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Book Service berjalan di http://localhost:${PORT}`);
});