import logoTami from "../assets/logo-tami.png";

export default function Logo({ compact = false, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoTami}
        alt="Logo Tami Dental Care"
        className={compact ? "h-10 w-auto" : "h-14 w-auto"}
      />
      <div className="min-w-0">
        <p className={`font-display leading-none text-brand-navy ${compact ? "text-lg" : "text-2xl"}`}>
          Tami Dental Care
        </p>
        <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-brand-pink">
          Bikin Hepi, Senyum Sehat
        </p>
      </div>
    </div>
  );
}
