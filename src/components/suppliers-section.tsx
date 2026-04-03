import Image from "next/image";
import { suppliers } from "@/lib/fence-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Star,
  Truck,
  Wrench,
  ExternalLink,
} from "lucide-react";

export function SuppliersSection() {
  const sorted = [...suppliers].sort((a, b) => b.rating - a.rating);

  return (
    <section id="leveranciers" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Leveranciers
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Betrouwbare hekwerk leveranciers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Onafhankelijk overzicht van de beste hekwerk leveranciers in
            Nederland, gesorteerd op klantwaardering.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((supplier, index) => (
            <Card
              key={supplier.name}
              className={`transition-all hover:shadow-md ${
                index === 0 ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={supplier.logo}
                      alt={`${supplier.name} logo`}
                      width={60}
                      height={20}
                      className="h-auto w-[60px]"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base">{supplier.name}</CardTitle>
                      {index === 0 && (
                        <Badge className="text-[10px] shrink-0">Hoogst beoordeeld</Badge>
                      )}
                    </div>
                    <CardDescription className="text-xs mt-1">
                      {supplier.specialty}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-sm font-bold text-primary">
                      {supplier.rating}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({supplier.reviewCount.toLocaleString("nl-NL")} reviews)
                  </span>
                </div>

                <div className="flex gap-2">
                  <Badge
                    variant={
                      supplier.priceLevel === "Budget"
                        ? "default"
                        : supplier.priceLevel === "Midden"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-[10px]"
                  >
                    {supplier.priceLevel} segment
                  </Badge>
                </div>

                <div className="flex gap-3 text-xs text-muted-foreground">
                  {supplier.delivery && (
                    <span className="flex items-center gap-1">
                      <Truck className="h-3 w-3 text-primary" /> Bezorging
                    </span>
                  )}
                  {supplier.installation && (
                    <span className="flex items-center gap-1">
                      <Wrench className="h-3 w-3 text-primary" /> Montage
                    </span>
                  )}
                </div>

                <a
                  href={`https://${supplier.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  {supplier.website}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
