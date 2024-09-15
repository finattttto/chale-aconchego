import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";

export function Perguntas() {
  return (
    <div className="container px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
      <div className="grid gap-6">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold">Datas disponíveis </h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', maxWidth:  '80vw' }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=Y2hhbGVkb2Fjb25jaGVnb0BnbWFpbC5jb20&color=%23039BE5" style={{ border: 0 }}
                width="800"
                height="600"
              ></iframe>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold">Quais são as acomodações?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">
              O chalé possui 1 quarto, 1 banheiro, sala de estar, cozinha totalmente equipada e varanda com vista
              para o pôr do sol. Além disso, o espaço do chalé conta com um amplo quintal, com áreas arborizadas e uma trilha em meio a natureza!
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold">Quais são os serviços incluídos?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">O aluguel inclui Wi-Fi, utensílios de cozinha, roupa de cama e banho, além de limpeza diária.</p>
            <p className="text-muted-foreground pt-2">A estadia pode incluir serviços opcionais, como café da manhã ou passeio a cavalo. Cada um dos adicionais tem seu valor cobrado à parte da estadia. Caso seja do interesse do hóspede, é necessário solicitar os serviços no momento da reserva!</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold">Posso levar meu animal de estimação?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">
              Sim, animais de estimação são bem-vindos no chalé. Apenas solicitamos que você informe sobre a
              presença do seu pet no momento da reserva.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

export default Perguntas;
