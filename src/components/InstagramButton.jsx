import { instagramLink } from "../data/content";

export default function InstagramButton({
  label = "IG Tami Dental",
  text = "Follow Instagram",
  floating = false,
  className = "",
}) {
  const handleClick = () => {
    console.log("Klik IG Tami Dental");
  };

  if (floating) {
    return (
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Instagram Tami Dental"
        className={`group fixed bottom-24 right-4 z-40 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-brand-teal text-2xl text-white shadow-playful md:bottom-6 ${className}`}
      >
        📸
        <span className="pointer-events-none absolute -top-9 right-0 rounded-full bg-white px-3 py-1 text-xs font-black text-brand-navy shadow-sm">
          {label}
        </span>
      </a>
    );
  }

  return (
    <a
      href={instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-pink to-brand-teal px-5 py-3 text-sm font-black text-white shadow-playful transition hover:-translate-y-1 ${className}`}
    >
      📸 {text}
    </a>
  );
}
