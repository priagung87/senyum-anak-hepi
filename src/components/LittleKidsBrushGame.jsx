import { useMemo, useState } from "react";
import InstagramButton from "./InstagramButton";
import { speak } from "../utils/speech";

const brushSpots = [
  { id: 1, top: "20%", left: "22%", emoji: "🦠" },
  { id: 2, top: "34%", left: "68%", emoji: "✨" },
  { id: 3, top: "56%", left: "34%", emoji: "🦠" },
  { id: 4, top: "62%", left: "62%", emoji: "🟤" },
];

export default function LittleKidsBrushGame({
  score,
  badges,
  onAddScore,
  onAddBadge,
}) {
  const [cleared, setCleared] = useState([]);

  const isComplete = cleared.length === brushSpots.length;

  const handleClearSpot = (spotId) => {
    if (cleared.includes(spotId)) return;

    const next = [...cleared, spotId];
    setCleared(next);
    onAddScore(1);
    speak(next.length === brushSpots.length ? "Yeay! Gigi bersih dan sehat!" : "Hebat! Gigimu makin bersih.");

    if (next.length === brushSpots.length) {
      onAddBadge("Pahlawan Sikat Gigi");
    }
  };

  const badgeUnlocked = useMemo(
    () => badges.includes("Pahlawan Sikat Gigi"),
    [badges]
  );

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Bersihkan Gigi</p>
          <h3 className="font-display text-3xl text-brand-navy">Tap Kumannya!</h3>
        </div>
        <button
          type="button"
          onClick={() => speak("Ayo bantu bersihkan gigi! Tap kuman yang menempel di gigi.")}
          className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
        >
          🔊 Dengar
        </button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky via-white to-brand-yellow shadow-playful">
          <div className="flex h-56 w-56 items-center justify-center rounded-[40%] bg-white text-[8rem]">
            🦷
          </div>
          {brushSpots.map((spot) =>
            cleared.includes(spot.id) ? null : (
              <button
                key={spot.id}
                type="button"
                onClick={() => handleClearSpot(spot.id)}
                className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-pink-200 text-3xl shadow-sm transition hover:scale-105"
                style={{ top: spot.top, left: spot.left }}
                aria-label={`bersihkan noda ${spot.id}`}
              >
                {spot.emoji}
              </button>
            )
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.75rem] bg-brand-mint p-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">Bintang</p>
            <p className="mt-2 font-display text-4xl text-brand-navy">{score} ⭐</p>
            <p className="mt-2 text-sm font-bold text-slate-600">Senyummu makin sehat!</p>
          </div>

          {isComplete ? (
            <div className="animate-popIn rounded-[1.75rem] bg-pink-50 p-5">
              <p className="text-5xl">⭐</p>
              <p className="mt-2 font-display text-3xl text-brand-navy">Yeay! Gigi Bersih!</p>
              <p className="mt-2 text-sm font-bold text-slate-600">
                Hebat! Mau lihat tips gigi anak lainnya?
              </p>
              <p className="mt-3 text-sm font-black text-brand-pink">
                Badge: {badgeUnlocked ? "Pahlawan Sikat Gigi" : "Pahlawan Sikat Gigi"}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCleared([])}
                  className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
                >
                  Main Lagi
                </button>
                <InstagramButton text="Lihat di Instagram" />
              </div>
            </div>
          ) : (
            <div className="rounded-[1.75rem] bg-brand-cream p-5">
              <p className="font-display text-2xl text-brand-navy">Tap, dengar, dan bantu gigi jadi bersih!</p>
              <p className="mt-2 text-sm font-bold text-slate-600">Sisa kuman: {brushSpots.length - cleared.length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
