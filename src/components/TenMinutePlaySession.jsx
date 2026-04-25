import { useEffect, useMemo, useState } from "react";
import InstagramButton from "./InstagramButton";
import { funSessionActivities } from "../data/funActivities";

const TOTAL_SECONDS = 600;

export default function TenMinutePlaySession({
  activityStars,
  onAddStars,
  onIncrementSession,
}) {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setIsRunning(false);
          onIncrementSession();
          onAddStars(3);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isRunning, onAddStars, onIncrementSession, secondsLeft]);

  const formattedTime = useMemo(() => {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    const seconds = String(secondsLeft % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [secondsLeft]);

  const progress = useMemo(
    () => ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100,
    [secondsLeft]
  );

  const currentActivity = funSessionActivities[activityIndex];
  const isDone = secondsLeft === 0;

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Mode 10 Menit</p>
          <h3 className="font-display text-3xl text-brand-navy">Sesi Main Bareng</h3>
        </div>
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          {formattedTime}
        </div>
      </div>

      <div className="mt-5 h-4 overflow-hidden rounded-full bg-brand-cream">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-pink to-brand-teal transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isDone ? (
        <div className="mt-6 rounded-[2rem] bg-brand-mint p-6 text-center">
          <p className="text-6xl">🏅</p>
          <p className="mt-3 font-display text-4xl text-brand-navy">Yeay! Sesi Main Selesai!</p>
          <p className="mt-2 text-lg font-black text-brand-pink">Jumlah bintang: {activityStars}</p>
          <p className="mt-3 text-sm text-slate-600">
            Follow IG Tami Dental untuk ide main dan tips gigi sehat.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSecondsLeft(TOTAL_SECONDS);
                setActivityIndex(0);
              }}
              className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
            >
              Main Lagi
            </button>
            <InstagramButton text="Follow Instagram" />
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] bg-pink-50 p-6 text-center">
            <p className="text-6xl">{currentActivity.emoji}</p>
            <p className="mt-4 font-display text-3xl text-brand-navy">{currentActivity.title}</p>
            <p className="mt-2 text-sm font-bold text-slate-600">
              Main, bergerak, dan belajar gigi sehat!
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsRunning(true)}
              className="min-h-14 rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white"
            >
              Mulai Sesi
            </button>
            <button
              type="button"
              onClick={() => setActivityIndex((current) => (current + 1) % funSessionActivities.length)}
              className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
            >
              Aktivitas Berikutnya
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRunning(false);
                setSecondsLeft(0);
              }}
              className="min-h-14 rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy shadow-sm"
            >
              Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
