export default function StepGuide({ steps, currentStep, onNextStep, onReset }) {
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] bg-white p-6 shadow-playful">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">
              Progress
            </p>
            <h3 className="font-display text-2xl text-brand-navy">
              Langkah {currentStep + 1} dari {steps.length}
            </h3>
          </div>
          <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
            {Math.round(progress)}%
          </div>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-brand-cream">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-pink to-brand-teal transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 rounded-[1.75rem] bg-brand-mint p-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">
            Langkah Aktif
          </p>
          <p className="mt-2 font-display text-3xl text-brand-navy">{steps[currentStep]}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onNextStep}
            className="rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
          >
            Langkah Berikutnya
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy transition hover:-translate-y-0.5"
          >
            Ulangi Lagi
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {steps.map((step, index) => {
          const isDone = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={step}
              className={`flex items-center gap-4 rounded-[1.5rem] p-4 shadow-playful transition ${
                isCurrent
                  ? "bg-brand-teal text-white"
                  : isDone
                    ? "bg-brand-yellow text-brand-navy"
                    : "bg-white text-slate-600"
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-brand-navy">
                {index + 1}
              </div>
              <p className="font-bold">{step}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
