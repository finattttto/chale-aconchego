import InfoCard from "./infocard";

export function Informacoes() {
  const infoData = [
    {
      imgSrc: "/assets/frente-sol.jpg",
      imgAlt: "Por do sol",
      title: "Ambiente aconchegante",
      description:
        "Entre e sinta-se em casa, onde cada canto foi pensado para o seu bem-estar.",
    },
    {
      imgSrc: "/assets/banheira.jpg",
      imgAlt: "Banheira",
      title: "Banheira",
      description: "Desfrute de momentos de paz e tranquilidade em uma banheira relaxante.",
    },
    {
      imgSrc: "/assets/por-do-sol.jpg",
      imgAlt: "Pôr do sol",
      title: "Pôr do sol",
      description: "Assista ao espetáculo da natureza enquanto o sol se põe no horizonte.",
    },
    {
      imgSrc: "/assets/fogueira-chale.jpg",
      imgAlt: "Fogueira",
      title: "Fogueira",
      description:
        "Reúna-se ao redor da fogueira para momentos acolhedores sob o céu estrelado.",
    },
    {
      imgSrc: "/assets/cafe.jpg",
      imgAlt: "Café da manhã",
      title: "Café da manhã",
      description:
        "Reserve seu café da manhã com produtos coloniais para iniciar bem o seu dia!",
      detail: "*Cobrança adicional."
    },
    {
      imgSrc: "/assets/cavalo.jpg",
      imgAlt: "Passeio a cavalo",
      title: "Passeio a cavalo",
      description:
        "Desfrute de uma experiência única através de um passeio a cavalo nas redondezas da propriedade!",
        detail: "*Cobrança adicional."
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 grid flex justify-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore o Chalé</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {infoData.map((info, index) => (
          <InfoCard
            key={index}
            imgSrc={info.imgSrc}
            imgAlt={info.imgAlt}
            title={info.title}
            description={info.description}
            detail={info.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default Informacoes;
