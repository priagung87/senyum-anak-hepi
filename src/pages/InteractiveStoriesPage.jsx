import { useState } from "react";
import InteractiveStoryPlayer from "../components/InteractiveStoryPlayer";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import { interactiveStories } from "../data/interactiveStories";
import { useAppProgress } from "../hooks/useAppProgress";

export default function InteractiveStoriesPage() {
  const [activeStoryId, setActiveStoryId] = useState(null);
  const {
    storyStars,
    completedStories,
    addStoryStars,
    completeStory,
    resetStoryProgress,
  } = useAppProgress();

  const activeStory = interactiveStories.find((story) => story.id === activeStoryId);

  return (
    <div className="space-y-8 animate-popIn">
      <PageSeo
        title="Cerita Interaktif"
        description="Cerita pendek interaktif dengan pilihan jawaban sederhana untuk anak usia 3 sampai 5 tahun."
      />
      <SectionTitle
        eyebrow="Cerita Interaktif"
        title="Cerita Seru Gigi Sehat"
        description="Dengarkan cerita, pilih jawaban, dan bantu tokohnya!"
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
          Bintang cerita: {storyStars}
        </div>
        <button
          type="button"
          onClick={() => {
            setActiveStoryId(null);
            resetStoryProgress();
          }}
          className="min-h-14 rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy shadow-playful"
        >
          Reset Cerita
        </button>
      </div>

      {activeStory ? (
        <InteractiveStoryPlayer
          story={activeStory}
          storyStars={storyStars}
          completedStories={completedStories}
          onAddStoryStars={addStoryStars}
          onCompleteStory={completeStory}
          onBack={() => setActiveStoryId(null)}
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {interactiveStories.map((story) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActiveStoryId(story.id)}
              className="min-h-44 rounded-[2rem] bg-white p-6 text-left shadow-playful transition hover:-translate-y-1"
            >
              <p className="text-6xl">{story.emoji}</p>
              <h3 className="mt-4 font-display text-3xl text-brand-navy">{story.title}</h3>
              <p className="mt-2 text-sm font-bold text-slate-500">{story.age}</p>
              <p className="mt-3 text-sm font-bold text-brand-pink">
                {completedStories.includes(story.id) ? "Sudah selesai ⭐" : "Yuk dengarkan!"}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
