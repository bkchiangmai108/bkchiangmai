# 📘 ขั้นตอน Deploy bkchiangmai.com ไป Hostinger VPS

---

## ✅ ส่วนที่ผมตั้งค่าให้แล้วบน VPS

| รายการ | สถานะ |
|:---|:---|
| MariaDB (MySQL) Docker | ✅ พร้อม — database `bkchiangmai` |
| ตาราง contacts, subscribers, page_views | ✅ พร้อม |
| SSH Deploy Key | ✅ สร้างแล้ว |
| Docker Compose | ✅ พร้อมที่ `/opt/bkchiangmai/docker-compose.yml` |
| Traefik + SSL (Let's Encrypt) | ✅ มีอยู่แล้ว — auto HTTPS |
| DNS `bkchiangmai.com` → 187.52.121.50 | ✅ เรียบร้อย |

---

## ⚡ ขั้นตอนที่พี่ต้องทำ (บนเครื่อง Windows)

### 1️⃣ สร้าง GitHub Repo

เปิด **Git Bash** หรือ **Terminal** ใน `F:\Web Design\bk-chiang-mai-v3`

```bash
# สร้าง .gitignore
echo "node_modules/
.env
scratch/
.agents/
*.log" > .gitignore

# Init Git
git init
git add .
git commit -m "🎉 first commit - bkchiangmai v3"

# เปลี่ยนเป็น main branch
git branch -M main

# เชื่อมกับ GitHub (เปลี่ยน <username> เป็นชื่อ GitHub ของพี่)
git remote add origin https://github.com/<username>/bkchiangmai.git

# Push
git push -u origin main
```

### 2️⃣ เพิ่ม GitHub Secrets

ไปที่ **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

**Name:** `VPS_SSH_KEY`
**Secret:** วาง Private Key ด้านล่างนี้:

```
-----BEGIN OPENSSH PRIVATE KEY-----
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIb3DziAwx0HZ+Djw8FsIZl9IW4qjKs+JBtYw2BDGUS5 github-actions@bkchiangmai
-----END OPENSSH PRIVATE KEY-----
```

### 3️⃣ อัปเดต package.json (สำคัญ!)

เปิด `F:\Web Design\bk-chiang-mai-v3\package.json` แล้วเพิ่ม 2 บรรทัดนี้ใน `dependencies`:

```json
"dependencies": {
  "express": "^4.21.0",
  "mysql2": "^3.11.0"
}
```

จากนั้นรันติดตั้ง:

```bash
npm install
```

### 4️⃣ สร้างไฟล์ `.github/workflows/deploy.yml`

สร้างโฟลเดอร์ `.github/workflows/` แล้วสร้างไฟล์ `deploy.yml` เนื้อหาตามนี้:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Copy files to VPS
        uses: appleboy/scp-action@v0.1.7
        with:
          host: 187.52.121.50
          username: root
          key: \${{ secrets.VPS_SSH_KEY }}
          source: "./*"
          target: "/opt/bkchiangmai"
          strip_components: 0
          rm: true

      - name: Build & Restart
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: 187.52.121.50
          username: root
          key: \${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /opt/bkchiangmai
            docker compose pull
            docker compose up -d --build --remove-orphans
            docker system prune -af --filter "until=24h"
```

### 5️⃣ Commit + Push

```bash
git add .
git commit -m "🔥 add GitHub Actions deploy"
git push
```

> 🔄 หลังจาก push → อีก 2-3 นาที **https://bkchiangmai.com** ก็จะใช้งานได้!

---

## 📝 ถ้าต้องการเพิ่ม Contact Form ในเว็บ

เพิ่มโค้ด HTML นี้ในหน้า `index.html` หรือหน้าที่ต้องการ:

```html
<form id="contactForm">
  <input type="text" name="name" placeholder="ชื่อ" required>
  <input type="email" name="email" placeholder="อีเมล" required>
  <input type="text" name="subject" placeholder="หัวข้อ">
  <textarea name="message" placeholder="ข้อความ" required></textarea>
  <button type="submit">ส่งข้อความ</button>
</form>

<script>
document.getElementById('contactForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  const result = await res.json();
  alert(result.message || result.error);
};
</script>
```

---

## 🔧 คำสั่ง Management

| คำสั่ง | ความหมาย | 
|:---|:---|
| `docker compose logs -f` | ดู log เว็บ | 
| `docker compose restart` | รีสตาร์ทเว็บ |
| `docker compose down && docker compose up -d` | เริ่มใหม่ทั้งหมด |

---

## ❓ มีอะไรให้ช่วยต่อ?

- แก้ไข/ปรับ server.js เพื่อเพิ่มฟีเจอร์
- ตั้งค่า Google Analytics
- ทำระบบ Admin Dashboard
- ตั้งค่า SSL email (SMTP)
- เพิ่มระบบ subscribe newsletter