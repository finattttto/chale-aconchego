import Image from "next/image";

const EXPERIENCES = [
  {
    src: "/assets/frente-sol.jpg",
    alt: "Frente do chalé ao por do sol",
    title: "Ambiente aconchegante",
    description:
      "Entre e sinta-se em casa, onde cada canto foi pensado para o seu bem-estar.",
  },
  {
    src: "/assets/banheira.jpg",
    alt: "Banheira de hidromassagem",
    title: "Banheira",
    description:
      "Desfrute de momentos de paz e tranquilidade em uma banheira relaxante.",
  },
  {
    src: "/assets/por-do-sol.jpg",
    alt: "Pôr do sol visto do chalé",
    title: "Pôr do sol",
    description:
      "Assista ao espetáculo da natureza enquanto o sol se põe no horizonte.",
  },
  {
    src: "/assets/fogueira-chale.jpg",
    alt: "Fogueira ao ar livre",
    title: "Fogueira",
    description:
      "Reuna-se ao redor da fogueira para momentos acolhedores sob o céu estrelado.",
  },
  {
    src: "/assets/cafe.jpg",
    alt: "Café da manha colonial",
    title: "Café da manha",
    description:
      "Reserve seu café da manhã com produtos coloniais para iniciar bem o seu dia!",
    detail: "*Cobranca adicional. O cardápio varia de acordo com o dia.",
  },
  {
    src: "/assets/cavalo.jpg",
    alt: "Passeio a cavalo",
    title: "Passeio a cavalo",
    description:
      "Desfrute de uma experiencia unica através de um passeio a cavalo nas redondezas da propriedade!",
    detail: "*Cobrança adicional. Sujeito a disponibilidade.",
  },
];

export function Experiences() {
  return (
    <section id="experiencias" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Experiências
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Explore o Chalé
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Cada momento aqui e uma oportunidade de criar memórias inesquecíveis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.title}
              className="group overflow-hidden rounded-sm bg-background"
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
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                {exp.detail && (
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {exp.detail}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
