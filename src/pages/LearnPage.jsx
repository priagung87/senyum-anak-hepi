import InfoCard from "../components/InfoCard";
import PageSeo from "../components/PageSeo";
import SectionTitle from "../components/SectionTitle";
import { educationMaterials } from "../data/content";

export default function LearnPage() {
  return (
    <section className="animate-popIn">
      <PageSeo
        title="Belajar Kesehatan Gigi"
        description="Materi singkat tentang kesehatan gigi anak yang mudah dipahami dan ramah anak."
      />
      <SectionTitle
        eyebrow="Belajar"
        title="Belajar Kesehatan Gigi"
        description="Materi pendek dan sederhana supaya anak mudah mengerti kenapa menjaga kesehatan gigi itu penting."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {educationMaterials.map((item, index) => (
          <InfoCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            accent={index % 2 === 0 ? "bg-white" : "bg-brand-mint"}
          />
        ))}
      </div>
    </section>
  );
}
