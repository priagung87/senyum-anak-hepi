import { Link, useLocation } from "react-router-dom";

export default function MobileNav() {
  const { pathname } = useLocation();
  const items = [
    { id: "home", label: "Home", icon: "🏠", href: "/", match: ["/"] },
    {
      id: "main",
      label: "Main",
      icon: "🧸",
      href: "/main-balita",
      match: ["/main-balita", "/games", "/aktivitas-seru", "/sikat-gigi"],
    },
    {
      id: "cerita",
      label: "Cerita",
      icon: "📚",
      href: "/cerita-interaktif",
      match: ["/cerita", "/cerita-interaktif"],
    },
    {
      id: "belajar",
      label: "Belajar",
      icon: "🦷",
      href: "/belajar",
      match: ["/belajar", "/kenali-mulut"],
    },
    {
      id: "orangtua",
      label: "Orang Tua",
      icon: "👨‍👩‍👧",
      href: "/orang-tua",
      match: ["/orang-tua"],
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 h-16 border-t border-white/70 bg-white shadow-[0_-10px_30px_rgba(24,75,99,0.08)] backdrop-blur md:hidden">
      <div className="flex h-full items-center justify-around px-2">
        {items.map((item) => {
          const isActive = item.match.includes(pathname);

          return (
            <Link
              key={item.id}
              to={item.href}
              className={`flex min-h-14 min-w-[64px] flex-col items-center justify-center rounded-2xl px-2 text-center text-[11px] font-black transition ${
                isActive ? "bg-brand-teal text-white" : "text-brand-navy"
              }`}
            >
              <span className="mb-1 text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
