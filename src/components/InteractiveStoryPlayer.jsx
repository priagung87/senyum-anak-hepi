import { useMemo, useState } from "react";
import InstagramButton from "./InstagramButton";
import { speak } from "../utils/speech";

export default function InteractiveStoryPlayer({
  story,
  storyStars,
  completedStories,
  onAddStoryStars,
  onCompleteStory,
  onBack,
}) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [localStars, setLocalStars] = useState(0);

  const scene = story.scenes[sceneIndex];
  const isLastScene = sceneIndex === story.scenes.length - 1;
  const isFinished = isLastScene && selectedChoiceIndex !== null;

  const handleChoice = (choice, index) => {
    if (selectedChoiceIndex !== null) return;

    setSelectedChoiceIndex(index);
    setFeedback(choice.correct ? "Hebat!" : "Coba pilih yang lebih sehat ya");
    speak(choice.correct ? "Hebat, itu pilihan yang baik!" : "Tidak apa-apa, yuk coba lagi.");

    if (choice.correct) {
      setLocalStars((current) => current + 1);
      onAddStoryStars(1);
    }
  };

  const handleNext = () => {
    if (isLastScene) {
      onCompleteStory(story.id);
      return;
    }

    setSceneIndex((current) => current + 1);
    setSelectedChoiceIndex(null);
    setFeedback("");
  };

  const handleReplay = () => {
    setSceneIndex(0);
    setSelectedChoiceIndex(null);
    setFeedback("");
    setLocalStars(0);
  };

  const sceneProgress = useMemo(() => `${sceneIndex + 1} dari ${story.scenes.length}`, [sceneIndex, story.scenes.length]);
  const progressWidth = useMemo(
    () => `${((sceneIndex + 1) / story.scenes.length) * 100}%`,
    [sceneIndex, story.scenes.length]
  );

  if (completedStories.includes(story.id) && isFinished) {
    return (
      <div className="rounded-[2rem] bg-white p-6 shadow-playful">
        <div className="text-center">
          <p className="text-6xl">⭐</p>
          <h3 className="mt-3 font-display text-4xl text-brand-navy">Yeay! Cerita Selesai!</h3>
          <p className="mt-3 text-lg font-black text-brand-pink">Total bintang: {localStars}</p>
          <p className="mt-2 text-sm font-bold text-slate-600">Badge cerita: {story.badge}</p>
          <p className="mt-4 text-sm text-slate-600">Tami Dental punya cerita dan tips seru lainnya.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={handleReplay}
              className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white"
            >
              Baca Lagi
            </button>
            <button
              type="button"
              onClick={onBack}
              className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
            >
              Pilih Cerita Lain
            </button>
            <InstagramButton text="Kunjungi Instagram" />
          </div>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-brand-pink">
            Total bintang semua cerita: {storyStars}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-pink">{story.title}</p>
          <h3 className="font-display text-3xl text-brand-navy">Cerita Seru Gigi Sehat</h3>
        </div>
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          {sceneProgress}
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] bg-brand-mint p-6 text-center">
        <p className="text-6xl">{scene.emoji}</p>
        <p className="mt-4 font-display text-3xl text-brand-navy">{scene.text}</p>
        <p className="mt-3 text-base font-black text-brand-pink">{scene.question}</p>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => speak(scene.text)}
            className="min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
          >
            🔊 Dengarkan
          </button>
        </div>
      </div>
      <div className="mt-5 h-4 overflow-hidden rounded-full bg-brand-cream">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-pink to-brand-teal transition-all duration-300"
          style={{ width: progressWidth }}
        />
      </div>

      <div className="mt-6 grid gap-4">
        {scene.choices.map((choice, index) => {
          const isSelected = index === selectedChoiceIndex;
          return (
            <button
              key={choice.text}
              type="button"
              onClick={() => handleChoice(choice, index)}
              disabled={selectedChoiceIndex !== null}
              className={`min-h-14 rounded-[1.5rem] p-5 text-left text-lg font-black shadow-sm transition ${
                isSelected ? "bg-brand-pink text-white" : "bg-brand-cream text-brand-navy"
              }`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>

      {selectedChoiceIndex !== null ? (
        <div className="mt-5 rounded-[1.5rem] bg-pink-50 p-5">
          <p className="font-display text-2xl text-brand-navy">{feedback}</p>
          <p className="mt-2 text-sm font-bold text-slate-600">
            {scene.choices[selectedChoiceIndex].feedback}
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleNext}
          disabled={selectedChoiceIndex === null}
          className="min-h-14 rounded-full bg-brand-teal px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLastScene ? "Selesai" : "Lanjut"}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="min-h-14 rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy shadow-sm"
        >
          Pilih Cerita Lain
        </button>
      </div>
    </div>
  );
}
