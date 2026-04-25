import ContainerCard from "../components/ContainerCard";
import InstagramButton from "../components/InstagramButton";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import { parentTips } from "../data/content";

export default function ParentsPage() {
  return (
    <section className="animate-popIn">
      <PageSeo
        title="Orang Tua"
        description="Panduan singkat untuk orang tua dalam mendampingi anak membangun kebiasaan sikat gigi."
      />
      <SectionTitle
        eyebrow="Orang Tua"
        title="Pendampingan Orang Tua"
        description="Bagian singkat ini membantu orang tua membangun rutinitas yang konsisten dan menyenangkan bersama anak."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <ContainerCard>
          <h3 className="font-display text-3xl text-brand-navy">Kenapa penting sejak dini?</h3>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            <p>
              Membangun kebiasaan sikat gigi sejak kecil membantu anak menjaga gigi susu tetap
              sehat, nyaman makan, dan percaya diri saat berbicara maupun tersenyum.
            </p>
            <p>
              Anak dianjurkan sikat gigi 2 kali sehari, yaitu pagi setelah sarapan dan malam
              sebelum tidur. Pemeriksaan ke dokter gigi setiap 6 bulan membantu menemukan masalah
              lebih awal.
            </p>
          </div>
        </ContainerCard>

        <div className="rounded-[2rem] bg-brand-mint p-6 shadow-playful">
          <h3 className="font-display text-3xl text-brand-navy">Tips Mendampingi Anak</h3>
          <div className="mt-4 grid gap-3">
            {parentTips.map((tip, index) => (
              <div key={tip} className="flex gap-3 rounded-[1.25rem] bg-white/80 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow font-black text-brand-navy">
                  {index + 1}
                </div>
                <p className="text-sm font-bold text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContainerCard className="mt-6">
        <h3 className="font-display text-3xl text-brand-navy">Follow Tami Dental</h3>
        <div className="mt-4 grid gap-3 text-sm font-bold text-slate-700">
          <p>• Edukasi kesehatan gigi anak</p>
          <p>• Promo perawatan</p>
          <p>• Tips parenting ringan</p>
        </div>
        <div className="mt-5">
          <InstagramButton text="Kunjungi Instagram" />
        </div>
      </ContainerCard>
    </section>
  );
}
