import { Hero } from "@/components/hero";
import { ComparisonTable } from "@/components/comparison-table";
import { FenceTypesSection } from "@/components/fence-types-section";
import { Configurator } from "@/components/configurator";
import { SuppliersSection } from "@/components/suppliers-section";
import { RegulationsSection } from "@/components/regulations-section";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Hekwerk Vergelijken",
            url: "https://hekwerk-vergelijken.nl",
            description:
              "De #1 hekwerk vergelijker van Nederland. Vergelijk 9 hekwerk types en 8+ leveranciers.",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://hekwerk-vergelijken.nl/?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hoe hoog mag een hekwerk zijn zonder vergunning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In de achter- en zijtuin mag een hekwerk maximaal 2 meter hoog zijn zonder vergunning. In de voortuin is de maximale hoogte 1 meter. Boven de 2 meter is altijd een omgevingsvergunning vereist.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost een hekwerk per meter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De prijs van hekwerk varieert sterk per type: gaashekwerk vanaf \u20ac3/m, enkelstaafmat vanaf \u20ac20/m, dubbelstaafmat \u20ac30-112/m, hout-beton schutting \u20ac60-150/m, composiet \u20ac100-200/m, aluminium \u20ac120-250/m, en sierhekwerk \u20ac160-780/m. Reken daarnaast op \u20ac25-50/m voor plaatsing.",
                },
              },
              {
                "@type": "Question",
                name: "Welk hekwerk is het beste voor privacy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voor maximale privacy zijn dichte schuttingen het beste: hout-beton schuttingen, composiet schuttingen, aluminium schuttingen en betonschuttingen. Deze bieden volledige inkijkbescherming. Een hoogte van 180-200 cm wordt aanbevolen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is het meest onderhoudsvrije hekwerk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aluminium, composiet en betonschuttingen zijn het meest onderhoudsvrij. Ze hoeven niet geschilderd of gebeitst te worden en gaan 25-50+ jaar mee. Dubbelstaafmat hekwerk (verzinkt + gepoedercoat) is ook zeer onderhoudsarm.",
                },
              },
              {
                "@type": "Question",
                name: "Moet mijn buurman meebetalen aan een hekwerk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, op grond van het Burgerlijk Wetboek (burenrecht) kunnen buren verplicht worden bij te dragen aan een gezamenlijke erfafscheiding tot 2 meter hoogte. Het gaat dan om een redelijke, eenvoudige erfafscheiding.",
                },
              },
            ],
          }),
        }}
      />
      <Hero />
      <ComparisonTable />
      <FenceTypesSection />
      <Configurator />
      <SuppliersSection />
      <RegulationsSection />
    </>
  );
}
