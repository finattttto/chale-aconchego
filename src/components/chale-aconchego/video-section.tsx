"use client";

import { useState, useRef, useCallback } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  return (
    <section id="video" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster="/assets/frente-sol.jpg"
      >
        <source src="/assets/video-chale.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Play button - centered */}
        <button
          onClick={handlePlay}
          className="group mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 md:h-32 md:w-32"
          aria-label={isPlaying ? "Pausar video" : "Reproduzir video"}
        >
          <Play
            className={`h-10 w-10 text-primary-foreground transition-all duration-300 md:h-12 md:w-12 ${
              isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100 ml-1"
            }`}
          />
          {isPlaying && (
            <div className="absolute flex gap-1">
              <span className="h-8 w-1 animate-pulse rounded-full bg-primary-foreground/80" />
              <span className="h-8 w-1 animate-pulse rounded-full bg-primary-foreground/80 [animation-delay:150ms]" />
            </div>
          )}
        </button>

        {/* Text content */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70">
            Descubra
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Viva essa experiencia
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70 md:text-base">
            Assista e sinta o que e estar no Chale Aconchego
          </p>
        </div>

        {/* Mute toggle - bottom right */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-primary-foreground/70" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary-foreground/70" />
          )}
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary-foreground/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
