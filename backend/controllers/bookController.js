const db = require('../db');

const BOOK_COLUMNS = `
  id,
  book_code AS bookCode,
  title AS judul,
  author AS penulis,
  stock AS stok,
  synopsis AS sinopsis,
  shelf_location AS lokasi
`;

async function getBooks(req, res) {
  try {
    const keyword = String(req.query.search || '');
    const filter = req.query.filter || 'semua';

    let sql = `SELECT ${BOOK_COLUMNS} FROM books WHERE title LIKE ?`;
    const params = [`%${keyword}%`];

    if (filter === 'tersedia') {
      sql += ' AND stock > 0';
    } else if (filter === 'tidak-tersedia') {
      sql += ' AND stock = 0';
    }

    sql += ' ORDER BY id ASC';

    const [books] = await db.query(sql, params);
    res.json(books);
  } catch (error) {
    console.error('Get books error:', error);
    res.status(500).json({ message: 'Gagal mengambil data buku' });
  }
}

async function getBookById(req, res) {
  try {
    const [rows] = await db.query(
      `SELECT ${BOOK_COLUMNS} FROM books WHERE id = ? LIMIT 1`,
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Buku tidak ditemukan' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Get book error:', error);
    res.status(500).json({ message: 'Gagal mengambil detail buku' });
  }
}

module.exports = { getBooks, getBookById };
