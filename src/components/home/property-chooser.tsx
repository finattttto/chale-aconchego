"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type PropertyId = "araucaria" | "chale";

// Mesmo valor nos dois layouts: o navegador escolhe a mesma URL e baixa cada foto uma vez só.
const IMAGE_SIZES = "(min-width: 768px) 60vw, 100vw";

// Ordem dos paineis: primeiro fica a esquerda no desktop e no topo no celular.
const PROPERTIES: {
  id: PropertyId;
  href: string;
  name: string;
  eyebrow: string;
  tagline: string;
  tags: string[];
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  mobileImagePosition: string;
  overlay: string;
  button: string;
}[] = [
  {
    id: "chale",
    href: "/chale-aconchego",
    name: "Chalé Aconchego",
    eyebrow: "Refúgio para casais",
    tagline: "Refúgio para casais",
    tags: ["Hidromassagem", "Fogueira", "Pôr do sol"],
    description:
      "Banheira de hidromassagem, fogueira e muito conforto para dois, em conexão com a natureza.",
    cta: "Conhecer o Aconchego",
    image: "/assets/chale-frente.jpg",
    imageAlt: "Chalé Aconchego iluminado ao entardecer em meio à mata",
    mobileImagePosition: "center 60%",
    overlay: "bg-gradient-to-t from-black/80 via-black/30 to-black/30",
    button:
      "bg-primary-foreground text-foreground group-hover:bg-primary-foreground/90",
  },
  {
    id: "araucaria",
    href: "/chale-araucaria",
    name: "Chalé Araucária",
    eyebrow: "Hidromassagem entre araucárias",
    tagline: "Romance entre araucárias",
    tags: ["Hidromassagem", "Rio", "Área de festas"],
    description:
      "Hidromassagem com vista para a mata, acesso ao rio e o Recanto Aconchego ao redor, com espaço para festas.",
    cta: "Conhecer o Araucária",
    image: "/assets/recanto/chale-araucaria-escolha.jpg",
    imageAlt: "Chalé Araucária iluminado ao anoitecer entre araucárias",
    mobileImagePosition: "center 80%",
    overlay:
      "bg-gradient-to-t from-[#2d3a2e]/90 via-[#2d3a2e]/40 to-[#2d3a2e]/30",
    button: "bg-white text-[#2d3a2e] group-hover:bg-white/90",
  },
];

export function PropertyChooser() {
  return (
    <main className="bg-[#221f1c]">
      <MobileChooser />
      <DesktopChooser />
    </main>
  );
}

/*
 * Celular: tela dividida na diagonal, sem rolagem (100dvh). Cada chalé ocupa um triângulo
 * da tela (recortado com clip-path, que também limita a área de toque) e o cabeçalho fica
 * num selo no meio da diagonal. Aconchego no canto superior esquerdo, Araucária no
 * inferior direito.
 */
const DIAGONAL = {
  // Altura de cada metade (% da tela) e o ponto em que a diagonal toca cada lateral.
  height: "58%",
  topClip: "polygon(0 0, 100% 0, 100% 72.4%, 0 100%)",
  bottomClip: "polygon(0 27.6%, 100% 0, 100% 100%, 0 100%)",
};

function MobileChooser() {
  const [top, bottom] = PROPERTIES;

  return (
    <div className="relative h-[100dvh] overflow-hidden md:hidden">
      <DiagonalPanel
        property={top}
        position="top"
        className="animate-in fade-in slide-in-from-left-8 fill-mode-both duration-700"
      />
      <DiagonalPanel
        property={bottom}
        position="bottom"
        className="animate-in fade-in slide-in-from-right-8 fill-mode-both delay-150 duration-700"
      />

      {/* Linha da diagonal */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="58"
          x2="100"
          y2="42"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Selo central com o cabeçalho */}
      <header className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-in fade-in zoom-in-95 fill-mode-both delay-300 duration-700 whitespace-nowrap rounded-sm border border-white/15 bg-[#221f1c]/85 px-6 py-3.5 text-center backdrop-blur-md motion-reduce:animate-none">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
            Descanso · SC
          </p>
          <h1 className="mt-1 font-serif text-xl font-medium tracking-tight text-white">
            Escolha sua hospedagem
          </h1>
        </div>
      </header>
    </div>
  );
}

function DiagonalPanel({
  property,
  position,
  className,
}: {
  property: (typeof PROPERTIES)[number];
  position: "top" | "bottom";
  className: string;
}) {
  const isTop = position === "top";

  return (
    <Link
      href={property.href}
      aria-label={`Conhecer o ${property.name}`}
      className={`group absolute inset-x-0 overflow-hidden outline-none motion-reduce:animate-none ${
        isTop ? "top-0" : "bottom-0"
      } ${className}`}
      style={{
        height: DIAGONAL.height,
        clipPath: isTop ? DIAGONAL.topClip : DIAGONAL.bottomClip,
      }}
    >
      <Image
        src={property.image}
        alt={property.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-active:scale-105 motion-reduce:transition-none"
        style={{ objectPosition: property.mobileImagePosition }}
        sizes={IMAGE_SIZES}
        quality={80}
      />
      {/* Véu do lado do texto, na cor da marca */}
      <div
        className={`absolute inset-0 ${
          isTop
            ? "bg-gradient-to-b from-black/75 via-black/20 to-black/10"
            : "bg-gradient-to-t from-[#2d3a2e]/90 via-[#2d3a2e]/25 to-[#2d3a2e]/10"
        }`}
      />

      <div
        className={`absolute px-6 ${
          isTop ? "left-0 top-0 pt-8 text-left" : "bottom-0 right-0 pb-8 text-right"
        }`}
      >
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
          {property.tagline}
        </p>
        <div
          className={`mt-2 flex items-center gap-3 ${
            isTop ? "" : "flex-row-reverse"
          }`}
        >
          <h2 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-white">
            {property.name}
          </h2>
          <span
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-active:scale-90 ${property.button}`}
            aria-hidden="true"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* Desktop: tela dividida ao meio, com foco no lado sob o mouse e desfoque no outro. */
function DesktopChooser() {
  const [active, setActive] = useState<PropertyId | null>(null);

  return (
    <div
      className="relative hidden min-h-[100dvh] flex-row md:flex"
      onMouseLeave={() => setActive(null)}
    >
      {/* Header */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/60 via-black/25 to-transparent px-6 pb-20 pt-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">
          Descanso, Santa Catarina
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white lg:text-5xl text-balance">
          Escolha sua hospedagem
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
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
            className={`group relative flex flex-col justify-end overflow-hidden px-12 pb-20 pt-72 text-center outline-none transition-[flex-grow] duration-700 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70 focus-visible:[outline-offset:-12px] motion-reduce:transition-none ${
              index === 0 ? "" : "border-l border-white/10"
            } ${isActive ? "flex-[1.3]" : "flex-1"}`}
          >
            {/* Background image */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out motion-reduce:transition-none ${
                isActive
                  ? "scale-105"
                  : isDimmed
                    ? "scale-110 blur-[6px] grayscale-[40%]"
                    : ""
              }`}
            >
              <Image
                src={property.image}
                alt={property.imageAlt}
                fill
                priority
                className="object-cover"
                sizes={IMAGE_SIZES}
                quality={80}
              />
            </div>
            {/* Overlay */}
            <div className={`absolute inset-0 ${property.overlay}`} />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                isDimmed ? "opacity-40" : "opacity-0"
              }`}
            />

            {/* Content */}
            <div
              className={`relative z-10 mx-auto flex max-w-xl flex-col items-center transition-all duration-700 ease-out motion-reduce:transition-none ${
                isDimmed ? "opacity-50" : ""
              } ${isActive ? "-translate-y-2" : ""}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {property.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-5xl font-medium tracking-tight text-white lg:text-6xl text-balance">
                {property.name}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
                {property.description}
              </p>
              <span
                className={`mt-8 inline-flex items-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${property.button}`}
              >
                {property.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
