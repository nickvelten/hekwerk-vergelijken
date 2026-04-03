"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react";

const stats = [
  { value: "9", label: "Hekwerk types" },
  { value: "8+", label: "Leveranciers" },
  { value: "100%", label: "Onafhankelijk" },
  { value: "Gratis", label: "Configurator" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,var(--primary)/0.08,transparent)]" />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 px-3 py-1.5 text-xs font-medium"
          >
            <Star className="h-3 w-3 fill-primary text-primary" />
            De #1 hekwerk vergelijker van Nederland
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Vind het{" "}
            <span className="text-primary">perfecte hekwerk</span>{" "}
            voor jouw tuin
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Vergelijk 9 hekwerk types en 8+ leveranciers op prijs, kwaliteit en
            uitstraling. Gebruik onze gratis configurator en bespaar tot 40%.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#configurator"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto gap-2"
              )}
            >
              Start Configurator
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#vergelijker"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "w-full sm:w-auto gap-2"
              )}
            >
              <Shield className="h-4 w-4" />
              Vergelijk Hekwerken
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Onafhankelijk advies
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Geen verplichtingen
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Direct resultaat
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border bg-card p-4 text-center shadow-sm"
            >
              <span className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
