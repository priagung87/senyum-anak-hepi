import { NavLink } from "react-router-dom";
import { navItems } from "../data/content";

export default function MobileNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/70 bg-white/95 px-2 py-2 shadow-[0_-10px_30px_rgba(24,75,99,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              `rounded-2xl px-2 py-2 text-center text-xs font-bold transition ${
                isActive ? "bg-brand-teal text-white" : "bg-brand-cream text-brand-navy"
              }`
            }
          >
              <span className="mb-1 block text-base">{item.icon}</span>
              {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
