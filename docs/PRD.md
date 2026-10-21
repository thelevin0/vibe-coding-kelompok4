
Dokumentasi Penggunaan AI
Proyek Sistem Peminjaman Buku Perpustakaan — Vibe Coding Kelompok 4
1. Identitas Proyek
Komponen | Keterangan

Nama proyek: Sistem Peminjaman Buku Perpustakaan

Repositori: https://github.com/thelevin0/vibe-coding-kelompok4.git

Backend: Node.js dan Express.js

Basis data: MySQL

Komunikasi API: HTTP/JSON

Library database: mysql2/promise

Alat pengujian API: Postman

AI yang digunakan dalam alur kerja: Claude, ChatGPT, Gemini, dan DeepSeek

Mata kuliah: Vibe Coding

Tujuan dokumentasi: Mencatat peran AI, prompt kerja, proses review, verifikasi, serta batasan penggunaan AI dalam pengembangan Sistem Peminjaman Buku.

Anggota kelompok:
1. Muhammad Raihan — 2441919013
2. Alya Roihanatul Jannah — 2441919018
3. Siti Fathimah Az Zahra — 2441919024
4. Muhammad Indrawan Ismail — 2441919028
5. Muhammad Arsyad Roihan Maulaya — 2441919045
2. Tujuan Penggunaan AI
Claude, ChatGPT, Gemini, dan DeepSeek digunakan sebagai alat bantu dalam proses pengembangan Sistem Peminjaman Buku Perpustakaan. Penggunaan AI bertujuan membantu memahami kebutuhan sistem, menyesuaikan struktur basis data, mengembangkan dan meninjau endpoint API, serta menyusun dokumentasi dan skenario pengujian.

Dalam PRD, Claude digunakan untuk membantu pekerjaan penyusunan dan penyesuaian struktur basis data berdasarkan kebutuhan sistem dan aturan peminjaman. ChatGPT digunakan untuk membantu pengembangan dan penyesuaian endpoint API agar sesuai dengan kebutuhan sistem. Gemini dan DeepSeek juga tercantum sebagai AI assistant yang digunakan secara bergantian sesuai tugas.

AI tidak menggantikan keputusan anggota kelompok. Setiap saran yang berkaitan dengan kode, endpoint, autentikasi, struktur tabel, aturan peminjaman, dan hasil pengujian tetap harus diperiksa terhadap implementasi proyek. Pengujian dilakukan menggunakan Postman untuk memastikan bahwa API memberikan hasil sesuai kebutuhan sistem.
3. Pembagian Peran AI
Alat | Peran dalam alur kerja

Claude | Membantu penyusunan dan penyesuaian struktur basis data berdasarkan kebutuhan sistem, relasi tabel, serta aturan peminjaman buku.

ChatGPT | Membantu pengembangan dan penyesuaian endpoint API, meninjau kesesuaian endpoint dengan kebutuhan sistem, serta membantu penyusunan dokumentasi dan skenario pengujian.

Gemini | Tercantum sebagai AI assistant yang digunakan dalam alur pengerjaan. Aktivitas spesifiknya disesuaikan dengan riwayat penggunaan yang sebenarnya.

DeepSeek | Tercantum sebagai AI assistant yang digunakan secara bergantian sesuai kebutuhan pengerjaan. Aktivitas spesifiknya disesuaikan dengan riwayat penggunaan yang sebenarnya.

Anggota kelompok | Menentukan kebutuhan sistem, memeriksa kode yang dihasilkan atau disarankan AI, menjalankan aplikasi dan pengujian, memutuskan perubahan yang diterapkan, serta memastikan dokumentasi sesuai dengan implementasi.

Catatan akurasi: Pembagian peran ini mengacu pada informasi yang tercantum dalam PRD. Aktivitas Gemini dan DeepSeek perlu dijelaskan lebih spesifik apabila tersedia riwayat percakapan atau bukti penggunaan. Hasil yang diberikan AI tidak langsung dianggap benar sebelum diperiksa oleh anggota kelompok.
4. Prinsip Penggunaan AI
Berbasis kebutuhan proyek. Saran AI harus sesuai dengan kebutuhan Sistem Peminjaman Buku yang tercantum dalam PRD, seperti login mahasiswa, katalog buku, peminjaman, riwayat peminjaman, dan pengembalian buku.

Tidak mengarang hasil. AI tidak boleh menyatakan suatu endpoint tersedia, pengujian berhasil, atau masalah telah diperbaiki tanpa bukti dari kode dan hasil pengujian.

Review sebelum perubahan. Kode atau saran yang dihasilkan AI harus diperiksa sebelum diterapkan ke dalam proyek.

Validasi manual. Anggota kelompok menjalankan aplikasi dan menguji endpoint menggunakan Postman untuk memeriksa hasil aktual.

Kesesuaian aturan bisnis. Implementasi harus diperiksa berdasarkan aturan peminjaman, yaitu maksimal tiga buku aktif per mahasiswa, buku yang stoknya habis tidak dapat dipinjam, serta tanggal jatuh tempo tujuh hari setelah tanggal peminjaman.

Keamanan informasi. Password, token JWT, API key, kredensial database, isi file .env, dan data pribadi tidak boleh dimasukkan ke prompt AI.

Pencatatan keputusan. Saran AI yang diterima, diubah, atau ditolak perlu disesuaikan dengan keputusan anggota kelompok dan bukti pemeriksaan yang tersedia.
5. Alur Kerja Penggunaan AI
Alur kerja penggunaan AI dalam pengembangan Sistem Peminjaman Buku adalah sebagai berikut:
1. Menentukan kebutuhan dan ruang lingkup sistem berdasarkan PRD.
2. Meminta bantuan AI untuk memahami kebutuhan sistem dan menyusun solusi teknis awal.
3. Menggunakan bantuan Claude untuk menyusun atau menyesuaikan struktur basis data sesuai kebutuhan sistem.
4. Menggunakan bantuan ChatGPT untuk mengembangkan atau meninjau endpoint API.
5. Memeriksa kesesuaian kode, autentikasi JWT, metode HTTP, request, response, dan validasi dengan kebutuhan proyek.
6. Memastikan aturan peminjaman dan pengembalian diterapkan sesuai kebutuhan sistem.
7. Menyusun skenario pengujian berdasarkan fitur dan endpoint yang tersedia.
8. Menjalankan pengujian API menggunakan Postman dan mencatat hasil yang diperoleh.
9. Membandingkan implementasi dengan PRD, dokumentasi API, struktur basis data, dan hasil pengujian.
10. Memperbaiki bagian yang tidak sesuai dan melakukan pemeriksaan akhir sebelum perubahan disimpan ke repository GitHub.
Alur tersebut menggambarkan proses pengembangan dan pemeriksaan yang didokumentasikan dalam proyek. Penggunaan AI tidak menghilangkan kewajiban anggota kelompok untuk memahami, memeriksa, dan menguji kode yang digunakan.
6. Kumpulan Prompt Kerja
Prompt berikut disusun berdasarkan kebutuhan dan aktivitas yang dijelaskan dalam PRD proyek Sistem Peminjaman Buku Kelompok 4. Prompt ini dapat digunakan sebagai dokumentasi pola kerja AI. Jika diperlukan bukti bahwa prompt tertentu benar-benar pernah digunakan, lampirkan riwayat percakapan atau tangkapan layar yang sesuai.
6.1 Prompt untuk Claude — Membuat dan Menyesuaikan Struktur Database
Saya sedang mengembangkan Sistem Peminjaman Buku Perpustakaan menggunakan Node.js, Express.js, dan MySQL. Bantu saya menyusun dan meninjau struktur database berdasarkan kebutuhan sistem yang saya berikan.

Sistem memiliki data mahasiswa, buku, dan transaksi peminjaman. Struktur database perlu mendukung proses login mahasiswa, menampilkan katalog buku, meminjam buku, melihat transaksi peminjaman, dan mengembalikan buku.

Aturan bisnis yang perlu diperhatikan:
1. Mahasiswa hanya dapat memiliki maksimal tiga buku yang sedang dipinjam.
2. Buku yang stoknya habis tidak dapat dipinjam.
3. Tanggal jatuh tempo adalah tujuh hari setelah tanggal peminjaman.
4. Transaksi peminjaman harus terhubung dengan mahasiswa dan buku yang sesuai.
5. Status peminjaman harus dapat membedakan buku yang masih dipinjam dan yang sudah dikembalikan.
Tugas:
1. Jelaskan struktur tabel yang diperlukan.
2. Tentukan primary key dan foreign key yang sesuai.
3. Jelaskan hubungan antartabel.
4. Periksa apakah struktur yang disarankan mendukung aturan bisnis.
5. Hindari menambahkan kolom atau relasi yang tidak dibutuhkan.
6. Jelaskan bagian yang masih harus diperiksa terhadap database aktual.
Jangan menyatakan struktur database sudah benar sebelum dibandingkan dengan implementasi proyek.
6.2 Prompt untuk ChatGPT — Mengembangkan dan Meninjau Endpoint API
Saya sedang mengembangkan Sistem Peminjaman Buku Perpustakaan berbasis Node.js, Express.js, dan MySQL. Bantu saya mengembangkan atau meninjau endpoint API berdasarkan kebutuhan sistem dan kode yang saya berikan.

Fitur utama sistem meliputi login mahasiswa, daftar buku, detail buku, peminjaman buku, daftar transaksi peminjaman, dan pengembalian buku.

Tugas:
1. Periksa endpoint dan metode HTTP yang digunakan.
2. Periksa request dan response setiap endpoint.
3. Periksa autentikasi JWT pada endpoint yang memerlukan login.
4. Periksa validasi data yang dikirimkan pengguna.
5. Pastikan mahasiswa hanya dapat mengakses transaksi peminjamannya sendiri.
6. Periksa aturan maksimal tiga buku aktif.
7. Periksa penolakan peminjaman ketika stok buku habis.
8. Periksa perhitungan tanggal jatuh tempo tujuh hari setelah peminjaman.
9. Periksa perubahan status transaksi dan stok ketika buku dikembalikan.
10. Jelaskan file yang perlu diperiksa atau diubah beserta alasannya.
Berikan rekomendasi berdasarkan kode yang saya berikan. Jangan mengarang endpoint dan jangan menyatakan solusi berhasil sebelum diuji melalui aplikasi atau Postman.
6.3 Prompt untuk AI — Membantu Pemecahan Masalah Kode
Saya sedang mengembangkan Sistem Peminjaman Buku menggunakan Node.js, Express.js, dan MySQL. Saya akan memberikan kode, pesan error, atau hasil request yang bermasalah.

Bantu saya mencari penyebab masalah dengan langkah berikut:
1. Jelaskan kemungkinan penyebab error berdasarkan bukti yang diberikan.
2. Periksa hubungan antara route, controller, koneksi database, dan query SQL.
3. Tunjukkan bagian kode yang bermasalah.
4. Berikan perbaikan yang sesuai dengan struktur proyek.
5. Hindari mengubah bagian kode yang tidak berkaitan dengan masalah.
6. Jelaskan cara menerapkan perubahan.
7. Berikan langkah untuk menguji apakah masalah sudah teratasi.
Jangan mengklaim masalah sudah diperbaiki sebelum saya menjalankan kode dan memeriksa hasilnya. Jika informasi belum cukup, jelaskan informasi tambahan yang diperlukan.
6.4 Prompt untuk ChatGPT — Menyusun Skenario Pengujian Postman
Saya sedang menguji API pada Sistem Peminjaman Buku Perpustakaan. Bantu saya menyusun skenario pengujian berdasarkan endpoint yang benar-benar tersedia pada proyek.

Fitur yang perlu diperiksa meliputi:
1. Login dengan kredensial yang benar.
2. Login dengan kredensial yang salah.
3. Melihat daftar buku.
4. Melihat detail buku.
5. Mengakses endpoint yang memerlukan autentikasi tanpa token yang valid.
6. Meminjam buku yang tersedia.
7. Meminjam buku yang stoknya habis.
8. Mencoba meminjam buku ketika sudah memiliki tiga buku aktif.
9. Mencoba meminjam buku yang sama ketika masih memiliki pinjaman aktif, jika aturan tersebut diterapkan.
10. Mengembalikan buku.
11. Memeriksa perubahan status peminjaman dan stok buku.
Untuk setiap skenario, tuliskan ID pengujian, tujuan, prasyarat, langkah pengujian, request yang diperlukan, hasil yang diharapkan, hasil aktual, status, dan bukti yang perlu disimpan.

Jangan mengisi hasil aktual atau menyatakan pengujian lulus berdasarkan perkiraan. Hasil pengujian harus diisi berdasarkan respons yang benar-benar diperoleh dari Postman.
6.5 Prompt untuk AI — Review Database dan Dokumentasi
Bantu saya meninjau konsistensi antara PRD, struktur database, kode backend, dokumentasi API, dan hasil pengujian pada Sistem Peminjaman Buku Perpustakaan.

Periksa hal-hal berikut:
1. Kesesuaian nama tabel dan kolom.
2. Kesesuaian primary key, foreign key, dan relasi antartabel.
3. Kesesuaian endpoint dan metode HTTP.
4. Kesesuaian field request dan response.
5. Kesesuaian autentikasi dan aturan akses pengguna.
6. Kesesuaian aturan maksimal tiga buku aktif.
7. Kesesuaian perubahan stok dan status ketika peminjaman atau pengembalian dilakukan.
8. Kesesuaian tanggal jatuh tempo tujuh hari setelah peminjaman.
9. Kesesuaian dokumentasi dengan hasil pengujian yang tersedia.
Sajikan temuan dalam tabel yang memuat bagian yang diperiksa, kondisi yang ditemukan, bukti, dampak, rekomendasi, dan status verifikasi.

Jangan menambahkan informasi yang tidak didukung oleh sumber. Jika suatu bagian belum dapat dipastikan, tuliskan "belum dapat diverifikasi".
6.6 Prompt untuk ChatGPT — Pemeriksaan Konsistensi Laporan
Bantu saya melakukan pemeriksaan akhir terhadap dokumentasi proyek Sistem Peminjaman Buku Perpustakaan Kelompok 4.

Gunakan PRD, dokumentasi API, struktur database, kode backend, dan bukti pengujian yang saya berikan sebagai sumber pemeriksaan.

Periksa:
1. Apakah fitur yang dijelaskan sesuai dengan implementasi.
2. Apakah endpoint yang ditulis sesuai dengan route aktual.
3. Apakah struktur database sesuai dengan kode aplikasi.
4. Apakah aturan bisnis dijelaskan secara konsisten.
5. Apakah hasil pengujian didukung oleh bukti yang tersedia.
6. Apakah terdapat klaim yang belum diverifikasi.
7. Apakah terdapat informasi rahasia dalam dokumentasi.
8. Apakah terdapat perbedaan antara PRD dan implementasi yang perlu diperbaiki.
Buat daftar temuan, bukti pendukung, dampak, dan rekomendasi. Bedakan informasi yang sudah terverifikasi dengan informasi yang masih perlu diperiksa. Jangan menyatakan semua bagian benar jika bukti yang tersedia belum cukup.
6.7 Prompt untuk AI — Pemeriksaan Akhir sebelum Push ke GitHub
Lakukan pemeriksaan akhir terhadap proyek Sistem Peminjaman Buku sebelum perubahan disimpan atau di-push ke repository GitHub.

Periksa:
1. Konsistensi nama fitur, endpoint, dan aturan bisnis.
2. Kesesuaian dokumentasi dengan kode dan struktur database.
3. Kesesuaian hasil pengujian dengan bukti Postman.
4. Kelengkapan dokumentasi API dan README.
5. Kemungkinan adanya kode yang tidak sesuai dengan kebutuhan.
6. Kemungkinan adanya password, token, API key, atau kredensial dalam file proyek.
7. Risiko perintah atau perubahan yang dapat menghapus atau mengubah database tanpa sengaja.
8. Bagian yang masih perlu diperbaiki sebelum proyek diserahkan.
Berikan daftar temuan dan rekomendasi berdasarkan tingkat risiko. Jangan menyatakan proyek bebas bug hanya berdasarkan pemeriksaan teks. Jangan mengubah file secara langsung tanpa menjelaskan perubahan yang disarankan.
7. Checklist Review Teknis
Checklist berikut digunakan untuk mengarahkan pemeriksaan terhadap implementasi Sistem Peminjaman Buku. Status perlu disesuaikan jika terdapat perubahan kode atau pengujian baru.

ID | Area review | Hal yang diperiksa | Status

R-01 | API | Endpoint dan metode HTTP sesuai dengan route aktual. | Perlu diverifikasi terhadap kode.

R-02 | Request dan response | Nama field, format data, dan validasi sesuai implementasi. | Perlu diverifikasi terhadap kode.

R-03 | Autentikasi | Login mahasiswa dan validasi JWT berjalan sesuai kebutuhan. | Perlu diverifikasi terhadap kode dan pengujian.

R-04 | Otorisasi | Mahasiswa hanya dapat mengakses transaksi peminjamannya sendiri. | Perlu pengujian.

R-05 | Peminjaman | Stok buku tersedia dan batas maksimal tiga buku aktif diterapkan. | Hasil pengujian dilaporkan dalam PRD; periksa ulang jika implementasi berubah.

R-06 | Jatuh tempo | Tanggal jatuh tempo dihitung tujuh hari setelah tanggal peminjaman. | Hasil pengujian dilaporkan dalam PRD; periksa ulang jika implementasi berubah.

R-07 | Pengembalian | Status transaksi dan stok buku berubah sesuai proses pengembalian. | Hasil pengujian dilaporkan dalam PRD; periksa ulang jika implementasi berubah.

R-08 | Database | Struktur tabel, relasi, dan koneksi database sesuai dengan kode backend. | Perlu diverifikasi terhadap kode dan database.

R-09 | Dokumentasi | Dokumentasi API dan laporan sesuai dengan endpoint aktual. | Perlu perbandingan akhir.

R-10 | Keamanan | Tidak terdapat password, token, API key, atau kredensial dalam dokumentasi dan repository. | Perlu pemeriksaan akhir.
8. Catatan Hasil Review
Catatan hasil review digunakan untuk mencatat pemeriksaan yang benar-benar dilakukan oleh anggota kelompok maupun dengan bantuan AI. Temuan perlu dilengkapi bukti agar keputusan perbaikan dapat ditelusuri kembali.

Tanggal | Reviewer/alat | Ruang lingkup | Temuan | Keputusan/tindakan | Bukti verifikasi

[Isi tanggal] | Claude | Struktur database dan aturan peminjaman | Membantu penyusunan dan penyesuaian struktur database sesuai kebutuhan sistem. | Sesuaikan dengan keputusan aktual tim. | Struktur database atau riwayat percakapan.

[Isi tanggal] | ChatGPT | Endpoint API | Membantu pengembangan dan peninjauan endpoint API berdasarkan kebutuhan sistem. | Sesuaikan dengan keputusan aktual tim. | Kode endpoint, dokumentasi, atau riwayat percakapan.

[Isi tanggal] | Gemini/DeepSeek | [Isi bagian yang benar-benar diperiksa] | [Isi temuan berdasarkan aktivitas aktual] | [Diterima/diubah/ditolak] | [File, log, atau tangkapan layar].

[Isi tanggal] | Manual/Postman | Pengujian API | Pengujian fitur login, buku, peminjaman, dan pengembalian dilaporkan dalam PRD. | Cocokkan kembali dengan implementasi terbaru. | Tangkapan layar atau hasil request Postman.

Format satu temuan review:

ID: [R-xx]

Tanggal: [tanggal pemeriksaan]

Sumber yang diperiksa: [file, endpoint, kode, atau hasil pengujian]

Temuan: [uraian masalah atau hasil pemeriksaan]

Bukti: [kutipan kode, hasil request, atau lokasi file]

Dampak: [risiko atau pengaruh terhadap sistem]

Rekomendasi: [tindakan yang disarankan]

Keputusan tim: [diterima/diubah/ditolak]

Hasil verifikasi setelah tindakan: [hasil aktual atau belum diuji]

Catatan: Isi tanggal dan keputusan berdasarkan riwayat kerja yang sebenarnya. Jangan membuat tanggal atau hasil review seolah-olah sudah terjadi jika tidak ada bukti pendukung.
9. Pencatatan Pengujian
Berdasarkan PRD Kelompok 4, pengujian API dilakukan menggunakan Postman. Hasil pengujian yang dilaporkan dalam PRD mencakup login, daftar dan detail buku, peminjaman, penolakan peminjaman, pengembalian, serta perubahan stok.

ID | Skenario | Hasil yang diharapkan | Hasil yang dilaporkan dalam PRD | Status | Bukti

T-01 | Login dengan kredensial valid | Login berhasil dan token JWT diberikan. | Berhasil sesuai laporan PRD. | Lulus dalam PRD. | Bukti pengujian Postman.

T-02 | Login dengan kredensial salah | Login ditolak dengan respons autentikasi yang sesuai. | Ditolak dengan 401 Unauthorized. | Lulus dalam PRD. | Bukti pengujian Postman.

T-03 | Melihat daftar dan detail buku | Data buku dapat diakses menggunakan autentikasi yang sesuai. | Data buku ditampilkan sesuai laporan PRD. | Lulus dalam PRD. | Bukti pengujian Postman.

T-04 | Meminjam buku yang tersedia | Transaksi peminjaman dibuat, stok berkurang, dan jatuh tempo ditetapkan tujuh hari setelah peminjaman. | Menghasilkan 201 Created; tanggal pinjam 20 Oktober 2026 dan jatuh tempo 27 Oktober 2026. | Lulus dalam PRD. | Gambar 8 pada PRD.

T-05 | Meminjam buku yang stoknya habis | Permintaan ditolak dan stok tidak berkurang. | Menghasilkan 400 Bad Request dengan pesan "Stok habis". | Lulus dalam PRD. | Gambar 9 pada PRD.

T-06 | Meminjam buku ketika sudah memiliki tiga buku aktif | Permintaan ditolak karena batas maksimal tercapai. | Menghasilkan 400 Bad Request dengan pesan "Gagal: Anda sudah memiliki 3 buku aktif." | Lulus dalam PRD. | Gambar 10 pada PRD.

T-07 | Mengembalikan buku | Status transaksi berubah menjadi dikembalikan dan tanggal pengembalian tercatat. | Menghasilkan 200 OK dengan pesan "Buku berhasil dikembalikan" dan status transaksi berubah menjadi "returned". | Lulus dalam PRD. | Gambar 12 pada PRD.

T-08 | Memeriksa stok setelah transaksi | Stok dan status buku diperbarui sesuai proses peminjaman atau pengembalian. | Pembaruan stok/status dilaporkan dalam PRD. | Lulus dalam PRD sesuai laporan. | Bukti pengujian stok dalam PRD.

T-09 | Meminjam buku yang sama dua kali | Permintaan kedua ditolak jika aturan tersebut diterapkan. | PRD melaporkan penolakan dengan pesan "Anda sudah meminjam buku ini." | Periksa kesesuaian dengan checklist dan implementasi terbaru. | Gambar pengujian peminjaman buku yang sama dalam PRD.

Catatan: Status di atas merupakan status yang dilaporkan dalam PRD, bukan pengujian baru yang dilakukan saat penyusunan dokumentasi ini. Jika kode berubah, lakukan pengujian ulang dan sesuaikan status dengan bukti terbaru.
10. Batasan dan Risiko Penggunaan AI
Penggunaan AI dalam pengembangan Sistem Peminjaman Buku memiliki beberapa batasan dan risiko yang perlu diperhatikan.
1. AI dapat menghasilkan kode atau informasi yang tidak sesuai dengan struktur proyek dan versi teknologi yang digunakan.
2. Contoh request dan response dari AI bukan bukti bahwa API benar-benar menghasilkan respons tersebut.
3. Saran perbaikan kode tidak membuktikan bahwa masalah sudah teratasi sebelum dilakukan pengujian.
4. Struktur database yang disarankan AI harus dibandingkan dengan struktur database aktual.
5. Dokumentasi endpoint harus disesuaikan dengan route dan implementasi yang benar-benar tersedia.
6. Klaim keamanan tidak dapat dijamin hanya melalui pemeriksaan teks atau saran AI.
7. Kesalahan dalam memahami kode yang dihasilkan AI dapat menyebabkan implementasi tidak sesuai dengan kebutuhan.
8. Jika sumber atau bukti tidak cukup, informasi harus ditandai sebagai belum dapat diverifikasi.
Oleh karena itu, anggota kelompok tetap bertanggung jawab untuk memeriksa kode, memahami alur sistem, menjalankan pengujian, dan menentukan apakah saran AI layak diterapkan.
11. Privasi dan Keamanan Data
Dalam menggunakan Claude, ChatGPT, Gemini, dan DeepSeek, anggota kelompok perlu memperhatikan keamanan informasi proyek.
1. Jangan mengunggah file .env, password, token JWT, API key, atau kredensial database ke prompt AI.
2. Samarkan data pribadi dan data pengujian yang bersifat sensitif.
3. Periksa screenshot, log, dan potongan kode sebelum membagikannya kepada AI.
4. Periksa perintah yang disarankan AI sebelum dijalankan, terutama perintah yang dapat mengubah atau menghapus database.
5. Buat cadangan sebelum melakukan perubahan database yang berisiko.
6. Tinjau setiap perubahan kode sebelum dimasukkan ke branch utama atau di-push ke repository GitHub.
7. Pastikan dokumentasi yang dikumpulkan tidak memuat informasi rahasia yang dapat digunakan untuk mengakses sistem.
Keamanan proyek tidak hanya bergantung pada AI, tetapi juga pada ketelitian anggota kelompok dalam memeriksa dan mengelola kode serta data yang digunakan.

12. Kesimpulan
Claude, ChatGPT, Gemini, dan DeepSeek digunakan sebagai alat bantu dalam proses pengembangan Sistem Peminjaman Buku Perpustakaan Kelompok 4. Berdasarkan PRD, Claude membantu pekerjaan penyusunan dan penyesuaian struktur database, sedangkan ChatGPT membantu pengembangan dan peninjauan endpoint API. Gemini dan DeepSeek juga tercantum sebagai AI assistant yang digunakan sesuai kebutuhan pengerjaan.
