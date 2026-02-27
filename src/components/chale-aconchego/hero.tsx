import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/banner.jpg"
        alt="Vista do Chale Aconchego"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={80}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
          Descanso, Santa Catarina
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-primary-foreground md:text-7xl lg:text-8xl text-balance">
          Chale Aconchego
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          Onde cada detalhe e sinonimo de conforto e tranquilidade em conexao
          com a natureza.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all hover:bg-primary-foreground/90"
          >
            Reserve sua estadia
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Conheca o chale
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/50">
            Explore
          </span>
          <div className="h-12 w-px bg-primary-foreground/30" />
        </div>
      </div>
    </section>
  );
}
