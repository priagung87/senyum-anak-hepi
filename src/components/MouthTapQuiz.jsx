import { useState } from "react";
import { speak } from "../utils/speech";

const quizItems = [
  {
    id: "incisor",
    question: "Mana gigi seri?",
    options: [
      { text: "😁 Gigi depan", correct: true },
      { text: "👅 Lidah", correct: false },
      { text: "👄 Bibir", correct: false },
    ],
  },
  {
    id: "tongue",
    question: "Mana lidah?",
    options: [
      { text: "🩷 Gusi", correct: false },
      { text: "👅 Lidah", correct: true },
      { text: "☁️ Langit-langit", correct: false },
    ],
  },
];

export default function MouthTapQuiz({ stars, onAddStars }) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("Yuk pilih jawabannya!");

  const current = quizItems[index];

  const handleSelect = (option) => {
    if (option.correct) {
      setFeedback("Benar! Kamu hebat.");
      onAddStars(1);
      speak("Hebat! Itu jawaban yang benar.");
      setIndex((currentIndex) => (currentIndex + 1) % quizItems.length);
      return;
    }

    setFeedback("Coba lagi ya.");
    speak("Tidak apa-apa, yuk coba lagi.");
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Quiz Mulut</p>
          <h3 className="mt-2 font-display text-3xl text-brand-navy">{current.question}</h3>
        </div>
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          {stars} ⭐
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {current.options.map((option) => (
          <button
            key={option.text}
            type="button"
            onClick={() => handleSelect(option)}
            className="min-h-14 rounded-[1.5rem] bg-brand-cream p-4 text-left text-lg font-black text-brand-navy shadow-sm"
          >
            {option.text}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm font-bold text-slate-600">{feedback}</p>
      <button
        type="button"
        onClick={() => speak(current.question)}
        className="mt-4 min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
      >
        🔊
      </button>
    </div>
  );
}
