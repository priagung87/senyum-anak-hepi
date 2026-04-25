import { useState } from "react";
import InstagramButton from "./InstagramButton";

const smiles = [
  { id: 1, emoji: "😁", happy: true },
  { id: 2, emoji: "😬", happy: false },
  { id: 3, emoji: "😊", happy: true },
  { id: 4, emoji: "😢", happy: false },
];

export default function SmileTapGame({ onAddScore }) {
  const [feedback, setFeedback] = useState("Pilih senyum yang hepi ya!");
  const [hits, setHits] = useState(0);

  const handleTap = (item) => {
    if (item.happy) {
      setHits((current) => current + 1);
      onAddScore(1);
      setFeedback("Kamu Hebat! Itu senyum sehat.");
    } else {
      setFeedback("Coba yang lain ya.");
    }
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Pilih Senyum</p>
      <h3 className="mt-2 font-display text-3xl text-brand-navy">Mana senyum yang hepi?</h3>
      <p className="mt-2 text-sm font-bold text-slate-600">{feedback}</p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {smiles.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleTap(item)}
            className="flex min-h-28 items-center justify-center rounded-[2rem] bg-brand-cream text-6xl shadow-playful"
          >
            {item.emoji}
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            setHits(0);
            setFeedback("Pilih senyum yang hepi ya!");
          }}
          className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
        >
          Main Lagi
        </button>
        {hits >= 2 ? <InstagramButton text="Mau lihat tips lainnya?" /> : null}
      </div>
    </div>
  );
}
