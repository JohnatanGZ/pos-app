const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbFile = path.join(__dirname, '..', 'electron/db/database.sqlite');
const db = new Database(dbFile);

const username = 'admin';
const password = 'admin123';
const hash = bcrypt.hashSync(password, 10);

db.prepare('INSERT OR IGNORE INTO usuarios (username, password_hash, role) VALUES (?, ?, ?)').run(username, hash, 'superuser');

console.log('Usuario admin creado. Usuario: admin / contraseña: admin123');
