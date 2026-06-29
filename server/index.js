import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDatabase, getDb, saveDatabase } from './database/init.js';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

// ── Express App ──
const app = express();
app.use(cors());
app.use(express.json());

// ── Database & Email helpers (set after init) ──
let db = null;
let transporter = null;

// ── Email Templates ──

function generateRegistrationEmail(data) {
  const dateStr = new Date(data.selected_date).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  return {
    subject: 'Your Roots & Wings Registration Confirmation',
    text: `Dear ${data.first_name},

Thank you for registering for Roots & Wings! We're so glad you're joining us.

── Event Details ──
Date: ${dateStr}
Time: 10:00 AM – 12:00 PM
Location: Community outdoor space (details sent 3 days before)

Your Party:
  • Adults attending: ${data.adults}
  • Children attending: ${data.children}
${data.note ? `\nNote from you: "${data.note}"\n` : ''}
What to expect:
  • Children's activities
  • Parent circle & community chat
  • Shared snack

We look forward to welcoming you and your family!

Warmly,
The Roots & Wings Team`,
    html: `<div style="font-family:'Inter',Arial,sans-serif;max-width:560px;margin:0 auto;background:#f4f8fa;padding:32px;border-radius:12px;">
      <h2 style="color:#3d6475;margin-top:0;">You're registered! 🌱</h2>
      <p>Dear ${data.first_name},</p>
      <p>Thank you for registering for <strong>Roots & Wings</strong>! We're so glad you're joining us.</p>
      <table style="width:100%;background:white;border-radius:8px;padding:16px;margin:16px 0;">
        <tr><td style="padding:4px 0;color:#5a7a87;">Date</td><td style="padding:4px 0;font-weight:600;">${dateStr}</td></tr>
        <tr><td style="padding:4px 0;color:#5a7a87;">Time</td><td style="padding:4px 0;font-weight:600;">10:00 AM – 12:00 PM</td></tr>
        <tr><td style="padding:4px 0;color:#5a7a87;">Adults</td><td style="padding:4px 0;font-weight:600;">${data.adults}</td></tr>
        <tr><td style="padding:4px 0;color:#5a7a87;">Children</td><td style="padding:4px 0;font-weight:600;">${data.children}</td></tr>
      </table>
      <p><strong>📍 What to expect:</strong> Children's activities, parent circle, and a shared snack.</p>
      <p style="color:#5a7a87;font-size:14px;">Location details will be sent to you 3 days before the event.</p>
      <hr style="border:none;border-top:1px solid #e8f0f3;margin:20px 0;">
      <p>Warmly,<br><strong>The Roots & Wings Team</strong></p>
    </div>`
  };
}

function generateVolunteerEmail(data) {
  return {
    subject: 'Thank You for Applying to Volunteer!',
    text: `Dear ${data.first_name},

Thank you so much for your interest in volunteering with Roots & Wings!

We truly appreciate you taking the time to share your interests and availability with us.

Here's a quick summary of what you shared:
  • Available dates: ${data.available_dates || 'To be confirmed'}
  • Hours per session: ${data.hours_per_session || 'Flexible'}
  • Interests: ${data.interests || 'General support'}

What happens next:
Someone from our team will be in touch within 3–5 days to follow up.

If you have any questions in the meantime, feel free to reach out.

With gratitude,
The Roots & Wings Team`,
    html: `<div style="font-family:'Inter',Arial,sans-serif;max-width:560px;margin:0 auto;background:#f4f8fa;padding:32px;border-radius:12px;">
      <h2 style="color:#3d6475;margin-top:0;">Thank you, ${data.first_name}! 🙌</h2>
      <p>Thank you so much for your interest in volunteering with <strong>Roots & Wings</strong>!</p>
      <table style="width:100%;background:white;border-radius:8px;padding:16px;margin:16px 0;">
        <tr><td style="padding:4px 0;color:#5a7a87;">Available Dates</td><td style="padding:4px 0;font-weight:600;">${data.available_dates || 'To be confirmed'}</td></tr>
        <tr><td style="padding:4px 0;color:#5a7a87;">Hours per Session</td><td style="padding:4px 0;font-weight:600;">${data.hours_per_session || 'Flexible'}</td></tr>
        <tr><td style="padding:4px 0;color:#5a7a87;">Interests</td><td style="padding:4px 0;font-weight:600;">${data.interests || 'General support'}</td></tr>
      </table>
      <p><strong>📬 Next steps:</strong> Someone from our team will be in touch within 3–5 days.</p>
      <hr style="border:none;border-top:1px solid #e8f0f3;margin:20px 0;">
      <p>With gratitude,<br><strong>The Roots & Wings Team</strong></p>
    </div>`
  };
}

// ── Send Email Helper ──
async function sendEmail(to, subject, text, html) {
  try {
    await transporter.sendMail({
      from: `"Roots & Wings" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });
    console.log(`[Email] Sent to ${to}: "${subject}"`);
    return true;
  } catch (err) {
    console.error(`[Email] Failed to send to ${to}:`, err.message);
    return false;
  }
}

// ── SQL.js helper: run INSERT and return lastInsertRowid ──
function runInsert(sql, params = []) {
  db.run(sql, params);
  const result = db.exec('SELECT last_insert_rowid() as id');
  const id = result[0]?.values[0]?.[0];
  saveDatabase();
  return id;
}

// ── SQL.js helper: SELECT all rows as objects ──
function selectAll(sql) {
  const result = db.exec(sql);
  if (result.length === 0) return [];
  const { columns, values } = result[0];
  return values.map(row => {
    const obj = {};
    columns.forEach((col, i) => { obj[col] = row[i]; });
    return obj;
  });
}

// ── SQL.js helper: UPDATE ──
function runUpdate(sql, params = []) {
  db.run(sql, params);
  saveDatabase();
}

// ══════════════════════════════
//  API Routes
// ══════════════════════════════

// ── Submit Registration ──
app.post('/api/submit-registration', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, adults, children, selected_date, note } = req.body;

    if (!first_name || !last_name || !email || !selected_date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = runInsert(
      `INSERT INTO registrations (first_name, last_name, email, phone, adults, children, selected_date, note)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, email, phone || null, adults || 1, children || 0, selected_date, note || null]
    );

    const emailContent = generateRegistrationEmail({ first_name, last_name, adults, children, selected_date, note });
    const sent = await sendEmail(email, emailContent.subject, emailContent.text, emailContent.html);

    if (sent) {
      runUpdate('UPDATE registrations SET confirmation_sent = 1 WHERE id = ?', [id]);
    }

    res.json({
      success: true,
      id,
      email_sent: sent,
      confirmation: { subject: emailContent.subject, body: emailContent.text },
    });
  } catch (err) {
    console.error('[API] submit-registration error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ── Submit Volunteer Application ──
app.post('/api/submit-volunteer', async (req, res) => {
  try {
    const { first_name, last_name, email, available_dates, hours_per_session, interests, why_help, gain } = req.body;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = runInsert(
      `INSERT INTO volunteers (first_name, last_name, email, available_dates, hours_per_session, interests, why_help, gain)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, email, available_dates || null, hours_per_session || null, interests || null, why_help || null, gain || null]
    );

    const emailContent = generateVolunteerEmail({ first_name, last_name, available_dates, hours_per_session, interests });
    const sent = await sendEmail(email, emailContent.subject, emailContent.text, emailContent.html);

    if (sent) {
      runUpdate('UPDATE volunteers SET confirmation_sent = 1 WHERE id = ?', [id]);
    }

    res.json({
      success: true,
      id,
      email_sent: sent,
      confirmation: { subject: emailContent.subject, body: emailContent.text },
    });
  } catch (err) {
    console.error('[API] submit-volunteer error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ── Admin Auth Middleware ──
function adminAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Basic ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const decoded = Buffer.from(auth.slice(6), 'base64').toString();
  const [user, pass] = decoded.split(':');
  if (user !== process.env.ADMIN_USER || pass !== process.env.ADMIN_PASS) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  next();
}

// ── Admin: Get Registrations ──
app.get('/api/admin/registrations', adminAuth, (req, res) => {
  const rows = selectAll('SELECT * FROM registrations ORDER BY created_at DESC');
  res.json(rows);
});

// ── Admin: Get Volunteers ──
app.get('/api/admin/volunteers', adminAuth, (req, res) => {
  const rows = selectAll('SELECT * FROM volunteers ORDER BY created_at DESC');
  res.json(rows);
});

// ── Admin: Login Check ──
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// ── Serve Admin Frontend ──
app.use('/admin', express.static(path.join(__dirname, 'public', 'admin'), { index: 'index.html' }));

// ── Start Server ──
async function start() {
  // Initialize database
  db = await initDatabase();

  // Setup email transporter
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  app.listen(PORT, () => {
    console.log(`[Server] SENSE Backend running at http://localhost:${PORT}`);
    console.log(`[Server] Admin panel at http://localhost:${PORT}/admin/`);
  });
}

start();
