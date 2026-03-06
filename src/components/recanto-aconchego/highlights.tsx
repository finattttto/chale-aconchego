"use client";

import Image from "next/image";
import { Droplets, Flame, Trees, Gift } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Droplets,
    title: "Acesso ao rio",
    description:
      "Banhe-se nas águas do rio que margeia a propriedade. Um refrescante natural perfeito.",
  },
  {
    icon: Flame,
    title: "Fogueira ao ar livre",
    description:
      "Reúna a família ao redor da fogueira para noites memoráveis sob o céu estrelado.",
  },
  {
    icon: Trees,
    title: "Espaço para acampamento",
    description:
      "Traga sua barraca e acampe em contato direto com a natureza. Perfeito para grupos maiores.",
  },
  {
    icon: Gift,
    title: "Área de festas",
    description:
      "Espaço externo amplo para reunir a família e amigos, com capacidade para mais de 30 pessoas.",
  },
];

export function RecantoHighlights() {
  return (
    <section className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/assets/recanto/rio.jpg"
                alt="Rio proximo ao Recanto Aconchego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={70}
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/assets/recanto/fogueira.jpg"
                alt="Fogueira no Recanto Aconchego"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={70}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
              Diferenciais
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
              Uma experiência completa
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
