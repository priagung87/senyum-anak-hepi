import BadgePanel from "../components/BadgePanel";
import ContainerCard from "../components/ContainerCard";
import HeroIllustration from "../components/HeroIllustration";
import InfoCard from "../components/InfoCard";
import InstagramButton from "../components/InstagramButton";
import MenuCard from "../components/MenuCard";
import PageSeo from "../components/PageSeo";
import RouteButton from "../components/RouteButton";
import SectionTitle from "../components/SectionTitle";
import { heroStats, mainMenus, rewardBadges } from "../data/content";
import { useAppProgress } from "../hooks/useAppProgress";

export default function HomePage() {
  const { unlockedBadges, score } = useAppProgress();

  return (
    <div className="space-y-12">
      <PageSeo
        title="Home"
        description="Belajar kesehatan gigi, membaca cerita, dan bermain game edukatif bersama Senyum Anak Hepi."
      />

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-pink shadow-playful">
            Tami Dental Care • IG @tamidentalcare
          </div>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-brand-navy sm:text-6xl">
            Belajar Sikat Gigi Jadi Lebih Seru!
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Edukasi kesehatan gigi, cerita seru, dan games menyenangkan untuk anak. Semuanya
            dirancang ceria, mudah dipahami, dan nyaman dipakai bersama orang tua.
          </p>
          <p className="mt-3 text-base font-bold text-brand-pink">
            “Belajar Sikat Gigi Jadi Seru dan Menyenangkan”
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <RouteButton to="/belajar" variant="pink">
              Mulai Belajar
            </RouteButton>
            <RouteButton to="/games" variant="teal">
              Main Games
            </RouteButton>
            <RouteButton to="/cerita" variant="yellow">
              Baca Cerita
            </RouteButton>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] bg-white p-4 shadow-playful">
                <p className="font-display text-3xl text-brand-navy">{item.value}</p>
                <p className="text-sm font-bold text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <HeroIllustration />
      </section>

      <section>
        <SectionTitle
          eyebrow="Menu Utama"
          title="Ayo pilih aktivitas favoritmu"
          description="Anak bisa belajar, mengikuti panduan, membaca cerita, dan bermain dalam satu aplikasi yang ringan dan mudah dinavigasi."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mainMenus.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ContainerCard>
          <SectionTitle
            eyebrow="Tentang Aplikasi"
            title="Senyum Anak Hepi"
            description="Aplikasi edukasi kesehatan gigi anak dari Tami Dental Care untuk membantu anak belajar menjaga kesehatan gigi dan membangun kebiasaan sikat gigi pagi dan malam."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon="🌈"
              title="Ceria dan Ramah Anak"
              text="Visual warna tosca, pink, putih, dan kuning lembut membuat pengalaman belajar terasa hangat dan menyenangkan."
              accent="bg-brand-mint"
            />
            <InfoCard
              icon="👨‍👩‍👧"
              title="Bisa Didampingi Orang Tua"
              text="Struktur konten dibuat sederhana agar anak mudah memahami, sementara orang tua tetap mudah mendampingi."
              accent="bg-pink-50"
            />
          </div>
        </ContainerCard>

        <BadgePanel badges={rewardBadges} unlockedBadges={unlockedBadges} score={score} />
      </section>

      <section className="rounded-[2rem] bg-white p-6 shadow-playful">
        <SectionTitle
          eyebrow="Instagram Tami Dental"
          title="Yuk Ikuti Tami Dental!"
          description="Banyak tips gigi sehat, promo, dan konten seru untuk anak & orang tua."
        />
        <InstagramButton text="Ikuti Instagram" />
      </section>
    </div>
  );
}
