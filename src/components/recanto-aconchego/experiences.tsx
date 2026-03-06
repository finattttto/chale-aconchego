import Image from "next/image";

const EXPERIENCES = [
  {
    src: "/assets/recanto/rio.jpg",
    alt: "Rio cristalino próximo ao recanto",
    title: "Banho no rio",
    description:
      "Refresque-se nas águas cristalinas do rio que corta a propriedade. Pura conexão com a natureza.",
  },
  {
    src: "/assets/recanto/rede.jpg",
    alt: "Rede suspensa entre as árvores",
    title: "Redes suspensas",
    description:
      "Relaxe em redes suspensas entre as árvores, embalado pelo som do rio e dos pássaros.",
  },
  {
    src: "/assets/recanto/voleio.jpg",
    alt: "Campo de vôlei",
    title: "Campo de vôlei",
    description:
      "Divirta-se com a família e amigos em partidas animadas no campo de vôlei de areia.",
  },
  {
    src: "/assets/recanto/fogueira.jpg",
    alt: "Fogueira ao ar livre",
    title: "Fogueira",
    description:
      "Noites especiais ao redor da fogueira, com histórias, marshmallows e o céu estrelado.",
  },
  {
    src: "/assets/recanto/area-externa.jpg",
    alt: "Área de festas externa",
    title: "Área de festas",
    description:
      "Espaço amplo e coberto para reunir a família em celebrações e confraternizações.",
  },
  {
    src: "/assets/recanto/camping.jpg",
    alt: "Área de camping",
    title: "Camping",
    description:
      "Traga sua barraca e viva a experiência completa de acampamento em meio à natureza.",
  },
];

export function RecantoExperiences() {
  return (
    <section id="galeria" className="bg-[#eae6df] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Atividades
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Explore o Recanto
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#6b7c6b]">
            Aventura, diversão e descanso em um só lugar, para toda a família.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.title}
              className="group overflow-hidden rounded-sm bg-[#f5f2ed]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.src}
                  alt={exp.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-medium text-[#2d3a2e]">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b7c6b]">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
