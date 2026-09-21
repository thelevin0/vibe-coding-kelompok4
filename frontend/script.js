/* =========================================================
   KONSTANTA & KONFIGURASI MICROSERVICE
   ========================================================= */
const BOOK_API = 'http://localhost:3001/api/books';
const LOAN_API = 'http://localhost:3002/api/loans';

const STORAGE_KEYS = { SESSION: "lib_session" };
const MAX_ACTIVE_LOANS = 3;

// Data mahasiswa tetap untuk prototype login
const STUDENTS = [
  { nim: "2201001", password: "pass123", nama: "Ayu Lestari" },
  { nim: "2201002", password: "pass123", nama: "Budi Santoso" },
  { nim: "2201003", password: "pass123", nama: "Citra Ramadhani" },
  { nim: "2201004", password: "pass123", nama: "Dimas Prakoso" }
];

let currentDetailBookId = null;
let currentDetailBookTitle = null;

/* =========================================================
   UTIL: LOCALSTORAGE HELPERS (Hanya untuk Sesi Login)
   ========================================================= */
function getSession() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.SESSION)); }
function saveSession(session) { localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session)); }
function clearSession() { localStorage.removeItem(STORAGE_KEYS.SESSION); }

/* =========================================================
   NOTIFIKASI & FORMAT TANGGAL
   ========================================================= */
let notifTimeout = null;
function showNotif(message, type) {
  const notif = document.getElementById("notif");
  notif.textContent = message;
  notif.className = "notif " + type;
  if (notifTimeout) clearTimeout(notifTimeout);
  notifTimeout = setTimeout(() => { notif.classList.add("hidden"); }, 3500);
}

function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
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
   INTEGRASI MICROSERVICE: DAFTAR & DETAIL BUKU
   ========================================================= */
async function renderBookList() {
  const keyword = document.getElementById("input-search").value.trim().toLowerCase();
  const filterValue = document.getElementById("select-filter").value;

  try {
    // Memanggil Book Service
    const response = await fetch(`${BOOK_API}?search=${keyword}&filter=${filterValue}`);
    const books = await response.json();

    const listContainer = document.getElementById("book-list");
    const emptyMsg = document.getElementById("book-empty");
    listContainer.innerHTML = "";

    if (books.length === 0) {
      emptyMsg.classList.remove("hidden");
      return;
    }
    emptyMsg.classList.add("hidden");

    books.forEach((book) => {
      const isAvailable = book.stok > 0;
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML =
        `<h3>${escapeHtml(book.judul)}</h3>
        <p class='author'>${escapeHtml(book.penulis)}</p>
        <span class='badge ${isAvailable ? "available" : "unavailable"}'>
          ${isAvailable ? "Tersedia" : "Tidak Tersedia"}
        </span>
        <button class='btn-detail' data-id='${book.id}'>Lihat Detail</button>`;
      listContainer.appendChild(card);
    });

    document.querySelectorAll(".btn-detail").forEach((btn) => {
      btn.addEventListener("click", () => goToDetailSection(btn.getAttribute("data-id")));
    });
  } catch (error) {
    showNotif("Gagal mengambil data buku dari server.", "error");
  }
}

async function renderDetail(bookId) {
  try {
    const response = await fetch(`${BOOK_API}/${bookId}`);
    if (!response.ok) throw new Error("Buku tidak ditemukan");
    
    const book = await response.json();
    const isAvailable = book.stok > 0;
    currentDetailBookTitle = book.judul; // Simpan judul untuk peminjaman

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
  } catch (error) {
    showNotif("Gagal memuat detail buku.", "error");
    goToBooksSection();
  }
}

/* =========================================================
   INTEGRASI MICROSERVICE: PEMINJAMAN & PENGEMBALIAN
   ========================================================= */
async function handleBorrow() {
  const session = getSession();
  if (!session || !currentDetailBookId) return;

  try {
    // Memanggil Loan Service
    const response = await fetch(LOAN_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nim: session.nim,
        bookId: currentDetailBookId,
        judul: currentDetailBookTitle
      })
    });

    const data = await response.json();

    if (!response.ok) {
      showNotif(data.message || "Gagal meminjam buku.", "error");
      return;
    }

    showNotif(data.message, "success");
    goToLoansSection();
  } catch (error) {
    showNotif("Terjadi kesalahan sistem saat meminjam.", "error");
  }
}

async function renderLoans() {
  const session = getSession();
  if (!session) return;

  try {
    // Memanggil Loan Service
    const response = await fetch(`${LOAN_API}/${session.nim}`);
    const myLoans = await response.json();

    const remainingQuota = MAX_ACTIVE_LOANS - myLoans.length;
    document.getElementById("quota-info").textContent =
      `Sisa kuota peminjaman: ${remainingQuota} dari ${MAX_ACTIVE_LOANS} buku.`;

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
        `<div class='loan-info'>
          <h3>${escapeHtml(loan.judul)}</h3>
          <p>Tanggal Pinjam: ${formatDate(loan.borrowDate)}</p>
          <p>Jatuh Tempo: ${formatDate(loan.dueDate)}</p>
        </div>
        <button class='btn-return' data-loan-id='${loan.id}'>Kembalikan</button>`;
      listContainer.appendChild(card);
    });

    document.querySelectorAll(".btn-return").forEach((btn) => {
      btn.addEventListener("click", () => handleReturn(btn.getAttribute("data-loan-id")));
    });
  } catch (error) {
    showNotif("Gagal mengambil data peminjaman.", "error");
  }
}

async function handleReturn(loanId) {
  const session = getSession();
  if (!session) return;

  try {
    // Memanggil Loan Service
    const response = await fetch(`${LOAN_API}/return/${loanId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nim: session.nim })
    });

    const data = await response.json();

    if (!response.ok) {
      showNotif(data.message || "Gagal mengembalikan buku.", "error");
      return;
    }

    showNotif(data.message, "success");
    renderLoans();
  } catch (error) {
    showNotif("Terjadi kesalahan sistem saat mengembalikan.", "error");
  }
}

/* =========================================================
   UTIL: ESCAPE HTML
   ========================================================= */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* =========================================================
   INISIALISASI APLIKASI
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-login").addEventListener("submit", handleLogin);
  document.getElementById("btn-logout").addEventListener("click", handleLogout);
  document.getElementById("nav-books").addEventListener("click", goToBooksSection);
  document.getElementById("nav-loans").addEventListener("click", goToLoansSection);
  document.getElementById("input-search").addEventListener("input", renderBookList);
  document.getElementById("select-filter").addEventListener("change", renderBookList);
  document.getElementById("btn-back-to-books").addEventListener("click", goToBooksSection);
  document.getElementById("btn-pinjam").addEventListener("click", handleBorrow);

  const session = getSession();
  if (session) { enterApp(); } 
  else {
    document.getElementById("section-login").classList.remove("hidden");
    document.getElementById("app").classList.add("hidden");
  }
});