"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Datas disponíveis",
    answer: null,
    calendar: true,
  },
  {
    question: "Quantas pessoas o espaço comporta?",
    answer:
      "O chalé acomoda até 2 pessoas confortavelmente. O Recanto Aconchego, área externa ao redor do chalé, recebe até 20 pessoas para festas e confraternizações, e a área de camping comporta barracas para grupos maiores.",
  },
  {
    question: "O que está incluso na diária?",
    answer:
      "A diária inclui o uso do chalé com banheira de hidromassagem, roupas de cama e banho, acesso ao rio, campo de vôlei, redes suspensas, fogueira e área de churrasqueira. O espaço de camping e a área de festas possuem valores adicionais.",
  },
  {
    question: "Posso acampar no espaço?",
    answer:
      "Sim! O Recanto Aconchego possui uma área dedicada para acampamento. Você pode trazer sua própria barraca. A área de camping tem acesso a banheiro e área de churrasqueira. O valor é de R$ 100 por casal.",
  },
  {
    question: "O Recanto Aconchego pode ser reservado separadamente?",
    answer:
      "Sim, o Recanto Aconchego pode ser alugado sem o chalé para confraternizações, aniversários e reuniões familiares de até 20 pessoas. Para até 12 pessoas o valor é R$ 200; para grupos maiores, consulte pelo WhatsApp.",
  },
  {
    question: "Posso levar meu pet?",
    answer:
      "Sim, animais de estimação são bem-vindos no Chalé Araucária. Apenas solicitamos que você informe sobre a presença do seu pet no momento da reserva.",
  },
  {
    question: "Quais são os valores?",
    answer: null,
    list: [
      { bold: "Chalé (segunda a quinta)", text: "R$ 250 por diária." },
      { bold: "Chalé (sexta e domingo)", text: "R$ 300 por diária." },
      { bold: "Chalé (sábados e feriados)", text: "R$ 350 por diária." },
      { bold: "Café da manhã colonial", text: "R$ 80." },
      { bold: "Passeio a cavalo", text: "R$ 100 por casal." },
      { bold: "Área de camping", text: "R$ 100 por casal." },
      {
        bold: "Recanto Aconchego (sem o chalé)",
        text: "R$ 200 para até 12 pessoas. Acima disso, consultar pelo WhatsApp.",
      },
    ],
  },
  {
    question: "Política de cancelamento",
    answer:
      "Cancelamento até 7 dias antes da data de check-in: reembolso total. Cancelamento dentro de 7 dias da data de check-in: 50% do valor da reserva não será devolvido.",
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
    <div className="border-b border-[#d4cfc5]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:opacity-70"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-base font-medium text-[#2d3a2e] md:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#6b7c6b] transition-transform duration-300 ${
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
                src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=America%2FSao_Paulo&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=1b4c3595b3c9b51432668ed42df8cc4262936b546efe252032cbf5ee84977253%40group.calendar.google.com"
                className="h-[400px] w-full max-w-[700px] rounded-sm border-0 md:h-[500px]"
                loading="lazy"
                title="Calendário de disponibilidade do Chalé Araucária"
              />
            </div>
          )}
          {item.answer && (
            <p className="text-sm leading-relaxed text-[#6b7c6b] md:text-base">
              {item.answer}
            </p>
          )}
          {item.list && (
            <ul className="space-y-2">
              {item.list.map((li) => (
                <li
                  key={li.bold}
                  className="text-sm leading-relaxed text-[#6b7c6b] md:text-base"
                >
                  <strong className="text-[#2d3a2e]">{li.bold}:</strong>{" "}
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

export function RecantoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f5f2ed] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Dúvidas
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ items */}
        <div className="border-t border-[#d4cfc5]">
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
