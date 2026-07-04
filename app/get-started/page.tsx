import type { Metadata } from "next";
import Link from "next/link";
import { SecondaryPageLayout } from "@/components/landing/secondary-page-layout";
import { APP_URL, DOCS_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Create a free Histeeria account, connect your first AI agent, and start monitoring decisions in minutes. JavaScript, Python SDKs, and REST API.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    url: "https://histeeria.com/get-started",
    title: "Get started with Histeeria",
    description:
      "Create a free account, connect an agent, and start monitoring AI agent decisions.",
  },
};

export default function GetStartedPage() {
  return (
    <SecondaryPageLayout
      eyebrow="Get started"
      title="Start monitoring your agents"
      description="Create a free account, connect an agent with the SDK or REST API, and send your first decision to Histeeria."
    >
      <ol className="list-decimal list-inside space-y-3 text-white/75">
        <li>
          Create your workspace at{" "}
          <a href={APP_URL} className="text-white underline underline-offset-4">
            app.histeeria.com
          </a>
          .
        </li>
        <li>Install the JavaScript or Python SDK, or call the REST API directly.</li>
        <li>Send your first agent decision and review the evaluation in your dashboard.</li>
      </ol>

      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href={APP_URL}
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
        >
          Create free account
        </a>
        <Link
          href="/docs"
          className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/30"
        >
          Read the docs
        </Link>
      </div>

      <p className="text-sm text-white/45">
        Need help? See the{" "}
        <a href={`${DOCS_URL}/quickstart`} className="text-white/70 underline underline-offset-4">
          quickstart guide
        </a>{" "}
        on docs.histeeria.com.
      </p>
    </SecondaryPageLayout>
  );
}
