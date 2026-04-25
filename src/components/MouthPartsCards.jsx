import { speak } from "../utils/speech";

const parts = [
  { id: "bibir", title: "Bibir", emoji: "👄", text: "Bibir membantu menutup mulut." },
  { id: "lidah", title: "Lidah", emoji: "👅", text: "Lidah membantu merasa rasa makanan." },
  { id: "gusi", title: "Gusi", emoji: "🩷", text: "Gusi menjaga gigi tetap kuat di tempatnya." },
  { id: "langit", title: "Langit-langit", emoji: "☁️", text: "Bagian atas mulut disebut langit-langit." },
  { id: "air-liur", title: "Air liur", emoji: "💧", text: "Air liur membantu mulut tetap lembap." },
];

export default function MouthPartsCards() {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-playful">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-pink">Bagian Mulut</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {parts.map((item) => (
          <div key={item.id} className="rounded-[1.75rem] bg-brand-mint p-5">
            <p className="text-6xl">{item.emoji}</p>
            <p className="mt-3 font-display text-3xl text-brand-navy">{item.title}</p>
            <p className="mt-2 text-sm font-bold text-slate-600">{item.text}</p>
            <button
              type="button"
              onClick={() => speak(item.text)}
              className="mt-4 min-h-14 rounded-full bg-white px-5 py-3 text-sm font-black text-brand-navy"
            >
              🔊
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
