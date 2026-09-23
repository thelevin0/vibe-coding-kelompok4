# Sistem Peminjaman Buku Perpustakaan (Microservice)

**Kelompok 4**
* Muhammad Raihan (2441919013)
* Alya Roihanatul Jannah (2441919018)
* Siti Fathimah Az Zahra (2441919024)
* Muhammad Indrawan Ismail (2441919028)
* Muhammad Arsyad Roihan Maulaya (2441919045)

## Deskripsi Singkat
Proyek ini adalah pengembangan dari aplikasi monolith (sebelumnya menggunakan Vanilla JS & localStorage) menjadi arsitektur berbasis microservice. Sistem memisahkan antara antarmuka pengguna (Frontend) dan layanan pengelola data (Backend) ke dalam beberapa service yang independen.

## Arsitektur Sistem

![Diagram Arsitektur](./Diagram%20Kelompok%204%20(Microservice).jpg)

Sistem terdiri dari tiga komponen utama yang saling berinteraksi:
1. **Frontend:** Berkomunikasi dengan *Book Service* untuk menampilkan daftar buku, dan dengan *Loan Service* untuk memproses peminjaman/pengembalian.
2. **Book Service:** Berdiri sendiri mengelola data buku. Menerima permintaan *update* stok dari *Loan Service*.
3. **Loan Service:** Berkomunikasi dengan *Book Service* via API (Axios/Fetch) secara *backend-to-backend* untuk memvalidasi dan memanipulasi stok buku saat transaksi terjadi.

## Daftar Teknologi yang Digunakan

| Komponen | Teknologi yang Digunakan | Fungsi |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | Membangun antarmuka pengguna (UI) dan logika interaksi klien. |
| **Backend** | Node.js, Express.js | Membangun server dan *routing* untuk masing-masing *microservice*. |
| **Komunikasi** | REST API, Axios, Fetch API | Menghubungkan pertukaran data antar-service dan dari klien ke server. |
| **Penyimpanan** | In-memory Array | Menyimpan data (buku dan peminjaman) secara sementara di dalam *runtime* backend. |

## Struktur Folder

```text
perpustakaan-microservice/
├── frontend/               # Antarmuka pengguna (UI)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── book-service/           # Layanan manajemen data buku
│   ├── package.json
│   └── server.js
├── loan-service/           # Layanan manajemen transaksi peminjaman
│   ├── package.json
│   └── server.js
├── .env.example            # Contoh variabel environment
├── .gitignore              # Pengecualian file (memastikan node_modules tidak ikut ke repository)
├── Diagram Kelompok 4 (Microservice).jpg # Gambar arsitektur sistem
└── README.md               # Dokumentasi utama proyek
```

## Penjelasan Fungsi Tiap Service

1. **Frontend (Klien):** Menyediakan halaman web antarmuka agar mahasiswa dapat melakukan login, melihat daftar buku, mencari/memfilter buku, serta mengeksekusi aksi pinjam dan kembalikan buku.
2. **Book Service (Port 3001):** Bertanggung jawab penuh atas entitas buku. Menangani filter ketersediaan, pencarian judul, dan manipulasi jumlah stok buku secara independen.
3. **Loan Service (Port 3002):** Bertanggung jawab atas entitas peminjaman. Menangani aturan bisnis seperti batas maksimal 3 buku per mahasiswa, penentuan masa jatuh tempo selama 7 hari, dan validasi kepemilikan buku saat proses pengembalian.

## Alur Fitur Utama (Peminjaman Buku)

1. Mahasiswa menekan tombol **Pinjam Buku** pada halaman detail buku di Frontend.
2. Frontend mengirim *request POST* ke **Loan Service**.
3. **Loan Service** memvalidasi kuota mahasiswa (memastikan belum meminjam 3 buku).
4. Jika valid, **Loan Service** melakukan panggilan API internal ke **Book Service** untuk memeriksa dan mengurangi stok buku terkait.
5. Jika **Book Service** merespons sukses (stok berhasil dikurangi), **Loan Service** mencatat data peminjaman baru dan memberikan respons sukses kembali ke Frontend.

## Daftar API (Endpoint)

### Book Service (Port 3001)

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| `GET` | `/api/books` | Mengambil seluruh data buku (mendukung *query* `?search=` & `?filter=`). |
| `GET` | `/api/books/:id` | Mengambil detail satu buku spesifik berdasarkan ID. |
| `PUT` | `/api/books/:id/reduce-stock` | Mengurangi stok buku sebanyak 1. |
| `PUT` | `/api/books/:id/add-stock` | Menambah stok buku sebanyak 1. |

### Loan Service (Port 3002)

| Method | Endpoint | Deskripsi |
| --- | --- | --- |
| `GET` | `/api/loans/:nim` | Mengambil daftar peminjaman aktif milik mahasiswa tertentu. |
| `POST` | `/api/loans` | Membuat transaksi peminjaman buku baru. |
| `POST` | `/api/loans/return/:loanId` | Memproses pengembalian buku dan menghapusnya dari daftar aktif. |

## Cara Menjalankan Aplikasi

**1. Menjalankan Book Service**

* Buka terminal, arahkan ke folder `book-service`: `cd book-service`
* Instal dependensi: `npm install`
* Jalankan server: `npm start` *(berjalan di port 3001)*

**2. Menjalankan Loan Service**

* Buka terminal baru, arahkan ke folder `loan-service`: `cd loan-service`
* Instal dependensi: `npm install`
* Jalankan server: `npm start` *(berjalan di port 3002)*

**3. Menjalankan Frontend**

* Buka folder proyek di VSCode.
* Aktifkan ekstensi **Live Server** (klik *Go Live* pada file `index.html`).
* Buka browser pada alamat yang diberikan. Gunakan akun uji coba untuk login (Contoh: NIM `2201002`, Password `pass123`).

```

```
