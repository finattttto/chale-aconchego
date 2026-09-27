"use client";

import Image from "next/image";
import { Bath, Flame, Sun, Coffee } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Bath,
    title: "Banheira de Hidromassagem",
    description:
      "Relaxe na banheira de hidromassagem.",
  },
  {
    icon: Flame,
    title: "Fogueira ao ar livre",
    description:
      "Noites especiais ao redor da fogueira, com o som da natureza ao fundo.",
  },
  {
    icon: Sun,
    title: "Pôr do sol deslumbrante",
    description:
      "Contemple o espetáculo do pôr do sol direto da varanda do chalé.",
  },
  {
    icon: Coffee,
    title: "Café da manhã colonial",
    description:
      "Opção de café da manhã com produtos coloniais frescos da região.",
  },
];

export function Highlights() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image composition: main photo + overlapping inset */}
          <div className="relative mx-auto w-full max-w-lg pb-16 pl-4 pt-4 sm:pb-20 lg:max-w-none">
            <div className="relative aspect-[4/5] w-[80%]">
              {/* Decorative offset frame */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-sm border border-accent/30" />
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/banheira.jpg"
                  alt="Banheira de hidromassagem do Chalé Aconchego com vista para o pôr do sol"
                  fill
                  className="object-cover object-[35%_center]"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  quality={75}
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 aspect-[3/4] w-[46%] overflow-hidden rounded-sm border-[6px] border-background bg-background">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/fogueira-chale.jpg"
                  alt="Fogueira acesa ao anoitecer no Chalé Aconchego"
                  fill
                  className="object-cover object-[55%_center]"
                  sizes="(max-width: 1024px) 46vw, 23vw"
                  quality={75}
                />
              </div>
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
