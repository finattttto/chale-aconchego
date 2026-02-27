import { Navbar } from "@/components/chale-aconchego/navbar";
import { Hero } from "@/components/chale-aconchego/hero";
import { About } from "@/components/chale-aconchego/about";
import { Highlights } from "@/components/chale-aconchego/highlights";
import { Experiences } from "@/components/chale-aconchego/experiences";
import { VideoSection } from "@/components/chale-aconchego/video-section";
import { Testimonials } from "@/components/chale-aconchego/testimonials";
import { Faq } from "@/components/chale-aconchego/faq";
import { CtaSection } from "@/components/chale-aconchego/cta-section";
import { Footer } from "@/components/chale-aconchego/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <Experiences />
        <VideoSection />
        <Testimonials />
        <CtaSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
