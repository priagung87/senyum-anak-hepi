import PageSeo from "../components/PageSeo";
import RouteButton from "../components/RouteButton";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center animate-popIn">
      <PageSeo title="Halaman Tidak Ditemukan" />
      <div className="rounded-[2rem] bg-white p-8 shadow-playful">
        <div className="text-6xl">🦷</div>
        <h1 className="mt-4 font-display text-4xl text-brand-navy">Oops, halaman tidak ditemukan</h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
          Halaman yang kamu cari belum ada atau alamatnya salah. Yuk kembali ke beranda Senyum
          Anak Hepi.
        </p>
        <div className="mt-6 flex justify-center">
          <RouteButton to="/" variant="pink">
            Kembali ke Home
          </RouteButton>
        </div>
      </div>
    </section>
  );
}
