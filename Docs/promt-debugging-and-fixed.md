# Ringkasan Prompt yang Digunakan

## 1. Membuat Sistem Perpustakaan

### Prompt

> "Bantu saya membuat sistem perpustakaan berbasis web menggunakan Microservices."

### Tujuan

Membuat sistem perpustakaan dengan konsep Microservices.

---

## 2. Membuat Fitur Login

### Prompt

> "Buatkan service untuk login mahasiswa menggunakan NIM dan password."

### Tujuan

Membuat **Auth Service** untuk menangani proses login mahasiswa.

---

## 3. Membuat Fitur Data Buku

### Prompt

> "Buatkan service untuk menampilkan daftar buku, mencari buku, melihat detail buku, dan mengatur stok buku."

### Tujuan

Membuat **Book Service** untuk mengelola data dan stok buku.

---

## 4. Membuat Fitur Peminjaman dan Pengembalian

### Prompt

> "Buatkan service untuk mahasiswa meminjam dan mengembalikan buku."

### Tujuan

Membuat **Loan Service** untuk mengelola transaksi peminjaman dan pengembalian.

---

## 5. Membuat Aturan Peminjaman

### Prompt

> "Tambahkan aturan agar mahasiswa maksimal meminjam 3 buku dan tidak bisa meminjam buku yang sama dua kali."

### Tujuan

Menambahkan validasi pada proses peminjaman.

---

## 6. Menghubungkan Book Service dan Loan Service

### Prompt

> "Hubungkan Loan Service dengan Book Service. Saat buku dipinjam stok berkurang dan saat buku dikembalikan stok bertambah."

### Tujuan

Membuat komunikasi antar-service sehingga perubahan stok mengikuti transaksi peminjaman.

---

## 7. Menghubungkan Frontend dengan Backend

### Prompt

> "Hubungkan frontend dengan API dari Auth Service, Book Service, dan Loan Service."

### Tujuan

Membuat website dapat mengambil dan mengirim data melalui API dari masing-masing service.

---

## 8. Mencari Penyebab Data Tidak Sesuai

### Prompt

> "Data peminjaman yang muncul di browser berbeda dengan data yang muncul di Postman. Bantu saya mencari penyebabnya."

### Tujuan

Mencari sumber masalah pada frontend dan backend.

### Hasil

Ditemukan frontend masih menggunakan `localStorage` untuk data buku dan peminjaman, sehingga tidak menggunakan data dari **Loan Service**.

---

## 9. Memperbaiki Frontend

### Prompt

> "Ubah frontend agar data buku dan peminjaman mengambil data langsung dari API Microservices, bukan dari localStorage."

### Tujuan

Menyamakan sumber data frontend dengan backend Microservices.

---

## 10. Testing Menggunakan Postman

### Prompt

> "Bantu saya melakukan testing API menggunakan Postman."

### Tujuan

Menguji beberapa fungsi API, yaitu:

* Login
* Menampilkan buku
* Meminjam buku
* Validasi peminjaman buku yang sama
* Batas maksimal 3 buku
* Mengembalikan buku
* Mengecek data setelah pengembalian

---

## 11. Memperbaiki Error Pengembalian

### Prompt

> "Saat mengembalikan buku muncul pesan 'Data peminjaman tidak ditemukan'. Bantu saya mencari penyebabnya."

### Tujuan

Memeriksa `loanId`, URL endpoint, data peminjaman, dan kondisi **Loan Service** untuk menemukan penyebab error.
