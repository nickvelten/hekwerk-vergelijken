import { fenceTypes, formatPrice } from "@/lib/fence-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  Eye,
  Timer,
  Wrench,
  Sparkles,
  Wind,
} from "lucide-react";

function ScoreBar({ score, max = 5 }: { score: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-4 rounded-full ${
            i < score ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

const scoreIcons = {
  privacy: Eye,
  security: ShieldCheck,
  durability: Timer,
  maintenance: Wrench,
  aesthetics: Sparkles,
  windResistance: Wind,
};

export function FenceTypesSection() {
  return (
    <section id="types" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Hekwerk Types
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Alle hekwerk types op een rij
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Van budgetvriendelijk gaashekwerk tot luxe sierhekwerk. Ontdek welk
            type het beste bij jouw situatie past.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fenceTypes.map((fence) => (
            <Card
              key={fence.id}
              className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
            >
              {fence.popular && (
                <div className="absolute right-3 top-3 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    Populair
                  </Badge>
                </div>
              )}

              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 transition-colors group-hover:from-primary/10 group-hover:to-primary/15">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {formatPrice(fence.priceMin, fence.priceMax)}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {fence.priceUnit}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{fence.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {fence.shortDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(
                    [
                      ["privacy", "Privacy", fence.privacyScore],
                      ["security", "Veiligheid", fence.securityScore],
                      ["durability", "Duurzaamheid", fence.durabilityScore],
                      ["maintenance", "Onderhoud", fence.maintenanceScore],
                      ["aesthetics", "Uitstraling", fence.aestheticsScore],
                      [
                        "windResistance",
                        "Windbestendig",
                        fence.windResistanceScore,
                      ],
                    ] as const
                  ).map(([key, label, score]) => {
                    const Icon =
                      scoreIcons[key as keyof typeof scoreIcons];
                    return (
                      <div key={key} className="flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Icon className="h-3 w-3" />
                          {label}
                        </div>
                        <ScoreBar score={score} />
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-1 pt-2">
                  {fence.bestFor.slice(0, 3).map((use) => (
                    <Badge
                      key={use}
                      variant="outline"
                      className="text-[10px] font-normal"
                    >
                      {use}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-muted-foreground">
                  <span>Levensduur: {fence.lifespan}</span>
                  <span>Plaatsing: {fence.installationDifficulty}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
