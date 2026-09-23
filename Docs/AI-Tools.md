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

Selama proses pengembangan sistem perpustakaan berbasis Microservices dengan bantuan AI, ditemukan beberapa kendala yang memerlukan penyesuaian dan intervensi manual dari developer, yaitu:

* **Konteks Environment (Terminal):** Kode yang dihasilkan AI sudah tepat secara logika dan sintaks. Namun, intervensi manual tetap diperlukan untuk memastikan posisi direktori terminal (`cd`) sudah tepat berada di dalam folder spesifik masing-masing service sebelum menjalankan `npm install` dan `npm start`.

* **Keamanan Sistem Operasi:** Script eksekusi bawaan Node.js (`npm`) awalnya ditolak oleh sistem keamanan Windows (*PowerShell Execution Policy*). Developer perlu menyesuaikan pengaturan hak akses terminal agar perintah yang diperlukan dapat dijalankan.

* **Integrasi Antar-Microservices:** Loan Service perlu berkomunikasi dengan Book Service untuk memperbarui stok buku ketika terjadi peminjaman maupun pengembalian. Implementasi ini membutuhkan penyesuaian pada endpoint dan mekanisme komunikasi antar-service agar perubahan stok sesuai dengan transaksi.

* **Validasi Peminjaman:** Diperlukan penyesuaian pada logic peminjaman agar mahasiswa tidak dapat meminjam lebih dari 3 buku dan tidak dapat meminjam buku yang sama dua kali selama transaksi sebelumnya masih aktif.

* **Ketidaksesuaian Data Frontend dan Backend:** Pada tahap pengujian ditemukan bahwa data peminjaman yang ditampilkan pada browser berbeda dengan data yang ditampilkan melalui Postman. Setelah dilakukan pemeriksaan, frontend masih menggunakan `localStorage` sebagai sumber data, sedangkan backend menggunakan data dari Microservices.

* **Penyesuaian Sumber Data Frontend:** Frontend kemudian disesuaikan agar data buku dan peminjaman diambil langsung melalui API dari Book Service dan Loan Service. Hal ini dilakukan agar data yang ditampilkan pada website sesuai dengan data yang terdapat pada backend.

* **Error pada Pengembalian Buku:** Saat proses pengembalian buku ditemukan pesan **"Data peminjaman tidak ditemukan"**. Penyebabnya perlu ditelusuri dengan memeriksa `loanId`, endpoint yang digunakan, data peminjaman yang dikirim frontend, serta kondisi data pada Loan Service.

* **Testing dan Debugging API:** Pengujian menggunakan Postman dilakukan untuk memastikan setiap service dan endpoint berjalan sesuai kebutuhan. Pengujian mencakup login, menampilkan data buku, peminjaman, validasi peminjaman buku yang sama, batas maksimal 3 buku, pengembalian, serta pengecekan perubahan stok dan data setelah transaksi.

Secara keseluruhan, hasil yang diberikan AI dapat membantu mempercepat proses implementasi, tetapi tetap diperlukan penyesuaian manual terutama pada **environment, konfigurasi sistem operasi, integrasi antar-service, sinkronisasi data frontend-backend, serta debugging berdasarkan kondisi aktual aplikasi**.

