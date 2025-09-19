const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dbFile = path.join(__dirname, '../electron/db/database.sqlite');
const db = new Database(dbFile);

// Tablas iniciales
db.prepare(`
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password_hash TEXT,
  role TEXT
)`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS productos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  codigo TEXT UNIQUE,
  precio REAL,
  stock INTEGER,
  iva INTEGER DEFAULT 0
)`).run();

// Endpoints básicos
app.get('/productos', (req, res) => {
  const rows = db.prepare('SELECT * FROM productos').all();
  res.json(rows);
});

app.post('/productos', (req, res) => {
  const { nombre, codigo, precio, stock, iva } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO productos (nombre, codigo, precio, stock, iva) VALUES (?, ?, ?, ?, ?)');
    const info = stmt.run(nombre, codigo, precio, stock, iva ? 1 : 0);
    res.json({ id: info.lastInsertRowid });
  } catch (err) {
    res.status(400).json({ error: String(err) });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API POS corriendo en http://localhost:${PORT}`));
