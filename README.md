# Sistem Peminjaman Buku Perpustakaan - Kelompok 4

```text
vibe-coding-kelompok4/
├── backend/        Express + MySQL2 (API)
├── frontend/       index.html, script.js, style.css
├── perpustakaan.sql
├── .env.example
└── README.md
```

## Cara menjalankan

1. **Nyalakan MySQL/MariaDB** (XAMPP: start *MySQL*).
2. **Import database** `perpustakaan.sql` (phpMyAdmin → Import, atau `mysql -u root < perpustakaan.sql`).
   File ini sudah membuat database `perpustakaan` sendiri.
3. **(Opsional) atur koneksi DB.** Default: host `localhost`, user `root`, password kosong, port `3306`.
   Kalau berbeda, salin `.env.example` jadi `.env` lalu ubah isinya.
4. **Jalankan backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```
5. **Buka aplikasi di** <http://localhost:3000> (frontend ikut dilayani oleh backend).
   Membuka `frontend/index.html` langsung / Live Server juga tetap bisa, selama backend jalan di port 3000.

## Akun uji coba

| NIM     | Password |
|---------|----------|
| 2201001 | 123456   |
| 2201002 | 123456   |
| 2201003 | 123456   |

## Endpoint

```text
POST /api/login
GET  /api/books?search=&filter=semua|tersedia|tidak-tersedia
GET  /api/books/:id
GET  /api/loans/:nim              riwayat peminjaman (aktif + sudah dikembalikan)
POST /api/loans                   body: { nim, bookId }
POST /api/loans/:loanId/return    body: { nim }  (hanya pemilik pinjaman)
```

Aturan: maksimal 3 buku aktif per mahasiswa, lama pinjam 7 hari, satu judul tidak bisa dipinjam dua kali bersamaan.

## Troubleshooting

- **"Tidak dapat terhubung ke server backend"** → backend belum jalan (`npm start`) atau port 3000 dipakai aplikasi lain.
- **Login selalu gagal / "Terjadi kesalahan pada server"** → MySQL belum menyala, database belum di-import, atau user/password DB berbeda (atur di `.env`).
