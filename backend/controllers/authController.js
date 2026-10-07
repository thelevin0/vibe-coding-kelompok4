const db = require('../db');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'rahasia_kelompok4';
const JWT_EXPIRES = process.env.JWT_EXPIRES || '1d';

async function login(req, res) {
  const { nim, password } = req.body || {};

  if (!nim || !password) {
    return res.status(400).json({ message: 'NIM dan password wajib diisi' });
  }

  try {
    const [rows] = await db.query(
      'SELECT id, nim, nama, password FROM students WHERE nim = ?',
      [nim]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'NIM atau password salah' });
    }

    const student = rows[0];

    if (student.password !== password) {
      return res.status(401).json({ message: 'NIM atau password salah' });
    }

    const token = jwt.sign(
      { id: student.id, nim: student.nim, nama: student.nama },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES }
    );

    res.json({
      message: 'Login berhasil',
      token,
      user: { nim: student.nim, nama: student.nama }
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
}

module.exports = { login };