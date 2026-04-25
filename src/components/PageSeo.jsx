import { useEffect } from "react";

const DEFAULT_TITLE = "Senyum Anak Hepi";
const DEFAULT_DESCRIPTION =
  "Aplikasi edukasi kesehatan gigi anak dari Tami Dental Care untuk belajar, membaca cerita, dan bermain game interaktif.";

export default function PageSeo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }) {
  useEffect(() => {
    document.title = `${title} | ${DEFAULT_TITLE}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
