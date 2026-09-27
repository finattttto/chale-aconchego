"use client";

import Image from "next/image";
import { Users, Bath, PawPrint, WifiOff } from "lucide-react";

const AMENITIES = [
  { icon: Bath, label: "Banheira de hidromassagem" },
  { icon: Users, label: "Chalé para 2 pessoas" },
  { icon: WifiOff, label: "Desconexão digital" },
  { icon: PawPrint, label: "Pet friendly" },
];

export function RecantoAbout() {
  return (
    <section id="sobre" className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Sobre o chalé
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Romance em meio à natureza
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
            <Image
              src="/assets/recanto/hidromassagem-mata.jpg"
              alt="Banheira de hidromassagem com janela ampla voltada para a mata"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-[#6b7c6b]">
              O Chalé Araucária foi renovado para casais que buscam um refúgio
              romântico em contato com a natureza. Cercado por araucárias e
              próximo ao rio, agora conta com uma banheira de hidromassagem com
              janelas amplas voltadas para a mata e iluminação aconchegante.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7c6b]">
              O chalé fica no Recanto Aconchego, uma ampla área externa com
              churrasqueira, fogueira, campo de vôlei, rede suspensa, balanço,
              playground e espaço para acampamento, que também pode ser alugada
              para festas e confraternizações de até 20 pessoas.
            </p>

            {/* Amenities grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {AMENITIES.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-3 rounded-sm border border-[#d4cfc5] bg-[#eae6df] px-4 py-3.5"
                >
                  <amenity.icon className="h-5 w-5 flex-shrink-0 text-[#4a6741]" />
                  <span className="text-sm font-medium text-[#2d3a2e]">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-12 border-t border-[#d4cfc5] pt-10">
              <div>
                <span className="font-serif text-3xl font-medium text-[#2d3a2e]">
                  2
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">pessoas no chalé</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-[#2d3a2e]">
                  Rio
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">acesso direto</p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-[#2d3a2e]">
                  20
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">
                  pessoas no Recanto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
