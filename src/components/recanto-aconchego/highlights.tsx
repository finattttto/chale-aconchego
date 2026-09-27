"use client";

import Image from "next/image";
import { Bath, Droplets, Flame, Gift } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Bath,
    title: "Banheira de hidromassagem",
    description:
      "Banheira para dois com janelas amplas para a mata e luz indireta. Perfeita para relaxar ao entardecer ou sob as estrelas.",
  },
  {
    icon: Flame,
    title: "Fogueira ao ar livre",
    description:
      "Noites a dois ao redor da fogueira, entre araucárias e sob o céu estrelado.",
  },
  {
    icon: Droplets,
    title: "Acesso ao rio",
    description:
      "Banhe-se nas águas do rio que margeia a propriedade. Um refresco natural perfeito.",
  },
  {
    icon: Gift,
    title: "Recanto Aconchego para festas",
    description:
      "A área externa ao redor do chalé recebe festas e confraternizações de até 20 pessoas, com camping, vôlei e playground.",
  },
];

export function RecantoHighlights() {
  return (
    <section className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image composition: main photo + overlapping inset */}
          <div className="relative mx-auto w-full max-w-lg pb-16 pl-4 pt-4 sm:pb-20 lg:max-w-none">
            <div className="relative aspect-[4/5] w-[80%]">
              {/* Decorative offset frame */}
              <div className="absolute -left-4 -top-4 h-full w-full rounded-sm border border-[#4a6741]/30" />
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/recanto/chale-araucaria-noite.jpg"
                  alt="Chalé Araucária iluminado à noite entre araucárias"
                  fill
                  className="object-cover object-[center_65%]"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  quality={75}
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 aspect-[3/4] w-[46%] overflow-hidden rounded-sm border-[6px] border-[#f5f2ed] bg-[#f5f2ed]">
              <div className="relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/recanto/hidromassagem-noite.jpg"
                  alt="Banheira de hidromassagem cheia, iluminada à noite"
                  fill
                  className="object-cover object-[center_78%]"
                  sizes="(max-width: 1024px) 46vw, 23vw"
                  quality={75}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
              Diferenciais
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
              Pensado para casais
            </h2>

            <div className="mt-10 space-y-8">
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[#eae6df]">
                    <item.icon className="h-5 w-5 text-[#4a6741]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#2d3a2e]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#6b7c6b]">
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
