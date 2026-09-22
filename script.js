/* =========================================================
   KONSTANTA & KONFIGURASI
   ========================================================= */

const STORAGE_KEYS = {
  BOOKS: "lib_books",
  LOANS: "lib_loans",
  SESSION: "lib_session"
};

const MAX_ACTIVE_LOANS = 3;
const LOAN_DURATION_DAYS = 7;

// Data mahasiswa sederhana untuk kebutuhan prototype (tidak disimpan di localStorage,
// hanya digunakan sebagai basis validasi login).
const STUDENTS = [
  { nim: "2201001", password: "pass123", nama: "Ayu Lestari" },
  { nim: "2201002", password: "pass123", nama: "Budi Santoso" },
  { nim: "2201003", password: "pass123", nama: "Citra Ramadhani" },
  { nim: "2201004", password: "pass123", nama: "Dimas Prakoso" }
];

// Data awal buku (minimal 10), digunakan untuk seeding localStorage saat pertama kali dijalankan.
const DEFAULT_BOOKS = [
  {
    id: "B001",
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    stok: 3,
    sinopsis: "Kisah perjuangan sekelompok anak di Belitung dalam meraih pendidikan di tengah keterbatasan.",
    lokasi: "Rak A1"
  },
  {
    id: "B002",
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    stok: 0,
    sinopsis: "Kisah Minke, seorang pribumi terpelajar pada masa kolonial Hindia Belanda.",
    lokasi: "Rak A2"
  },
  {
    id: "B003",
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    stok: 5,
    sinopsis: "Pengantar filsafat Stoa yang dikemas secara ringan untuk kehidupan modern.",
    lokasi: "Rak B1"
  },
  {
    id: "B004",
    judul: "Cantik Itu Luka",
    penulis: "Eka Kurniawan",
    stok: 2,
    sinopsis: "Kisah keluarga lintas generasi yang dibalut unsur magis dan sejarah Indonesia.",
    lokasi: "Rak A3"
  },
  {
    id: "B005",
    judul: "Sapiens: Riwayat Singkat Umat Manusia",
    penulis: "Yuval Noah Harari",
    stok: 0,
    sinopsis: "Perjalanan sejarah umat manusia dari masa berburu-meramu hingga era modern.",
    lokasi: "Rak C1"
  },
  {
    id: "B006",
    judul: "Atomic Habits",
    penulis: "James Clear",
    stok: 4,
    sinopsis: "Panduan praktis membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara bertahap.",
    lokasi: "Rak C2"
  },
  {
    id: "B007",
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    stok: 1,
    sinopsis: "Kisah enam santri dari berbagai daerah yang menimba ilmu di sebuah pesantren.",
    lokasi: "Rak A4"
  },
  {
    id: "B008",
    judul: "Pulang",
    penulis: "Tere Liye",
    stok: 0,
    sinopsis: "Kisah Bujang, seorang pemuda dari keluarga pedalaman yang tumbuh di dunia bayangan.",
    lokasi: "Rak B2"
  },
  {
    id: "B009",
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    stok: 2,
    sinopsis: "Prinsip dan praktik menulis kode program yang bersih, rapi, dan mudah dipelihara.",
    lokasi: "Rak D1"
  },
  {
    id: "B010",
    judul: "Da Vinci Code",
    penulis: "Dan Brown",
    stok: 3,
    sinopsis: "Petualangan memecahkan teka-teki simbol dan sejarah tersembunyi di balik karya Da Vinci.",
    lokasi: "Rak D2"
  },
  {
    id: "B011",
    judul: "Ayat-Ayat Cinta",
    penulis: "Habiburrahman El Shirazy",
    stok: 2,
    sinopsis: "Kisah cinta dan perjuangan seorang mahasiswa Indonesia yang menuntut ilmu di Mesir.",
    lokasi: "Rak A5"
  }
];

/* =========================================================
   STATE SEMENTARA (in-memory)
   ========================================================= */

let currentDetailBookId = null;

/* =========================================================
   UTIL: LOCALSTORAGE HELPERS
   ========================================================= */

function getBooks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKS)) || [];
}

function saveBooks(books) {
  localStorage.setItem(STORAGE_KEYS.BOOKS, JSON.stringify(books));
}

function getLoans() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.LOANS)) || [];
}

function saveLoans(loans) {
  localStorage.setItem(STORAGE_KEYS.LOANS, JSON.stringify(loans));
}

function getSession() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION));
}

function saveSession(session) {
  localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
}

/* =========================================================
   INISIALISASI DATA AWAL
   ========================================================= */

function initBooksIfEmpty() {
  const existing = localStorage.getItem(STORAGE_KEYS.BOOKS);
  if (!existing) {
    saveBooks(DEFAULT_BOOKS);
  }
}

function initLoansIfEmpty() {
  const existing = localStorage.getItem(STORAGE_KEYS.LOANS);
  if (!existing) {
    saveLoans([]);
  }
}

/* =========================================================
   NOTIFIKASI
   ========================================================= */

let notifTimeout = null;

function showNotif(message, type) {
  const notif = document.getElementById("notif");
  notif.textContent = message;
  notif.className = "notif " + type;

  if (notifTimeout) clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => {
    notif.classList.add("hidden");
  }, 3500);
}

/* =========================================================
   FORMAT TANGGAL
   ========================================================= */

function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/* =========================================================
   AUTENTIKASI (LOGIN / LOGOUT)
   ========================================================= */

function handleLogin(event) {
  event.preventDefault();

  const nim = document.getElementById("input-nim").value.trim();
  const password = document.getElementById("input-password").value;

  const student = STUDENTS.find((s) => s.nim === nim && s.password === password);

  if (!student) {
    showNotif("NIM atau kata sandi salah. Silakan coba lagi.", "error");
    return;
  }

  saveSession({ nim: student.nim, nama: student.nama });
  enterApp();
}

function handleLogout() {
  clearSession();
  document.getElementById("form-login").reset();
  document.getElementById("app").classList.add("hidden");
  document.getElementById("section-login").classList.remove("hidden");
}

function enterApp() {
  const session = getSession();
  if (!session) {
    document.getElementById("section-login").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
    return;
  }

  document.getElementById("user-name").textContent = session.nama + " (" + session.nim + ")";
  document.getElementById("section-login").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  goToBooksSection();
}

/* =========================================================
   NAVIGASI ANTAR SECTION
   ========================================================= */

function hideAllAppSections() {
  document.getElementById("section-books").classList.add("hidden");
  document.getElementById("section-detail").classList.add("hidden");
  document.getElementById("section-loans").classList.add("hidden");
}

function setActiveNav(navId) {
  document.getElementById("nav-books").classList.remove("active");
  document.getElementById("nav-loans").classList.remove("active");
  if (navId) document.getElementById(navId).classList.add("active");
}

function goToBooksSection() {
  hideAllAppSections();
  document.getElementById("section-books").classList.remove("hidden");
  setActiveNav("nav-books");
  renderBookList();
}

function goToLoansSection() {
  hideAllAppSections();
  document.getElementById("section-loans").classList.remove("hidden");
  setActiveNav("nav-loans");
  renderLoans();
}

function goToDetailSection(bookId) {
  currentDetailBookId = bookId;
  hideAllAppSections();
  document.getElementById("section-detail").classList.remove("hidden");
  setActiveNav(null);
  renderDetail(bookId);
}

/* =========================================================
   RENDER: DAFTAR BUKU (dengan pencarian & filter)
   ========================================================= */

function renderBookList() {
  const keyword = document.getElementById("input-search").value.trim().toLowerCase();
  const filterValue = document.getElementById("select-filter").value;

  const books = getBooks();

  const filtered = books.filter((book) => {
    const matchesKeyword = book.judul.toLowerCase().includes(keyword);

    let matchesFilter = true;
    if (filterValue === "tersedia") {
      matchesFilter = book.stok > 0;
    } else if (filterValue === "tidak-tersedia") {
      matchesFilter = book.stok === 0;
    }

    return matchesKeyword && matchesFilter;
  });

  const listContainer = document.getElementById("book-list");
  const emptyMsg = document.getElementById("book-empty");
  listContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyMsg.classList.remove("hidden");
    return;
  }
  emptyMsg.classList.add("hidden");

  filtered.forEach((book) => {
    const isAvailable = book.stok > 0;

    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML =
      "<h3>" + escapeHtml(book.judul) + "</h3>" +
      "<p class='author'>" + escapeHtml(book.penulis) + "</p>" +
      "<span class='badge " + (isAvailable ? "available" : "unavailable") + "'>" +
      (isAvailable ? "Tersedia" : "Tidak Tersedia") +
      "</span>" +
      "<button class='btn-detail' data-id='" + book.id + "'>Lihat Detail</button>";

    listContainer.appendChild(card);
  });

  // Pasang event listener untuk setiap tombol detail
  document.querySelectorAll(".btn-detail").forEach((btn) => {
    btn.addEventListener("click", () => {
      goToDetailSection(btn.getAttribute("data-id"));
    });
  });
}

/* =========================================================
   RENDER: DETAIL BUKU
   ========================================================= */

function renderDetail(bookId) {
  const books = getBooks();
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    goToBooksSection();
    return;
  }

  const isAvailable = book.stok > 0;

  document.getElementById("detail-judul").textContent = book.judul;
  document.getElementById("detail-penulis").textContent = book.penulis;
  document.getElementById("detail-stok").textContent = book.stok;
  document.getElementById("detail-lokasi").textContent = book.lokasi;
  document.getElementById("detail-sinopsis").textContent = book.sinopsis;

  const statusBadge = document.getElementById("detail-status");
  statusBadge.textContent = isAvailable ? "Tersedia" : "Tidak Tersedia";
  statusBadge.className = "badge " + (isAvailable ? "available" : "unavailable");

  const btnPinjam = document.getElementById("btn-pinjam");
  btnPinjam.disabled = !isAvailable;
  btnPinjam.textContent = isAvailable ? "Pinjam Buku" : "Buku Tidak Tersedia";
}

/* =========================================================
   AKSI: PEMINJAMAN BUKU
   ========================================================= */

function handleBorrow() {
  const session = getSession();
  if (!session) return;

  const books = getBooks();
  const loans = getLoans();

  const book = books.find((b) => b.id === currentDetailBookId);
  if (!book) return;

  // Validasi 1: ketersediaan buku (stok > 0)
  if (book.stok <= 0) {
    showNotif("Buku ini tidak tersedia dan tidak dapat dipinjam.", "error");
    return;
  }

  // Validasi 2: maksimal 3 buku aktif per mahasiswa
  const activeLoanCount = loans.filter((loan) => loan.nim === session.nim).length;
  if (activeLoanCount >= MAX_ACTIVE_LOANS) {
    showNotif("Anda sudah memiliki " + MAX_ACTIVE_LOANS + " buku aktif. Kembalikan salah satu buku terlebih dahulu.", "error");
    return;
  }

  // Proses peminjaman: kurangi stok
  book.stok -= 1;
  saveBooks(books);

  // Simpan data peminjaman baru
  const borrowDate = new Date();
  const dueDate = addDays(borrowDate, LOAN_DURATION_DAYS);

  const newLoan = {
    id: "L" + Date.now(),
    nim: session.nim,
    bookId: book.id,
    judul: book.judul,
    borrowDate: borrowDate.toISOString(),
    dueDate: dueDate.toISOString()
  };

  loans.push(newLoan);
  saveLoans(loans);

  showNotif("Buku \"" + book.judul + "\" berhasil dipinjam.", "success");
  goToLoansSection();
}

/* =========================================================
   RENDER: INFORMASI PEMINJAMAN
   ========================================================= */

function renderLoans() {
  const session = getSession();
  if (!session) return;

  const loans = getLoans();
  const myLoans = loans.filter((loan) => loan.nim === session.nim);

  const remainingQuota = MAX_ACTIVE_LOANS - myLoans.length;
  document.getElementById("quota-info").textContent =
    "Sisa kuota peminjaman: " + remainingQuota + " dari " + MAX_ACTIVE_LOANS + " buku.";

  const listContainer = document.getElementById("loan-list");
  const emptyMsg = document.getElementById("loan-empty");
  listContainer.innerHTML = "";

  if (myLoans.length === 0) {
    emptyMsg.classList.remove("hidden");
    return;
  }
  emptyMsg.classList.add("hidden");

  myLoans.forEach((loan) => {
    const card = document.createElement("div");
    card.className = "loan-card";
    card.innerHTML =
      "<div class='loan-info'>" +
      "<h3>" + escapeHtml(loan.judul) + "</h3>" +
      "<p>Tanggal Pinjam: " + formatDate(loan.borrowDate) + "</p>" +
      "<p>Jatuh Tempo: " + formatDate(loan.dueDate) + "</p>" +
      "</div>" +
      "<button class='btn-return' data-loan-id='" + loan.id + "'>Kembalikan</button>";

    listContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-return").forEach((btn) => {
    btn.addEventListener("click", () => {
      handleReturn(btn.getAttribute("data-loan-id"));
    });
  });
}

/* =========================================================
   AKSI: PENGEMBALIAN BUKU
   ========================================================= */

function handleReturn(loanId) {
  // Validasi 0: pastikan ada sesi mahasiswa yang aktif (sudah login)
  const session = getSession();
  if (!session) {
    showNotif("Sesi tidak valid. Silakan login kembali.", "error");
    return;
  }

  const loans = getLoans();
  const books = getBooks();

  const loanIndex = loans.findIndex((loan) => loan.id === loanId);
  if (loanIndex === -1) return;

  const loan = loans[loanIndex];

  // Validasi kepemilikan: pastikan peminjaman ini benar-benar milik
  // mahasiswa yang sedang login. Tanpa validasi ini, secara teknis
  // pengembalian bisa memengaruhi data peminjaman mahasiswa lain
  // (mis. jika loanId "ditebak"/diberikan dari luar alur UI normal).
  if (loan.nim !== session.nim) {
    showNotif("Anda tidak dapat mengembalikan buku yang bukan milik Anda.", "error");
    return;
  }

  // Tambah stok buku terkait
  const book = books.find((b) => b.id === loan.bookId);
  if (book) {
    book.stok += 1;
    saveBooks(books);
  }

  // Hapus data peminjaman dari daftar peminjaman aktif
  loans.splice(loanIndex, 1);
  saveLoans(loans);

  showNotif("Buku \"" + loan.judul + "\" berhasil dikembalikan.", "success");
  renderLoans();
}

/* =========================================================
   UTIL: ESCAPE HTML (mencegah karakter khusus merusak markup)
   ========================================================= */

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* =========================================================
   INISIALISASI APLIKASI & EVENT LISTENERS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initBooksIfEmpty();
  initLoansIfEmpty();

  // Form login
  document.getElementById("form-login").addEventListener("submit", handleLogin);

  // Logout
  document.getElementById("btn-logout").addEventListener("click", handleLogout);

  // Navigasi
  document.getElementById("nav-books").addEventListener("click", goToBooksSection);
  document.getElementById("nav-loans").addEventListener("click", goToLoansSection);

  // Pencarian & filter
  document.getElementById("input-search").addEventListener("input", renderBookList);
  document.getElementById("select-filter").addEventListener("change", renderBookList);

  // Detail buku
  document.getElementById("btn-back-to-books").addEventListener("click", goToBooksSection);
  document.getElementById("btn-pinjam").addEventListener("click", handleBorrow);

  // Cek status login saat aplikasi dibuka
  const session = getSession();
  if (session) {
    enterApp();
  } else {
    document.getElementById("section-login").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
  }
});
