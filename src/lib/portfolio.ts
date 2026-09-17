export type PortfolioStatus =
  | "Active"
  | "In Development"
  | "Pilot"
  | "Market Validation"
  | "Strategic Concept";

export type PortfolioType = "venture" | "operating-business";

export interface PortfolioItem {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  type: PortfolioType;
  status: PortfolioStatus;
  location: string;
  summary: string;
  opportunity: string;
  solution: string;
  detail?: string; // extra descriptive paragraph (capabilities, categories, etc.)
  metric?: string;
}

export const STATUS_CONFIG: Record<
  PortfolioStatus,
  { bg: string; text: string; dot: string }
> = {
  Active: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  "In Development": { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
  Pilot: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  "Market Validation": { bg: "bg-purple-50", text: "text-purple-700", dot: "bg-purple-500" },
  "Strategic Concept": { bg: "bg-gray-100", text: "text-gray-600", dot: "bg-gray-400" },
};

// Layer 1 — E-Markets Africa Ventures (technology-enabled)
// Layer 2 — Operating Businesses (CRIM, TAYARM)
// Per the blueprint: never invent revenue, users, funding, or status beyond
// what's documented. Status language below follows the blueprint's own
// non-committal categories (Strategic Concept / In Development / etc.)
// rather than fabricated numbers.

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "dare-sms-race",
    name: "DARE SMS Race",
    tagline: "Gaming & Digital Entertainment",
    category: "Gaming & Digital Entertainment",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "A proprietary SMS-based interactive gaming concept developed around timing, telecommunications infrastructure and digital participation.",
    opportunity:
      "Mobile-network gaming remains largely untapped across markets where feature phones and basic SMS access still outnumber smartphone data plans.",
    solution:
      "DARE SMS Race is built around real-time SMS interaction, timing-based mechanics and telecom-native participation, rather than requiring smartphone data or app downloads.",
  },
  {
    slug: "kashie",
    name: "Kashie",
    tagline: "Gaming & Digital Entertainment",
    category: "Gaming & Digital Entertainment",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "A proprietary card-game concept combining familiar card-game dynamics with a distinct gameplay system.",
    opportunity:
      "Digital card games have global reach, but few originate from or are purpose-built for African players and distribution channels.",
    solution:
      "Kashie introduces a distinctive card-game experience built around strategic decision-making, probability and player interaction. Full gameplay mechanics are treated as proprietary IP and are not disclosed publicly.",
  },
  {
    slug: "candexcrow",
    name: "CANDEXCROW",
    tagline: "FinTech / Remittance / Escrow",
    category: "FinTech",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "A digital marketplace concept designed to facilitate trusted diaspora transactions through structured payment and escrow mechanisms.",
    opportunity:
      "Diaspora-to-home-market transactions frequently lack a trusted intermediary, creating friction and risk on both sides of cross-border payments.",
    solution:
      "CANDEXCROW is designed around structured escrow and payment mechanisms that give both parties in a diaspora transaction a verifiable, trusted process.",
  },
  {
    slug: "sharaloge",
    name: "Sharaloge",
    tagline: "African E-Commerce / Cultural Commerce",
    category: "African E-Commerce",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "The global marketplace for authentic African products — connecting African producers with diaspora and international consumers.",
    opportunity:
      "African producers create exceptional indigenous products, but many remain difficult for international buyers to discover, trust and purchase directly.",
    solution:
      "Sharaloge is an Africa-focused marketplace connecting African producers with diaspora and international consumers seeking authentic African products, with a long-term vision of an African export-enablement ecosystem spanning production, aggregation, quality, logistics, payments and distribution.",
    detail:
      "Product categories: shea butter, beads, African art, Ankara, Kente, Aso-ofi, indigenous jewellery, Afrocentric foods, African black soaps, and other traditional and culturally distinctive products.",
  },
  {
    slug: "hair-arcade",
    name: "Hair Arcade",
    tagline: "BeautyTech",
    category: "BeautyTech",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "A digital operating platform designed to modernize salon management, customer engagement and business operations.",
    opportunity:
      "The beauty and salon industry across African markets is largely informal, with limited digital tooling for scheduling, payments or customer retention.",
    solution:
      "Hair Arcade provides a single operating platform for salons and beauty businesses covering appointments, payments and brand-building.",
  },
  {
    slug: "realtex",
    name: "Realtex",
    tagline: "PropTech / Construction",
    category: "PropTech",
    type: "venture",
    status: "Strategic Concept",
    location: "Regional",
    summary:
      "A digital marketplace and operating ecosystem designed to connect participants across real estate and building-material markets.",
    opportunity:
      "Real estate and construction-material markets across the region remain fragmented, with limited price transparency or verified transactional infrastructure.",
    solution:
      "Realtex connects buyers, sellers and suppliers across real estate and building materials within one digital ecosystem.",
  },
  {
    slug: "hedybles",
    name: "Hedybles",
    tagline: "AgriTech",
    category: "AgriTech",
    type: "venture",
    status: "Strategic Concept",
    location: "Regional",
    summary:
      "A farm-to-market digital platform connecting agricultural production, distribution and consumers.",
    opportunity:
      "Agricultural value chains often lose value between production and market due to fragmented distribution and limited market access for producers.",
    solution:
      "Hedybles links agricultural production directly to distribution and consumer demand through a single digital platform.",
  },
  {
    slug: "drivers-com",
    name: "Drivers.com",
    tagline: "Mobility",
    category: "Mobility",
    type: "venture",
    status: "Strategic Concept",
    location: "Regional",
    summary:
      "A mobility platform focused on connecting commuters and organisations with professional drivers — not another taxi-hailing application.",
    opportunity:
      "Organisations and commuters needing reliable, professional drivers currently rely on informal or unverified networks.",
    solution:
      "Drivers.com connects commuters and organisations directly with professional drivers, distinct from ride-hailing models built around casual driver-partners.",
  },
  {
    slug: "everyprintings",
    name: "EveryPrintings",
    tagline: "PrintTech",
    category: "PrintTech",
    type: "venture",
    status: "In Development",
    location: "Nigeria",
    summary:
      "A digital platform designed to transform the fragmented printing industry through technology, online ordering, production coordination and marketplace capabilities.",
    opportunity:
      "The commercial printing supply chain — printers, paper and ink suppliers, plate makers and logistics — operates with almost no shared digital infrastructure for job tracking or sourcing.",
    solution:
      "EveryPrintings digitizes ordering, production coordination and marketplace sourcing across the printing supply chain, informed directly by decades of hands-on experience operating within the printing and manufacturing industries.",
  },
  {
    slug: "industry-os",
    name: "Industry OS",
    tagline: "Industry Digital Operating Systems",
    category: "Vertical SaaS",
    type: "venture",
    status: "Strategic Concept",
    location: "Pan-Africa",
    summary:
      "Digital operating systems designed to help fragmented industries organize their workflows, transactions, participants and information.",
    opportunity:
      "Many fragmented African industries share the same underlying problem: no shared system of record for workflows, transactions or participants.",
    solution:
      "Industry OS is a repeatable, vertical-SaaS approach to giving fragmented industries a shared digital operating layer, extending the same model proven in printing (EveryPrintings) to other sectors.",
  },
  {
    slug: "crim-resources",
    name: "CRIM Resources",
    tagline: "Commercial Printing · Branding · Industrial Printing Technology",
    category: "Manufacturing / Printing",
    type: "operating-business",
    status: "Active",
    location: "Nigeria · Ghana · Kenya · Gabon · São Tomé & Príncipe",
    summary:
      "A vertically integrated commercial printing, branding and industrial printing technology business serving clients across Africa.",
    opportunity:
      "African businesses need reliable commercial printing, branding and access to industrial printing equipment, technical support and production consulting.",
    solution:
      "CRIM Resources operates across commercial printing, corporate branding, offset and digital printing, large-format printing, finishing, and printing equipment importation, installation and technical support.",
    detail:
      "Installation footprint: Nigeria, Ghana, Kenya, Gabon, and São Tomé & Príncipe.",
  },
  {
    slug: "tayarm-resources",
    name: "TAYARM Resources",
    tagline: "Industrial Hardware · Printing Machinery · Spare Parts",
    category: "Manufacturing / Industrial",
    type: "operating-business",
    status: "Active",
    location: "Nigeria",
    summary:
      "An industrial equipment, consumables and spare-parts business serving the printing and manufacturing ecosystem.",
    opportunity:
      "Printing and manufacturing operators across the region need reliable access to machine parts, consumables and technical sourcing support.",
    solution:
      "TAYARM Resources supplies printing-machine spare parts, consumables, industrial hardware, machine components, imports, distribution and technical sourcing.",
    detail:
      "Strategic development: future expansion into paper importation and, potentially, paper manufacturing is a growth direction under consideration — not a current operation.",
  },
];

export const VENTURES = PORTFOLIO.filter((p) => p.type === "venture");
export const OPERATING_BUSINESSES = PORTFOLIO.filter(
  (p) => p.type === "operating-business"
);

export const ALL_STATUSES: PortfolioStatus[] = [
  "Active",
  "In Development",
  "Pilot",
  "Market Validation",
  "Strategic Concept",
];

export const SECTORS = [
  { name: "Manufacturing", icon: "circle-dot" },
  { name: "Printing", icon: "square" },
  { name: "FinTech", icon: "diamond" },
  { name: "AgriTech", icon: "target" },
  { name: "Mobility", icon: "orbit" },
  { name: "BeautyTech", icon: "sparkle" },
  { name: "PropTech", icon: "triangle" },
  { name: "Gaming & IP", icon: "gem" },
];

export const SERVICE_PILLARS = [
  {
    number: "01",
    title: "Venture Building",
    summary:
      "We transform promising ideas and identified market opportunities into structured, commercially viable ventures.",
    services: [
      "Opportunity assessment",
      "Business model development",
      "Venture design",
      "Product strategy",
      "Market validation",
      "Commercialization",
      "Growth strategy",
    ],
  },
  {
    number: "02",
    title: "Digital Transformation",
    summary:
      "We help businesses and fragmented industries move from inefficient traditional processes to digitally enabled operating models.",
    services: [
      "Digital strategy",
      "Process digitization",
      "Cloud adoption",
      "Data and analytics",
      "Automation",
      "Digital marketplaces",
      "Technology-enabled operations",
    ],
  },
  {
    number: "03",
    title: "Business Optimization",
    summary:
      "We examine how organisations operate, identify inefficiencies and redesign processes, structures and operating models for improved performance.",
    services: [
      "Operational assessment",
      "Process improvement",
      "Cost optimization",
      "Workflow redesign",
      "Customer experience",
      "Performance management",
      "Technology enablement",
    ],
  },
  {
    number: "04",
    title: "Strategy & Commercialization",
    summary:
      "We help businesses translate ideas, products and investments into commercially sustainable ventures.",
    services: [
      "Corporate strategy",
      "Go-to-market strategy",
      "Market-entry strategy",
      "Revenue models",
      "Pricing",
      "Partnerships",
      "Commercial planning",
    ],
  },
  {
    number: "05",
    title: "Technology & Product Development",
    summary:
      "Technology is an execution capability within our broader business transformation model — not the whole of what we do.",
    services: [
      "Product strategy",
      "Digital platforms",
      "Mobile applications",
      "Cloud architecture",
      "Data platforms",
      "AI-enabled solutions",
      "Marketplace development",
      "Product management",
    ],
  },
  {
    number: "06",
    title: "Strategic Advisory",
    summary:
      "We provide strategic advisory support to businesses, entrepreneurs, investors and institutions navigating growth, transformation and market complexity.",
    services: [],
  },
];

export const APPROACH_STEPS = [
  { number: "01", title: "Identify", body: "Market problem" },
  { number: "02", title: "Validate", body: "Customer / market validation" },
  { number: "03", title: "Design", body: "Business model" },
  { number: "04", title: "Build", body: "Technology + operations" },
  { number: "05", title: "Pilot", body: "Real-world testing" },
  { number: "06", title: "Commercialize", body: "Revenue generation" },
  { number: "07", title: "Optimize", body: "Performance improvement" },
  { number: "08", title: "Scale", body: "Capital + partnerships + expansion" },
];

export const AUDIENCES = [
  {
    label: "Investors & Capital Partners",
    body: "Who we are, what we've built, the portfolio, what's proprietary, the market opportunity, venture stage, leadership, and available investment opportunities.",
  },
  {
    label: "Corporate Clients",
    body: "Business transformation, digital transformation, market development, technology strategy, business optimization, product development, commercialization, strategic partnerships.",
  },
  {
    label: "Government & Development Institutions",
    body: "Our ability to work at the intersection of business, technology, infrastructure, markets and policy.",
  },
  {
    label: "Talent & Partners",
    body: "Engineers, developers, product managers, consultants, business analysts, investors, advisors, strategic partners, entrepreneurs.",
  },
];
