import { useState } from "react";
import InstagramButton from "./InstagramButton";

const createBubbles = () =>
  Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    left: `${15 + ((index * 13) % 65)}%`,
    top: `${12 + ((index * 17) % 60)}%`,
    emoji: index % 2 === 0 ? "🫧" : "⭐",
  }));

export default function BubblePopGame({ onAddScore }) {
  const [bubbles, setBubbles] = useState(createBubbles);

  const handlePop = (id) => {
    setBubbles((current) => current.filter((bubble) => bubble.id !== id));
    onAddScore(1);
  };

  const finished = bubbles.length === 0;

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Bubble Pop</p>
      <h3 className="mt-2 font-display text-3xl text-brand-navy">Pop Gelembung Hepi!</h3>
      <div className="relative mt-5 h-72 rounded-[2rem] bg-gradient-to-br from-brand-sky via-white to-brand-mint p-4">
        {bubbles.map((bubble) => (
          <button
            key={bubble.id}
            type="button"
            onClick={() => handlePop(bubble.id)}
            className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow-playful transition hover:scale-110"
            style={{ left: bubble.left, top: bubble.top }}
          >
            {bubble.emoji}
          </button>
        ))}
        {finished ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="text-6xl">🎉</p>
            <p className="mt-3 font-display text-3xl text-brand-navy">Yeay! Semua pecah!</p>
            <p className="mt-2 text-sm font-bold text-slate-600">Mau lihat tips lainnya?</p>
          </div>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setBubbles(createBubbles())}
          className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
        >
          Main Lagi
        </button>
        {finished ? <InstagramButton text="Follow IG Tami Dental ya!" /> : null}
      </div>
    </div>
  );
}
