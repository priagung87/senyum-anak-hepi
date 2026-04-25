import { speak } from "../utils/speech";

const teeth = [
  { id: "seri", title: "Gigi Seri", emoji: "😁", text: "Gigi seri membantu menggigit makanan." },
  { id: "taring", title: "Gigi Taring", emoji: "😺", text: "Gigi taring membantu merobek makanan." },
  { id: "geraham", title: "Geraham", emoji: "🦷", text: "Geraham membantu mengunyah makanan." },
];

export default function ToothNameCards() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Nama Gigi</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {teeth.map((item) => (
          <div key={item.id} className="rounded-[1.75rem] bg-brand-cream p-5">
            <p className="text-6xl">{item.emoji}</p>
            <p className="mt-3 font-display text-3xl text-brand-navy">{item.title}</p>
            <p className="mt-2 text-sm font-bold text-slate-600">{item.text}</p>
            <button
              type="button"
              onClick={() => speak(item.text)}
              className="mt-4 min-h-14 rounded-full bg-brand-yellow px-5 py-3 text-sm font-black text-brand-navy"
            >
              🔊
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
