# Senyum Anak Hepi

Aplikasi web edukasi kesehatan gigi anak dari Tami Dental Care. Project ini dibuat dengan React, Vite, React Router, dan Tailwind CSS, menggunakan data dummy serta local state tanpa backend.

## Fitur

- Landing page ceria dan mobile friendly
- Bottom navigation 5 menu utama agar rapi di mobile
- Branding logo Tami Dental Care di header, landing page, dan footer
- Materi edukasi kesehatan gigi untuk anak
- Halaman `Kenali Gigi & Mulut` dengan kartu belajar dan quiz tap
- Panduan langkah menyikat gigi dengan progress visual
- Timer sikat gigi 2 menit dengan motivasi yang berubah
- Cerita pendek klasik tetap tersedia
- Cerita interaktif panjang dengan voice guide berbasis Web Speech API
- Main balita berbasis tap untuk usia 3-5 tahun
- Aktivitas seru 10-20 menit untuk pendampingan orang tua
- Sistem skor, bintang, dan badge berbasis `localStorage`
- CTA Instagram Tami Dental muncul global dan di titik penting
- Konfigurasi deploy untuk Netlify dan Vercel

## Struktur Folder

```bash
senyum-anak-hepi/
├── public/
├── src/
│   ├── assets/
│   │   └── logo-tami.png
│   ├── components/
│   │   ├── AppShell.jsx
│   │   ├── BadgePanel.jsx
│   │   ├── BubblePopGame.jsx
│   │   ├── ColorTapGame.jsx
│   │   ├── ContainerCard.jsx
│   │   ├── DailyMission.jsx
│   │   ├── EasyBrushSequence.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroIllustration.jsx
│   │   ├── InfoCard.jsx
│   │   ├── InstagramButton.jsx
│   │   ├── InteractiveStoryPlayer.jsx
│   │   ├── LittleKidsBrushGame.jsx
│   │   ├── LittleKidsFoodGame.jsx
│   │   ├── Logo.jsx
│   │   ├── MenuCard.jsx
│   │   ├── MobileNav.jsx
│   │   ├── MouthPartsCards.jsx
│   │   ├── MouthTapQuiz.jsx
│   │   ├── MovementCards.jsx
│   │   ├── NavBar.jsx
│   │   ├── PageSeo.jsx
│   │   ├── RouteButton.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── SmileTapGame.jsx
│   │   ├── StepGuide.jsx
│   │   ├── StoryCard.jsx
│   │   ├── TenMinutePlaySession.jsx
│   │   ├── ToothNameCards.jsx
│   │   └── TimerCard.jsx
│   ├── data/
│   │   ├── content.js
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
│   │   ├── MouthLearningPage.jsx
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

Pastikan Node.js versi 18 atau lebih baru sudah terpasang. Jika memakai `nvm`, Anda bisa mengikuti file `.nvmrc` di project ini.

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
- Semua interaksi game, timer, skor, bintang, dan badge menggunakan local state.
- Fitur suara memakai Web Speech API bawaan browser tanpa package tambahan.
- Route lama tetap dipertahankan, termasuk edukasi, cerita klasik, timer sikat gigi, dan games lama.
- Bottom navigation diringkas menjadi 5 menu utama agar tidak menumpuk di mobile.
