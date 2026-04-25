export default function TimerCard({
  formattedTime,
  progress,
  currentMessage,
  isRunning,
  onStart,
  onPause,
  onReset,
}) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">
            Timer Sikat Gigi
          </p>
          <div className="mt-4 inline-flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal via-brand-sky to-brand-yellow text-center shadow-playful">
            <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white">
              <span className="font-display text-5xl text-brand-navy">{formattedTime}</span>
              <span className="mt-1 text-sm font-bold text-slate-500">dari 02:00</span>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-[1.75rem] bg-brand-mint p-5">
            <p className="font-display text-2xl text-brand-navy">{currentMessage}</p>
            <p className="mt-2 text-sm text-slate-600">
              Ikuti arahan sambil menyikat perlahan agar semua sisi gigi ikut bersih.
            </p>
          </div>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-brand-cream">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-pink to-brand-teal transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onStart}
              disabled={isRunning}
              className="rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Mulai
            </button>
            <button
              type="button"
              onClick={onPause}
              disabled={!isRunning}
              className="rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Pause
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
