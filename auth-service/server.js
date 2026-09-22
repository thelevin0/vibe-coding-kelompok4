const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const STUDENTS = [
  { nim: "2201001", password: "pass123", nama: "Ayu Lestari" },
  { nim: "2201002", password: "pass123", nama: "Budi Santoso" },
  { nim: "2201003", password: "pass123", nama: "Citra Ramadhani" },
  { nim: "2201004", password: "pass123", nama: "Dimas Prakoso" }
];

app.post("/api/login", (req, res) => {
  const { nim, password } = req.body;

  const student = STUDENTS.find(
    (s) => s.nim === nim && s.password === password
  );

  if (!student) {
    return res.status(401).json({
      message: "NIM atau password salah"
    });
  }

  res.json({
    message: "Login berhasil",
    user: {
      nim: student.nim,
      nama: student.nama
    }
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Auth Service berjalan di http://localhost:${PORT}`);
});