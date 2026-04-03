import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hekwerk-vergelijken.nl"),
  title: {
    default: "Hekwerk Vergelijken | Vind het Beste Hekwerk voor Jouw Tuin",
    template: "%s | Hekwerk Vergelijken",
  },
  description:
    "Vergelijk hekwerken en schuttingen van de beste leveranciers in Nederland. Gebruik onze gratis configurator en vind het perfecte hekwerk voor jouw situatie. Bespaar tot 40% door slim te vergelijken.",
  keywords: [
    "hekwerk vergelijken",
    "hekwerk kopen",
    "schutting vergelijken",
    "tuinhekwerk",
    "dubbelstaafmat",
    "sierhekwerk",
    "hekwerk prijs",
    "hekwerk configurator",
    "beste hekwerk",
    "hekwerk nederland",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Hekwerk Vergelijken",
    title: "Hekwerk Vergelijken | De #1 Hekwerk Vergelijker van Nederland",
    description:
      "Vergelijk 8+ hekwerk types en 50+ leveranciers. Gratis configurator, eerlijke prijzen, onafhankelijk advies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hekwerk Vergelijken | Vind het Beste Hekwerk",
    description:
      "Vergelijk hekwerken en schuttingen. Gebruik onze gratis configurator.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
