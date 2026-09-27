import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: "Chalé Aconchego | Refúgio para casais em Descanso - SC",
  description:
    "Chalé exclusivo para casais em meio à natureza. Banheira de hidromassagem, fogueira, Wi-Fi e muito conforto na Linha Macaco Branco, Descanso - SC.",
  keywords: [
    "chalé",
    "aconchego",
    "descanso",
    "santa catarina",
    "hospedagem",
    "casais",
    "natureza",
    "romântico",
  ],
  openGraph: {
    title: "Chalé Aconchego | Refúgio para casais em Descanso - SC",
    description:
      "Chalé exclusivo para casais em meio à natureza. Banheira de hidromassagem, fogueira, Wi-Fi e muito conforto.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#3d3528",
  width: "device-width",
  initialScale: 1,
};

export default function ChaleAconchego() {
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
