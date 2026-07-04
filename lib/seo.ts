export const SITE_URL = "https://histeeria.com";
export const APP_URL = "https://app.histeeria.com";
export const DOCS_URL = "https://docs.histeeria.com";

export const SITE_NAME = "Histeeria";
export const LEGAL_NAME = "Histeeria Inc.";
export const TAGLINE = "Monitor and evaluate AI agents";

export const SITE_DESCRIPTION =
  "Histeeria helps teams monitor AI agent decisions, run evaluations, send alerts, and review agent performance. JavaScript and Python SDKs plus a REST API.";

export const SHORT_DESCRIPTION =
  "Monitor AI agent decisions, run evaluations, and send alerts from one workspace.";

export const KEYWORDS = [
  "Histeeria",
  "histeeria.com",
  "AI agent monitoring",
  "AI agent evaluation",
  "agent observability",
  "LLM monitoring",
  "agent alerts",
  "agent analytics",
  "AI agent SDK",
  "agent API",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/histeeria",
  linkedin: "https://linkedin.com/company/histeeria-imj",
  instagram: "https://instagram.com/histeeria.imj",
};

/** Square brand mark for light backgrounds (Google, Open Graph, schema). */
export const LOGO_MARK = "/assets/logo-mark.png";
export const LOGO = `${SITE_URL}${LOGO_MARK}`;
export const OG_IMAGE = "/assets/og.png";

/** Primary site navigation — signals Google sitelinks. */
export const PRIMARY_NAV = [
  { name: "Platform", href: `${SITE_URL}/platform`, path: "/platform" },
  { name: "Docs", href: `${SITE_URL}/docs`, path: "/docs" },
  { name: "Get started", href: `${SITE_URL}/get-started`, path: "/get-started" },
  { name: "Changelog", href: `${SITE_URL}/changelog`, path: "/changelog" },
  { name: "Blog", href: `${SITE_URL}/blog`, path: "/blog" },
] as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO,
    width: 512,
    height: 512,
  },
  image: LOGO,
  description: SITE_DESCRIPTION,
  disambiguatingDescription:
    "Histeeria (histeeria.com) is a software company that builds tools to monitor and evaluate AI agents. It is not related to the medical term hysteria.",
  email: "legal@histeeria.com",
  foundingDate: "2025",
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
  knowsAbout: [
    "AI agent monitoring",
    "AI agent evaluation",
    "LLM observability",
    "Software development tools",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#sitenav`,
  name: "Histeeria site navigation",
  itemListElement: PRIMARY_NAV.map((item, index) => ({
    "@type": "SiteNavigationElement",
    position: index + 1,
    name: item.name,
    url: item.href,
  })),
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  downloadUrl: APP_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  featureList: [
    "Real-time agent decision monitoring",
    "Multi-dimension evaluation",
    "Public and private agent profiles",
    "Alerts and webhooks",
    "Analytics dashboard",
    "JavaScript, Python, and REST API integrations",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier with one production agent.",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Histeeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Histeeria is software for monitoring and evaluating AI agents. Teams use it to review agent decisions, run evaluations, send alerts, and track performance over time.",
      },
    },
    {
      "@type": "Question",
      name: "Is Histeeria the same as hysteria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Histeeria (histeeria.com) is a technology company. The name is spelled H-i-s-t-e-e-r-i-a and is not related to the medical term hysteria.",
      },
    },
    {
      "@type": "Question",
      name: "Which agent frameworks does Histeeria support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Histeeria integrates with OpenAI, Anthropic, LangChain, LlamaIndex, CrewAI, AutoGen, and custom agents through JavaScript, Python SDKs, and a REST API.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Histeeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a free account at app.histeeria.com, connect an agent with the SDK or REST API, and send your first decision to see it in your workspace.",
      },
    },
  ],
};
