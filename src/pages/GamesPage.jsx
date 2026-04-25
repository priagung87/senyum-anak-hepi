import BadgePanel from "../components/BadgePanel";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import { goodFoodItems, rewardBadges, stainSpots } from "../data/content";
import { useAppProgress } from "../hooks/useAppProgress";

export default function GamesPage() {
  const {
    score,
    unlockedBadges,
    foodSelections,
    foodFeedback,
    sortingItems,
    sortingFeedback,
    cleanedSpots,
    cleanGameComplete,
    goodChoicesCount,
    handleFoodChoice,
    moveSortingItem,
    checkSortingAnswer,
    resetSortingGame,
    handleCleanSpot,
    resetCleanGame,
    resetGameProgress,
  } = useAppProgress();

  return (
    <section className="space-y-8 animate-popIn">
      <PageSeo
        title="Games Seru"
        description="Mini game edukatif tentang kesehatan gigi anak dengan skor dan badge."
      />
      <SectionTitle
        eyebrow="Games"
        title="Mini Games Seru"
        description="Belajar lewat permainan sederhana yang memberi umpan balik langsung, skor, dan reward."
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={resetGameProgress}
          className="rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy shadow-playful transition hover:-translate-y-0.5 hover:bg-brand-yellow"
        >
          Reset Skor Game
        </button>
      </div>

      <BadgePanel badges={rewardBadges} unlockedBadges={unlockedBadges} score={score} />

      <div className="grid gap-8">
        <article className="rounded-[2rem] bg-white p-6 shadow-playful">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Game 1</p>
              <h3 className="font-display text-3xl text-brand-navy">Pilih Makanan Baik untuk Gigi</h3>
            </div>
            <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
              Benar: {goodChoicesCount}
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {goodFoodItems.map((item) => {
              const isSelected = Boolean(foodSelections[item.id]);
              const choiceClass = isSelected
                ? item.isGood
                  ? "bg-brand-mint"
                  : "bg-pink-100"
                : "bg-brand-cream";

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleFoodChoice(item)}
                  className={`rounded-[1.75rem] p-5 text-left shadow-sm transition hover:-translate-y-1 ${choiceClass}`}
                >
                  <div className="text-4xl">{item.emoji}</div>
                  <p className="mt-3 font-display text-2xl text-brand-navy">{item.name}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    {isSelected ? (item.isGood ? "Pilihan tepat!" : "Kurangi ya") : "Tap untuk memilih"}
                  </p>
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-sm font-bold text-slate-600">{foodFeedback}</p>
        </article>

        <article className="rounded-[2rem] bg-white p-6 shadow-playful">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Game 2</p>
              <h3 className="font-display text-3xl text-brand-navy">Urutkan Langkah Sikat Gigi</h3>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={checkSortingAnswer}
                className="rounded-full bg-brand-pink px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                Cek Jawaban
              </button>
              <button
                type="button"
                onClick={resetSortingGame}
                className="rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy transition hover:-translate-y-0.5"
              >
                Acak Lagi
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {sortingItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex flex-col gap-3 rounded-[1.5rem] bg-brand-cream p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black text-brand-navy">
                    {index + 1}
                  </div>
                  <p className="font-bold text-slate-700">{item}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => moveSortingItem(index, "up")}
                    className="rounded-full bg-white px-4 py-2 text-xs font-black text-brand-navy"
                  >
                    Naik
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSortingItem(index, "down")}
                    className="rounded-full bg-white px-4 py-2 text-xs font-black text-brand-navy"
                  >
                    Turun
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-slate-600">{sortingFeedback}</p>
        </article>

        <article className="rounded-[2rem] bg-white p-6 shadow-playful">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Game 3</p>
            <h3 className="font-display text-3xl text-brand-navy">Bersihkan Gigi</h3>
            <p className="mt-2 text-sm text-slate-600">Klik noda pada gigi sampai semuanya hilang.</p>
          </div>

          <div className="mt-6 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-brand-sky via-white to-brand-yellow shadow-playful">
              <div className="flex h-56 w-56 items-center justify-center rounded-[40%] bg-white text-[8rem]">
                🦷
              </div>

              {stainSpots.map((spot) =>
                cleanedSpots.includes(spot.id) ? null : (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => handleCleanSpot(spot.id)}
                    className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-amber-700/90 text-lg text-white shadow-lg transition hover:scale-110"
                    style={{ top: spot.top, left: spot.left }}
                    aria-label={`Bersihkan noda ${spot.id}`}
                  >
                    ✦
                  </button>
                )
              )}
            </div>

            <div className="w-full max-w-md rounded-[1.75rem] bg-brand-mint p-5">
              <p className="font-display text-2xl text-brand-navy">
                {cleanGameComplete
                  ? "Yeay! Gigimu bersih dan sehat!"
                  : `Noda tersisa: ${stainSpots.length - cleanedSpots.length}`}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Setiap noda yang dibersihkan membuat gigi terlihat lebih sehat dan siap tersenyum lebar.
              </p>
              <button
                type="button"
                onClick={resetCleanGame}
                className="mt-4 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                Main Lagi
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
