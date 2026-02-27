import Image from "next/image";
import { Users, Wifi, Tent, PawPrint } from "lucide-react";

const AMENITIES = [
  { icon: Users, label: "Chale para 2 pessoas" },
  { icon: Tent, label: "Area para camping" },
  { icon: Wifi, label: "Wi-Fi gratis" },
  { icon: PawPrint, label: "Pet friendly" },
];

export function RecantoAbout() {
  return (
    <section id="sobre" className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Sobre o espaco
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Reconecte-se com a natureza
          </h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
            <Image
              src="/assets/recanto/chale-frente.jpg"
              alt="Frente do Recanto Aconchego"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-[#6b7c6b]">
              O Recanto Aconchego e a escolha perfeita para quem busca uma
              experiencia autentica em contato com a natureza. Localizado
              proximo a um rio de aguas cristalinas, o espaco oferece um
              ambiente rustico e acolhedor, ideal para familias e amigos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#6b7c6b]">
              Alem do chale para duas pessoas, o recanto conta com uma ampla
              area externa com churrasqueira, fogueira, campo de voleio,
              redes suspensas e espaco para acampamento. Uma verdadeira
              experiencia de glamping no interior de Santa Catarina.
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
                  Rio
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">
                  acesso direto
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-[#2d3a2e]">
                  10+
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">
                  pessoas no camping
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl font-medium text-[#2d3a2e]">
                  50+
                </span>
                <p className="mt-1 text-sm text-[#6b7c6b]">
                  na area de festas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
