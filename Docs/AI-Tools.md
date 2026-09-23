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

```

## 3. Arsitektur Sebelum dan Sesudah Dikembangkan

* **Sebelum (Monolith):** Seluruh logika aplikasi (login, daftar buku, peminjaman) menyatu di frontend menggunakan HTML, CSS, Vanilla JavaScript. Data disimpan secara lokal menggunakan browser `localStorage`.
* **Sesudah (Microservice):** Aplikasi dipecah menjadi tiga bagian utama yang saling terisolasi:
1. **Frontend:** Menangani antarmuka pengguna (UI).
2. **Book Service (Port 3001):** Mengelola entitas dan stok buku.
3. **Loan Service (Port 3002):** Mengelola transaksi peminjaman dan aturan batas maksimal kuota buku mahasiswa.



## 4. Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Backend (Microservices):** Node.js, Express.js.
* **Komunikasi Antar-Service:** REST API (menggunakan `fetch`).

## 5. Peran AI dalam Proses Pengembangan

* **Perancangan Arsitektur:** Membantu merancang pemisahan aplikasi Monolith menjadi arsitektur Microservice yang terstruktur.
* **Generasi Kode Dasar:** Menyusun kerangka file `package.json` dan `server.js` beserta konfigurasi Express.js dan middleware CORS.
* **Migrasi Data:** Memindahkan data dummy buku dari `script.js` (`localStorage`) ke dalam *in-memory array* pada server backend.
* **Integrasi API:** Memodifikasi kode frontend lama agar mengambil dan mengirim data melalui endpoint API, bukan lagi memanipulasi `localStorage` secara langsung.
* **Visualisasi:** Membantu merumuskan struktur pembuatan diagram komunikasi antar-service.

## 6. Kendala & Penyesuaian dari Hasil AI

* **Konteks Environment (Terminal):** Kode yang dihasilkan AI sudah tepat secara logika dan sintaks. Namun, intervensi manual tetap diperlukan untuk memastikan posisi direktori terminal (`cd`) sudah tepat berada di dalam folder spesifik masing-masing service sebelum mengeksekusi `npm install` dan `npm start`.
* **Keamanan Sistem Operasi:** Script eksekusi bawaan Node.js (`npm`) awalnya ditolak oleh sistem keamanan Windows (*PowerShell Execution Policy*). Developer harus menyesuaikan pengaturan hak akses terminal terlebih dahulu agar implementasi kode AI dapat dieksekusi.
