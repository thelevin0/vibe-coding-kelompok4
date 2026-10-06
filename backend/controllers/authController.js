const db = require('../db');

async function login(req, res) {
  const { nim, password } = req.body || {};

  if (!nim || !password) {
    return res.status(400).json({ message: 'NIM dan password wajib diisi' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, nim, nama FROM students WHERE nim = ? AND password = ?',
      [nim, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'NIM atau password salah' });
    }

    const student = rows[0];

    res.json({
      message: 'Login berhasil',
      user: { nim: student.nim, nama: student.nama }
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
}

module.exports = { login };
