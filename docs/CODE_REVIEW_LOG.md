# Code Review Log — Sistem Peminjaman Buku Perpustakaan

## 1. Informasi Review

| Item | Keterangan |
|---|---|
| Nama Proyek | Sistem Peminjaman Buku Perpustakaan |
| Repository | https://github.com/thelevin0/vibe-coding-kelompok4 |
| Backend | Node.js dan Express.js |
| Database | MySQL |
| Komunikasi API | HTTP/JSON |
| Pengujian API | Postman |
| Tanggal Review | 18 Oktober 2026 |

## 2. Tujuan Review

Code review dilakukan untuk memeriksa kesesuaian implementasi sistem dengan kebutuhan fungsional, aturan bisnis, struktur database, dan dokumentasi API. Pemeriksaan mencakup autentikasi mahasiswa menggunakan NIM dan password, katalog buku, transaksi peminjaman, batas maksimal peminjaman, ketersediaan stok, tanggal jatuh tempo, serta pengembalian buku.

Review juga bertujuan mengidentifikasi kemungkinan ketidaksesuaian antara kode backend, struktur database, kebutuhan sistem, dan hasil pengujian API menggunakan Postman.

## 3. Hasil Code Review

### CR-01 — Konsistensi Struktur Database

- **Bagian yang diperiksa:** Struktur database MySQL, tabel mahasiswa atau pengguna, data buku, dan transaksi peminjaman sesuai struktur yang digunakan dalam implementasi.
- **Hasil pemeriksaan:** Struktur database perlu dicocokkan dengan kode backend, query SQL, dan struktur tabel aktual untuk memastikan relasi serta data yang digunakan sudah sesuai.
- **Keputusan:** Pertahankan struktur yang sudah sesuai. Perubahan dilakukan apabila ditemukan ketidaksesuaian.
- **Validasi:** Periksa struktur tabel, primary key, foreign key, serta proses penyimpanan transaksi peminjaman dan pengembalian.
- **Status:** Perlu diverifikasi terhadap implementasi aktual.

### CR-02 — Autentikasi dan Akses API

- **Bagian yang diperiksa:** Endpoint login mahasiswa menggunakan NIM dan password serta autentikasi JWT pada endpoint yang memerlukan akses pengguna.
- **Hasil pemeriksaan:** Pengujian API dalam PRD mencakup login berhasil, login dengan kredensial salah, serta akses tanpa token yang valid.
- **Keputusan:** Pertahankan implementasi apabila hasil pengujian sesuai dengan kebutuhan autentikasi.
- **Validasi:** Periksa respons login, validasi token, dan penolakan akses pada endpoint yang memerlukan autentikasi.
- **Status:** Hasil pengujian dilaporkan dalam PRD; perlu dipastikan kembali apabila terdapat perubahan kode.

### CR-03 — Validasi Transaksi Peminjaman dan Pengembalian

- **Bagian yang diperiksa:** Proses peminjaman buku, batas maksimal tiga buku aktif, ketersediaan stok, tanggal jatuh tempo tujuh hari setelah peminjaman, dan pengembalian buku.
- **Hasil pemeriksaan:** PRD mencatat skenario pengujian untuk peminjaman buku tersedia, penolakan ketika stok habis, penolakan ketika batas maksimal peminjaman tercapai, serta proses pengembalian buku.
- **Keputusan:** Pertahankan implementasi apabila seluruh aturan bisnis berjalan sesuai kebutuhan sistem.
- **Validasi:** Periksa respons API, perubahan status transaksi, perhitungan tanggal jatuh tempo, dan perubahan stok buku setelah peminjaman maupun pengembalian.
- **Status:** Hasil pengujian dilaporkan dalam PRD; perlu diverifikasi kembali terhadap implementasi terbaru.

### CR-04 — Validasi Peminjaman Buku yang Sama

- **Bagian yang diperiksa:** Validasi agar mahasiswa tidak meminjam buku yang sama lebih dari sekali ketika pinjaman sebelumnya masih aktif, sesuai aturan yang dicantumkan dalam kebutuhan proyek.
- **Hasil pemeriksaan:** PRD mencatat skenario pengujian penolakan peminjaman buku yang sama ketika masih terdapat pinjaman aktif.
- **Keputusan:** Pertahankan validasi apabila aturan tersebut telah diterapkan dan sesuai dengan kebutuhan sistem.
- **Validasi:** Lakukan pengujian terhadap mahasiswa yang sudah memiliki pinjaman aktif untuk buku yang sama.
- **Status:** Hasil pengujian dilaporkan dalam PRD; perlu dicocokkan dengan kode dan bukti pengujian.

## 4. Pemeriksaan Dokumentasi API

Dokumentasi API perlu diperiksa agar sesuai dengan endpoint yang benar-benar digunakan oleh backend. Pemeriksaan mencakup HTTP method, URL endpoint, fungsi layanan, kebutuhan autentikasi, format request dan response, serta alur pertukaran data menggunakan HTTP/JSON.

Pemeriksaan juga mencakup kesesuaian dokumentasi dengan fitur login, daftar dan detail buku, peminjaman, serta pengembalian buku. Setiap endpoint harus dicocokkan dengan route dan implementasi aktual agar tidak terdapat perbedaan antara dokumentasi dan aplikasi.

**Hasil:** Perlu dicocokkan dengan route backend, kode implementasi, dan hasil pengujian API yang tersedia.

**Status:** Perlu verifikasi akhir.

## 5. Kesimpulan

Code review pada Sistem Peminjaman Buku Perpustakaan Kelompok 4 difokuskan pada konsistensi database, autentikasi mahasiswa, endpoint API, validasi transaksi peminjaman, dan pengembalian buku. PRD telah mencatat berbagai skenario pengujian API menggunakan Postman sebagai bagian dari pemeriksaan fungsional sistem.

Hasil pengujian yang tercantum dalam PRD menjadi dasar awal untuk meninjau kesesuaian implementasi dengan kebutuhan proyek. Namun, status akhir code review harus ditetapkan berdasarkan pemeriksaan kode terbaru, struktur database aktual, dan bukti pengujian yang tersedia. Dengan demikian, kesimpulan review tidak menyatakan seluruh sistem telah sesuai sebelum proses verifikasi akhir dilakukan.