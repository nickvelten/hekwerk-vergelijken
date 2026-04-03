export interface FenceType {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  priceMin: number;
  priceMax: number;
  priceUnit: string;
  privacyScore: number;
  securityScore: number;
  durabilityScore: number;
  maintenanceScore: number;
  aestheticsScore: number;
  windResistanceScore: number;
  materials: string[];
  heights: number[];
  colors: string[];
  lifespan: string;
  installationDifficulty: "Makkelijk" | "Gemiddeld" | "Moeilijk";
  bestFor: string[];
  image: string;
  popular: boolean;
}

export const fenceTypes: FenceType[] = [
  {
    id: "dubbelstaafmat",
    name: "Dubbelstaafmat Hekwerk",
    slug: "dubbelstaafmat",
    description:
      "Het populairste hekwerk van Nederland. Dubbelstaafmat hekwerk biedt een uitstekende balans tussen prijs, veiligheid en uitstraling. De dubbele horizontale staven zorgen voor extra stevigheid. Verkrijgbaar in 6mm en 8mm draaddikte, waarbij de 8mm variant extra inbraakwerend is.",
    shortDescription: "Populairste keuze. Sterk, betaalbaar en veelzijdig.",
    priceMin: 30,
    priceMax: 112,
    priceUnit: "per meter",
    privacyScore: 2,
    securityScore: 4,
    durabilityScore: 5,
    maintenanceScore: 5,
    aestheticsScore: 3,
    windResistanceScore: 5,
    materials: ["Verzinkt staal", "Gepoedercoat staal"],
    heights: [80, 100, 120, 150, 180, 200],
    colors: ["Antraciet", "Groen (RAL 6005)", "Zwart", "Grijs"],
    lifespan: "25-40 jaar",
    installationDifficulty: "Gemiddeld",
    bestFor: ["Tuinafscheiding", "Bedrijfsterreinen", "Sportterreinen"],
    image: "/images/fences/dubbelstaafmat.svg",
    popular: true,
  },
  {
    id: "enkelstaafmat",
    name: "Enkelstaafmat Hekwerk (3D)",
    slug: "enkelstaafmat",
    description:
      "Een betaalbaar en functioneel hekwerk met 3D-buiging voor extra stevigheid. Enkelstaafmat is de budgetvriendelijke variant van dubbelstaafmat en biedt goede bescherming voor een scherpe prijs.",
    shortDescription: "Budgetvriendelijk met 3D-buiging voor stevigheid.",
    priceMin: 20,
    priceMax: 60,
    priceUnit: "per meter",
    privacyScore: 1,
    securityScore: 3,
    durabilityScore: 4,
    maintenanceScore: 5,
    aestheticsScore: 2,
    windResistanceScore: 5,
    materials: ["Verzinkt staal", "Gepoedercoat staal"],
    heights: [80, 100, 120, 150, 180, 200],
    colors: ["Antraciet", "Groen (RAL 6005)", "Zwart"],
    lifespan: "20-30 jaar",
    installationDifficulty: "Makkelijk",
    bestFor: ["Tuinafscheiding", "Percelen", "Dierenweides"],
    image: "/images/fences/enkelstaafmat.svg",
    popular: false,
  },
  {
    id: "sierhekwerk",
    name: "Sierhekwerk",
    slug: "sierhekwerk",
    description:
      "Voor wie het uiterlijk van het hekwerk net zo belangrijk vindt als de functionaliteit. Sierhekwerk is er in tientallen designs, van klassiek tot modern, en wordt op maat gemaakt. Ideaal voor voortuinen en representatieve panden.",
    shortDescription: "Stijlvol op maat. Voor een luxe uitstraling.",
    priceMin: 160,
    priceMax: 780,
    priceUnit: "per meter",
    privacyScore: 2,
    securityScore: 4,
    durabilityScore: 5,
    maintenanceScore: 4,
    aestheticsScore: 5,
    windResistanceScore: 4,
    materials: ["Staal", "Aluminium", "Smeedijzer"],
    heights: [80, 100, 120, 150, 180],
    colors: ["Zwart", "Antraciet", "RAL-kleuren op maat"],
    lifespan: "30-50+ jaar",
    installationDifficulty: "Moeilijk",
    bestFor: ["Voortuinen", "Villa's", "Monumentale panden"],
    image: "/images/fences/sierhekwerk.svg",
    popular: true,
  },
  {
    id: "hout-beton",
    name: "Hout-Beton Schutting",
    slug: "hout-beton-schutting",
    description:
      "De klassieker onder de Nederlandse tuinafscheidingen. Betonpalen met houten vulling bieden maximale privacy en een natuurlijke uitstraling. De betonpalen zorgen voor een langere levensduur dan volledig houten schuttingen.",
    shortDescription: "Klassiek Nederlands. Maximale privacy, natuurlijke look.",
    priceMin: 60,
    priceMax: 150,
    priceUnit: "per meter",
    privacyScore: 5,
    securityScore: 3,
    durabilityScore: 4,
    maintenanceScore: 3,
    aestheticsScore: 4,
    windResistanceScore: 3,
    materials: ["Beton", "Grenen", "Douglas", "Hardhout"],
    heights: [150, 180, 200],
    colors: ["Naturel", "Bruin gebeitst", "Antraciet", "Grijs"],
    lifespan: "15-25 jaar",
    installationDifficulty: "Gemiddeld",
    bestFor: ["Tuinafscheiding", "Privacy", "Achtertuinen"],
    image: "/images/fences/hout-beton.svg",
    popular: true,
  },
  {
    id: "composiet",
    name: "Composiet Schutting",
    slug: "composiet-schutting",
    description:
      "De onderhoudsvrije premium keuze. Composiet schuttingen combineren de warme uitstraling van hout met de duurzaamheid van kunststof. Geen schilderen, beitsen of behandelen nodig.",
    shortDescription: "Premium en onderhoudsvrij. Houtlook zonder gedoe.",
    priceMin: 100,
    priceMax: 200,
    priceUnit: "per meter",
    privacyScore: 5,
    securityScore: 3,
    durabilityScore: 5,
    maintenanceScore: 5,
    aestheticsScore: 4,
    windResistanceScore: 3,
    materials: ["WPC (Wood Plastic Composite)"],
    heights: [150, 180, 200],
    colors: ["Antraciet", "Bruin", "Grijs", "Zwart", "Naturel"],
    lifespan: "25-35 jaar",
    installationDifficulty: "Gemiddeld",
    bestFor: ["Moderne tuinen", "Onderhoudsvrij", "Design"],
    image: "/images/fences/composiet.svg",
    popular: true,
  },
  {
    id: "aluminium",
    name: "Aluminium Schutting",
    slug: "aluminium-schutting",
    description:
      "Het modernste alternatief voor houten schuttingen. Aluminium is licht, roest niet en is volledig onderhoudsvrij. Strak design dat perfect past bij moderne architectuur.",
    shortDescription: "Ultra-modern en 100% onderhoudsvrij.",
    priceMin: 120,
    priceMax: 250,
    priceUnit: "per meter",
    privacyScore: 5,
    securityScore: 3,
    durabilityScore: 5,
    maintenanceScore: 5,
    aestheticsScore: 5,
    windResistanceScore: 4,
    materials: ["Aluminium"],
    heights: [150, 180, 200],
    colors: ["Antraciet", "Zwart", "Wit", "RAL-kleuren op maat"],
    lifespan: "30-50+ jaar",
    installationDifficulty: "Gemiddeld",
    bestFor: ["Moderne tuinen", "Design", "Strakke architectuur"],
    image: "/images/fences/aluminium.svg",
    popular: false,
  },
  {
    id: "gaashekwerk",
    name: "Gaashekwerk",
    slug: "gaashekwerk",
    description:
      "De meest betaalbare optie voor het afschermen van grote oppervlaktes. Gaashekwerk (harmonicagaas) is snel te plaatsen en ideaal voor agrarisch gebruik, dierenweides en percelen.",
    shortDescription: "Voordeligste optie. Ideaal voor grote percelen.",
    priceMin: 3,
    priceMax: 25,
    priceUnit: "per meter",
    privacyScore: 1,
    securityScore: 2,
    durabilityScore: 3,
    maintenanceScore: 5,
    aestheticsScore: 1,
    windResistanceScore: 5,
    materials: ["Verzinkt staaldraad", "Geplastificeerd gaas"],
    heights: [80, 100, 120, 150, 180, 200],
    colors: ["Verzinkt (zilver)", "Groen"],
    lifespan: "15-20 jaar",
    installationDifficulty: "Makkelijk",
    bestFor: ["Agrarisch", "Dierenweides", "Grote percelen", "Budget"],
    image: "/images/fences/gaashekwerk.svg",
    popular: false,
  },
  {
    id: "spijlenhekwerk",
    name: "Spijlenhekwerk",
    slug: "spijlenhekwerk",
    description:
      "Elegant en veilig. Spijlenhekwerk combineert een strakke uitstraling met uitstekende beveiliging. De verticale spijlen zijn lastig te beklimmen en bieden een open, maar veilig gevoel.",
    shortDescription: "Strak en veilig. Moeilijk te beklimmen.",
    priceMin: 80,
    priceMax: 250,
    priceUnit: "per meter",
    privacyScore: 1,
    securityScore: 5,
    durabilityScore: 5,
    maintenanceScore: 5,
    aestheticsScore: 4,
    windResistanceScore: 5,
    materials: ["Staal", "Aluminium"],
    heights: [100, 120, 150, 180, 200, 250],
    colors: ["Zwart", "Antraciet", "Groen (RAL 6005)"],
    lifespan: "30-50 jaar",
    installationDifficulty: "Moeilijk",
    bestFor: ["Beveiliging", "Bedrijfsterreinen", "Voortuinen"],
    image: "/images/fences/spijlenhekwerk.svg",
    popular: false,
  },
  {
    id: "betonschutting",
    name: "Betonschutting",
    slug: "betonschutting",
    description:
      "De onverwoestbare keuze. Betonschuttingen gaan een leven lang mee, zijn volledig onderhoudsvrij en bieden maximale privacy en geluidsisolatie. Verkrijgbaar in diverse motieven zoals rotsmotief en houtmotief.",
    shortDescription: "Onverwoestbaar. Nul onderhoud, maximale privacy.",
    priceMin: 80,
    priceMax: 180,
    priceUnit: "per meter",
    privacyScore: 5,
    securityScore: 4,
    durabilityScore: 5,
    maintenanceScore: 5,
    aestheticsScore: 3,
    windResistanceScore: 5,
    materials: ["Beton"],
    heights: [150, 180, 200],
    colors: ["Grijs", "Antraciet", "Rotsmotief", "Houtmotief"],
    lifespan: "40-60+ jaar",
    installationDifficulty: "Moeilijk",
    bestFor: ["Maximale privacy", "Geluidswering", "Lange levensduur"],
    image: "/images/fences/betonschutting.svg",
    popular: false,
  },
];

export interface Supplier {
  name: string;
  website: string;
  logo: string;
  rating: number;
  reviewCount: number;
  specialty: string;
  priceLevel: "Budget" | "Midden" | "Premium";
  delivery: boolean;
  installation: boolean;
  fenceTypes: string[];
}

export const suppliers: Supplier[] = [
  {
    name: "Hekwerk Online",
    website: "hekwerkonline.nl",
    logo: "/images/suppliers/hekwerk-online.svg",
    rating: 9.0,
    reviewCount: 2650,
    specialty: "Grootste online hekwerk retailer",
    priceLevel: "Midden",
    delivery: true,
    installation: true,
    fenceTypes: [
      "dubbelstaafmat",
      "enkelstaafmat",
      "gaashekwerk",
      "hout-beton",
      "composiet",
    ],
  },
  {
    name: "Hekkenwereld",
    website: "hekkenwereld.nl",
    logo: "/images/suppliers/hekkenwereld.svg",
    rating: 9.3,
    reviewCount: 800,
    specialty: "Familiebedrijf, 35 jaar ervaring",
    priceLevel: "Midden",
    delivery: true,
    installation: true,
    fenceTypes: [
      "dubbelstaafmat",
      "gaashekwerk",
      "sierhekwerk",
      "spijlenhekwerk",
    ],
  },
  {
    name: "HB Hekwerk",
    website: "hbhekwerk.nl",
    logo: "/images/suppliers/hb-hekwerk.svg",
    rating: 8.7,
    reviewCount: 2400,
    specialty: "Grootste assortiment, eigen productie",
    priceLevel: "Midden",
    delivery: true,
    installation: true,
    fenceTypes: [
      "dubbelstaafmat",
      "enkelstaafmat",
      "gaashekwerk",
      "sierhekwerk",
      "spijlenhekwerk",
    ],
  },
  {
    name: "Hekwerk Direct",
    website: "hekwerkdirect.nl",
    logo: "/images/suppliers/hekwerk-direct.svg",
    rating: 8.5,
    reviewCount: 500,
    specialty: "Doe-het-zelf specialist, snelle levering",
    priceLevel: "Budget",
    delivery: true,
    installation: false,
    fenceTypes: ["dubbelstaafmat", "enkelstaafmat", "gaashekwerk"],
  },
  {
    name: "Schutting.nl",
    website: "schutting.nl",
    logo: "/images/suppliers/schutting-nl.svg",
    rating: 8.8,
    reviewCount: 650,
    specialty: "Specialist in houten en composiet schuttingen",
    priceLevel: "Midden",
    delivery: true,
    installation: true,
    fenceTypes: ["hout-beton", "composiet", "aluminium"],
  },
  {
    name: "De Wit Hekwerken",
    website: "dewithekwerk.nl",
    logo: "/images/suppliers/de-wit.svg",
    rating: 9.1,
    reviewCount: 350,
    specialty: "Premium sierhekwerk, eigen productie",
    priceLevel: "Premium",
    delivery: true,
    installation: true,
    fenceTypes: ["sierhekwerk", "spijlenhekwerk"],
  },
  {
    name: "Hekvoordeel",
    website: "hekvoordeel.nl",
    logo: "/images/suppliers/hekvoordeel.svg",
    rating: 8.4,
    reviewCount: 420,
    specialty: "Scherpe prijzen, eigen installatieteam",
    priceLevel: "Budget",
    delivery: true,
    installation: true,
    fenceTypes: [
      "dubbelstaafmat",
      "enkelstaafmat",
      "gaashekwerk",
      "sierhekwerk",
      "hout-beton",
    ],
  },
  {
    name: "ABC Hekwerk",
    website: "abchekwerk.nl",
    logo: "/images/suppliers/abc-hekwerk.svg",
    rating: 8.9,
    reviewCount: 300,
    specialty: "Professional, 17 locaties, beveiliging",
    priceLevel: "Premium",
    delivery: true,
    installation: true,
    fenceTypes: [
      "dubbelstaafmat",
      "gaashekwerk",
      "spijlenhekwerk",
      "sierhekwerk",
    ],
  },
];

export function getScoreLabel(score: number): string {
  if (score >= 5) return "Uitstekend";
  if (score >= 4) return "Goed";
  if (score >= 3) return "Gemiddeld";
  if (score >= 2) return "Matig";
  return "Beperkt";
}

export function formatPrice(min: number, max: number): string {
  return `\u20ac${min} - \u20ac${max}`;
}
