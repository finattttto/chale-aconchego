import Image from "next/image";
import { Bath, Flame, Sun, Coffee } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Bath,
    title: "Banheira de Hidromassagem",
    description:
      "Relaxe na banheira com vista panoramica para a natureza e o ceu estrelado.",
  },
  {
    icon: Flame,
    title: "Fogueira ao ar livre",
    description:
      "Noites especiais ao redor da fogueira, com o som da natureza ao fundo.",
  },
  {
    icon: Sun,
    title: "Por do sol deslumbrante",
    description:
      "Contemple o espetaculo do por do sol direto da varanda do chale.",
  },
  {
    icon: Coffee,
    title: "Cafe da manha colonial",
    description:
      "Opcao de cafe da manha com produtos coloniais frescos da regiao.",
  },
];

export function Highlights() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/assets/banheira.jpg"
                alt="Banheira do Chale Aconchego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={70}
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/assets/fogueira-chale.jpg"
                alt="Fogueira do Chale Aconchego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={70}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Diferenciais
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
              O que nos torna especial
            </h2>

            <div className="mt-10 space-y-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-card">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
