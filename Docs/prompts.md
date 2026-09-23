1. Kumpulan Prompt Berdasarkan Tahapan Pengembangan
Perancangan Arsitektur:

"Tolong bantu saya merancang pemisahan aplikasi perpustakaan berbasis monolith (frontend dan data tercampur di localStorage) menjadi arsitektur microservice yang terstruktur. Bagaimana pembagian layanan yang ideal antara manajemen buku dan manajemen peminjaman?"

Generasi Kode Dasar (package.json & server.js):

"Buatkan kerangka file package.json dan kode dasar server.js menggunakan Node.js dan Express.js untuk backend microservice. Sertakan juga konfigurasi middleware CORS agar bisa diakses dari port atau domain yang berbeda."

Migrasi Data (Dari localStorage ke In-Memory Array):

"Bantu saya memindahkan data dummy buku yang sebelumnya ada di dalam file JavaScript frontend (localStorage) agar sekarang dikelola sepenuhnya menggunakan struktur in-memory array di dalam server backend book-service."

Integrasi API pada Frontend:

"Bagaimana cara memodifikasi fungsi-fungsi JavaScript di frontend (seperti pencarian buku, detail buku, peminjaman, dan pengembalian) agar mengambil dan mengirim data melalui endpoint REST API menggunakan fetch atau axios, bukan lagi memanipulasi localStorage secara langsung?"

Visualisasi Diagram Komunikasi Antar-Service:

"Tolong bantu rumuskan struktur atau kode visual (seperti PlantUML) untuk merancang diagram arsitektur microservice yang menunjukkan alur komunikasi antara Frontend, Book Service (Port 3001), Loan Service (Port 3002), serta komunikasi antar-service via API."

2. Prompt untuk Dokumentasi Debugging & Kasus Bug "Data Buku Tidak Muncul di Loan Service"
Jika di bagian laporan atau dokumentasi membutuhkan riwayat debugging termasuk kendala yang ditemukan oleh temanmu (data buku atau judul buku tidak muncul/sinkron saat di loan service), kamu bisa menggunakan prompt rekonstruksi berikut:

Prompt untuk Debugging Kendala Umum & Log Aktivitas:

"Bagaimana cara menambahkan middleware di Express.js agar terminal backend mencatat log setiap ada request masuk (seperti metode HTTP dan endpoint yang diakses), mirip seperti log bawaan pada framework Laravel?"

Prompt untuk Kasus Bug (Data Buku/Judul Buku Tidak Muncul di Loan Service):

"Saat melakukan pengujian microservice perpustakaan, teman saya mendapati masalah di mana data atau judul buku dari mahasiswa tidak muncul di bagian riwayat peminjaman (loan-service). Bagaimana cara memperbaiki alur pengiriman data pada payload POST saat melakukan peminjaman agar bookId dan judul buku berhasil disimpan dan dikirimkan dengan benar dari frontend ke loan-service lalu divalidasi ke book-service?"