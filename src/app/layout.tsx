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
  title: "Chalé Aconchego e Chalé Araucária | Hospedagem em Descanso - SC",
  description:
    "Dois chalés românticos em meio à natureza em Descanso - SC: o Chalé Aconchego e o Chalé Araucária, com banheira de hidromassagem entre araucárias, no Recanto Aconchego.",
  keywords: [
    "chalé",
    "aconchego",
    "araucária",
    "hidromassagem",
    "descanso",
    "santa catarina",
    "hospedagem",
    "casais",
    "romântico",
    "natureza",
  ],
  openGraph: {
    title: "Chalé Aconchego e Chalé Araucária | Hospedagem em Descanso - SC",
    description:
      "Dois chalés românticos em meio à natureza em Descanso - SC. Escolha entre o Chalé Aconchego e o Chalé Araucária.",
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
