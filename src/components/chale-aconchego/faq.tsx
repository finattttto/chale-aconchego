"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Datas disponiveis",
    answer: null,
    calendar: true,
  },
  {
    question: "Política de Reserva",
    answer:
      "Reserva confirmada mediante pagamento de 50% no momento da reserva. O restante do pagamento deve ser realizado até a véspera do check-in. Serviços opcionais, como o passeio a cavalo e cesta de café da manhã, estão disponíveis por um valor adicional.",
  },
  {
    question: "Quais são as acomodações?",
    answer: null,
    list: [
      {
        bold: "Acomodaçoes",
        text: "Espaço ideal para 2 pessoas, com 1 cama na parte inferior e um sofa-cama na parte superior.",
      },
      {
        bold: "Banheira de Hidromassagem",
        text: "Relaxe na banheira de hidromassagem, desfrutando da vista deslumbrante.",
      },
      {
        bold: "Roupas de Cama e Toalhas",
        text: "Fornecemos roupas de cama e toalhas de banho para garantir o seu conforto durante toda a estadia.",
      },
      {
        bold: "Cozinha Equipada",
        text: "A cozinha possui utensilios, fogão, frigobar e micro-ondas para oferecer flexibilidade na preparação de refeições.",
      },
      {
        bold: "Área Externa",
        text: "Aprecie a natureza na área externa com churrasqueira, pátio e contato com a natureza, proporcionando uma experiência única.",
      },
    ],
  },
  {
    question: "Quais são os servicos incluidos?",
    answer:
      "O aluguel inclui Wi-Fi, utensílios de cozinha, roupa de cama e banho. A estadia pode incluir serviços opcionais, como café da manhã ou passeio a cavalo. Cada um dos adicionais tem seu valor cobrado a parte da estadia. Caso seja do interesse do hóspede, é necessário solicitar os serviços no momento da reserva!",
  },
  {
    question: "Posso levar meu Pet?",
    answer:
      "Sim, animais de estimação são bem-vindos no chalé. Apenas solicitamos que você informe sobre a presença do seu pet no momento da reserva. Há uma cobrança adicional por pet no valor da diária, que deve ser consultada previamente.",
  },
  {
    question: "Política de Cancelamento",
    answer:
      "Cancelamento até 7 dias antes da data de check-in: reembolso total. Cancelamento dentro de 7 dias da data de check-in: 50% do valor da reserva não será devolvido.",
  },
  {
    question: "Valores dos servicos",
    answer: null,
    list: [
      { bold: "Segunda a quinta-feira", text: "R$ 300,00 por diaria." },
      {
        bold: "Sextas, sábados, domingos e feriados",
        text: "R$ 350,00 por diaria.",
      },
      {
        bold: "Café da manhã e passeio a cavalo",
        text: "Consultar na reserva.",
      },
    ],
  },
];

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:opacity-70"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-foreground md:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {item.calendar && (
            <div className="flex justify-center">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=Y2hhbGVkb2Fjb25jaGVnb0BnbWFpbC5jb20&color=%23039BE5"
                className="h-[400px] w-full max-w-[700px] rounded-sm border-0 md:h-[500px]"
                loading="lazy"
                title="Calendario de disponibilidade"
              />
            </div>
          )}
          {item.answer && (
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.answer}
            </p>
          )}
          {item.list && (
            <ul className="space-y-2">
              {item.list.map((li) => (
                <li
                  key={li.bold}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  <strong className="text-foreground">{li.bold}:</strong>{" "}
                  {li.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Dúvidas
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ items */}
        <div className="border-t border-border">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
