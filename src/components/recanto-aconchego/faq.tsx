"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Quantas pessoas o espaco comporta?",
    answer:
      "O chale acomoda ate 2 pessoas confortavelmente. Porem, a area externa de camping comporta barracas para grupos maiores, e a area de festas pode receber mais de 50 pessoas.",
  },
  {
    question: "O que esta incluso na diaria?",
    answer:
      "A diaria inclui o uso do chale com Wi-Fi, roupas de cama e banho, acesso ao rio, campo de voleio, redes suspensas, fogueira e area de churrasqueira. O espaco de camping e a area de festas possuem valores adicionais.",
  },
  {
    question: "Posso acampar no espaco?",
    answer:
      "Sim! O Recanto Aconchego possui uma area dedicada para acampamento. Voce pode trazer sua propria barraca. A area de camping tem acesso a banheiro e area de churrasqueira. Consulte valores para camping no momento da reserva.",
  },
  {
    question: "A area de festas pode ser reservada separadamente?",
    answer:
      "Sim, a area de festas pode ser reservada separadamente para confraternizacoes, aniversarios e reunioes familiares. Ela e externa ao chale e comporta mais de 50 pessoas. Consulte disponibilidade e valores.",
  },
  {
    question: "Posso levar meu Pet?",
    answer:
      "Sim, animais de estimacao sao bem-vindos no Recanto Aconchego. Apenas solicitamos que voce informe sobre a presenca do seu pet no momento da reserva.",
  },
  {
    question: "Quais sao os valores?",
    answer: null,
    list: [
      { bold: "Chale (segunda a quinta)", text: "Consultar valores." },
      { bold: "Chale (sexta a domingo e feriados)", text: "Consultar valores." },
      { bold: "Area de camping", text: "Consultar valores por barraca." },
      { bold: "Area de festas", text: "Consultar valores para eventos." },
    ],
  },
  {
    question: "Politica de cancelamento",
    answer:
      "Cancelamento ate 7 dias antes da data de check-in: reembolso total. Cancelamento dentro de 7 dias da data de check-in: 50% do valor da reserva nao sera devolvido.",
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
            Duvidas
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
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
