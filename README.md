# Senyum Anak Hepi

Aplikasi web edukasi kesehatan gigi anak dari Tami Dental Care. Project ini dibuat dengan React, Vite, React Router, dan Tailwind CSS, menggunakan data dummy serta local state tanpa backend.

## Fitur

- Landing page ceria dan mobile friendly
- Navigasi sederhana untuk Home, Belajar, Sikat Gigi, Cerita, Games, dan Orang Tua
- Materi edukasi kesehatan gigi untuk anak
- Panduan langkah menyikat gigi dengan progress visual
- Timer sikat gigi 2 menit dengan motivasi yang berubah
- Empat cerita pendek edukatif
- Tiga mini games interaktif
- Sistem skor dan badge/reward
- Routing per halaman agar lebih rapi untuk deploy
- Progres lokal tersimpan di browser dengan `localStorage`
- Konfigurasi deploy untuk Netlify dan Vercel
- Main Balita untuk anak usia 3-5 tahun
- Cerita interaktif dengan voice guide berbasis Web Speech API
- Aktivitas seru 10-20 menit untuk pendampingan orang tua
- Tombol Instagram Tami Dental yang muncul global dan CTA di halaman penting

## Struktur Folder

```bash
senyum-anak-hepi/
├── public/
├── src/
│   ├── components/
│   │   ├── AppShell.jsx
│   │   ├── BadgePanel.jsx
│   │   ├── ContainerCard.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroIllustration.jsx
│   │   ├── InfoCard.jsx
│   │   ├── InstagramButton.jsx
│   │   ├── InteractiveStoryPlayer.jsx
│   │   ├── LittleKidsBrushGame.jsx
│   │   ├── LittleKidsFoodGame.jsx
│   │   ├── MenuCard.jsx
│   │   ├── MobileNav.jsx
│   │   ├── MovementCards.jsx
│   │   ├── NavBar.jsx
│   │   ├── PageSeo.jsx
│   │   ├── RouteButton.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── StepGuide.jsx
│   │   ├── StoryCard.jsx
│   │   ├── DailyMission.jsx
│   │   ├── EasyBrushSequence.jsx
│   │   ├── TenMinutePlaySession.jsx
│   │   └── TimerCard.jsx
│   ├── data/
│   │   └── content.js
│   │   ├── funActivities.js
│   │   └── interactiveStories.js
│   ├── hooks/
│   │   ├── useAppProgress.js
│   │   ├── useLocalStorage.js
│   │   └── useToothbrushTimer.js
│   ├── pages/
│   │   ├── BrushPage.jsx
│   │   ├── FunActivitiesPage.jsx
│   │   ├── GamesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── InteractiveStoriesPage.jsx
│   │   ├── LearnPage.jsx
│   │   ├── LittleKidsPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ParentsPage.jsx
│   │   └── StoriesPage.jsx
│   ├── utils/
│   │   ├── gameHelpers.js
│   │   └── speech.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── netlify.toml
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── vite.svg
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Cara Install

Pastikan Node.js versi 18 atau lebih baru sudah terpasang.
Jika memakai `nvm`, Anda bisa mengikuti file `.nvmrc` di project ini.

```bash
cd /Users/priagung_dana/Documents/Playground/senyum-anak-hepi
nvm use
npm install
```

## Cara Menjalankan

Untuk development:

```bash
npm run dev
```

Untuk build production:

```bash
npm run build
```

Untuk preview hasil build:

```bash
npm run preview
```

## Deploy

Project ini siap untuk deploy sebagai SPA statis.

- Netlify: file `netlify.toml` sudah menyiapkan build command, publish directory, dan redirect untuk routing React Router.
- Vercel: file `vercel.json` sudah menyiapkan rewrite agar route seperti `/games` atau `/cerita` tetap mengarah ke aplikasi.
- Hosting statis lain: pastikan semua route SPA diarahkan kembali ke `index.html`.

## Catatan

- Project ini belum memakai backend.
- Semua interaksi game, timer, skor, dan badge menggunakan local state.
- Versi ini sudah memakai React Router dan lebih siap untuk deploy sebagai SPA.
- Fitur suara memakai Web Speech API bawaan browser tanpa package tambahan.
- Fitur baru tetap menjaga route lama seperti edukasi, timer sikat gigi, games lama, dan cerita lama.
- Jika ingin tahap berikutnya, project ini bisa ditambahkan backend, autentikasi orang tua, atau dashboard admin konten.
