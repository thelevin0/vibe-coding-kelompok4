require('./loadEnv');
const path = require('path');
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);
app.use('/api', loanRoutes);

// Endpoint /api yang tidak ada -> JSON (bukan halaman HTML error)
app.use('/api', (req, res) => {
  res.status(404).json({ message: 'Endpoint tidak ditemukan' });
});

// Frontend ikut dilayani server ini: buka http://localhost:3000
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Semua error yang lolos (mis. DB mati) -> JSON
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (res.headersSent) return next(err);
  res.status(err.status || 500).json({ message: 'Terjadi kesalahan pada server' });
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
  console.log('API login : /api/login');
  console.log('API buku  : /api/books');
  console.log('API loan  : /api/loans');
});
