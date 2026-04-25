import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import StepGuide from "../components/StepGuide";
import TimerCard from "../components/TimerCard";
import { brushingSteps } from "../data/content";
import { useAppProgress } from "../hooks/useAppProgress";
import { useToothbrushTimer } from "../hooks/useToothbrushTimer";

export default function BrushPage() {
  const { currentStep, moveToNextStep, resetSteps, awardTimerCompletion } = useAppProgress();
  const { formattedTime, progress, currentMessage, isRunning, start, pause, reset } =
    useToothbrushTimer(awardTimerCompletion);

  return (
    <section className="space-y-8 animate-popIn">
      <PageSeo
        title="Cara Menyikat Gigi"
        description="Panduan langkah menyikat gigi yang benar lengkap dengan timer 2 menit untuk anak."
      />
      <SectionTitle
        eyebrow="Sikat Gigi"
        title="Cara Menyikat Gigi"
        description="Ikuti langkah satu per satu, lalu lanjutkan dengan timer dua menit supaya kebiasaan baik terasa lebih mudah."
      />
      <StepGuide
        steps={brushingSteps}
        currentStep={currentStep}
        onNextStep={moveToNextStep}
        onReset={resetSteps}
      />
      <TimerCard
        formattedTime={formattedTime}
        progress={progress}
        currentMessage={currentMessage}
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </section>
  );
}
