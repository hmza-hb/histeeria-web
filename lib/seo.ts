export const SITE_URL = "https://histeeria.com";
export const APP_URL = "https://app.histeeria.com";
export const DOCS_URL = "https://docs.histeeria.com";

export const SITE_NAME = "Histeeria";
export const LEGAL_NAME = "Histeeria Inc.";
export const TAGLINE = "The Reliability Layer for Production AI Agents";

export const SITE_DESCRIPTION =
  "Histeeria is the reliability layer for production AI agents. Monitor agent decisions in real time, evaluate judgment across eight dimensions, get alerts on mistakes, and improve agents before they fail in front of users.";

export const SHORT_DESCRIPTION =
  "Monitor, evaluate, alert, and improve your AI agents from one command center.";

export const KEYWORDS = [
  "Histeeria",
  "AI agent monitoring",
  "AI agent evaluation",
  "agent reliability platform",
  "AI agent observability",
  "LLM monitoring",
  "agent judgment",
  "hallucination detection",
  "AI agent alerts",
  "agent guardrails",
  "machine judgment",
  "production AI agents",
  "AI safety platform",
  "agent analytics",
  "agent profiles",
];

export const SOCIAL_LINKS = {
  github: "https://github.com/histeeria",
  linkedin: "https://linkedin.com/company/histeeria-imj",
  instagram: "https://instagram.com/histeeria.imj",
};

export const OG_IMAGE = "/assets/logo-light.png";
export const LOGO = `${SITE_URL}/assets/logo-dark.png`;

/**
 * Organization schema — primary signal for the Google Knowledge Graph.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  alternateName: "Histeeria Institute of Machine Judgment",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO,
    width: 512,
    height: 512,
  },
  image: LOGO,
  description: SITE_DESCRIPTION,
  email: "legal@histeeria.com",
  foundingDate: "2025",
  slogan: TAGLINE,
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram],
  knowsAbout: [
    "AI agent reliability",
    "AI agent evaluation",
    "AI agent monitoring",
    "Machine judgment",
    "LLM observability",
    "AI safety",
  ],
};

/**
 * WebSite schema — enables sitelinks search box and ties pages to the brand.
 */
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

/**
 * SoftwareApplication schema — describes the product itself to search + AI.
 */
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  name: SITE_NAME,
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "AI Agent Reliability Platform",
  operatingSystem: "Web",
  url: SITE_URL,
  downloadUrl: APP_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  featureList: [
    "Real-time judgment monitoring",
    "Evaluation engine across eight dimensions",
    "Public and private agent profiles",
    "Alerts and webhooks",
    "Analytics dashboard",
    "JavaScript, Python, and REST integrations",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Start free with one production agent.",
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
        text: "Histeeria is the reliability layer for production AI agents. It lets teams monitor agent decisions in real time, evaluate judgment across eight dimensions, receive alerts on mistakes, and improve agents before they fail in front of users.",
      },
    },
    {
      "@type": "Question",
      name: "What does Histeeria do for AI agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Histeeria monitors agent behavior, scores decision quality, surfaces incidents and hallucinations, sends alerts through Slack and webhooks, and provides analytics and public agent profiles so teams can trust and improve their agents.",
      },
    },
    {
      "@type": "Question",
      name: "Which agent frameworks does Histeeria support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Histeeria integrates with OpenAI, Anthropic, LangChain, LlamaIndex, CrewAI, AutoGen, and custom agents through JavaScript/TypeScript and Python SDKs and a REST API.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Histeeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Create a free account at app.histeeria.com, connect an agent with the SDK or REST API, and send your first decision to see it evaluated inside your Histeeria workspace.",
      },
    },
  ],
};
