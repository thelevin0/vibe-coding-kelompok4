# DOKUMENTASI PENGGUNAAN AI
## Proyek Sistem Peminjaman Buku Perpustakaan — Vibe Coding Kelompok 4

## 1. Identitas Proyek

| Komponen | Keterangan |
|---|---|
| Nama Proyek | Sistem Peminjaman Buku Perpustakaan |
| Repositori | https://github.com/thelevin0/vibe-coding-kelompok4.git |
| Backend | Node.js dan Express.js |
| Basis Data | MySQL |
| Komunikasi API | HTTP/JSON |
| Library Database | mysql2/promise |
| Alat Pengujian API | Postman |
| AI yang Digunakan | Claude, ChatGPT, Gemini, dan DeepSeek |
| Mata Kuliah | Vibe Coding |
| Tujuan Dokumentasi | Mencatat peran AI, prompt kerja, proses review, verifikasi, dan batasan penggunaan AI. |

### 1.1 Anggota Kelompok

| No. | Nama Anggota | NIM |
|---|---|---|
| 1 | Muhammad Raihan | 2441919013 |
| 2 | Alya Roihanatul Jannah | 2441919018 |
| 3 | Siti Fathimah Az Zahra | 2441919024 |
| 4 | Muhammad Indrawan Ismail | 2441919028 |
| 5 | Muhammad Arsyad Roihan Maulaya | 2441919045 |

## 2. Tujuan Penggunaan AI

Claude, ChatGPT, Gemini, dan DeepSeek digunakan sebagai alat bantu dalam pengembangan Sistem Peminjaman Buku Perpustakaan. AI membantu proses memahami kebutuhan sistem, menyusun struktur basis data, mengembangkan endpoint API, meninjau kode, serta menyusun dokumentasi dan skenario pengujian.

Claude digunakan untuk membantu penyusunan dan penyesuaian struktur basis data, sedangkan ChatGPT membantu pengembangan dan peninjauan endpoint API. Gemini dan DeepSeek juga digunakan sesuai kebutuhan pengerjaan berdasarkan aktivitas yang benar-benar dilakukan.

AI tidak menggantikan keputusan anggota kelompok. Setiap saran terkait kode, endpoint, autentikasi, struktur tabel, aturan peminjaman, dan hasil pengujian harus diperiksa terhadap implementasi proyek. Pengujian API dilakukan menggunakan Postman untuk memastikan kesesuaian hasil dengan kebutuhan sistem.

## 3. Pembagian Peran AI

| Alat | Peran dalam Alur Kerja |
|---|---|
| Claude | Membantu penyusunan dan penyesuaian struktur basis data, relasi tabel, serta aturan peminjaman buku. |
| ChatGPT | Membantu pengembangan endpoint API, peninjauan kode, penyusunan dokumentasi, dan skenario pengujian. |
| Gemini | Digunakan sebagai AI assistant sesuai aktivitas pengerjaan yang sebenarnya. |
| DeepSeek | Digunakan sebagai AI assistant sesuai kebutuhan pengerjaan yang sebenarnya. |
| Anggota Kelompok | Menentukan kebutuhan sistem, memeriksa kode, menjalankan pengujian, mengambil keputusan teknis, dan memastikan dokumentasi sesuai implementasi. |

Catatan: Aktivitas spesifik Gemini dan DeepSeek perlu disesuaikan dengan riwayat penggunaan yang sebenarnya. Hasil AI tidak langsung dianggap benar sebelum diperiksa oleh anggota kelompok.

## 4. Prinsip Penggunaan AI

### 4.1 Berbasis Kebutuhan Proyek

Saran AI harus sesuai dengan kebutuhan sistem, seperti login mahasiswa, katalog buku, peminjaman, riwayat peminjaman, dan pengembalian buku.

### 4.2 Tidak Mengarang Hasil

AI tidak boleh menjadi dasar untuk menyatakan endpoint tersedia, pengujian berhasil, atau masalah telah diperbaiki tanpa bukti aktual.

### 4.3 Review Sebelum Perubahan

Kode dan saran AI harus diperiksa sebelum diterapkan. Anggota kelompok perlu memahami tujuan perubahan dan dampaknya terhadap sistem.

### 4.4 Validasi Manual

Anggota kelompok menjalankan aplikasi dan menguji endpoint menggunakan Postman atau metode lain yang sesuai. Hasil aktual dicatat berdasarkan pengujian yang benar-benar dilakukan.

### 4.5 Kesesuaian Aturan Bisnis

Aturan bisnis yang harus diperiksa meliputi:

1. Mahasiswa hanya dapat memiliki maksimal tiga buku yang masih dipinjam secara aktif.
2. Buku yang stoknya habis tidak dapat dipinjam.
3. Tanggal jatuh tempo adalah tujuh hari setelah tanggal peminjaman.
4. Status transaksi membedakan buku yang masih dipinjam dan yang sudah dikembalikan.
5. Stok buku diperbarui sesuai proses peminjaman dan pengembalian.

### 4.6 Keamanan Informasi

Password, token JWT, API key, kredensial database, isi file `.env`, dan data pribadi tidak boleh dimasukkan ke prompt AI tanpa perlindungan yang sesuai.

### 4.7 Pencatatan Keputusan

Saran AI yang diterima, diubah, atau ditolak perlu dicatat berdasarkan keputusan anggota kelompok dan bukti pemeriksaan.

## 5. Alur Kerja Penggunaan AI

1. Menentukan kebutuhan sistem berdasarkan dokumen kebutuhan proyek.
2. Meminta bantuan AI untuk memahami kebutuhan dan menyusun solusi teknis awal.
3. Menggunakan Claude untuk membantu penyusunan atau penyesuaian struktur basis data.
4. Menggunakan ChatGPT untuk membantu pengembangan atau peninjauan endpoint API.
5. Memeriksa kode, autentikasi JWT, metode HTTP, request, response, dan validasi.
6. Memeriksa penerapan aturan peminjaman dan pengembalian.
7. Menyusun skenario pengujian berdasarkan endpoint yang tersedia.
8. Menjalankan pengujian API menggunakan Postman.
9. Membandingkan implementasi dengan dokumentasi API, struktur basis data, dan hasil pengujian.
10. Memperbaiki bagian yang tidak sesuai dan melakukan pemeriksaan sebelum perubahan disimpan ke repositori GitHub.

Penggunaan AI tidak menghilangkan tanggung jawab anggota kelompok untuk memahami, memeriksa, dan menguji kode.

## 6. Kumpulan Prompt Kerja

Prompt berikut disusun sebagai dokumentasi pola kerja AI berdasarkan kebutuhan proyek. Jika diperlukan bukti bahwa prompt benar-benar pernah digunakan, lampirkan riwayat percakapan atau tangkapan layar yang sesuai.

### 6.1 Prompt untuk Claude — Struktur Database

Saya sedang mengembangkan Sistem Peminjaman Buku Perpustakaan menggunakan Node.js, Express.js, dan MySQL. Bantu saya menyusun dan meninjau struktur database berdasarkan kebutuhan sistem yang saya berikan.

Sistem memiliki data mahasiswa, buku, dan transaksi peminjaman. Database perlu mendukung login mahasiswa, katalog buku, peminjaman, riwayat transaksi, dan pengembalian buku.

Aturan bisnis:
1. Mahasiswa maksimal memiliki tiga buku yang sedang dipinjam.
2. Buku yang stoknya habis tidak dapat dipinjam.
3. Tanggal jatuh tempo adalah tujuh hari setelah peminjaman.
4. Transaksi harus terhubung dengan mahasiswa dan buku yang sesuai.
5. Status transaksi membedakan buku yang masih dipinjam dan yang sudah dikembalikan.

Tugas:
1. Jelaskan struktur tabel yang diperlukan.
2. Tentukan primary key dan foreign key.
3. Jelaskan hubungan antartabel.
4. Periksa kesesuaian struktur dengan aturan bisnis.
5. Hindari kolom atau relasi yang tidak diperlukan.
6. Jelaskan bagian yang harus diperiksa terhadap database aktual.

Jangan menyatakan struktur database sudah benar sebelum dibandingkan dengan implementasi proyek.

### 6.2 Prompt untuk ChatGPT — Endpoint API

Saya sedang mengembangkan Sistem Peminjaman Buku Perpustakaan menggunakan Node.js, Express.js, dan MySQL. Bantu saya mengembangkan atau meninjau endpoint API berdasarkan kebutuhan sistem dan kode yang saya berikan.

Fitur sistem meliputi login mahasiswa, daftar buku, detail buku, peminjaman, daftar transaksi, dan pengembalian buku.

Tugas:
1. Periksa endpoint dan metode HTTP.
2. Periksa request dan response.
3. Periksa autentikasi JWT.
4. Periksa validasi data pengguna.
5. Pastikan mahasiswa hanya dapat mengakses transaksi miliknya.
6. Periksa batas maksimal tiga buku aktif.
7. Periksa penolakan peminjaman ketika stok habis.
8. Periksa perhitungan jatuh tempo tujuh hari.
9. Periksa perubahan status dan stok ketika pengembalian.
10. Jelaskan file yang perlu diperiksa atau diubah.

Berikan rekomendasi berdasarkan kode yang saya berikan. Jangan mengarang endpoint dan jangan menyatakan solusi berhasil sebelum diuji.

### 6.3 Prompt untuk AI — Pemecahan Masalah Kode

Saya sedang mengembangkan Sistem Peminjaman Buku menggunakan Node.js, Express.js, dan MySQL. Saya akan memberikan kode, pesan error, atau hasil request yang bermasalah.

Bantu saya:
1. Menjelaskan kemungkinan penyebab error berdasarkan bukti.
2. Memeriksa hubungan route, controller, koneksi database, dan query SQL.
3. Menunjukkan bagian kode yang bermasalah.
4. Memberikan perbaikan yang sesuai dengan struktur proyek.
5. Menghindari perubahan yang tidak berkaitan.
6. Menjelaskan cara menerapkan perubahan.
7. Memberikan langkah pengujian setelah perbaikan.

Jangan mengklaim masalah telah diperbaiki sebelum saya menjalankan kode dan memeriksa hasilnya. Jika informasi belum cukup, jelaskan informasi tambahan yang diperlukan.

### 6.4 Prompt untuk ChatGPT — Pengujian Postman

Saya sedang menguji API Sistem Peminjaman Buku Perpustakaan. Bantu saya menyusun skenario pengujian berdasarkan endpoint yang benar-benar tersedia.

Skenario yang perlu diperiksa:
1. Login dengan kredensial valid.
2. Login dengan kredensial salah.
3. Melihat daftar buku.
4. Melihat detail buku.
5. Mengakses endpoint terlindungi tanpa token valid.
6. Meminjam buku yang tersedia.
7. Meminjam buku yang stoknya habis.
8. Meminjam buku ketika sudah memiliki tiga buku aktif.
9. Meminjam buku yang sama dua kali jika aturan tersebut diterapkan.
10. Mengembalikan buku.
11. Memeriksa perubahan stok dan status transaksi.

Untuk setiap skenario, tuliskan ID, tujuan, prasyarat, langkah pengujian, request, hasil yang diharapkan, hasil aktual, status, dan bukti.

Jangan mengisi hasil aktual berdasarkan perkiraan. Hasil harus didasarkan pada respons Postman yang benar-benar diperoleh.

### 6.5 Prompt untuk AI — Review Database dan Dokumentasi

Bantu saya meninjau konsistensi antara dokumen kebutuhan, struktur database, kode backend, dokumentasi API, dan hasil pengujian.

Periksa:
1. Nama tabel dan kolom.
2. Primary key, foreign key, dan relasi tabel.
3. Endpoint dan metode HTTP.
4. Field request dan response.
5. Autentikasi dan hak akses.
6. Aturan maksimal tiga buku aktif.
7. Perubahan stok dan status transaksi.
8. Perhitungan jatuh tempo tujuh hari.
9. Kesesuaian dokumentasi dengan hasil pengujian.

Sajikan temuan dalam tabel berisi bagian yang diperiksa, kondisi, bukti, dampak, rekomendasi, dan status verifikasi. Jika informasi belum cukup, tuliskan "belum dapat diverifikasi".

### 6.6 Prompt untuk ChatGPT — Pemeriksaan Konsistensi Laporan

Bantu saya memeriksa dokumentasi proyek Sistem Peminjaman Buku Perpustakaan Kelompok 4 berdasarkan dokumen kebutuhan, dokumentasi API, database, kode backend, dan bukti pengujian.

Periksa:
1. Kesesuaian fitur dengan implementasi.
2. Kesesuaian endpoint dengan route aktual.
3. Kesesuaian database dengan kode aplikasi.
4. Konsistensi aturan bisnis.
5. Dukungan bukti terhadap hasil pengujian.
6. Klaim yang belum diverifikasi.
7. Informasi rahasia dalam dokumentasi.
8. Perbedaan antara kebutuhan dan implementasi.

Buat daftar temuan, bukti, dampak, dan rekomendasi. Bedakan informasi terverifikasi dengan informasi yang masih perlu diperiksa.

### 6.7 Prompt untuk AI — Pemeriksaan Sebelum Push ke GitHub

Lakukan pemeriksaan akhir terhadap proyek Sistem Peminjaman Buku sebelum perubahan disimpan atau di-push ke GitHub.

Periksa:
1. Konsistensi fitur, endpoint, dan aturan bisnis.
2. Kesesuaian dokumentasi dengan kode dan database.
3. Kesesuaian hasil pengujian dengan bukti Postman.
4. Kelengkapan dokumentasi API dan README.
5. Kode yang tidak sesuai kebutuhan.
6. Password, token, API key, atau kredensial yang mungkin tersimpan.
7. Perintah yang berisiko mengubah atau menghapus database.
8. Bagian yang perlu diperbaiki sebelum penyerahan.

Berikan temuan dan rekomendasi berdasarkan tingkat risiko. Jangan menyatakan proyek bebas bug hanya berdasarkan pemeriksaan teks. Jelaskan perubahan yang disarankan sebelum mengubah file.

## 7. Checklist Review Teknis

| ID | Area Review | Hal yang Diperiksa | Status |
|---|---|---|---|
| R-01 | API | Endpoint dan metode HTTP sesuai route aktual. | Perlu diverifikasi terhadap kode. |
| R-02 | Request dan Response | Nama field, format data, dan validasi sesuai implementasi. | Perlu diverifikasi terhadap kode. |
| R-03 | Autentikasi | Login mahasiswa dan validasi JWT berjalan sesuai kebutuhan. | Perlu diverifikasi terhadap kode dan pengujian. |
| R-04 | Otorisasi | Mahasiswa hanya dapat mengakses transaksi miliknya sendiri. | Perlu pengujian. |
| R-05 | Peminjaman | Stok tersedia dan batas maksimal tiga buku aktif diterapkan. | Dilaporkan dalam PRD; perlu pemeriksaan ulang jika implementasi berubah. |
| R-06 | Jatuh Tempo | Jatuh tempo dihitung tujuh hari setelah peminjaman. | Dilaporkan dalam PRD; perlu pemeriksaan ulang jika implementasi berubah. |
| R-07 | Pengembalian | Status transaksi dan stok berubah sesuai proses pengembalian. | Dilaporkan dalam PRD; perlu pemeriksaan ulang jika implementasi berubah. |
| R-08 | Database | Struktur tabel, relasi, dan koneksi sesuai kode backend. | Perlu diverifikasi. |
| R-09 | Dokumentasi | Dokumentasi API sesuai endpoint aktual. | Perlu perbandingan akhir. |
| R-10 | Keamanan | Tidak ada password, token, API key, atau kredensial dalam dokumentasi dan repository. | Perlu pemeriksaan akhir. |

## 8. Catatan Hasil Review

| Tanggal | Reviewer/Alat | Ruang Lingkup | Temuan | Keputusan/Tindakan | Bukti Verifikasi |
|---|---|---|---|---|---|
| [14-10-2026] | Claude | Struktur database dan aturan peminjaman | Membantu penyusunan dan penyesuaian struktur database. | Sesuaikan dengan keputusan aktual tim. | Struktur database atau riwayat percakapan. |
| [14-10-2026] | ChatGPT | Endpoint API | Membantu pengembangan dan peninjauan endpoint API. | Sesuaikan dengan keputusan aktual tim. | Kode endpoint atau riwayat percakapan. |
| [14-10-2026] | Gemini/DeepSeek | [Bagian yang diperiksa] | [Temuan berdasarkan aktivitas aktual] | [Diterima/diubah/ditolak] | [File, log, atau tangkapan layar] |
| [14-10-2026] | Manual/Postman | Pengujian API | Pengujian login, buku, peminjaman, dan pengembalian dilaporkan dalam PRD. | Cocokkan dengan implementasi terbaru. | Tangkapan layar atau hasil request Postman. |

### 8.1 Format Pencatatan Satu Temuan Review

| Komponen | Keterangan |
|---|---|
| ID | [R-xx] |
| Tanggal | [Tanggal pemeriksaan] |
| Sumber yang Diperiksa | [File, endpoint, kode, atau hasil pengujian] |
| Temuan | [Uraian masalah atau hasil pemeriksaan] |
| Bukti | [Kutipan kode, hasil request, atau lokasi file] |
| Dampak | [Risiko atau pengaruh terhadap sistem] |
| Rekomendasi | [Tindakan yang disarankan] |
| Keputusan Tim | [Diterima/diubah/ditolak] |
| Hasil Verifikasi | [Hasil aktual atau belum diuji] |

Catatan: Isi tanggal dan keputusan berdasarkan riwayat kerja yang sebenarnya. Jangan membuat hasil review seolah-olah sudah terjadi jika tidak ada bukti pendukung.

## 9. Pencatatan Pengujian

Berdasarkan laporan pengujian dalam PRD Kelompok 4, pengujian API dilakukan menggunakan Postman. Pengujian yang dilaporkan meliputi login, daftar dan detail buku, peminjaman, penolakan peminjaman, pengembalian, dan perubahan stok.

| ID | Skenario | Hasil yang Diharapkan | Hasil yang Dilaporkan dalam PRD | Status | Bukti |
|---|---|---|---|---|---|
| T-01 | Login dengan kredensial valid | Login berhasil dan token JWT diberikan. | Berhasil sesuai laporan PRD. | Lulus dalam PRD. | Bukti pengujian Postman. |
| T-02 | Login dengan kredensial salah | Login ditolak dengan respons autentikasi yang sesuai. | 401 Unauthorized. | Lulus dalam PRD. | Bukti pengujian Postman. |
| T-03 | Melihat daftar dan detail buku | Data buku ditampilkan sesuai kebutuhan akses. | Data buku ditampilkan sesuai laporan PRD. | Lulus dalam PRD. | Bukti pengujian Postman. |
| T-04 | Meminjam buku yang tersedia | Transaksi dibuat, stok berkurang, dan jatuh tempo ditetapkan tujuh hari setelah peminjaman. | 201 Created; tanggal pinjam 20 Oktober 2026 dan jatuh tempo 27 Oktober 2026. | Lulus dalam PRD. | Gambar 8 pada PRD. |
| T-05 | Meminjam buku yang stoknya habis | Permintaan ditolak dan stok tidak berkurang. | 400 Bad Request dengan pesan "Stok habis". | Lulus dalam PRD. | Gambar 9 pada PRD. |
| T-06 | Meminjam buku ketika memiliki tiga buku aktif | Permintaan ditolak karena batas maksimal tercapai. | 400 Bad Request dengan pesan batas tiga buku aktif. | Lulus dalam PRD. | Gambar 10 pada PRD. |
| T-07 | Mengembalikan buku | Status transaksi berubah menjadi dikembalikan dan tanggal pengembalian tercatat. | 200 OK dengan pesan "Buku berhasil dikembalikan" dan status `returned`. | Lulus dalam PRD. | Gambar 12 pada PRD. |
| T-08 | Memeriksa stok setelah transaksi | Stok dan status buku diperbarui sesuai proses peminjaman atau pengembalian. | Pembaruan stok/status dilaporkan dalam PRD. | Lulus sesuai laporan PRD. | Bukti pengujian stok dalam PRD. |
| T-09 | Meminjam buku yang sama dua kali | Permintaan kedua ditolak jika aturan tersebut diterapkan. | Penolakan dengan pesan "Anda sudah meminjam buku ini" dilaporkan dalam PRD. | Perlu pemeriksaan ulang. | Bukti pengujian peminjaman buku yang sama. |

Catatan: Status di atas merupakan status yang dilaporkan dalam PRD, bukan pengujian baru yang dilakukan saat dokumentasi ini disusun. Jika kode berubah, lakukan pengujian ulang dan sesuaikan status dengan bukti terbaru.

## 10. Batasan dan Risiko Penggunaan AI

Penggunaan AI dalam pengembangan Sistem Peminjaman Buku memiliki beberapa batasan dan risiko.

1. AI dapat menghasilkan kode atau informasi yang tidak sesuai dengan struktur proyek dan versi teknologi.
2. Contoh request dan response dari AI bukan bukti bahwa API benar-benar menghasilkan respons tersebut.
3. Saran perbaikan kode tidak membuktikan masalah sudah teratasi sebelum dilakukan pengujian.
4. Struktur database yang disarankan AI harus dibandingkan dengan database aktual.
5. Dokumentasi endpoint harus sesuai dengan route yang benar-benar tersedia.
6. Keamanan sistem tidak dapat dijamin hanya melalui pemeriksaan teks atau saran AI.
7. Kesalahan memahami kode AI dapat menyebabkan implementasi tidak sesuai kebutuhan.
8. Informasi yang tidak memiliki bukti cukup harus ditandai sebagai belum dapat diverifikasi.

Anggota kelompok tetap bertanggung jawab memeriksa kode, memahami alur sistem, menjalankan pengujian, dan menentukan apakah saran AI layak diterapkan.

## 11. Privasi dan Keamanan Data

Dalam menggunakan Claude, ChatGPT, Gemini, dan DeepSeek, anggota kelompok perlu memperhatikan keamanan informasi proyek.

1. Jangan mengunggah file `.env`, password, token JWT, API key, atau kredensial database ke prompt AI.
2. Samarkan data pribadi dan data pengujian yang bersifat sensitif.
3. Periksa screenshot, log, dan potongan kode sebelum membagikannya kepada AI.
4. Periksa perintah yang disarankan AI sebelum dijalankan, terutama perintah yang dapat mengubah atau menghapus database.
5. Buat cadangan sebelum melakukan perubahan database yang berisiko.
6. Tinjau perubahan kode sebelum dimasukkan ke branch utama atau di-push ke GitHub.
7. Pastikan dokumentasi yang dikumpulkan tidak memuat informasi rahasia yang dapat digunakan untuk mengakses sistem.

Keamanan proyek tidak hanya bergantung pada AI, tetapi juga pada ketelitian anggota kelompok dalam memeriksa dan mengelola kode serta data.

## 12. Kesimpulan

Claude, ChatGPT, Gemini, dan DeepSeek digunakan sebagai alat bantu dalam proses pengembangan Sistem Peminjaman Buku Perpustakaan Kelompok 4. Berdasarkan pembagian peran yang tercatat, Claude membantu penyusunan dan penyesuaian struktur database, sedangkan ChatGPT membantu pengembangan dan peninjauan endpoint API. Gemini dan DeepSeek digunakan sesuai kebutuhan pengerjaan, dengan rincian aktivitas yang perlu disesuaikan berdasarkan riwayat penggunaan sebenarnya.

Penggunaan AI membantu memahami kebutuhan sistem, menyusun solusi teknis, meninjau kode, dan menyiapkan dokumentasi pengujian. Namun, setiap hasil AI tetap perlu diperiksa melalui kode aktual, struktur database, dan pengujian API menggunakan Postman.

Dokumentasi ini menjadi catatan penggunaan AI dan proses verifikasi dalam proyek. Keakuratan isi akhir tetap menjadi tanggung jawab anggota kelompok, terutama dalam memastikan pembagian peran AI, hasil review, status pengujian, dan bukti yang dilampirkan sesuai dengan aktivitas yang benar-benar dilakukan.
