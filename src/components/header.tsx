"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Fence } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const navigation = [
  { name: "Vergelijker", href: "#vergelijker" },
  { name: "Hekwerk Types", href: "#types" },
  { name: "Configurator", href: "#configurator" },
  { name: "Leveranciers", href: "#leveranciers" },
  { name: "Regelgeving", href: "#regelgeving" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Fence className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight tracking-tight text-foreground">
              Hekwerk
            </span>
            <span className="text-xs font-medium leading-tight text-primary">
              Vergelijken
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="#configurator"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Gratis Configurator
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-md p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t md:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#configurator"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
                onClick={() => setMobileOpen(false)}
              >
                Gratis Configurator
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
