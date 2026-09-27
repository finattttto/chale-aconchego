"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type PropertyId = "araucaria" | "chale";

// Ordem dos paineis: primeiro fica a esquerda no desktop e no topo no celular.
const PROPERTIES: {
  id: PropertyId;
  href: string;
  name: string;
  eyebrow: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  overlay: string;
  button: string;
}[] = [
  {
    id: "chale",
    href: "/chale-aconchego",
    name: "Chalé Aconchego",
    eyebrow: "Refúgio para casais",
    description:
      "Banheira de hidromassagem, fogueira e muito conforto para dois, em conexão com a natureza.",
    cta: "Conhecer o Aconchego",
    image: "/assets/chale-frente.jpg",
    imageAlt: "Chalé Aconchego iluminado ao entardecer em meio à mata",
    overlay: "bg-gradient-to-t from-black/80 via-black/30 to-black/30",
    button:
      "bg-primary-foreground text-foreground group-hover:bg-primary-foreground/90",
  },
  {
    id: "araucaria",
    href: "/chale-araucaria",
    name: "Chalé Araucária",
    eyebrow: "Hidromassagem entre araucárias",
    description:
      "Hidromassagem com vista para a mata, acesso ao rio e o Recanto Aconchego ao redor, com espaço para festas.",
    cta: "Conhecer o Araucária",
    image: "/assets/recanto/chale-araucaria-escolha.jpg",
    imageAlt: "Chalé Araucária iluminado ao anoitecer entre araucárias",
    overlay:
      "bg-gradient-to-t from-[#2d3a2e]/90 via-[#2d3a2e]/40 to-[#2d3a2e]/30",
    button: "bg-white text-[#2d3a2e] group-hover:bg-white/90",
  },
];

export function PropertyChooser() {
  const [active, setActive] = useState<PropertyId | null>(null);

  return (
    <main
      className="relative flex min-h-[100dvh] flex-col bg-[#221f1c] md:flex-row"
      onMouseLeave={() => setActive(null)}
    >
      {/* Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/60 via-black/25 to-transparent px-6 pb-12 pt-8 text-center md:pb-20 md:pt-14">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Descanso, Santa Catarina
        </p>
        <h1 className="mt-3 font-serif text-2xl font-medium tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
          Escolha sua hospedagem
        </h1>
        <p className="mx-auto mt-4 hidden max-w-md text-sm leading-relaxed text-white/80 sm:block md:text-base">
          Dois refúgios em meio à natureza, cada um com seu jeito de acolher.
          Selecione um para conhecer.
        </p>
      </header>

      {PROPERTIES.map((property, index) => {
        const isActive = active === property.id;
        const isDimmed = active !== null && !isActive;

        return (
          <Link
            key={property.id}
            href={property.href}
            onMouseEnter={() => setActive(property.id)}
            onFocus={() => setActive(property.id)}
            onBlur={() => setActive(null)}
            aria-label={`Conhecer o ${property.name}`}
            className={`group relative flex flex-1 flex-col justify-end overflow-hidden px-6 pb-10 text-center outline-none transition-[flex-grow] duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:[outline-offset:-12px] motion-reduce:transition-none md:px-12 md:pb-20 md:pt-72 ${
              index === 0 ? "pt-28" : "pt-10 md:border-l md:border-white/10"
            } ${isActive ? "md:flex-[1.3]" : ""}`}
          >
            {/* Background image */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                isActive
                  ? "md:scale-105"
                  : isDimmed
                    ? "md:scale-110 md:blur-[6px] md:grayscale-[40%]"
                    : ""
              }`}
            >
              <Image
                src={property.image}
                alt={property.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 60vw, 100vw"
                quality={80}
              />
            </div>
            {/* Overlay */}
            <div className={`absolute inset-0 ${property.overlay}`} />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                isDimmed ? "opacity-0 md:opacity-40" : "opacity-0"
              }`}
            />

            {/* Content */}
            <div
              className={`relative z-10 mx-auto flex max-w-xl flex-col items-center transition-all duration-700 ease-out motion-reduce:transition-none ${
                isDimmed ? "md:opacity-50" : ""
              } ${isActive ? "md:-translate-y-2" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {property.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-white md:mt-3 md:text-5xl lg:text-6xl text-balance">
                {property.name}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:mt-4 md:text-base">
                {property.description}
              </p>
              <span
                className={`mt-6 inline-flex items-center gap-2 rounded-sm px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 md:mt-8 md:py-3.5 ${property.button}`}
              >
                {property.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
