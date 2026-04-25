export default function InfoCard({ icon, title, text, accent = "bg-white" }) {
  return (
    <article className={`rounded-[2rem] p-5 shadow-playful ${accent}`}>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </article>
  );
}
