# API Contract — Sistem Peminjaman Buku Perpustakaan

**Versi:** 1.0  
**Tanggal:** 18 Oktober 2026  
**Base URL pengembangan:** `http://localhost:3000`  
**Format komunikasi:** HTTP dengan JSON  
**Backend:** Node.js dan Express.js  
**Database:** MySQL  
**Pengujian API:** Postman

Dokumen ini menjelaskan kontrak API pada Sistem Peminjaman Buku Perpustakaan yang dikembangkan oleh Kelompok 4. Sistem menyediakan fitur autentikasi mahasiswa menggunakan NIM dan password, pengelolaan informasi buku, transaksi peminjaman, dan pengembalian buku.

Contoh request dan response dalam dokumen ini digunakan sebagai ilustrasi. Nama field, format respons, dan status HTTP harus disesuaikan dengan implementasi backend yang sebenarnya.

## 1. Informasi Proyek

| Item | Keterangan |
|---|---|
| Nama Proyek | Sistem Peminjaman Buku Perpustakaan |
| Kelompok | Kelompok 4 |
| Repository | https://github.com/thelevin0/vibe-coding-kelompok4 |
| Backend | Node.js dan Express.js |
| Database | MySQL |
| Format Komunikasi | HTTP/JSON |
| Tools Pengujian | Postman |
| Tanggal Dokumentasi | 18 Oktober 2026 |

## 2. Daftar Endpoint

| Layanan | Method | Endpoint | Fungsi | Autentikasi |
|---|---|---|---|---|
| Auth | `POST` | `/api/login` | Memvalidasi login mahasiswa menggunakan NIM dan password | Tidak |
| Books | `GET` | `/api/books` | Mengambil daftar buku | Perlu diverifikasi |
| Books | `GET` | `/api/books/{id}` | Mengambil detail buku berdasarkan ID | Perlu diverifikasi |
| Loans | `GET` | `/api/loans` | Mengambil data transaksi peminjaman jika tersedia pada backend | Perlu diverifikasi |
| Loans | `POST` | `/api/loans` | Membuat transaksi peminjaman buku | Perlu diverifikasi |
| Loans | `POST` | `/api/loans/{id}/return` | Memproses pengembalian buku jika route tersebut tersedia | Perlu diverifikasi |

## 3. Format Request dan Autentikasi

Request yang mengirimkan data dalam format JSON menggunakan header berikut jika sesuai dengan implementasi backend:

```http
Content-Type: application/json
Accept: application/json
```

Apabila endpoint menggunakan token autentikasi, request perlu menyertakan token sesuai mekanisme yang diterapkan backend. Contoh jika menggunakan Bearer Token:

```http
Authorization: Bearer <TOKEN>
```

Penggunaan Bearer Token harus dipastikan melalui kode autentikasi. Jangan mencantumkan password asli atau token aktif dalam dokumentasi maupun repository publik.

## 4. Detail Endpoint

### 4.1 Login Mahasiswa

- **Method:** `POST`
- **Endpoint:** `/api/login`
- **Fungsi:** Memvalidasi identitas mahasiswa berdasarkan NIM dan password.
- **Autentikasi:** Tidak diperlukan untuk proses login.
- **Request body:** Mengikuti nama field yang digunakan oleh backend.

**Contoh request body:**

```json
{
  "nim": "2441919013",
  "password": "<PASSWORD_UJI>"
}
```

Contoh tersebut hanya ilustrasi. Gunakan akun pengujian yang tersedia dan pastikan nama field sesuai dengan kode login.

**Respons berhasil — ilustrasi:**

```json
{
  "message": "Login berhasil",
  "user": {
    "nim": "2441919013"
  }
}
```

Format respons aktual dapat berbeda. Apabila backend menggunakan token, dokumentasikan token sesuai respons yang benar-benar dikembalikan.

**Skenario pengujian:**

- Login dengan NIM dan password yang benar.
- Login dengan password yang salah.
- Login menggunakan NIM yang tidak terdaftar.
- Memastikan respons login sesuai dengan implementasi backend.

### 4.2 Daftar Buku

- **Method:** `GET`
- **Endpoint:** `/api/books`
- **Fungsi:** Mengambil daftar buku yang tersedia dalam sistem.
- **Request body:** Tidak diperlukan.

**Contoh URL:**

```http
GET http://localhost:3000/api/books
```

**Contoh respons — ilustrasi:**

```json
{
  "message": "Data buku berhasil diambil",
  "data": [
    {
      "id": 1,
      "judul": "Pemrograman Web Dasar",
      "penulis": "Budi Santoso",
      "stok": 5
    }
  ]
}
```

Nama field seperti `judul`, `penulis`, dan `stok` hanya contoh. Gunakan field yang sesuai dengan struktur tabel buku dan respons API pada proyek.

**Skenario pengujian:**

- Mengambil seluruh daftar buku.
- Memastikan respons sesuai dengan data buku dalam database.
- Memeriksa informasi stok buku.
- Memastikan sistem menangani kondisi ketika data buku belum tersedia.

### 4.3 Detail Buku

- **Method:** `GET`
- **Endpoint:** `/api/books/{id}`
- **Fungsi:** Mengambil detail buku berdasarkan ID.
- **Request body:** Tidak diperlukan.

**Contoh URL jika endpoint tersedia:**

```http
GET http://localhost:3000/api/books/1
```

**Contoh respons — ilustrasi:**

```json
{
  "data": {
    "id": 1,
    "judul": "Pemrograman Web Dasar",
    "penulis": "Budi Santoso",
    "stok": 5
  }
}
```

Endpoint detail buku harus dipastikan tersedia pada route backend. Jika route tersebut belum dibuat, bagian ini perlu disesuaikan dengan fitur yang benar-benar diimplementasikan.

### 4.4 Membuat Peminjaman Buku

- **Method:** `POST`
- **Endpoint:** `/api/loans`
- **Fungsi:** Membuat transaksi peminjaman buku.
- **Request body:** Mengikuti field yang digunakan oleh backend.

**Contoh request body — ilustrasi:**

```json
{
  "nim": "2441919013",
  "bookId": 1
}
```

Contoh tersebut bukan jaminan bahwa backend menggunakan field `nim` dan `bookId`. Periksa controller dan query database untuk menentukan field yang benar.

**Aturan bisnis yang perlu divalidasi:**

- Mahasiswa tidak boleh memiliki lebih dari tiga peminjaman aktif.
- Buku yang stoknya habis tidak dapat dipinjam.
- Mahasiswa tidak boleh meminjam buku yang sama lagi ketika pinjaman sebelumnya masih aktif, sesuai kebutuhan proyek.
- Tanggal jatuh tempo ditetapkan tujuh hari setelah tanggal peminjaman.
- Transaksi peminjaman harus tersimpan dengan status yang sesuai dengan implementasi.

**Skenario pengujian:**

- Meminjam buku yang stoknya tersedia.
- Mencoba meminjam buku yang stoknya habis.
- Mencoba meminjam ketika sudah memiliki tiga peminjaman aktif.
- Mencoba meminjam buku yang sama ketika pinjaman sebelumnya masih aktif.
- Memeriksa penyimpanan tanggal peminjaman dan tanggal jatuh tempo.

### 4.5 Melihat Transaksi Peminjaman

- **Method:** `GET`
- **Endpoint:** `/api/loans`
- **Fungsi:** Mengambil data transaksi peminjaman jika endpoint tersebut tersedia pada backend.
- **Request body:** Tidak diperlukan.

**Contoh URL:**

```http
GET http://localhost:3000/api/loans
```

Respons aktual harus diperiksa melalui Postman dan kode backend. Jika endpoint mengembalikan seluruh transaksi, pastikan aksesnya dibatasi sesuai kebutuhan sistem. Jika endpoint hanya mengembalikan transaksi tertentu, dokumentasikan ketentuan tersebut.

### 4.6 Pengembalian Buku

- **Method:** `POST`
- **Endpoint:** `/api/loans/{id}/return`
- **Fungsi:** Memproses pengembalian berdasarkan ID transaksi, apabila route tersebut tersedia.
- **Request body:** Mengikuti implementasi backend.

**Contoh URL jika endpoint tersedia:**

```http
POST http://localhost:3000/api/loans/1/return
```

Setelah pengembalian berhasil, sistem perlu memperbarui status transaksi dan stok buku sesuai aturan bisnis yang digunakan.

**Skenario pengujian:**

- Mengembalikan transaksi yang valid.
- Memastikan status transaksi berubah sesuai implementasi.
- Memastikan stok buku diperbarui dengan benar.
- Menguji ID transaksi yang tidak ditemukan.
- Memastikan transaksi yang sudah dikembalikan tidak diproses secara keliru untuk kedua kalinya.

## 5. Status HTTP

| Status | Makna |
|---|---|
| `200 OK` | Request berhasil diproses. |
| `201 Created` | Data atau transaksi baru berhasil dibuat, apabila digunakan oleh backend. |
| `400 Bad Request` | Request tidak memenuhi validasi atau aturan bisnis. |
| `401 Unauthorized` | Autentikasi tidak tersedia atau tidak valid, jika mekanisme autentikasi diterapkan. |
| `403 Forbidden` | Pengguna tidak memiliki izin mengakses resource, jika otorisasi diterapkan. |
| `404 Not Found` | Endpoint atau data yang diminta tidak ditemukan. |
| `500 Internal Server Error` | Terjadi kesalahan pada server. |

Status HTTP di atas merupakan acuan umum. Status dan format pesan yang dicantumkan dalam dokumentasi final harus mengikuti respons aktual dari backend.

## 6. Aturan Bisnis Peminjaman

1. Mahasiswa melakukan login menggunakan NIM dan password.
2. Setiap mahasiswa dapat memiliki maksimal tiga peminjaman aktif.
3. Buku yang stoknya habis tidak dapat dipinjam.
4. Mahasiswa tidak boleh meminjam buku yang sama lebih dari sekali selama pinjaman sebelumnya masih aktif.
5. Tanggal jatuh tempo ditetapkan tujuh hari setelah tanggal peminjaman.
6. Proses pengembalian harus memperbarui status transaksi dan stok buku sesuai implementasi sistem.

Aturan tersebut perlu diuji melalui API dan dicocokkan dengan kode backend serta kebutuhan yang tercantum dalam dokumen proyek.

## 7. Skenario Pengujian API

| ID | Skenario | Hasil yang Diharapkan |
|---|---|---|
| T-01 | Login menggunakan NIM dan password yang benar | Login berhasil sesuai respons backend. |
| T-02 | Login menggunakan kredensial yang salah | Login ditolak. |
| T-03 | Mengambil daftar buku melalui `/api/books` | Data buku dikembalikan sesuai isi database. |
| T-04 | Mengambil detail buku berdasarkan ID | Detail buku dikembalikan jika endpoint tersedia dan ID valid. |
| T-05 | Meminjam buku dengan stok tersedia | Transaksi peminjaman berhasil dibuat. |
| T-06 | Meminjam buku yang stoknya habis | Request ditolak dan stok tidak menjadi negatif. |
| T-07 | Meminjam buku ketika sudah memiliki tiga pinjaman aktif | Request ditolak sesuai aturan batas peminjaman. |
| T-08 | Meminjam buku yang sama ketika pinjaman sebelumnya masih aktif | Request ditolak sesuai aturan bisnis proyek. |
| T-09 | Memeriksa tanggal jatuh tempo | Tanggal jatuh tempo sesuai ketentuan tujuh hari setelah peminjaman. |
| T-10 | Melihat transaksi melalui `/api/loans` | Data transaksi ditampilkan sesuai fungsi endpoint aktual. |
| T-11 | Mengembalikan buku | Status transaksi dan stok buku diperbarui sesuai implementasi. |
| T-12 | Mengakses ID buku atau transaksi yang tidak ditemukan | Backend mengembalikan respons yang sesuai. |

Hasil pengujian harus dicatat berdasarkan request dan response aktual menggunakan Postman. Skenario yang belum diuji tidak boleh ditandai berhasil. Lampirkan bukti pengujian yang relevan pada dokumentasi proyek.

## 8. Kesimpulan

API Contract ini menjadi dokumentasi awal untuk menjelaskan komunikasi antara frontend dan backend pada Sistem Peminjaman Buku Perpustakaan Kelompok 4. Endpoint login, daftar buku, dan transaksi peminjaman disesuaikan dengan informasi backend yang pernah ditampilkan pada proyek.

Sebelum dokumentasi dinyatakan final, seluruh endpoint, nama field request dan response, metode autentikasi, serta status HTTP perlu dicocokkan dengan route dan controller aktual. Dengan demikian, dokumentasi API dapat menggambarkan implementasi sistem secara akurat dan dapat digunakan sebagai acuan pengujian.
