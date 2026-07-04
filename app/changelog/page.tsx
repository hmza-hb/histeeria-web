import type { Metadata } from "next";
import { SecondaryPageLayout } from "@/components/landing/secondary-page-layout";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Product updates, new features, and fixes for the Histeeria platform, SDKs, and API.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    url: "https://histeeria.com/changelog",
    title: "Histeeria changelog",
    description: "Latest product updates for Histeeria.",
  },
};

const entries = [
  {
    date: "June 2026",
    title: "Google sign-in and onboarding",
    body: "Added Google OAuth, workspace slug validation, and a redesigned onboarding flow in the web app.",
  },
  {
    date: "June 2026",
    title: "Documentation site",
    body: "Published docs.histeeria.com with platform guides, SDK references, and API documentation.",
  },
  {
    date: "June 2026",
    title: "Platform pages and SEO",
    body: "Updated histeeria.com with platform overview, docs hub, get started, changelog, and blog pages.",
  },
];

export default function ChangelogPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Changelog"
      title="Product updates"
      description="New features, improvements, and fixes shipped to Histeeria."
    >
      <div className="space-y-8">
        {entries.map((entry) => (
          <article key={entry.title} className="border-b border-white/10 pb-8 last:border-b-0">
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-white/35 mb-2">
              {entry.date}
            </p>
            <h2 className="text-xl font-semibold text-white mb-2">{entry.title}</h2>
            <p className="text-white/60">{entry.body}</p>
          </article>
        ))}
      </div>
    </SecondaryPageLayout>
  );
}
