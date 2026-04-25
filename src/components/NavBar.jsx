import { NavLink } from "react-router-dom";
import { navItems } from "../data/content";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-brand-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal text-2xl shadow-playful">
            😁
          </div>
          <div>
            <p className="font-display text-xl leading-none text-brand-navy">Senyum Anak Hepi</p>
            <p className="text-xs font-bold text-slate-500">Tami Dental Care</p>
          </div>
        </NavLink>

        <nav className="hidden flex-wrap items-center justify-end gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                  isActive
                    ? "bg-brand-pink text-white shadow-playful"
                    : "bg-white text-brand-navy hover:bg-brand-yellow"
                }`
              }
            >
                {item.icon} {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
