"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

export function RecantoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  return (
    <section id="video" className="bg-[#f5f2ed] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4a6741]">
              Descubra
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium tracking-tight text-[#2d3a2e] md:text-4xl lg:text-5xl text-balance">
              Uma experiencia que vai alem do comum
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#2d3a2e]/70 md:text-lg">
              No Recanto Aconchego, cada momento e uma oportunidade de reconexao. 
              O som do rio, o frescor da mata e a companhia de quem voce ama 
              transformam dias simples em memorias eternas.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#2d3a2e]/60">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a6741]" />
                <span>Natureza preservada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a6741]" />
                <span>Silencio e paz</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#4a6741]" />
                <span>Espaco para todos</span>
              </div>
            </div>
          </div>

          {/* Video container */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#2d3a2e]/10 md:aspect-[3/4]">
              {/* Video or thumbnail */}
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                poster="/assets/recanto/banner.jpg"
              >
                <source src="/assets/recanto/video-recanto.mp4" type="video/mp4" />
              </video>

              {/* Poster fallback */}
              {!isPlaying && (
                <Image
                  src="/assets/recanto/banner.jpg"
                  alt="Recanto Aconchego"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a2e]/50 via-transparent to-transparent" />

              {/* Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-[#2d3a2e] backdrop-blur-sm transition-all hover:bg-white"
                  aria-label={isPlaying ? "Pausar video" : "Reproduzir video"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Assistir</span>
                    </>
                  )}
                </button>

                {isPlaying && (
                  <button
                    onClick={toggleMute}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all hover:bg-white/30"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-white" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white" />
                    )}
                  </button>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute right-0 top-0 h-20 w-20 border-r-2 border-t-2 border-[#4a6741]/30" />
              <div className="absolute bottom-0 left-0 h-20 w-20 border-b-2 border-l-2 border-[#4a6741]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
