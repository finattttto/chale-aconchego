import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ana e Pedro",
    text: "Uma experiencia maravilhosa! O chale e lindo, super aconchegante e com uma vista incrivel. Voltaremos com certeza!",
    rating: 5,
  },
  {
    name: "Camila e Lucas",
    text: "Lugar perfeito para descansar e se reconectar. A banheira de hidromassagem e sensacional, e a fogueira a noite foi o ponto alto da viagem.",
    rating: 5,
  },
  {
    name: "Juliana e Marcos",
    text: "Atendimento impecavel, chale muito limpo e bem equipado. O cafe da manha colonial e imperdivel. Recomendamos demais!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Depoimentos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
            O que dizem nossos hospedes
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex flex-col rounded-sm border border-border bg-background p-6"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <footer className="mt-4 border-t border-border pt-4">
                <cite className="text-sm font-medium not-italic text-foreground">
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
