import type { Metadata } from "next";
import { SecondaryPageLayout } from "@/components/landing/secondary-page-layout";
import { DOCS_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Histeeria documentation for monitoring and evaluating AI agents. SDK guides, API reference, platform overview, and integration examples.",
  alternates: { canonical: "/docs" },
  openGraph: {
    url: "https://histeeria.com/docs",
    title: "Histeeria documentation",
    description:
      "SDK guides, API reference, and platform docs for monitoring and evaluating AI agents.",
  },
};

const docSections = [
  {
    title: "Quickstart",
    href: `${DOCS_URL}/quickstart`,
    description: "Connect your first agent and send a decision in a few minutes.",
  },
  {
    title: "Platform",
    href: `${DOCS_URL}/platform/overview`,
    description: "Monitoring, evaluations, alerts, profiles, and analytics.",
  },
  {
    title: "SDK",
    href: `${DOCS_URL}/sdk/overview`,
    description: "JavaScript and Python SDK installation and usage.",
  },
  {
    title: "API reference",
    href: `${DOCS_URL}/api/overview`,
    description: "REST endpoints, authentication, and request examples.",
  },
];

export default function DocsPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Docs"
      title="Documentation"
      description="Guides and references for monitoring, evaluating, and improving AI agents with Histeeria."
    >
      <div className="grid gap-4">
        {docSections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h2 className="text-lg font-semibold text-white mb-2">{section.title}</h2>
            <p className="text-sm text-white/55">{section.description}</p>
          </a>
        ))}
      </div>

      <p className="text-sm text-white/45">
        Full documentation lives at{" "}
        <a href={DOCS_URL} className="text-white/70 underline underline-offset-4">
          docs.histeeria.com
        </a>
        .
      </p>
    </SecondaryPageLayout>
  );
}
