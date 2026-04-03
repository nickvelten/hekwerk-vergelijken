"use client";

import { useState, useMemo } from "react";
import { fenceTypes, formatPrice, type FenceType } from "@/lib/fence-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle2,
  ArrowRight,
  Euro,
  Ruler,
  Shield,
  Eye,
  Sparkles,
  Wrench,
} from "lucide-react";

type Priority = "prijs" | "privacy" | "veiligheid" | "uitstraling" | "onderhoud";

interface ConfigState {
  length: number[];
  height: string;
  priority: Priority;
  needsPrivacy: boolean;
  needsSecurity: boolean;
  maxBudget: number[];
}

function scoreFence(fence: FenceType, config: ConfigState): number {
  let score = 0;
  const weights: Record<Priority, () => number> = {
    prijs: () => {
      const avgPrice = (fence.priceMin + fence.priceMax) / 2;
      return Math.max(0, 100 - avgPrice);
    },
    privacy: () => fence.privacyScore * 20,
    veiligheid: () => fence.securityScore * 20,
    uitstraling: () => fence.aestheticsScore * 20,
    onderhoud: () => fence.maintenanceScore * 20,
  };

  score += weights[config.priority]() * 2;
  score += fence.durabilityScore * 10;

  if (config.needsPrivacy) score += fence.privacyScore * 15;
  if (config.needsSecurity) score += fence.securityScore * 15;

  const avgPrice = (fence.priceMin + fence.priceMax) / 2;
  if (avgPrice <= config.maxBudget[0]) {
    score += 30;
  } else if (fence.priceMin <= config.maxBudget[0]) {
    score += 15;
  }

  const heightNum = parseInt(config.height);
  if (fence.heights.includes(heightNum)) {
    score += 20;
  }

  return score;
}

export function Configurator() {
  const [config, setConfig] = useState<ConfigState>({
    length: [15],
    height: "180",
    priority: "prijs",
    needsPrivacy: true,
    needsSecurity: false,
    maxBudget: [100],
  });

  const [showResults, setShowResults] = useState(false);

  const recommendations = useMemo(() => {
    return [...fenceTypes]
      .map((fence) => ({
        fence,
        score: scoreFence(fence, config),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [config]);

  const totalEstimate = (fence: FenceType) => {
    const avgPrice = (fence.priceMin + fence.priceMax) / 2;
    const material = avgPrice * config.length[0];
    const installation = config.length[0] * 37.5;
    return { material: Math.round(material), installation: Math.round(installation), total: Math.round(material + installation) };
  };

  return (
    <section
      id="configurator"
      className="scroll-mt-20 bg-gradient-to-b from-muted/30 to-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Gratis Configurator
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welk hekwerk past bij jou?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Beantwoord een paar vragen en ontvang direct een persoonlijk advies
            met prijsindicatie.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Jouw situatie</CardTitle>
              <CardDescription>
                Pas de instellingen aan voor een advies op maat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-primary" />
                    Lengte hekwerk: {config.length[0]} meter
                  </Label>
                  <Slider
                    value={config.length}
                    onValueChange={(v) =>
                      setConfig((prev) => ({ ...prev, length: v as number[] }))
                    }
                    min={1}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1m</span>
                    <span>100m</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Euro className="h-4 w-4 text-primary" />
                    Max. budget per meter: &euro;{config.maxBudget[0]}
                  </Label>
                  <Slider
                    value={config.maxBudget}
                    onValueChange={(v) =>
                      setConfig((prev) => ({ ...prev, maxBudget: v as number[] }))
                    }
                    min={5}
                    max={500}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>&euro;5/m</span>
                    <span>&euro;500/m</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Gewenste hoogte</Label>
                  <Select
                    value={config.height}
                    onValueChange={(v) =>
                      setConfig((prev) => ({ ...prev, height: v ?? prev.height }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="80">80 cm</SelectItem>
                      <SelectItem value="100">100 cm (max voortuin)</SelectItem>
                      <SelectItem value="120">120 cm</SelectItem>
                      <SelectItem value="150">150 cm</SelectItem>
                      <SelectItem value="180">
                        180 cm (standaard privacy)
                      </SelectItem>
                      <SelectItem value="200">
                        200 cm (max zonder vergunning)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Wat is het belangrijkst?</Label>
                  <Select
                    value={config.priority}
                    onValueChange={(v) => {
                      if (v) setConfig((prev) => ({
                        ...prev,
                        priority: v as Priority,
                      }));
                    }}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prijs">
                        <span className="flex items-center gap-2">
                          <Euro className="h-3.5 w-3.5" /> Laagste prijs
                        </span>
                      </SelectItem>
                      <SelectItem value="privacy">
                        <span className="flex items-center gap-2">
                          <Eye className="h-3.5 w-3.5" /> Maximale privacy
                        </span>
                      </SelectItem>
                      <SelectItem value="veiligheid">
                        <span className="flex items-center gap-2">
                          <Shield className="h-3.5 w-3.5" /> Beste beveiliging
                        </span>
                      </SelectItem>
                      <SelectItem value="uitstraling">
                        <span className="flex items-center gap-2">
                          <Sparkles className="h-3.5 w-3.5" /> Mooiste
                          uitstraling
                        </span>
                      </SelectItem>
                      <SelectItem value="onderhoud">
                        <span className="flex items-center gap-2">
                          <Wrench className="h-3.5 w-3.5" /> Minste onderhoud
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={config.needsPrivacy}
                    onCheckedChange={(v) =>
                      setConfig((prev) => ({ ...prev, needsPrivacy: v }))
                    }
                  />
                  <Label className="text-sm">Privacy is belangrijk</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={config.needsSecurity}
                    onCheckedChange={(v) =>
                      setConfig((prev) => ({ ...prev, needsSecurity: v }))
                    }
                  />
                  <Label className="text-sm">Beveiliging is belangrijk</Label>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full gap-2"
                onClick={() => setShowResults(true)}
              >
                Toon mijn advies
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {showResults && (
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Onze top 3 aanbevelingen voor jou
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {recommendations.map(({ fence, score }, index) => {
                  const estimate = totalEstimate(fence);
                  return (
                    <Card
                      key={fence.id}
                      className={`relative overflow-hidden transition-all ${
                        index === 0
                          ? "border-primary shadow-lg ring-1 ring-primary/20"
                          : ""
                      }`}
                    >
                      {index === 0 && (
                        <div className="bg-primary px-3 py-1.5 text-center text-xs font-semibold text-primary-foreground">
                          Beste match
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base">
                            {fence.name}
                          </CardTitle>
                          <Badge
                            variant={index === 0 ? "default" : "secondary"}
                            className="text-[10px]"
                          >
                            #{index + 1}
                          </Badge>
                        </div>
                        <CardDescription className="text-xs">
                          {fence.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-1.5 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Prijs per meter
                            </span>
                            <span className="font-medium">
                              {formatPrice(fence.priceMin, fence.priceMax)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Materiaal ({config.length[0]}m)
                            </span>
                            <span className="font-medium">
                              &euro;{estimate.material.toLocaleString("nl-NL")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              + Plaatsing (indicatie)
                            </span>
                            <span className="font-medium">
                              &euro;
                              {estimate.installation.toLocaleString("nl-NL")}
                            </span>
                          </div>
                          <div className="flex justify-between border-t pt-1.5 font-semibold">
                            <span>Totaal indicatie</span>
                            <span className="text-primary">
                              &euro;{estimate.total.toLocaleString("nl-NL")}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1 text-xs">
                          {[
                            ["Privacy", fence.privacyScore],
                            ["Veiligheid", fence.securityScore],
                            ["Onderhoud", fence.maintenanceScore],
                            ["Uitstraling", fence.aestheticsScore],
                          ].map(([label, val]) => (
                            <div
                              key={label as string}
                              className="flex items-center gap-2"
                            >
                              <span className="w-20 text-muted-foreground">
                                {label as string}
                              </span>
                              <div className="flex-1">
                                <div className="h-1.5 rounded-full bg-muted">
                                  <div
                                    className="h-1.5 rounded-full bg-primary transition-all"
                                    style={{
                                      width: `${((val as number) / 5) * 100}%`,
                                    }}
                                  />
                                </div>
                              </div>
                              <span className="w-4 text-right font-mono text-muted-foreground">
                                {val as number}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {fence.bestFor.map((use) => (
                            <Badge
                              key={use}
                              variant="outline"
                              className="text-[10px] font-normal"
                            >
                              {use}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-primary" />
                          Levensduur: {fence.lifespan}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                * Prijzen zijn indicaties op basis van gemiddelde marktprijzen.
                Exacte prijzen hangen af van leverancier, specificaties en
                locatie.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
