"use client";

import Image from "next/image";
import { Users, Wifi, Wind, Heart } from "lucide-react";

const AMENITIES = [
  { icon: Users, label: "Ate 2 pessoas" },
  { icon: Wind, label: "Ar-condicionado" },
  { icon: Wifi, label: "Wi-Fi gratis" },
  { icon: Heart, label: "Pet friendly" },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sobre nos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Um refugio pensado para voce
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
            <Image
              src="/assets/chale-frente.jpg"
              alt="Frente do Chale Aconchego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Situado na Linha Macaco Branco, em Descanso - SC, o Chale Aconchego
              e a fuga perfeita para casais em busca de serenidade. Aqui, cada
              detalhe foi pensado para proporcionar uma experiencia unica de
              conforto e conexao com a natureza.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Com acomodacoes acolhedoras, banheira de hidromassagem com vista
              deslumbrante e uma area externa com churrasqueira e fogueira, o
              chale convida voce a desacelerar e viver momentos inesqueciveis.
            </p>

            {/* Amenities grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {AMENITIES.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3.5"
                >
                  <amenity.icon className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-12 border-t border-border pt-10">
              <div>
                <span className="font-serif text-3xl font-medium text-foreground">
                  5+
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  anos de experiencia
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-foreground">
                  500+
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  hospedes atendidos
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-foreground">
                  4.9
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  avaliacao media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
