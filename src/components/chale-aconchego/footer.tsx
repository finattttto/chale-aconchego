import { INSTAGRAM_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-medium">Chale Aconchego</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Onde cada detalhe e sinonimo de conforto e tranquilidade em conexao
              com a natureza.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Contato
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>(49) 99116-8043</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@chaleaconchegoo</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Linha Macaco Branco, Descanso - SC</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Localizacao
            </h4>
            <div className="mt-4 overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0010348799974!2d-53.50446072381259!3d-26.839919390167637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa51c225bfc4eb%3A0xec83033ab44ade68!2sChal%C3%A9%20Aconchego!5e0!3m2!1spt-BR!2sbr!4v1724801576954!5m2!1spt-BR!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localizacao do Chale Aconchego no Google Maps"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 lg:px-8">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Chale Aconchego. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
