import { IBM_Plex_Mono, Inter } from "next/font/google";

import { BackToTop } from "./components/BackToTop";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { Toaster } from "./components/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "Home | CG Dev",
    template: "%s | CG Dev",
  },
  description:
    "Desenvolvedor frontend, ajudando empresas a se tornarem Digitais e Modernas. Site para aumentar sua presença digital ? Aplicação para melhorar o fluxo interno de sua empresa ? Soluções para tornar sua empresa mais tecnológica ? Conheça meu trabalho agora mesmo!",
  icons: [
    {
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
