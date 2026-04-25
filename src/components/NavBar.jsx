import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar() {
  const { pathname } = useLocation();
  const items = [
    { label: "Home", href: "/", match: ["/"] },
    { label: "Main", href: "/main-balita", match: ["/main-balita", "/games", "/aktivitas-seru", "/sikat-gigi"] },
    { label: "Cerita", href: "/cerita-interaktif", match: ["/cerita", "/cerita-interaktif"] },
    { label: "Belajar", href: "/belajar", match: ["/belajar", "/kenali-mulut"] },
    { label: "Orang Tua", href: "/orang-tua", match: ["/orang-tua"] },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-left">
          <Logo compact />
        </Link>

        <nav className="hidden flex-wrap items-center justify-end gap-2 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                item.match.includes(pathname)
                  ? "bg-brand-pink text-white shadow-playful"
                  : "bg-white text-brand-navy hover:bg-brand-yellow"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
