import type { Metadata } from "next";
import { SecondaryPageLayout } from "@/components/landing/secondary-page-layout";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and updates from Histeeria on AI agent monitoring, evaluation, and operating agents in production.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "https://histeeria.com/blog",
    title: "Histeeria blog",
    description: "Articles on monitoring and evaluating AI agents.",
  },
};

export default function BlogPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Blog"
      title="Articles and updates"
      description="Notes from the Histeeria team on monitoring, evaluation, and running AI agents in production."
    >
      <p>
        We are preparing the first posts. In the meantime, read the{" "}
        <a href="/platform" className="text-white underline underline-offset-4">
          platform overview
        </a>{" "}
        or browse the{" "}
        <a href="/docs" className="text-white underline underline-offset-4">
          documentation
        </a>
        .
      </p>
    </SecondaryPageLayout>
  );
}
