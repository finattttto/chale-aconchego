"use client";

import { useState, useRef, useCallback } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    // Wait for state update and video render
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  }, []);

  return (
    <section id="video" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
            Descubra
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary-foreground md:text-5xl text-balance">
            Viva essa experiencia
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Assista e sinta o que e estar no Chale Aconchego.
          </p>
        </div>

        {/* Video container */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-sm">
          <div className="relative aspect-video w-full bg-primary/80">
            {!isPlaying ? (
              <>
                {/* Thumbnail - using existing image as placeholder */}
                <Image
                  src="/assets/frente-sol.jpg"
                  alt="Thumbnail do video do Chale Aconchego"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Play button */}
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center transition-transform hover:scale-105"
                  aria-label="Reproduzir video"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary-foreground/50 bg-primary-foreground/10 backdrop-blur-md transition-all hover:bg-primary-foreground/20 md:h-24 md:w-24">
                    <Play className="ml-1 h-8 w-8 text-primary-foreground md:h-10 md:w-10" />
                  </div>
                </button>
              </>
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="none"
              >
                {/* Substituir com o video real do chale */}
                <source src="/assets/video-chale.mp4" type="video/mp4" />
                Seu navegador nao suporta video.
              </video>
            )}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center text-sm text-primary-foreground/50">
          Adicione o video do chale em{" "}
          <code className="rounded bg-primary-foreground/10 px-1.5 py-0.5 text-xs text-primary-foreground/70">
            public/assets/video-chale.mp4
          </code>
        </p>
      </div>
    </section>
  );
}
