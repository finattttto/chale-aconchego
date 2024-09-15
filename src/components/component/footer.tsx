import { INSTAGRAM_LINK, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800 w-full">
      <div className="container mx-auto px-5 flex justify-center w-full">
        <div className="py-16 flex flex-col lg:flex-row items-center w-full">
          <div className="lg:w-1/2 w-full mb-10 lg:ml-12 lg:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0010348799974!2d-53.50446072381259!3d-26.839919390167637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fa51c225bfc4eb%3A0xec83033ab44ade68!2sChal%C3%A9%20Aconchego!5e0!3m2!1spt-BR!2sbr!4v1724801576954!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:pl-12">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-6">
              Garanta já a sua reserva!
            </h3>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center w-full">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
                className="mx-3 font-bold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visite nosso Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground py-6 flex justify-center">
        <div className="container px-4 md:px-6 lg:px-8 flex flex-col md:flex-row flex justify-center">
          <p className="text-sm">&copy; 2024 Chalé Aconchego. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
