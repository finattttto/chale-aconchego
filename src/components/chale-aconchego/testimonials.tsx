"use client";

import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ana e Pedro",
    location: "Florianópolis, SC",
    text: "Uma experiência maravilhosa! O chalé é lindo, super aconchegante e com uma vista incrível. Voltaremos com certeza!",
    rating: 5,
  },
  {
    name: "Camila e Lucas",
    location: "Curitiba, PR",
    text: "Lugar perfeito para descansar e se reconectar. A banheira de hidromassagem é sensacional, e a fogueira à noite foi o ponto alto da viagem.",
    rating: 5,
  },
  {
    name: "Juliana e Marcos",
    location: "Porto Alegre, RS",
    text: "Atendimento impecável, chalé muito limpo e bem equipado. O café da manhã colonial é imperdível. Recomendamos demais!",
    rating: 5,
  },
  {
    name: "Fernanda e Rafael",
    location: "São Paulo, SP",
    text: "Passamos nosso aniversário de casamento e foi perfeito. A vista do pôr do sol é de tirar o fôlego. Ambiente super romântico!",
    rating: 5,
  },
  {
    name: "Beatriz e Thiago",
    location: "Joinville, SC",
    text: "Já é a terceira vez que voltamos. Não cansamos de nos encantar com a tranquilidade e beleza do lugar. Viramos fãs!",
    rating: 5,
  },
  {
    name: "Mariana e Diego",
    location: "Blumenau, SC",
    text: "Melhor escolha para um final de semana romântico. Silêncio absoluto, natureza exuberante e muito conforto. Perfeito!",
    rating: 5,
  },
  {
    name: "Patrícia e Bruno",
    location: "Chapecó, SC",
    text: "Superou todas as expectativas! A estrutura é impecável e os anfitriões são muito atenciosos. Voltaremos em breve.",
    rating: 5,
  },
  {
    name: "Carolina e Gustavo",
    location: "Criciúma, SC",
    text: "Um verdadeiro refúgio! Acordar com o canto dos pássaros e tomar café com aquela vista foi inesquecível.",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <blockquote className="flex h-full w-80 flex-shrink-0 flex-col rounded-sm border border-border bg-background p-6 md:w-96">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <footer className="mt-4 border-t border-border pt-4">
        <cite className="block text-sm font-medium not-italic text-foreground">
          {testimonial.name}
        </cite>
        <span className="text-xs text-muted-foreground">
          {testimonial.location}
        </span>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed;

        // Reset position when we've scrolled half the content (since content is duplicated)
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollPosition >= halfWidth) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="bg-card py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            O que dizem nossos hóspedes
          </h2>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-6"
        // onMouseEnter={() => setIsPaused(true)}
        // onMouseLeave={() => setIsPaused(false)}
        // onTouchStart={() => setIsPaused(true)}
        // onTouchEnd={() => setIsPaused(false)}
      >
        {/* Original testimonials */}
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={`original-${index}`} testimonial={testimonial} />
        ))}
        {/* Duplicated testimonials for seamless infinite scroll */}
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Gradient masks */}
      <div className="pointer-events-none relative -mt-[200px] h-[200px]">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-card to-transparent" />
      </div>
    </section>
  );
}
