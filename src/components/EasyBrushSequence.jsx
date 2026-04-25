import { useState } from "react";
import { easyBrushSteps } from "../data/funActivities";

export default function EasyBrushSequence({ onAddStars }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [feedback, setFeedback] = useState("Tap urutan yang benar ya");

  const handleSelect = (step) => {
    if (step.id === currentStep) {
      onAddStars(1);
      if (currentStep === easyBrushSteps.length) {
        setFeedback("Yeay Bersih! Semua urutan sudah benar.");
        setCurrentStep(1);
      } else {
        setFeedback("Hebat! Lanjut langkah berikutnya.");
        setCurrentStep((current) => current + 1);
      }
      return;
    }

    setFeedback("Coba lagi ya.");
  };

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Urutan Mudah</p>
      <h3 className="mt-2 font-display text-3xl text-brand-navy">Puzzle Sikat Gigi</h3>
      <p className="mt-2 text-sm font-bold text-slate-600">{feedback}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {easyBrushSteps.map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => handleSelect(step)}
            className="flex min-h-20 items-center gap-3 rounded-[1.5rem] bg-brand-cream p-4 text-left shadow-sm"
          >
            <span className="text-4xl">{step.emoji}</span>
            <span className="text-lg font-black text-brand-navy">{step.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
