# Sistem Peminjaman Buku Perpustakaan (Microservice)

Proyek ini adalah pengembangan dari aplikasi monolith sebelumnya menjadi arsitektur berbasis microservice. Terdapat pemisahan antara antarmuka pengguna (Frontend) dan layanan pengelola data (Backend).

## Daftar Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Backend (Microservices):** Node.js, Express.js.
* **Komunikasi Antar-Service:** REST API (Axios).
* **Penyimpanan:** In-memory array (Dummy Data).

## Struktur Microservice
1. **Frontend:** Menampilkan antarmuka web.
2. **Book Service (Port 3001):** Mengelola data buku dan stok.
3. **Loan Service (Port 3002):** Mengelola transaksi peminjaman dan pengembalian buku.

## Cara Menjalankan Aplikasi

**1. Menjalankan Book Service**
- Buka terminal, masuk ke folder `book-service`.
- Jalankan perintah `npm install`.
- Jalankan perintah `npm start`.

**2. Menjalankan Loan Service**
- Buka terminal baru, masuk ke folder `loan-service`.
- Jalankan perintah `npm install`.
- Jalankan perintah `npm start`.

**3. Menjalankan Frontend**
- Buka folder `frontend` di File Explorer.
- Klik ganda file `index.html` untuk membukanya di browser.
- Gunakan akun mahasiswa uji coba untuk login (Contoh: NIM `2201002`, Password `pass123`).