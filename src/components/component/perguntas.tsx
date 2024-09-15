import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";

export function Perguntas() {
  return (
    <div className="container px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
      <div className="grid gap-6">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Datas disponíveis </h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', maxWidth: '80vw' }}>
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
            <h3 className="text-lg font-semibold pr-2">Política de Reserva</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">
              Reserva confirmada mediante pagamento de 50% no momento da reserva. O restante do pagamento será realizado na véspera do check-in.
            </p>
            <p className="text-muted-foreground pt-3">
              Serviços opcionais, como o passeio a cavalo e cesta de café da manhã, estão disponíveis por um valor adicional.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Quais são as acomodações?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <ul className="list-disc pl-5 text-muted-foreground ml-5">
              <li className="pt-2">
                <strong>Acomodações:</strong> Espaço ideal para 2 pessoas, com 1 cama na parte inferior e um sofá-cama na parte superior.
              </li>
              <li className="pt-2">
                <strong>Banheira de Hidromassagem:</strong> Relaxe na banheira de hidromassagem, desfrutando da vista deslumbrante.
              </li>
              <li className="pt-2">
                <strong>Roupas de Cama e Toalhas:</strong> Fornecemos roupas de cama e toalhas de banho para garantir o seu conforto durante toda a estadia.
              </li>
              <li className="pt-2">
                <strong>Cozinha Equipada:</strong> A cozinha possui utensílios, frigobar e micro-ondas para oferecer flexibilidade na preparação de refeições.
              </li>
              <li className="pt-2">
                <strong>Área Externa:</strong> Aprecie a natureza na área externa com churrasqueira, pátio e contato com a natureza, proporcionando uma experiência única.
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Quais são os serviços incluídos?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">O aluguel inclui Wi-Fi, utensílios de cozinha, roupa de cama e banho, além de limpeza diária.</p>
            <p className="text-muted-foreground pt-2">A estadia pode incluir serviços opcionais, como café da manhã ou passeio a cavalo. Cada um dos adicionais tem seu valor cobrado à parte da estadia. Caso seja do interesse do hóspede, é necessário solicitar os serviços no momento da reserva!</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Posso levar meu animal de estimação?</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">
              Sim, animais de estimação são bem-vindos no chalé. Apenas solicitamos que você informe sobre a
              presença do seu pet no momento da reserva.
            </p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Política de Cancelamento</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
            <p className="text-muted-foreground">Cancelamento até 7 dias antes da data de check-in: reembolso total.</p>
            <p className="text-muted-foreground pt-3">Cancelamento dentro de 7 dias da data de check-in: 50% do valor da reserva não será devolvido.</p>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between bg-muted px-4 py-3 rounded-md [&[data-state=open]>svg]:rotate-180">
            <h3 className="text-lg font-semibold pr-2">Valores dos serviços</h3>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform" />
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-muted px-4 py-3 rounded-b-md">
          <ul className="list-disc pl-5 text-muted-foreground ml-5">
              <li className="pt-2">Diárias de segunda a quinta-feira: <strong>R$ 300,00</strong></li>
              <li className="pt-2">Diárias de sextas, sábados, domingos e feriados: <strong>R$ 350,00</strong></li>
              <li className="pt-2">Café da manhã e passeio a cavalo: <strong>Consultar na reserva</strong></li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

export default Perguntas;
