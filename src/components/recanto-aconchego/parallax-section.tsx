"use client";

export function RecantoParallaxSection() {
  return (
    <section className="relative">
      {/* Parallax Container with CSS fixed background */}
      <div
        className="relative h-[80vh] min-h-[600px] w-full"
        style={{
          backgroundImage: "url('/assets/recanto/chale-noite-pinheiro.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2e]/70 via-[#2d3a2e]/50 to-[#2d3a2e]/80" />

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Em meio a natureza
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Onde a tranquilidade encontra a aventura
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Um refúgio natural para reconectar com a família, os amigos e a natureza. 
              Momentos que ficam para sempre.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient to blend with next section */}
      <div className="h-24 bg-gradient-to-b from-transparent to-[#f5f2ed]" 
        style={{
          marginTop: "-6rem",
          position: "relative",
          zIndex: 10,
        }}
      />
    </section>
  );
}
