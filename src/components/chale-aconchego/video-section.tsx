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
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Play button - centered */}
        <button
          onClick={handlePlay}
          className={`group mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-primary-foreground/50 hover:bg-primary-foreground/10 md:h-32 md:w-32 ${
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-label={isPlaying ? "Pausar video" : "Reproduzir video"}
        >
          <Play
            className="h-10 w-10 text-primary-foreground ml-1 md:h-12 md:w-12"
          />
        </button>

        {/* Clickable overlay to pause when playing */}
        {isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label="Pausar video"
          />
        )}

        {/* Text content */}
        <div
          className={`text-center transition-all duration-700 ${
            isPlaying ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70">
            Descubra
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Viva essa experiência
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70 md:text-base">
            Assista e sinta o que é estar no Chalé Aconchego
          </p>
        </div>

        {/* Mute toggle - bottom right */}
        <button
          onClick={toggleMute}
          className={`absolute bottom-8 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10 ${
            isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-primary-foreground/70" />
          ) : (
            <Volume2 className="h-5 w-5 text-primary-foreground/70" />
          )}
        </button>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary-foreground/30 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
