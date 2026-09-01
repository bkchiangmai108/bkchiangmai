const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== Database Connection (MySQL via Docker) =====
let pool = null;
const isDBConfigured = process.env.DB_HOST && process.env.DB_PASSWORD;

if (isDBConfigured) {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'bkchiangmai',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'bkchiangmai',
    waitForConnections: true,
    connectionLimit: 10,
  });
  console.log('📦 Database: MySQL connected');
} else {
  console.log('📦 Database: JSON file storage (no MySQL configured)');
}

// ===== Helper: Save/Load JSON data =====
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

function loadJSON(filename) {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

function saveJSON(filename, data) {
  fs.writeFileSync(path.join(dataDir, filename), JSON.stringify(data, null, 2), 'utf8');
}

// ===== Static Files =====
// Serve assets, src, data dirs
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/data', express.static(path.join(__dirname, 'src', 'data')));

// Serve HTML from both root and src/
app.get('*.html', (req, res) => {
  const rootPath = path.join(__dirname, req.path);
  const srcPath = path.join(__dirname, 'src', req.path);
  if (fs.existsSync(rootPath)) return res.sendFile(rootPath);
  if (fs.existsSync(srcPath)) return res.sendFile(srcPath);
  res.status(404).send('Page not found');
});

// Root → src/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// ===== API: Reservation (original + DB) =====
app.post('/api/reserve', async (req, res) => {
  const { full_name, contact_phone, line_id, course_language, preferred_location } = req.body;

  // Validation
  if (!full_name || !full_name.trim()) {
    return res.status(400).json({ success: false, message: 'กรุณากรอกชื่อ-นามสกุล (Name is required)' });
  }
  if (!contact_phone || !/^[0-9]{9,10}$/.test(contact_phone.trim())) {
    return res.status(400).json({ success: false, message: 'กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก (Valid phone is required)' });
  }

  const validLangs = ['ภาษาไทย', 'English'];
  if (!course_language || !validLangs.includes(course_language)) {
    return res.status(400).json({ success: false, message: 'ภาษาที่ใช้เรียนไม่ถูกต้อง (Invalid language option)' });
  }

  const validLocs = [
    'ศูนย์ในเมืองเชียงใหม่ (ถ.โชตนา)',
    'ศูนย์เรียนรู้ธรรมชาติ (ชิวาลัย อ.แม่วาง)',
    'เรียนในรูปแบบออนไลน์ (Online)'
  ];
  if (!preferred_location || !validLocs.includes(preferred_location)) {
    return res.status(400).json({ success: false, message: 'สถานที่เรียนไม่ถูกต้อง (Invalid location option)' });
  }

  const timestamp = new Date().toISOString();
  const reservationId = 'res_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);

  const newReservation = {
    id: reservationId,
    full_name: full_name.trim(),
    contact_phone: contact_phone.trim(),
    line_id: line_id ? line_id.trim() : '',
    course_language,
    preferred_location,
    timestamp
  };

  try {
    // If DB available, save to MySQL
    if (pool) {
      await pool.execute(
        `INSERT INTO contacts (name, phone, line_id, course_language, preferred_location, message, type)
         VALUES (?, ?, ?, ?, ?, ?, 'reservation')`,
        [newReservation.full_name, newReservation.contact_phone, newReservation.line_id,
         newReservation.course_language, newReservation.preferred_location, `Reservation: ${reservationId}`]
      );
    }
  } catch (err) {
    console.error('DB save error, falling back to JSON:', err.message);
  }

  // Always save to JSON file (backup)
  const reservations = loadJSON('reservations.json');
  reservations.push(newReservation);
  saveJSON('reservations.json', reservations);

  // Log notification (mock LINE)
  const formattedLocalTime = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
  const notificationMsg = `
============================================================
🔔 ลงทะเบียนเรียนสมาธิฟรี (ใหม่)
👤 ชื่อ: ${newReservation.full_name}
📞 โทร: ${newReservation.contact_phone}
💬 LINE: ${newReservation.line_id || '-'}
🌐 ภาษา: ${newReservation.course_language}
📍 สถานที่: ${newReservation.preferred_location}
⏰ เวลา: ${formattedLocalTime}
============================================================`;
  console.log(notificationMsg);
  fs.appendFileSync(path.join(dataDir, 'line_notifications.log'), notificationMsg + '\n', 'utf8');

  return res.status(200).json({
    success: true,
    message: 'ลงทะเบียนเรียนฟรีเรียบร้อยแล้ว 🙏 (Registration successful)',
    reservation: newReservation
  });
});

// ===== API: Contact Form (NEW) =====
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'กรุณากรอกชื่อ อีเมล และข้อความ' });
    }

    if (pool) {
      await pool.execute(
        'INSERT INTO contacts (name, email, subject, message, type) VALUES (?, ?, ?, ?, ?)',
        [name, email, subject || '', message, 'contact']
      );
    } else {
      const contacts = loadJSON('contacts.json');
      contacts.push({ name, email, subject: subject || '', message, timestamp: new Date().toISOString() });
      saveJSON('contacts.json', contacts);
    }
    res.json({ success: true, message: 'ได้รับข้อความแล้ว ขอบคุณครับ 🙏' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาด กรุณาลองใหม่' });
  }
});

// ===== API: Email Subscribe (NEW) =====
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'กรุณากรอกอีเมล' });

    if (pool) {
      await pool.execute(
        'INSERT INTO subscribers (email) VALUES (?) ON DUPLICATE KEY UPDATE active = TRUE',
        [email]
      );
    } else {
      const subs = loadJSON('subscribers.json');
      if (!subs.find(s => s.email === email)) {
        subs.push({ email, subscribed_at: new Date().toISOString(), active: true });
        saveJSON('subscribers.json', subs);
      }
    }
    res.json({ success: true, message: 'สมัครรับข่าวสารสำเร็จ 🙌' });
  } catch (err) {
    console.error('Subscribe error:', err);
    res.status(500).json({ error: 'เกิดข้อผิดพลาด' });
  }
});

// ===== API: Page View (NEW) =====
app.post('/api/pageview', (req, res) => {
  try {
    const { page } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.ip;
    const ua = req.headers['user-agent'] || '';
    const views = loadJSON('pageviews.json');
    views.push({ page: page || '/', ip, ua, visited_at: new Date().toISOString() });
    saveJSON('pageviews.json', views);
    res.json({ success: true });
  } catch {
    res.json({ success: false });
  }
});

// ===== API: Get reservations (admin use) =====
app.get('/api/reservations', (req, res) => {
  const all = loadJSON('reservations.json');
  res.json(all.reverse()); // newest first
});

// ===== Start Server =====

// ===== Admin Dashboard =====
// รหัสผ่าน admin อ่านจาก environment variable (ไฟล์ .env บนเซิร์ฟเวอร์)
// ไม่ hardcode ในโค้ด — ถ้ายังไม่ตั้ง ADMIN_PASSWORD ระบบจะปฏิเสธทุก request (fail-closed)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
function requireAdmin(req, res, next) {
  const pwd = req.query.pwd || req.headers['x-admin-key'];
  if (ADMIN_PASSWORD && pwd === ADMIN_PASSWORD) return next();
  if (req.path.endsWith('.html')) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});
app.get('/api/admin/reservations', requireAdmin, (req, res) => {
  res.json(loadJSON('reservations.json').reverse().slice(0, 100));
});
app.get('/api/admin/contacts', requireAdmin, async (req, res) => {
  try { if (pool) { const [rows] = await pool.execute('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100'); return res.json(rows); } } catch {}
  res.json(loadJSON('contacts.json').reverse().slice(0, 100));
});
app.get('/api/admin/subscribers', requireAdmin, async (req, res) => {
  try { if (pool) { const [rows] = await pool.execute('SELECT * FROM subscribers ORDER BY subscribed_at DESC LIMIT 100'); return res.json(rows); } } catch {}
  res.json(loadJSON('subscribers.json').reverse().slice(0, 100));
});
app.get('/api/admin/stats', requireAdmin, async (req, res) => {
  try {
    const stats = {};
    if (pool) {
      const [[{c}]] = await pool.execute('SELECT COUNT(*) as c FROM contacts'); stats.contacts = c;
      const [[{s}]] = await pool.execute('SELECT COUNT(*) as s FROM subscribers'); stats.subscribers = s;
      const [[{r}]] = await pool.execute("SELECT COUNT(*) as r FROM contacts WHERE type='reservation'"); stats.reservations = r;
      const [[{v}]] = await pool.execute('SELECT COUNT(*) as v FROM page_views'); stats.pageViews = v;
    } else {
      stats.contacts = (loadJSON('contacts.json')).length;
      stats.subscribers = (loadJSON('subscribers.json')).length;
      stats.reservations = (loadJSON('reservations.json')).length;
      stats.pageViews = (loadJSON('pageviews.json')).length;
    }
    res.json(stats);
  } catch (e) { res.json({ error: e.message }); }
});


// ===== SEO Routes =====
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.listen(PORT, () => {
  console.log(`============================================================`);
  console.log(` 🌐 bkchiangmai.com Server is running on port ${PORT}`);
  console.log(` 🏠 http://localhost:${PORT}`);
  console.log(` 📦 Storage: ${pool ? 'MySQL + JSON backup' : 'JSON file only'}`);
  console.log(`============================================================`);
});