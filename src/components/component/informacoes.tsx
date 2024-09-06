export function Informacoes() {
    return (
        <div className="px-4 md:px-6 lg:px-8 grid flex justify-center w-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore o Chalé</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/frente-sol.jpg"
              max-width={600}
              height={400}
              alt="Por do sol"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="bg-background p-4">
              <h3 className="text-xl font-bold mb-2">Ambiente aconchegante</h3>
              <p className="text-muted-foreground">
                Entre e sinta-se em casa, onde cada canto foi pensado para o seu bem-estar.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/banheira.jpg"
              max-width={600}
              height={400}
              alt="Banheira"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="bg-background p-4">
              <h3 className="text-xl font-bold mb-2">Banheira</h3>
              <p className="text-muted-foreground">
                Desfrute de momentos de paz e tranquilidade em uma banheira relaxante.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/por-do-sol.jpg"
              max-width={600}
              height={400}
              alt="Cozinha"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="bg-background p-4">
              <h3 className="text-xl font-bold mb-2">Pôr do sol</h3>
              <p className="text-muted-foreground">
                Assista ao espetáculo da natureza enquanto o sol se põe no horizonte.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/assets/fogueira-chale.jpg"
              max-width={600}
              height={400}
              alt="Quarto"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="bg-background p-4">
              <h3 className="text-xl font-bold mb-2">Fogueira</h3>
              <p className="text-muted-foreground">
              Reúna-se ao redor da fogueira para momentos acolhedores sob o céu estrelado.                </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Informacoes;
