import DailyMission from "../components/DailyMission";
import EasyBrushSequence from "../components/EasyBrushSequence";
import MovementCards from "../components/MovementCards";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import TenMinutePlaySession from "../components/TenMinutePlaySession";
import { useAppProgress } from "../hooks/useAppProgress";

export default function FunActivitiesPage() {
  const {
    activityStars,
    dailyMission,
    funSessionCount,
    toggleDailyMission,
    addActivityStars,
    incrementFunSessionCount,
    resetActivityProgress,
  } = useAppProgress();

  return (
    <div className="space-y-8 animate-popIn">
      <PageSeo
        title="Aktivitas Seru"
        description="Aktivitas 10 sampai 20 menit untuk bermain, bergerak, dan belajar gigi sehat bersama orang tua."
      />
      <SectionTitle
        eyebrow="Aktivitas Seru"
        title="Aktivitas Seru Senyum Hepi"
        description="Main, bergerak, dan belajar gigi sehat!"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          Bintang aktivitas: {activityStars} • Sesi selesai: {funSessionCount}
        </div>
        <button
          type="button"
          onClick={resetActivityProgress}
          className="min-h-14 rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy shadow-playful"
        >
          Reset Aktivitas
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DailyMission
          dailyMission={dailyMission}
          activityStars={activityStars}
          onToggle={toggleDailyMission}
        />
        <MovementCards onAddStars={addActivityStars} />
        <EasyBrushSequence onAddStars={addActivityStars} />
        <TenMinutePlaySession
          activityStars={activityStars}
          onAddStars={addActivityStars}
          onIncrementSession={incrementFunSessionCount}
        />
      </div>
    </div>
  );
}
