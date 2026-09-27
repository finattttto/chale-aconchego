import Image from "next/image";
import { RECANTO_WHATSAPP_LINK } from "@/lib/constants";

export function RecantoHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/recanto/chale-araucaria-desfoque.jpg"
        alt="Chalé Araucária iluminado ao anoitecer entre araucárias"
        fill
        priority
        className="object-cover object-[center_70%]"
        sizes="100vw"
        quality={80}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2e]/50 via-[#2d3a2e]/30 to-[#2d3a2e]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
          Refúgio romântico entre araucárias
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl lg:text-8xl text-balance">
          Chalé Araucária
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
          Banheira de hidromassagem com vista para a mata, fogueira sob as
          estrelas e o som do rio. Um refúgio feito para dois.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={RECANTO_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-[#2d3a2e] transition-all hover:bg-white/90"
          >
            Reserve sua estadia
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center rounded-sm border border-white/30 px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all hover:bg-white/10"
          >
            Conheça o chalé
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/50">
            Explore
          </span>
          <div className="h-12 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
