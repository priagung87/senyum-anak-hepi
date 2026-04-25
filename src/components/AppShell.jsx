import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import InstagramButton from "./InstagramButton";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-brand-cream font-body text-slate-800">
      <ScrollToTop />
      <NavBar />
      <main className="relative overflow-hidden pb-28 md:pb-10">
        <div className="absolute inset-0 -z-10 bg-confetti opacity-90" />
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </section>
      </main>
      <Footer />
      <InstagramButton floating />
      <MobileNav />
    </div>
  );
}
