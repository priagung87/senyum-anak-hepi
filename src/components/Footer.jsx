import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-[2.5rem] bg-brand-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 sm:px-6 lg:px-8">
        <Logo className="[&_p:first-child]:text-white [&_p:last-child]:text-brand-yellow" />
        <a
          href="https://instagram.com/tamidentalcare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/85 underline-offset-4 hover:underline"
        >
          IG: @tamidentalcare
        </a>
        <p className="text-sm font-bold text-brand-yellow">
          Belajar Sikat Gigi Jadi Seru dan Menyenangkan
        </p>
      </div>
    </footer>
  );
}
