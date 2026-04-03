import Link from "next/link";
import { Fence } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const fenceLinks = [
  { name: "Dubbelstaafmat Hekwerk", href: "#dubbelstaafmat" },
  { name: "Sierhekwerk", href: "#sierhekwerk" },
  { name: "Hout-Beton Schutting", href: "#hout-beton" },
  { name: "Composiet Schutting", href: "#composiet" },
  { name: "Aluminium Schutting", href: "#aluminium" },
  { name: "Gaashekwerk", href: "#gaashekwerk" },
  { name: "Spijlenhekwerk", href: "#spijlenhekwerk" },
  { name: "Betonschutting", href: "#betonschutting" },
];

const infoLinks = [
  { name: "Hekwerk Vergelijker", href: "#vergelijker" },
  { name: "Configurator", href: "#configurator" },
  { name: "Leveranciers", href: "#leveranciers" },
  { name: "Regelgeving & Vergunningen", href: "#regelgeving" },
  { name: "Plaatsing Tips", href: "#tips" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Fence className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight tracking-tight">
                  Hekwerk
                </span>
                <span className="text-xs font-medium leading-tight text-primary">
                  Vergelijken
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              De onafhankelijke vergelijker voor hekwerken en schuttingen in
              Nederland. Vind het perfecte hekwerk voor jouw situatie.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Hekwerk Types
            </h3>
            <ul className="mt-3 space-y-2">
              {fenceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Handige Links
            </h3>
            <ul className="mt-3 space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Regelgeving NL
            </h3>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Achtertuin:</strong> Max. 2
                meter hoog zonder vergunning
              </p>
              <p>
                <strong className="text-foreground">Voortuin:</strong> Max. 1
                meter hoog zonder vergunning
              </p>
              <p>
                <strong className="text-foreground">Tip:</strong> Plaats je
                hekwerk 5-10 cm binnen je eigen perceelgrens
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hekwerk Vergelijken. Alle rechten
            voorbehouden.
          </p>
          <p className="text-xs text-muted-foreground">
            Onafhankelijk vergelijkingsplatform &mdash; Niet verbonden aan
            leveranciers
          </p>
        </div>
      </div>
    </footer>
  );
}
