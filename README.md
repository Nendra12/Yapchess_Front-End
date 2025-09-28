<div align="center">

# ♟️ Distributed Chess Game Web Application  
**A Next-Gen Multiplayer Web Chess with Real-Time & Social Features**  

![GitHub stars](https://img.shields.io/github/stars/Nendra12/Yapchess_Front-End?style=social)  
![GitHub forks](https://img.shields.io/github/forks/Nendra12/Yapchess_Front-End?style=social)  
![License](https://img.shields.io/github/license/Nendra12/Yapchess_Front-End?)  
![Last Commit](https://img.shields.io/github/last-commit/Nendra12/Yapchess_Front-End?color=green)  

</div>

---

## 📖 Deskripsi
**Distributed Chess Game** adalah aplikasi **catur multiplayer berbasis web** dengan **arsitektur three-tier**.  
Dibangun menggunakan **React.js, Node.js, PostgreSQL, dan Socket.io**, aplikasi ini menawarkan **sinkronisasi real-time**, sistem manajemen waktu, serta **fitur sosial** seperti pertemanan, chat, dan forum diskusi.

---

## 🎯 Tujuan Proyek
- ✅ Membangun aplikasi catur multiplayer berbasis web yang scalable dan reliable.  
- ✅ Menggunakan **WebSocket** untuk komunikasi real-time antar pemain.  
- ✅ Mengintegrasikan fitur sosial (friend system, private chat, forum).  
- ✅ Menerapkan **sistem manajemen waktu & ranking** yang adil.  

---

## 🛠️ Teknologi
| Layer | Teknologi |
|-------|-----------|
| 🎨 **Frontend** | React.js, HTML5, CSS3, JavaScript ES6+ |
| ⚙️ **Backend** | Node.js, Express.js |
| 🗄️ **Database** | PostgreSQL, MongoDB |
| 🔌 **Real-time** | Socket.io (WebSocket) |
| 🔐 **Auth** | JSON Web Token (JWT) |
| 🚀 **Deployment** | Docker, Docker Compose |

---

## 📐 Arsitektur Sistem
Aplikasi ini menggunakan **Three-Tier Architecture**:  

1. **Presentation Layer (Client):**  
   UI dengan React.js, interaksi papan catur, fitur sosial.  

2. **Business Logic Layer (Server):**  
   Validasi aturan catur, autentikasi JWT, sistem ranking, chat, forum, WebSocket.  

3. **Data Layer (Database):**  
   PostgreSQL untuk data user, permainan, forum, caching.  

---

## ✨ Fitur Utama
| Kategori | Fitur |
|----------|-------|
| 🎮 **Gameplay** | Real-time multiplayer chess, validasi gerakan otomatis |
| ⏱️ **Time Control** | Pilihan 5, 10, 30, 60 menit, countdown timer |
| 🏆 **Scoring & Ranking** | +20 poin menang, -20 poin kalah, leaderboard global & regional |
| 👤 **User Profile** | Username, email, avatar, bio, statistik |
| 🤝 **Fitur Sosial** | Add friend, challenge, private chat, forum diskusi |
| 🔐 **Authentication** | Registrasi, login/logout (JWT), verifikasi email, reset password |

---

## 📡 API Ringkas
```http
# Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout

# Users
GET    /api/users/profile
PUT    /api/users/profile

# Games
POST   /api/games/create
GET    /api/games/:id
POST   /api/games/:id/join

# Social
GET    /api/friends
POST   /api/friends/request
GET    /api/forum/topics

# Rankings
GET    /api/rankings/global
```

---

## 🚀 Cara Menjalankan
```bash
# Clone repository
git clone https://github.com/username/repo-name.git
cd repo-name

# Jalankan backend
cd server
npm install
npm start

# Jalankan frontend
cd client
npm install
npm run dev

# Atau jalankan dengan Docker
docker-compose up --build
```

---

## 👨‍💻 Tim Pengembang
- Zanuar Rikza Aditya (Ketua, fokus back-end)
- Danendra Mahardhika  (Anggota, fokus front-end)
- Harits Putra Junaidi  (Anggota, fokus Documentation Officer, QA)
- Asep Prayogi (Anggota, fokus UI/UX, System Analyst)
- Moh Naufal Thariq  (Anggota, fokus Database Designer)

📚 Dosen Pembimbing: **Yoga Dwitya Pramudita, S.Kom. M.Cs**  
🏫 Program Studi **Teknik Informatika, Universitas Trunojoyo Madura (2025/2026)**  

---
