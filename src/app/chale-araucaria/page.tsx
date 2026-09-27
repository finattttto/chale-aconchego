import type { Metadata, Viewport } from "next";
import { RecantoNavbar } from "@/components/recanto-aconchego/navbar";
import { RecantoHero } from "@/components/recanto-aconchego/hero";
import { RecantoAbout } from "@/components/recanto-aconchego/about";
import { RecantoActivities } from "@/components/recanto-aconchego/activities";
import { RecantoHighlights } from "@/components/recanto-aconchego/highlights";
import { RecantoExperiences } from "@/components/recanto-aconchego/experiences";
import { RecantoVideoSection } from "@/components/recanto-aconchego/video-section";
import { RecantoParallaxSection } from "@/components/recanto-aconchego/parallax-section";
import { RecantoCtaSection } from "@/components/recanto-aconchego/cta-section";
import { RecantoFaq } from "@/components/recanto-aconchego/faq";
import { RecantoFooter } from "@/components/recanto-aconchego/footer";

export const metadata: Metadata = {
  title: "Chalé Araucária | Refúgio romântico com hidromassagem em Descanso - SC",
  description:
    "Chalé para casais entre araucárias, com banheira de hidromassagem com vista para a mata, fogueira e acesso ao rio. Fica no Recanto Aconchego, com área de festas, camping e campo de vôlei, em Descanso - SC.",
  keywords: [
    "chalé araucária",
    "hidromassagem",
    "casais",
    "romântico",
    "recanto aconchego",
    "descanso",
    "santa catarina",
    "natureza",
    "rio",
    "área de festas",
  ],
  openGraph: {
    title: "Chalé Araucária | Refúgio romântico com hidromassagem em Descanso - SC",
    description:
      "Chalé para casais entre araucárias, com banheira de hidromassagem com vista para a mata, fogueira e acesso ao rio.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d3a2e",
  width: "device-width",
  initialScale: 1,
};

export default function ChaleAraucaria() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f2ed] text-[#2d3a2e]">
      <RecantoNavbar />
      <main className="flex-1">
        <RecantoHero />
        <RecantoAbout />
        <RecantoActivities />
        <RecantoHighlights />
        <RecantoExperiences />
        <RecantoParallaxSection />
        <RecantoVideoSection />
        <RecantoCtaSection />
        <RecantoFaq />
      </main>
      <RecantoFooter />
    </div>
  );
}
