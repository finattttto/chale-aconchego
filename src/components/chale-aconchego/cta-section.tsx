import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <Image
        src="/assets/por-do-sol.jpg"
        alt="Por do sol no Chale Aconchego"
        fill
        className="object-cover"
        sizes="100vw"
        quality={70}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          Pronto para relaxar?
        </p>
        <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary-foreground md:text-5xl text-balance">
          Reserve sua experiencia inesquecivel
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-primary-foreground/75">
          Entre em contato pelo WhatsApp e garanta a sua estadia no Chale
          Aconchego. Estamos esperando por voce.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all hover:bg-primary-foreground/90"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
