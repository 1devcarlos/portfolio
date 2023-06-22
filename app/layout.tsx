import { IBM_Plex_Mono, Inter } from "next/font/google";

import Header from "./components/header";
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
  title: "Carlos Gomes",
  description:
    "Desenvolvedor de software ajudando empresas a se tornarem modernas e digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
