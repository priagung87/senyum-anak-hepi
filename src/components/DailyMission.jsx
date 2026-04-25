import { dailyMissionItems } from "../data/funActivities";

export default function DailyMission({
  dailyMission,
  activityStars,
  onToggle,
}) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">Misi Harian</p>
          <h3 className="font-display text-3xl text-brand-navy">Checklist Gigi Sehat</h3>
        </div>
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          {activityStars} ⭐
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {dailyMissionItems.map((item) => {
          const done = dailyMission[item.id];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onToggle(item.id)}
              className={`flex min-h-14 items-center justify-between rounded-[1.5rem] p-4 text-left shadow-sm ${
                done ? "bg-brand-mint" : "bg-brand-cream"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-base font-black text-brand-navy">{item.label}</span>
              </span>
              <span className="text-2xl">{done ? "⭐" : "⭕"}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
