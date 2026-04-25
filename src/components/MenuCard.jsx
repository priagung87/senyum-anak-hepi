import { Link } from "react-router-dom";

export default function MenuCard({ item }) {
  return (
    <Link
      to={item.href}
      className="group w-full rounded-[2rem] bg-white p-5 text-left shadow-playful transition duration-200 hover:-translate-y-1"
    >
      <div
        className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] text-3xl ${item.accent}`}
      >
        {item.icon}
      </div>
      <h3 className="font-display text-2xl text-brand-navy">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-black text-brand-pink">
        Buka Menu
      </span>
    </Link>
  );
}
