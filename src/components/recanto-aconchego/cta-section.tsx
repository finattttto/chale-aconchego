import Image from "next/image";
import { RECANTO_WHATSAPP_LINK } from "@/lib/constants";

export function RecantoCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <Image
        src="/assets/recanto/chale-noite.jpg"
        alt="Chalé a noite"
        fill
        className="object-cover"
        sizes="100vw"
        quality={70}
      />
      <div className="absolute inset-0 bg-[#2d3a2e]/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Pronto para a aventura?
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl text-balance">
          Reserve sua experiência na natureza
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/70">
          Entre em contato pelo WhatsApp e garanta a sua estadia no Recanto
          Aconchego. Traga a família, os amigos ou venha a dois.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={RECANTO_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-[#2d3a2e] transition-all hover:bg-white/90"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
