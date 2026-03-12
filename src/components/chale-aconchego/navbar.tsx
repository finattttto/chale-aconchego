"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiências", href: "#experiencias" },
  { label: "Video", href: "#video" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Recanto Aconchego", href: "/recanto-aconchego" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          menuOpen
            ? "bg-background"
            : scrolled
              ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
              : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Ir para o inicio">
            <Image
              src="/assets/logo-chale.png"
              alt="Logo Chalé Aconchego"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span
              className={`font-serif text-lg font-semibold tracking-tight transition-colors duration-500 ${
                menuOpen || scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Chalé Aconchego
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-sm tracking-wide transition-colors duration-300 hover:opacity-70 ${
                    scrolled
                      ? "text-foreground"
                      : "text-primary-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20"
              }`}
            >
              Reserve Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-2 rotate-45 bg-foreground"
                    : scrolled
                    ? "bg-foreground"
                    : "bg-primary-foreground"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : scrolled
                    ? "bg-foreground"
                    : "bg-primary-foreground"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-2 -rotate-45 bg-foreground"
                    : scrolled
                    ? "bg-foreground"
                    : "bg-primary-foreground"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu - separate from header, uses fixed positioning with solid background */}
      <div
        className={`fixed inset-0 z-[55] bg-background transition-all duration-500 lg:hidden ${
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
              className="font-serif text-2xl text-foreground transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reserve Agora
          </a>
        </div>
      </div>
    </>
  );
}
