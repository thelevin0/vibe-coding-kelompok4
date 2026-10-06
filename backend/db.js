require('./loadEnv');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'perpustakaan',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Kolom DATE dikirim sebagai string 'YYYY-MM-DD' (bukan objek Date)
  // supaya tanggal tidak bergeser karena perbedaan timezone.
  dateStrings: ['DATE']
});

module.exports = db;
