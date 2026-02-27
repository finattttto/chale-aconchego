"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Familia Silva",
    text: "Lugar incrivel para reunir a familia! As criancas adoraram o rio e o campo de voleio. A fogueira a noite foi o ponto alto. Voltaremos com certeza!",
    rating: 5,
  },
  {
    name: "Carlos e amigos",
    text: "Perfeito para um acampamento com os amigos. Espaco enorme, natureza de tirar o folego e muita tranquilidade. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Familia Oliveira",
    text: "Fizemos a confraternizacao da familia na area de festas e foi maravilhoso. Tudo muito bem cuidado e organizado. Experiencia unica!",
    rating: 5,
  },
];

export function RecantoTestimonials() {
  return (
    <section className="bg-[#eae6df] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6b7c6b]">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[#2d3a2e] md:text-5xl text-balance">
            O que dizem nossos visitantes
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-sm border border-[#d4cfc5] bg-[#f5f2ed] p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#4a6741] text-[#4a6741]"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#6b7c6b]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <footer className="mt-4 border-t border-[#d4cfc5] pt-4">
                <cite className="text-sm font-medium not-italic text-[#2d3a2e]">
                  {testimonial.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
