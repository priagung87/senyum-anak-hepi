import MouthPartsCards from "../components/MouthPartsCards";
import MouthTapQuiz from "../components/MouthTapQuiz";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import ToothNameCards from "../components/ToothNameCards";
import { useAppProgress } from "../hooks/useAppProgress";

export default function MouthLearningPage() {
  const { mouthQuizStars, addMouthQuizStars } = useAppProgress();

  return (
    <div className="space-y-8 animate-popIn">
      <PageSeo
        title="Kenali Gigi dan Mulut"
        description="Belajar nama gigi, bagian mulut, dan quiz tap sederhana untuk anak."
      />
      <SectionTitle
        eyebrow="Kenali Gigi & Mulut"
        title="Kenali Gigi dan Mulut"
        description="Lihat, dengar, lalu pilih bagian yang benar ya!"
      />
      <ToothNameCards />
      <MouthPartsCards />
      <MouthTapQuiz stars={mouthQuizStars} onAddStars={addMouthQuizStars} />
    </div>
  );
}
