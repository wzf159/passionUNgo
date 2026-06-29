import initSqlJs from 'sql.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_DIR = path.join(__dirname);
const DB_PATH = path.join(DB_DIR, 'sense.db');

let db = null;

export function getDb() {
  return db;
}

export async function initDatabase() {
  const SQL = await initSqlJs();

  // Ensure directory exists
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }

  // Load existing DB or create new one
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
    console.log('[DB] Loaded existing database');
  } else {
    db = new SQL.Database();
    console.log('[DB] Created new database');
  }

  // Create version tracking table
  db.run(`
    CREATE TABLE IF NOT EXISTS schema_version (
      version INTEGER PRIMARY KEY,
      applied_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Check current version
  const versionRow = db.exec('SELECT MAX(version) as v FROM schema_version');
  const currentVersion = versionRow.length > 0 && versionRow[0].values.length > 0
    ? versionRow[0].values[0][0] || 0
    : 0;

  // V1: Initial tables
  if (currentVersion < 1) {
    db.run(`
      CREATE TABLE IF NOT EXISTS registrations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        adults INTEGER NOT NULL DEFAULT 1,
        children INTEGER NOT NULL DEFAULT 0,
        selected_date TEXT NOT NULL,
        note TEXT,
        confirmation_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT (datetime('now', 'localtime'))
      );
    `);
    db.run(`
      CREATE TABLE IF NOT EXISTS volunteers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        available_dates TEXT,
        hours_per_session TEXT,
        interests TEXT,
        why_help TEXT,
        gain TEXT,
        confirmation_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT (datetime('now', 'localtime'))
      );
    `);
    db.run('INSERT INTO schema_version (version) VALUES (1)');
    console.log('[DB] Migration v1 applied: created registrations & volunteers tables');
  }

  // Future migrations:
  // if (currentVersion < 2) { ... }

  // Save to file
  saveDatabase();

  console.log(`[DB] Database ready at ${DB_PATH} (version ${Math.max(currentVersion, 1)})`);
  return db;
}

export function saveDatabase() {
  if (db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_PATH, buffer);
  }
}
