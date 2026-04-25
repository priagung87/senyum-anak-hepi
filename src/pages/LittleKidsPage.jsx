import { useState } from "react";
import BubblePopGame from "../components/BubblePopGame";
import ColorTapGame from "../components/ColorTapGame";
import LittleKidsBrushGame from "../components/LittleKidsBrushGame";
import LittleKidsFoodGame from "../components/LittleKidsFoodGame";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import SmileTapGame from "../components/SmileTapGame";
import { speak } from "../utils/speech";
import { useAppProgress } from "../hooks/useAppProgress";

export default function LittleKidsPage() {
  const [activeGame, setActiveGame] = useState("brush");
  const { littleKidsScore, littleKidsBadges, addLittleKidsScore, addLittleKidsBadge, resetLittleKidsProgress } =
    useAppProgress();

  const gameMap = {
    brush: (
      <LittleKidsBrushGame
        score={littleKidsScore}
        badges={littleKidsBadges}
        onAddScore={addLittleKidsScore}
        onAddBadge={addLittleKidsBadge}
      />
    ),
    food: <LittleKidsFoodGame onAddScore={addLittleKidsScore} />,
    bubble: <BubblePopGame onAddScore={addLittleKidsScore} />,
    color: <ColorTapGame onAddScore={addLittleKidsScore} />,
    smile: <SmileTapGame onAddScore={addLittleKidsScore} />,
  };

  return (
    <div className="space-y-8 animate-popIn">
      <PageSeo
        title="Main Balita"
        description="Mini game sederhana, suara panduan, dan aktivitas tap untuk anak usia 3 sampai 5 tahun."
      />
      <SectionTitle
        eyebrow="Main Balita"
        title="Main Sikat Gigi Yuk!"
        description="Tap, dengar, dan bantu gigi jadi bersih!"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <button
          type="button"
          onClick={() => setActiveGame("brush")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🦷</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Bersihkan Gigi</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveGame("food")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🍎</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Tebak Makanan</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveGame("bubble")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🫧</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Bubble Pop</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveGame("color")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🌈</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Tap Warna</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveGame("smile")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">😁</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Pilih Senyum</p>
        </button>
        <button
          type="button"
          onClick={() => speak("Ayo bantu bersihkan gigi! Tap kumannya, pilih yang baik ya, dan dengar suaranya.")}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🔊</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Dengar Instruksi</p>
        </button>
        <button
          type="button"
          onClick={resetLittleKidsProgress}
          className="min-h-24 rounded-[2rem] bg-white p-5 text-left shadow-playful"
        >
          <p className="text-5xl">🔄</p>
          <p className="mt-3 font-display text-3xl text-brand-navy">Main Lagi</p>
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>{gameMap[activeGame]}</div>

        <div className="space-y-4">
          <div className="rounded-[2rem] bg-white p-6 shadow-playful">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Skor Balita</p>
            <p className="mt-3 font-display text-5xl text-brand-navy">{littleKidsScore} ⭐</p>
            <p className="mt-2 text-sm font-bold text-slate-600">Kamu Hebat!</p>
          </div>
          <div className="rounded-[2rem] bg-brand-mint p-6 shadow-playful">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy">Badge Balita</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {littleKidsBadges.length ? littleKidsBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex min-h-14 items-center rounded-full bg-white px-4 py-2 text-sm font-black text-brand-navy"
                >
                  ⭐ {badge}
                </span>
              )) : (
                <span className="text-sm font-bold text-slate-600">Belum ada badge. Yuk Main!</span>
              )}
            </div>
            <button
              type="button"
              onClick={resetLittleKidsProgress}
              className="mt-5 min-h-14 rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white"
            >
              Reset Main Balita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
