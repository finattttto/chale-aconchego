"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RECANTO_WHATSAPP_LINK } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atividades", href: "#atividades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Video", href: "#video" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function RecantoNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f2ed]/95 backdrop-blur-md border-b border-[#d4cfc5] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/recanto-aconchego" className="flex items-center gap-3" aria-label="Ir para o inicio">
          <span
            className={`font-serif text-lg font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-[#2d3a2e]" : "text-white"
            }`}
          >
            Recanto Aconchego
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? "text-[#2d3a2e]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={RECANTO_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-[#2d3a2e] text-white hover:bg-[#3a4a3b]"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            }`}
          >
            Reserve Agora
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "translate-y-2 rotate-45 bg-[#2d3a2e]"
                  : scrolled
                  ? "bg-[#2d3a2e]"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-[#2d3a2e]"
                  : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-2 -rotate-45 bg-[#2d3a2e]"
                  : scrolled
                  ? "bg-[#2d3a2e]"
                  : "bg-white"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#f5f2ed] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-2xl text-[#2d3a2e] transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RECANTO_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-sm bg-[#2d3a2e] px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[#3a4a3b]"
          >
            Reserve Agora
          </a>
        </div>
      </div>
    </header>
  );
}
