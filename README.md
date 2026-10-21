# Sistem Peminjaman Buku Perpustakaan - Kelompok 4

## 1. Deskripsi Proyek

Backend API perpustakaan terintegrasi yang memungkinkan mahasiswa login, melihat katalog buku, meminjam buku, mengembalikan buku, dan melihat riwayat peminjaman. Seluruh data (akun, buku, dan transaksi peminjaman) disimpan di database MySQL/MariaDB. Semua endpoint dapat diuji lewat Postman atau alat sejenis.

Proyek ini adalah kelanjutan dari tugas sebelumnya (aplikasi berbasis localStorage) yang dikembangkan menjadi layanan backend dengan database, dan dikerjakan untuk UTS mata kuliah Vibe Coding.

**Arsitektur:** Client (Postman / Frontend) → HTTP/JSON → Backend API (Express) → Database (MySQL)

**Business rule:**

| ID | Aturan |
|----|--------|
| BR-01 | Satu mahasiswa maksimal 3 buku aktif (dipinjam dan belum dikembalikan). |
| BR-02 | Buku yang tidak tersedia (stok 0) tidak dapat dipinjam. |
| BR-03 | Jatuh tempo = tanggal pinjam + 7 hari. |
| BR-04 | Satu judul buku tidak dapat dipinjam dua kali secara bersamaan oleh mahasiswa yang sama. |
| BR-05 | Pengembalian hanya dapat dilakukan oleh pemilik peminjaman. |

**Anggota kelompok:**

| Nama | NIM |
|------|-----|
| Muhammad Raihan | 2441919013 |
| Alya Roihanatul Jannah | 2441919018 |
| Siti Fathimah Az Zahra | 2441919024 |
| Muhammad Indrawan Ismail | 2441919028 |
| Muhammad Arsyad Roihan Maulaya | 2441919045 |

## 2. Technology Stack

| Komponen | Teknologi |
|----------|-----------|
| Backend | Node.js + Express.js (satu backend service) |
| Database | MySQL / MariaDB (driver `mysql2`) |
| Autentikasi | JWT (Bearer token) |
| Format API | HTTP/JSON |
| Frontend (pendukung) | HTML, CSS, Vanilla JavaScript, dilayani oleh backend |
| Alat uji API | Postman |
| AI assistant | Claude.ai |

## 3. Struktur Proyek

```text
vibe-coding-kelompok4/
├── docs/
│   ├── API-CONTRACT.md        Dokumentasi lengkap endpoint
│   └── CODE_REVIEW_LOG.md     Catatan review kode hasil AI
│   └── PRD.md                 Tujuan Aplikasi dan Fitur-fiturnya
├── backend/                   Express + MySQL2 (API)
├── frontend/                  index.html, script.js, style.css
├── database/
│   └── perpustakaan.sql       Skema dan data awal
├── api-test/
│   └── collection.json        Postman Collection (atau screenshot hasil uji)
├── .env.example
└── README.md
```

## 4. Kebutuhan Instalasi

Pastikan perangkat sudah memiliki:

- **Node.js** (disarankan versi LTS) beserta **npm**
- **MySQL atau MariaDB** (bisa lewat XAMPP)
- **Postman** (atau Insomnia, Bruno, Thunder Client) untuk pengujian API
- **Git** untuk meng-clone repository

Dependency backend (Express, MySQL2, dan lainnya) terpasang otomatis lewat `npm install` sesuai `backend/package.json`.

```bash
git clone https://github.com/thelevin0/vibe-coding-kelompok4.git
cd vibe-coding-kelompok4
```

## 5. Konfigurasi Database

1. **Nyalakan MySQL/MariaDB** (XAMPP: start *MySQL*).
2. **Import database** `database/perpustakaan.sql`, lewat phpMyAdmin (menu Import) atau lewat terminal:
```bash
   mysql -u root < database/perpustakaan.sql
```
   File ini membuat database `perpustakaan` sendiri beserta tabel dan data awal (akun uji dan data buku).
3. **Atur koneksi database dan JWT.** Salin `.env.example` menjadi `.env` di folder `backend/`:
```bash
   cd backend
   cp ../.env.example .env
```
   > ⚠️ File `.env` **wajib berada di folder `backend/`** (sejajar dengan `server.js`). Jika ditaruh di root, server tidak akan membacanya.

   Contoh isi `.env`:
```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=perpustakaan
   DB_PORT=3306
   JWT_SECRET=ganti_dengan_secret_kamu
   JWT_EXPIRES=1d
   PORT=3000
```
   > ⚠️ `JWT_SECRET` **wajib diisi**. Jika kosong, server gagal start. Sesuaikan `DB_USER` dan `DB_PASSWORD` dengan pengaturan MySQL di perangkatmu.

## 6. Cara Menjalankan Backend

Dari folder `backend/`:

```bash
npm install
npm start
```

Jika berhasil, backend berjalan di port yang diatur pada `.env` (default 3000). Frontend ikut dilayani oleh backend dan dapat dibuka di <http://localhost:3000>.

## 7. Base URL API

```text
http://localhost:3000/api
```

Semua endpoint kecuali `POST /api/login` wajib menyertakan header:

```text
Authorization: Bearer <token>
Content-Type: application/json
```

Token diperoleh dari respons `POST /api/login`.

## 8. Daftar Endpoint

| Layanan | Method | Endpoint | Fungsi | Perlu login? |
|---------|--------|----------|--------|--------------|
| Auth | POST | `/api/login` | Login dan mendapat token JWT | Tidak |
| Books | GET | `/api/books?search=&filter=semua\|tersedia\|tidak-tersedia` | Daftar buku, dengan pencarian dan filter ketersediaan | Ya |
| Books | GET | `/api/books/:id` | Detail satu buku | Ya |
| Loans | GET | `/api/loans` | Riwayat peminjaman mahasiswa yang login | Ya |
| Loans | POST | `/api/loans` | Membuat peminjaman, body: `{ "bookId": <id> }` | Ya |
| Loans | POST | `/api/loans/:loanId/return` | Mengembalikan buku (hanya pemilik peminjaman) | Ya |

Detail request, response, status code, validasi, serta contoh kasus berhasil dan gagal ada di [`docs/API-CONTRACT.md`](docs/API-CONTRACT.md).

## 9. Cara Menjalankan Pengujian API

Bukti pengujian disimpan di folder `api-test/`.

1. Pastikan backend sudah berjalan (langkah 6).
2. Buka Postman, lalu pilih **Import** dan pilih file `api-test/collection.json`.
3. Atur variabel collection `base_url` ke `http://localhost:3000/api`.
4. Jalankan request **Login** terlebih dahulu, lalu salin token dari respons ke variabel `token` (atau ke header `Authorization: Bearer <token>`).
5. Jalankan request lainnya secara berurutan, atau gunakan **Run collection**.

Skenario yang diuji:

| ID | Skenario | Hasil yang diharapkan |
|----|----------|-----------------------|
| T-01 | Login dengan akun valid | Berhasil, token JWT diterima |
| T-02 | Login dengan akun salah | Ditolak (401) |
| T-03 | Lihat daftar dan detail buku | Data buku dan status ketersediaan tampil |
| T-04 | Pinjam buku yang tersedia | Berhasil, stok berkurang, jatuh tempo 7 hari |
| T-05 | Pinjam buku yang tidak tersedia | Ditolak |
| T-06 | Pinjam buku ke-4 (melebihi batas 3) | Ditolak |
| T-07 | Kembalikan buku | Berhasil, stok bertambah |
| T-08 | Cek ketersediaan buku setelah pinjam dan kembali | Status ketersediaan ikut berubah |

## 10. Akun dan Data Uji untuk Login

| NIM | Password |
|-----|----------|
| 2201001 | 123456 |
| 2201002 | 123456 |
| 2201003 | 123456 |

Contoh body login:

```json
{
  "nim": "2201001",
  "password": "123456"
}
```

> Nama field body mengikuti implementasi backend. Samakan dengan `docs/API-CONTRACT.md`.

Data buku uji (minimal 10 buku, sebagian dengan stok 0) sudah tersedia dari `database/perpustakaan.sql` setelah di-import.

## 11. Dokumentasi Lain

- [`docs/API-CONTRACT.md`](docs/API-CONTRACT.md): kontrak API lengkap
- [`docs/CODE_REVIEW_LOG.md`](docs/CODE_REVIEW_LOG.md): temuan review dan perbaikan pada kode hasil AI

## 12. Troubleshooting

- **"JWT_SECRET belum diset di file .env"**: buat file `.env` di folder `backend/`, lalu isi `JWT_SECRET`.
- **"Tidak dapat terhubung ke server backend"**: backend belum berjalan (`npm start`), atau port 3000 dipakai aplikasi lain.
- **Login selalu gagal / "Terjadi kesalahan pada server"**: MySQL belum menyala, database belum di-import, atau user/password database berbeda (atur di `.env`).
- **Error 401 di web/Postman**: token kedaluwarsa atau belum login. Login ulang untuk mendapat token baru.
