import { useMemo, useState } from "react";

const COLORS = [
  { id: "pink", name: "Pink", className: "bg-brand-pink" },
  { id: "teal", name: "Tosca", className: "bg-brand-teal" },
  { id: "yellow", name: "Kuning", className: "bg-brand-yellow" },
  { id: "white", name: "Putih", className: "bg-white border border-slate-200" },
];

export default function ColorTapGame({ onAddScore }) {
  const [targetIndex, setTargetIndex] = useState(0);
  const [feedback, setFeedback] = useState("Tap warna yang diminta ya");

  const targetColor = useMemo(() => COLORS[targetIndex % COLORS.length], [targetIndex]);

  const handlePick = (color) => {
    if (color.id === targetColor.id) {
      onAddScore(1);
      setFeedback("Hebat! Warna benar.");
      setTargetIndex((current) => current + 1);
      return;
    }

    setFeedback("Coba lagi pelan-pelan.");
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Tap Warna</p>
      <h3 className="mt-2 font-display text-3xl text-brand-navy">Cari warna {targetColor.name}!</h3>
      <p className="mt-2 text-sm font-bold text-slate-600">{feedback}</p>
      <div className="mt-5 grid grid-cols-2 gap-4">
        {COLORS.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => handlePick(color)}
            className={`min-h-28 rounded-[2rem] shadow-playful transition hover:scale-[1.02] ${color.className}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          setTargetIndex(0);
          setFeedback("Tap warna yang diminta ya");
        }}
        className="mt-5 min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
      >
        Main Lagi
      </button>
    </div>
  );
}
