export default function BadgePanel({ badges, unlockedBadges, score }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Reward Anak Hebat</p>
          <h3 className="font-display text-3xl text-brand-navy">Skor Kamu: {score}</h3>
        </div>
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          Badge terbuka: {unlockedBadges.length}/{badges.length}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {badges.map((badge) => {
          const unlocked = unlockedBadges.includes(badge.name);

          return (
            <div
              key={badge.name}
              className={`rounded-[1.75rem] p-4 transition ${
                unlocked ? "bg-brand-mint" : "bg-slate-100"
              }`}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                {badge.icon}
              </div>
              <h4 className="mt-3 font-display text-xl text-brand-navy">{badge.name}</h4>
              <p className="mt-2 text-sm text-slate-600">{badge.description}</p>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-brand-pink">
                {unlocked ? "Sudah didapat" : "Masih terkunci"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
