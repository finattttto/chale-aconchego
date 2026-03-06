import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chalé Aconchego | Refúgio para casais em Descanso - SC",
  description:
    "Chalé exclusivo para casais em meio à natureza. Banheira de hidromassagem, fogueira, Wi-Fi e muito conforto na Linha Macaco Branco, Descanso - SC.",
  keywords: [
    "chalé",
    "aconchego",
    "descanso",
    "santa catarina",
    "hospedagem",
    "casais",
    "natureza",
    "romântico",
  ],
  openGraph: {
    title: "Chalé Aconchego | Refúgio para casais em Descanso - SC",
    description:
      "Chalé exclusivo para casais em meio à natureza. Banheira de hidromassagem, fogueira, Wi-Fi e muito conforto.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#3d3528",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
