import { useMemo, useState } from "react";
import { speak } from "../utils/speech";

const foodPairs = [
  {
    id: "apple-candy",
    prompt: "Pilih yang baik untuk gigi ya",
    options: [
      { emoji: "🍎", label: "Apel", good: true },
      { emoji: "🍬", label: "Permen", good: false },
    ],
  },
  {
    id: "water-soda",
    prompt: "Mana minuman yang lebih baik?",
    options: [
      { emoji: "💧", label: "Air Putih", good: true },
      { emoji: "🥤", label: "Soda", good: false },
    ],
  },
  {
    id: "carrot-chocolate",
    prompt: "Pilih camilan sehat",
    options: [
      { emoji: "🥕", label: "Wortel", good: true },
      { emoji: "🍫", label: "Cokelat", good: false },
    ],
  },
  {
    id: "milk-lollipop",
    prompt: "Mana teman gigi sehat?",
    options: [
      { emoji: "🥛", label: "Susu", good: true },
      { emoji: "🍭", label: "Lollipop", good: false },
    ],
  },
];

export default function LittleKidsFoodGame({ onAddScore }) {
  const [pairIndex, setPairIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const pair = foodPairs[pairIndex];
  const isLast = pairIndex === foodPairs.length - 1;

  const handlePick = (option) => {
    if (feedback) return;

    if (option.good) {
      setFeedback("Hebat!");
      onAddScore(1);
      speak("Hebat, itu baik untuk gigi.");
    } else {
      setFeedback("Coba lagi ya.");
      speak("Boleh sedikit saja, jangan lupa sikat gigi.");
    }
  };

  const summary = useMemo(() => `${pairIndex + 1} dari ${foodPairs.length}`, [pairIndex]);

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Tebak Makanan</p>
          <h3 className="font-display text-3xl text-brand-navy">{pair.prompt}</h3>
        </div>
        <button
          type="button"
          onClick={() => speak("Pilih makanan yang baik untuk gigi.")}
          className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
        >
          🔊 Dengar
        </button>
      </div>

      <p className="mt-3 text-sm font-bold text-slate-500">{summary}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {pair.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => handlePick(option)}
            disabled={Boolean(feedback)}
            className="flex min-h-40 flex-col items-center justify-center rounded-[2rem] bg-brand-cream p-5 text-center shadow-sm transition hover:-translate-y-1"
          >
            <span className="text-6xl">{option.emoji}</span>
            <span className="mt-3 font-display text-3xl text-brand-navy">{option.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-lg font-black text-brand-pink">{feedback || "Yuk Main!"}</p>
        <button
          type="button"
          onClick={() => {
            setFeedback("");
            setPairIndex(isLast ? 0 : pairIndex + 1);
          }}
          className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
        >
          {isLast ? "Main Lagi" : "Berikutnya"}
        </button>
      </div>
    </div>
  );
}
