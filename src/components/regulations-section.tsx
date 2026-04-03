import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Scale,
  Ruler,
  FileCheck,
  Users,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const regulations = [
  {
    icon: Ruler,
    title: "Achter- en zijtuin",
    description:
      "Maximaal 2 meter hoog zonder vergunning. Dit geldt voor hekwerken en schuttingen op de zij- en achterperceelgrens.",
    highlight: "Max. 2 meter",
  },
  {
    icon: Scale,
    title: "Voortuin",
    description:
      "Maximaal 1 meter hoog zonder vergunning. Hogere hekwerken in de voortuin vereisen altijd een omgevingsvergunning.",
    highlight: "Max. 1 meter",
  },
  {
    icon: FileCheck,
    title: "Boven 2 meter",
    description:
      "Hekwerken hoger dan 2 meter vereisen altijd een omgevingsvergunning. Vraag deze aan via het Omgevingsloket.",
    highlight: "Vergunning vereist",
  },
  {
    icon: Users,
    title: "Burenrecht",
    description:
      "Op grond van het Burgerlijk Wetboek kunnen buren verplicht worden bij te dragen aan een gezamenlijke erfafscheiding tot 2 meter.",
    highlight: "Gedeelde kosten",
  },
  {
    icon: AlertTriangle,
    title: "Perceelgrens",
    description:
      "Je mag een hekwerk op de kadastrale grens plaatsen. Tip: plaats het 5-10 cm binnen je eigen perceel om discussies te voorkomen.",
    highlight: "5-10 cm marge",
  },
  {
    icon: Lightbulb,
    title: "Gemeentelijke regels",
    description:
      "Sinds 1 januari 2024 kunnen gemeenten afwijken van standaard hoogtes. Controleer altijd de regels bij jouw gemeente.",
    highlight: "Check je gemeente",
  },
];

export function RegulationsSection() {
  return (
    <section
      id="regelgeving"
      className="scroll-mt-20 bg-gradient-to-b from-background to-muted/30 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Regelgeving
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Regels en vergunningen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Wat mag er wel en niet? Een overzicht van de Nederlandse regelgeving
            rondom hekwerken en schuttingen.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regulations.map((reg) => (
            <Card key={reg.title} className="transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <reg.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{reg.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className="mt-1 text-[10px] text-primary border-primary/30"
                    >
                      {reg.highlight}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
