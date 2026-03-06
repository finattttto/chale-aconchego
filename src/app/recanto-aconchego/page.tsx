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
  title: "Recanto Aconchego | Natureza e aventura em Descanso - SC",
  description:
    "Experiencia de glamping e natureza em Descanso - SC. Chale junto ao rio, area de camping, fogueira, campo de voleio e espaco para eventos. Perfeito para familias e amigos.",
  keywords: [
    "recanto",
    "aconchego",
    "descanso",
    "santa catarina",
    "glamping",
    "camping",
    "natureza",
    "familia",
    "rio",
    "aventura",
  ],
  openGraph: {
    title: "Recanto Aconchego | Natureza e aventura em Descanso - SC",
    description:
      "Experiencia de glamping e natureza em Descanso - SC. Chale junto ao rio, fogueira, campo de voleio e espaco para eventos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d3a2e",
  width: "device-width",
  initialScale: 1,
};

export default function RecantoAconchego() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f2ed] text-[#2d3a2e]">
      <RecantoNavbar />
      <main className="flex-1">
        <RecantoHero />
        <RecantoAbout />
        <RecantoActivities />
        <RecantoHighlights />
        <RecantoExperiences />
        <RecantoVideoSection />
        <RecantoParallaxSection />
        <RecantoCtaSection />
        <RecantoFaq />
      </main>
      <RecantoFooter />
    </div>
  );
}
