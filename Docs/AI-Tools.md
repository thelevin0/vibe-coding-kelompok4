# Dokumentasi Penggunaan AI Coding Tool

## 1. AI Coding Tool yang Digunakan
**Gemini (Google)**

## 2. Prompt Utama yang Digunakan
```text
"Saya sedang mengembangkan aplikasi Sistem Peminjaman Buku berbasis microservice menggunakan Node.js dan Express.js. Buatkan saya kode untuk Book Service.

Ketentuan Book Service:
1. Gunakan Express.js.
2. Tidak perlu menggunakan database eksternal. Gunakan in-memory array untuk menyimpan data buku (dummy data).
3. Gunakan data buku berikut sebagai data awal:
   [
     { "id": "B001", "judul": "Laskar Pelangi", "penulis": "Andrea Hirata", "stok": 3, "sinopsis": "Kisah perjuangan...", "lokasi": "Rak A1" },
     { "id": "B002", "judul": "Bumi Manusia", "penulis": "Pramoedya Ananta Toer", "stok": 0, "sinopsis": "Kisah Minke...", "lokasi": "Rak A2" }
   ]
   (tambahkan beberapa data lagi jika perlu, minimal 5).
4. Buat endpoint API berikut:
   - GET /api/books : Mengembalikan daftar semua buku. Mendukung query parameter ?search=judul dan ?filter=tersedia|tidak-tersedia.
   - GET /api/books/:id : Mengembalikan detail satu buku berdasarkan ID.
   - PUT /api/books/:id/reduce-stock : Mengurangi stok buku sebanyak 1 (jika stok > 0). Kembalikan response sukses/gagal.
   - PUT /api/books/:id/add-stock : Menambah stok buku sebanyak 1.
5. Service ini harus berjalan di port 3001.
6. Tambahkan middleware CORS agar bisa diakses oleh Frontend.

Berikan kode package.json (dependencies yang dibutuhkan) dan server.js (kode utamanya). Jelaskan juga cara menjalankannya."
