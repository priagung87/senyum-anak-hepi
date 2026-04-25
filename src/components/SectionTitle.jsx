export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-6 flex flex-col gap-2 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-brand-navy">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-brand-navy sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
