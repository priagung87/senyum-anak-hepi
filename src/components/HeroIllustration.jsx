export default function HeroIllustration() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-sky via-white to-brand-yellow shadow-playful" />
      <div className="absolute -left-4 top-6 flex h-16 w-16 animate-float items-center justify-center rounded-full bg-brand-pink text-3xl shadow-playful">
        ⭐
      </div>
      <div className="absolute right-2 top-2 flex h-20 w-20 animate-wiggleSoft items-center justify-center rounded-full bg-brand-yellow text-4xl shadow-playful">
        🦷
      </div>
      <div className="absolute bottom-8 left-6 flex h-20 w-20 animate-float items-center justify-center rounded-full bg-white text-4xl shadow-playful">
        🪥
      </div>
      <div className="relative flex w-[82%] flex-col items-center rounded-[2rem] bg-white/85 p-6 text-center shadow-playful">
        <div className="mb-4 flex items-end gap-4">
          <div className="rounded-[2rem] bg-brand-mint px-4 py-5 text-6xl">👧</div>
          <div className="rounded-[2rem] bg-brand-teal px-4 py-5 text-6xl">😁</div>
        </div>
        <p className="font-display text-2xl text-brand-navy">Hai, yuk rawat gigimu!</p>
        <p className="mt-2 text-sm font-semibold text-slate-600">
          Belajar, bermain, dan membangun kebiasaan baik bersama Tami Dental Care.
        </p>
      </div>
    </div>
  );
}
