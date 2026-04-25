import { useState } from "react";
import { movementCards } from "../data/funActivities";

export default function MovementCards({ onAddStars }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentCard = movementCards[index];

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Kartu Gerakan</p>
      <div className="mt-4 rounded-[2rem] bg-brand-mint p-6 text-center">
        <p className="text-6xl">{currentCard.emoji}</p>
        <p className="mt-4 font-display text-3xl text-brand-navy">{currentCard.text}</p>
      </div>
      <p className="mt-4 text-sm font-bold text-slate-600">{feedback || "Yuk gerak dan senyum!"}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            onAddStars(1);
            setFeedback("Kamu Hebat! Bintangmu bertambah!");
          }}
          className="min-h-14 rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white"
        >
          Aku Bisa!
        </button>
        <button
          type="button"
          onClick={() => {
            setFeedback("");
            setIndex((current) => (current + 1) % movementCards.length);
          }}
          className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
        >
          Kartu Berikutnya
        </button>
      </div>
    </div>
  );
}
