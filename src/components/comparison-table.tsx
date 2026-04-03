"use client";

import { useState } from "react";
import { fenceTypes, formatPrice, getScoreLabel } from "@/lib/fence-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle } from "lucide-react";

function ScoreCell({ score }: { score: number }) {
  const colors = [
    "",
    "text-red-500",
    "text-orange-500",
    "text-yellow-600",
    "text-green-500",
    "text-green-600",
  ];
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < score ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
      <span className={`text-xs font-medium ${colors[score]}`}>
        {getScoreLabel(score)}
      </span>
    </div>
  );
}

export function ComparisonTable() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(["dubbelstaafmat", "hout-beton", "composiet", "sierhekwerk"])
  );

  const toggleFence = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selected = fenceTypes.filter((f) => selectedIds.has(f.id));

  return (
    <section id="vergelijker" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Vergelijker
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hekwerken naast elkaar vergelijken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Selecteer de hekwerk types die je wilt vergelijken en zie direct de
            verschillen.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {fenceTypes.map((fence) => (
            <button
              key={fence.id}
              type="button"
              onClick={() => toggleFence(fence.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selectedIds.has(fence.id)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {selectedIds.has(fence.id) ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              {fence.name.replace(" Hekwerk", "").replace(" Schutting", "")}
            </button>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[640px]">
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `200px repeat(${selected.length}, minmax(160px, 1fr))`,
                }}
              >
                {/* Header row */}
                <div />
                {selected.map((fence) => (
                  <Card key={fence.id} className="text-center p-3">
                    <p className="text-sm font-semibold">{fence.name}</p>
                    {fence.popular && (
                      <Badge className="mt-1 text-[10px]">Populair</Badge>
                    )}
                  </Card>
                ))}

                {/* Price row */}
                <div className="flex items-center text-sm font-medium text-muted-foreground">
                  Prijs per meter
                </div>
                {selected.map((fence) => (
                  <div
                    key={fence.id}
                    className="flex items-center justify-center rounded-lg bg-card p-3"
                  >
                    <span className="text-sm font-bold text-primary">
                      {formatPrice(fence.priceMin, fence.priceMax)}
                    </span>
                  </div>
                ))}

                {/* Score rows */}
                {(
                  [
                    ["Privacy", "privacyScore"],
                    ["Veiligheid", "securityScore"],
                    ["Duurzaamheid", "durabilityScore"],
                    ["Onderhoud", "maintenanceScore"],
                    ["Uitstraling", "aestheticsScore"],
                    ["Windbestendigheid", "windResistanceScore"],
                  ] as const
                ).map(([label, key]) => (
                  <>
                    <div
                      key={`label-${key}`}
                      className="flex items-center text-sm font-medium text-muted-foreground"
                    >
                      {label}
                    </div>
                    {selected.map((fence) => (
                      <div
                        key={`${fence.id}-${key}`}
                        className="flex items-center justify-center rounded-lg bg-card p-3"
                      >
                        <ScoreCell
                          score={fence[key as keyof typeof fence] as number}
                        />
                      </div>
                    ))}
                  </>
                ))}

                {/* Text rows */}
                <div className="flex items-center text-sm font-medium text-muted-foreground">
                  Levensduur
                </div>
                {selected.map((fence) => (
                  <div
                    key={fence.id}
                    className="flex items-center justify-center rounded-lg bg-card p-3 text-sm"
                  >
                    {fence.lifespan}
                  </div>
                ))}

                <div className="flex items-center text-sm font-medium text-muted-foreground">
                  Plaatsing
                </div>
                {selected.map((fence) => (
                  <div
                    key={fence.id}
                    className="flex items-center justify-center rounded-lg bg-card p-3 text-sm"
                  >
                    {fence.installationDifficulty}
                  </div>
                ))}

                <div className="flex items-center text-sm font-medium text-muted-foreground">
                  Beschikbare hoogtes
                </div>
                {selected.map((fence) => (
                  <div
                    key={fence.id}
                    className="flex items-center justify-center rounded-lg bg-card p-3 text-xs text-muted-foreground"
                  >
                    {fence.heights.map((h) => `${h}cm`).join(", ")}
                  </div>
                ))}

                <div className="flex items-center text-sm font-medium text-muted-foreground">
                  Materialen
                </div>
                {selected.map((fence) => (
                  <div
                    key={fence.id}
                    className="flex flex-wrap items-center justify-center gap-1 rounded-lg bg-card p-3"
                  >
                    {fence.materials.map((m) => (
                      <Badge
                        key={m}
                        variant="outline"
                        className="text-[10px] font-normal"
                      >
                        {m}
                      </Badge>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selected.length === 0 && (
          <Card className="mx-auto mt-10 max-w-md text-center">
            <CardContent className="py-12">
              <p className="text-muted-foreground">
                Selecteer minimaal &eacute;&eacute;n hekwerk type om te
                vergelijken
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
