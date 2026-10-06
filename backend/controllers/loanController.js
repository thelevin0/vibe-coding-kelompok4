const db = require('../db');

const MAX_ACTIVE_LOANS = 3;
const LOAN_DAYS = 7;

// Format tanggal lokal server -> 'YYYY-MM-DD' (cocok untuk kolom DATE)
function toYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function toLoan(row) {
  return {
    id: row.id,
    nim: row.nim,
    nama: row.nama,
    bookId: row.book_id,
    judul: row.judul,
    borrowDate: row.borrow_date,
    dueDate: row.due_date,
    returnDate: row.return_date,
    status: row.status
  };
}

// Riwayat peminjaman satu mahasiswa (aktif + sudah dikembalikan)
async function getLoans(req, res) {
  try {
    const [rows] = await db.query(
      `
        SELECT
          l.id,
          s.nim,
          s.nama,
          l.book_id,
          b.title AS judul,
          l.borrow_date,
          l.due_date,
          l.return_date,
          l.status
        FROM loans l
        JOIN students s ON l.student_id = s.id
        JOIN books b ON l.book_id = b.id
        WHERE s.nim = ?
        ORDER BY l.id DESC
      `,
      [req.params.nim]
    );

    res.json(rows.map(toLoan));
  } catch (error) {
    console.error('GET loans error:', error);
    res.status(500).json({ message: 'Gagal mengambil data peminjaman' });
  }
}

async function createLoan(req, res) {
  const { nim, bookId } = req.body || {};

  if (!nim || !bookId) {
    return res.status(400).json({ message: 'nim dan bookId wajib diisi' });
  }

  let connection;

  try {
    connection = await db.getConnection();
    await connection.beginTransaction();

    const [students] = await connection.query(
      'SELECT id, nim, nama FROM students WHERE nim = ? LIMIT 1 FOR UPDATE',
      [nim]
    );

    if (students.length === 0) {
      await connection.rollback();
      return res.status(404).json({
        message: 'Mahasiswa dengan NIM tersebut tidak ditemukan'
      });
    }

    const student = students[0];

    const [bookRows] = await connection.query(
      'SELECT id, title, stock FROM books WHERE id = ? LIMIT 1 FOR UPDATE',
      [bookId]
    );

    if (bookRows.length === 0) {
      await connection.rollback();
      return res.status(404).json({ message: 'Buku tidak ditemukan.' });
    }

    const book = bookRows[0];

    if (book.stock <= 0) {
      await connection.rollback();
      return res.status(400).json({ message: 'Stok habis' });
    }

    const [countRows] = await connection.query(
      `
        SELECT COUNT(*) AS activeCount
        FROM loans
        WHERE student_id = ? AND status = 'borrowed'
      `,
      [student.id]
    );

    if (Number(countRows[0].activeCount) >= MAX_ACTIVE_LOANS) {
      await connection.rollback();
      return res.status(400).json({
        message: `Gagal: Anda sudah memiliki ${MAX_ACTIVE_LOANS} buku aktif.`
      });
    }

    const [existing] = await connection.query(
      `
        SELECT id
        FROM loans
        WHERE student_id = ?
          AND book_id = ?
          AND status = 'borrowed'
        LIMIT 1
      `,
      [student.id, book.id]
    );

    if (existing.length > 0) {
      await connection.rollback();
      return res.status(400).json({ message: 'Anda sudah meminjam buku ini.' });
    }

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate);
    dueDate.setDate(dueDate.getDate() + LOAN_DAYS);

    const borrowYMD = toYMD(borrowDate);
    const dueYMD = toYMD(dueDate);

    await connection.query(
      'UPDATE books SET stock = stock - 1 WHERE id = ?',
      [book.id]
    );

    const [result] = await connection.query(
      `
        INSERT INTO loans
          (student_id, book_id, borrow_date, due_date, return_date, status)
        VALUES (?, ?, ?, ?, NULL, 'borrowed')
      `,
      [student.id, book.id, borrowYMD, dueYMD]
    );

    await connection.commit();

    res.status(201).json({
      message: 'Buku berhasil dipinjam',
      loan: {
        id: result.insertId,
        nim: student.nim,
        nama: student.nama,
        bookId: book.id,
        judul: book.title,
        borrowDate: borrowYMD,
        dueDate: dueYMD,
        returnDate: null,
        status: 'borrowed'
      }
    });
  } catch (error) {
    if (connection) await connection.rollback().catch(() => {});
    console.error('POST loan error:', error);
    res.status(500).json({ message: 'Gagal menyimpan data peminjaman' });
  } finally {
    if (connection) connection.release();
  }
}

async function returnLoan(req, res) {
  const { loanId } = req.params;
  const { nim } = req.body || {};

  if (!nim) {
    return res.status(400).json({ message: 'nim wajib diisi' });
  }

  let connection;

  try {
    connection = await db.getConnection();
    await connection.beginTransaction();

    const [rows] = await connection.query(
      `
        SELECT
          l.id,
          l.student_id,
          s.nim,
          s.nama,
          l.book_id,
          b.title AS judul,
          l.borrow_date,
          l.due_date,
          l.return_date,
          l.status
        FROM loans l
        JOIN students s ON l.student_id = s.id
        JOIN books b ON l.book_id = b.id
        WHERE l.id = ?
        LIMIT 1
        FOR UPDATE
      `,
      [loanId]
    );

    if (rows.length === 0) {
      await connection.rollback();
      return res.status(404).json({ message: 'Data peminjaman tidak ditemukan' });
    }

    const loan = rows[0];

    // Hanya pemilik pinjaman yang boleh mengembalikan
    if (loan.nim !== String(nim)) {
      await connection.rollback();
      return res.status(403).json({
        message: 'Anda tidak berhak mengembalikan peminjaman ini'
      });
    }

    if (loan.status !== 'borrowed') {
      await connection.rollback();
      return res.status(400).json({ message: 'Buku ini sudah dikembalikan' });
    }

    const returnYMD = toYMD(new Date());

    const [result] = await connection.query(
      `
        UPDATE loans
        SET return_date = ?, status = 'returned'
        WHERE id = ? AND status = 'borrowed'
      `,
      [returnYMD, loan.id]
    );

    if (result.affectedRows !== 1) {
      await connection.rollback();
      return res.status(409).json({
        message: 'Data peminjaman berubah. Silakan coba lagi.'
      });
    }

    await connection.query(
      'UPDATE books SET stock = stock + 1 WHERE id = ?',
      [loan.book_id]
    );

    await connection.commit();

    res.json({
      message: 'Buku berhasil dikembalikan',
      loan: {
        id: loan.id,
        nim: loan.nim,
        nama: loan.nama,
        bookId: loan.book_id,
        judul: loan.judul,
        borrowDate: loan.borrow_date,
        dueDate: loan.due_date,
        returnDate: returnYMD,
        status: 'returned'
      }
    });
  } catch (error) {
    if (connection) await connection.rollback().catch(() => {});
    console.error('Return loan error:', error);
    res.status(500).json({ message: 'Sistem gagal mengembalikan buku' });
  } finally {
    if (connection) connection.release();
  }
}

module.exports = { getLoans, createLoan, returnLoan };
