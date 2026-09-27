import Image from "next/image";

const EXPERIENCES = [
  {
    src: "/assets/recanto/hidromassagem-vista.jpg",
    alt: "Banheira de hidromassagem diante da janela com vista para a mata",
    title: "Hidromassagem com vista",
    description:
      "Banheira para dois diante de janelas amplas, com a mata como paisagem.",
  },
  {
    src: "/assets/recanto/banho-espuma.jpg",
    alt: "Banho de espuma na hidromassagem com luz indireta",
    position: "center 85%",
    title: "Noites a dois",
    description:
      "Luz baixa, banho de espuma e o silêncio da natureza para relaxar sem pressa.",
  },
  {
    src: "/assets/recanto/hidromassagem-janela.jpg",
    alt: "Espaço da hidromassagem visto pelo vidro, iluminado ao entardecer",
    title: "Clima de fim de tarde",
    description:
      "Madeira, luz indireta e vidro: o espaço da hidromassagem ganha outro clima ao entardecer.",
  },
  {
    src: "/assets/recanto/banner.jpg",
    alt: "Chalé Araucária entre araucárias ao pôr do sol",
    title: "O chalé",
    description:
      "Chalé de madeira entre as araucárias, com deck e iluminação aconchegante.",
  },
  {
    src: "/assets/recanto/fogueira.jpg",
    alt: "Fogueira ao ar livre em frente ao chalé",
    title: "Fogueira",
    description:
      "Noites especiais ao redor da fogueira, com histórias, marshmallows e o céu estrelado.",
  },
  {
    src: "/assets/recanto/area-festas.jpg",
    alt: "Área de festas coberta com mesas, bancos e mesa de sinuca",
    title: "Área de festas",
    description:
      "Espaço coberto com mesas, bancos, geladeira e mesa de sinuca para festas de até 20 pessoas.",
  },
  {
    src: "/assets/recanto/recanto-luzes.jpg",
    alt: "Varal de luzes e fogueira no gramado do Recanto Aconchego",
    title: "Recanto Aconchego",
    description:
      "Gramado com varal de luzes e fogueira para aproveitar o fim de tarde ao ar livre.",
  },
  {
    src: "/assets/recanto/volei.jpg",
    alt: "Campo de vôlei gramado entre araucárias",
    title: "Campo de vôlei",
    description:
      "Campo de vôlei gramado para partidas animadas com a família e os amigos.",
  },
  {
    src: "/assets/recanto/playground.jpg",
    alt: "Casinha com escorregador no playground",
    title: "Playground",
    description:
      "Casinha com escorregador e balanço para as crianças brincarem no gramado.",
  },
];

export function RecantoExperiences() {
  return (
    <section id="galeria" className="bg-[#eae6df] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Galeria
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Explore o chalé e o Recanto
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#6b7c6b]">
            Da hidromassagem com vista para a mata à fogueira sob as estrelas.
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
                  style={exp.position ? { objectPosition: exp.position } : undefined}
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
