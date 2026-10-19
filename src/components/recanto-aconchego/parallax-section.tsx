"use client";

import { useEffect, useRef } from "react";
import { RECANTO_PARALLAX_VIDEO_URL } from "@/lib/constants";

export function RecantoParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Só baixa e toca o vídeo quando a seção está perto da tela; pausa ao sair
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative">
      {/* Parallax: o clip-path recorta o vídeo fixo na viewport ao tamanho da seção */}
      <div
        ref={containerRef}
        className="relative h-[80vh] min-h-[600px] w-full bg-[#2d3a2e]"
        style={{ clipPath: "inset(0)" }}
      >
        <video
          ref={videoRef}
          className="fixed inset-0 h-screen w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          poster="/assets/recanto/chale-noite-pinheiro.webp"
          aria-hidden="true"
        >
          <source src={RECANTO_PARALLAX_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2e]/70 via-[#2d3a2e]/50 to-[#2d3a2e]/80" />

        {/* Content */}
        <div className="relative flex h-full items-center justify-center px-6">
          <div className="max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Entre araucárias
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Onde o romance encontra a natureza
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Um refúgio para desacelerar a dois, entre o som do rio, o calor da
              fogueira e o céu estrelado. Momentos que ficam para sempre.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient to blend with next section. Termina sólido e passa 4px da borda
          do vídeo para cobrir a linha que o arredondamento de 80vh deixa à mostra */}
      <div
        className="pointer-events-none"
        style={{
          height: "calc(6rem + 4px)",
          marginTop: "-6rem",
          marginBottom: "-4px",
          background: "linear-gradient(to bottom, transparent, #f5f2ed calc(100% - 8px))",
          position: "relative",
          zIndex: 10,
        }}
      />
    </section>
  );
}
