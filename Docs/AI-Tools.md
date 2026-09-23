# Dokumentasi Penggunaan AI Coding Tool

## 1. AI Coding Tool yang Digunakan
**Gemini (Google)**

## 2. Arsitektur Sebelum dan Sesudah Dikembangkan

* **Sebelum (Monolith):** Seluruh logika aplikasi (login, daftar buku, peminjaman) menyatu di frontend menggunakan HTML, CSS, Vanilla JavaScript. Data disimpan secara lokal menggunakan browser `localStorage`.
* **Sesudah (Microservice):** Aplikasi dipecah menjadi tiga bagian utama yang saling terisolasi:
1. **Frontend:** Menangani antarmuka pengguna (UI).
2. **Book Service (Port 3001):** Mengelola entitas dan stok buku.
3. **Loan Service (Port 3002):** Mengelola transaksi peminjaman dan aturan batas maksimal kuota buku mahasiswa.



## 3. Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Backend (Microservices):** Node.js, Express.js.
* **Komunikasi Antar-Service:** REST API (menggunakan `fetch`).

## 4. Peran AI dalam Proses Pengembangan

* **Perancangan Arsitektur:** Membantu merancang pemisahan aplikasi Monolith menjadi arsitektur Microservice yang terstruktur.
* **Generasi Kode Dasar:** Menyusun kerangka file `package.json` dan `server.js` beserta konfigurasi Express.js dan middleware CORS.
* **Migrasi Data:** Memindahkan data dummy buku dari `script.js` (`localStorage`) ke dalam *in-memory array* pada server backend.
* **Integrasi API:** Memodifikasi kode frontend lama agar mengambil dan mengirim data melalui endpoint API, bukan lagi memanipulasi `localStorage` secara langsung.
* **Visualisasi:** Membantu merumuskan struktur pembuatan diagram komunikasi antar-service.

## 5. Kendala & Penyesuaian dari Hasil AI

* **Konteks Environment (Terminal):** Kode yang dihasilkan AI sudah tepat secara logika dan sintaks. Namun, intervensi manual tetap diperlukan untuk memastikan posisi direktori terminal (`cd`) sudah tepat berada di dalam folder spesifik masing-masing service sebelum mengeksekusi `npm install` dan `npm start`.
* **Keamanan Sistem Operasi:** Script eksekusi bawaan Node.js (`npm`) awalnya ditolak oleh sistem keamanan Windows (*PowerShell Execution Policy*). Developer harus menyesuaikan pengaturan hak akses terminal terlebih dahulu agar implementasi kode AI dapat dieksekusi.
