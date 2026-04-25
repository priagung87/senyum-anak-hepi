export default function StoryCard({ story }) {
  return (
    <article className="rounded-[2rem] bg-white p-6 shadow-playful">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-brand-yellow text-4xl">
          {story.icon}
        </div>
        <div>
          <h3 className="font-display text-2xl text-brand-navy">{story.title}</h3>
          <p className="text-sm font-bold text-brand-pink">Cerita pendek untuk menemani anak belajar</p>
        </div>
      </div>

      <div className="space-y-3 text-sm leading-7 text-slate-700">
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-5 rounded-[1.5rem] bg-brand-mint p-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-navy">Pesan Moral</p>
        <p className="mt-2 text-sm font-bold text-slate-700">{story.moral}</p>
      </div>
    </article>
  );
}
