"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function RecantoParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only update when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
          setScrollY(scrollProgress * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Parallax Image */}
      <div
        className="absolute inset-0 h-[120%] w-full"
        style={{
          transform: `translateY(${-scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      >
        <Image
          src="/assets/recanto/rio.jpg"
          alt="Vista do rio no Recanto Aconchego"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2e]/60 via-[#2d3a2e]/40 to-[#2d3a2e]/70" />

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
            Um refuigo natural para reconectar com a familia, os amigos e a natureza. 
            Momentos que ficam para sempre.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f5f2ed] to-transparent" />
    </section>
  );
}
