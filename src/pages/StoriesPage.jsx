import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import StoryCard from "../components/StoryCard";
import { stories } from "../data/content";

export default function StoriesPage() {
  return (
    <section className="animate-popIn">
      <PageSeo
        title="Cerita Gigi"
        description="Cerita pendek edukatif untuk membantu anak belajar tentang kebiasaan menjaga kesehatan gigi."
      />
      <SectionTitle
        eyebrow="Cerita"
        title="Cerita Gigi yang Hangat dan Seru"
        description="Kumpulan cerita pendek untuk menemani anak mengenal kebiasaan baik menjaga kebersihan gigi."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}
