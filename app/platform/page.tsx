import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Platform — Monitor, Evaluate & Improve AI Agents",
  description:
    "Explore the Histeeria platform: judgment monitoring, an eight-dimension evaluation engine, agent profiles, alerts and webhooks, analytics, SDKs for JavaScript and Python, a REST API, and integrations for OpenAI, Anthropic, LangChain, and more.",
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    type: "website",
    url: "https://histeeria.com/platform",
    title: "Histeeria Platform — Monitor, Evaluate & Improve AI Agents",
    description:
      "Judgment monitoring, an eight-dimension evaluation engine, agent profiles, alerts, analytics, SDKs, and integrations for production AI agents.",
  },
};

const platformBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://histeeria.com" },
    { "@type": "ListItem", position: 2, name: "Platform", item: "https://histeeria.com/platform" },
  ],
};

const platformFeatures = [
  {
    name: "Judgment Monitoring",
    description:
      "Watch agent decisions as they happen. See what the agent received, what it returned, where it hesitated, and whether the action stayed inside your rules.",
    points: ["Live decision stream", "Reasoning and output review", "Policy and tool-call context"],
  },
  {
    name: "Evaluation Engine",
    description:
      "Score agent behavior across eight judgment dimensions, then turn failures into clear evidence instead of vague pass or fail labels.",
    points: ["Eight scoring dimensions", "Evidence-backed failures", "Model and heuristic review"],
  },
  {
    name: "Agent Profiles",
    description:
      "Create a public or private record for each agent. Show its role, domain, trust boundaries, latest scores, and the work it is safe to perform.",
    points: ["Public judgment pages", "Owner and agent identity", "Trust boundary notes"],
  },
  {
    name: "Alerts & Webhooks",
    description:
      "Set thresholds for score drops, unsafe behavior, and repeated failures. Send alerts to your team or pipe incidents into your own systems.",
    points: ["Score threshold alerts", "Slack and webhook delivery", "Incident history"],
  },
  {
    name: "Analytics Dashboard",
    description:
      "Track how your agents improve over time. Compare decisions, incidents, scores, and domains from a single operational view.",
    points: ["Trends and daily scores", "Incident breakdowns", "Reports for review"],
  },
];

const sdkOptions = [
  {
    name: "JavaScript / TypeScript",
    description: "Connect web apps, workers, and agent runtimes with typed events and clean request payloads.",
    code: `await histeeria.observe({
  agentId: "support-agent",
  input,
  output,
  metadata: { task: "refund-review" }
});`,
  },
  {
    name: "Python",
    description: "Send observations from scripts, services, notebooks, and backend agent pipelines.",
    code: `histeeria.observe(
  agent_id="research-agent",
  input=user_request,
  output=agent_response,
  metadata={"domain": "research"}
)`,
  },
  {
    name: "REST API",
    description: "Use a simple HTTP endpoint when you need full control over your runtime or language.",
    code: `POST /v1/ingest
Authorization: Bearer hst_...
Content-Type: application/json`,
  },
];

const integrations = [
  "OpenAI",
  "Anthropic",
  "LangChain",
  "LlamaIndex",
  "CrewAI",
  "AutoGen",
  "Custom agents",
  "30+ more",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/60">
      <span className="h-px w-10 bg-white/25" />
      <span>{children}</span>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <JsonLd id="schema-platform-breadcrumb" data={platformBreadcrumb} />
      <Navigation />

      <section className="relative min-h-screen overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png"
            alt=""
            aria-hidden="true"
            className="absolute right-[-12%] top-20 h-[74vh] w-[78vw] object-contain object-right opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0.88)_34%,rgba(0,0,0,0.34)_72%,black_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,transparent_45%,black_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:18vw_18vw] opacity-35" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1400px] flex-col justify-center px-6 pb-24 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Platform</SectionLabel>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(4rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.06em] text-white">
              See how your agents judge.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/78">
              Histeeria gives every production agent a place to be observed, tested, corrected,
              and explained. Not after a public failure. While it is still possible to improve.
            </p>
          </div>

          <div className="mt-16 grid max-w-4xl grid-cols-1 gap-3 md:grid-cols-3">
            {["Monitor decisions", "Score judgment", "Improve behavior"].map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.035] px-5 py-4 backdrop-blur">
                <p className="text-lg font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>What the platform covers</SectionLabel>
              <h2 className="mt-7 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-[112px]">
                Everything around the decision.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-white/72 lg:col-span-5">
              Histeeria is not a chat log with charts. It is a working record of how an agent
              behaves, where it breaks, and what changed after you fixed it.
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-6">
            {platformFeatures.map((feature, index) => (
              <article
                key={feature.name}
                className={`group border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.045] ${
                  index === 0 ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-3"
                }`}
              >
                <p className="text-sm text-white/45">0{index + 1}</p>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
                  {feature.name}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/68">
                  {feature.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {feature.points.map((point) => (
                    <span
                      key={point}
                      className="border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-white/70"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-0 h-full w-[58vw] object-cover object-center opacity-75"
            style={{ transform: "scaleX(-1)" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,black_0%,black_38%,rgba(0,0,0,0.55)_72%,black_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <SectionLabel>Histeeria SDK</SectionLabel>
            <h2 className="mt-7 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Add monitoring where your agent runs.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-white/74">
              Send each important decision to Histeeria with the language or runtime you already
              use. Keep your agent stack. Add judgment review around it.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {sdkOptions.map((option) => (
              <article key={option.name} className="border border-white/10 bg-black/70 p-6 backdrop-blur">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">{option.name}</h3>
                <p className="mt-3 min-h-20 text-base leading-relaxed text-white/65">
                  {option.description}
                </p>
                <pre className="mt-7 overflow-x-auto border border-white/10 bg-white/[0.035] p-4 text-sm leading-relaxed text-white/80">
                  <code>{option.code}</code>
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionLabel>Integrations</SectionLabel>
              <h2 className="mt-7 font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl lg:text-[104px]">
                Bring the agents you already have.
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/72">
                Histeeria works around your agent layer. Connect model providers, frameworks,
                and custom systems without rebuilding the way your team ships agents.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {integrations.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-28 items-center justify-center border border-white/10 bg-white/[0.03] px-5 text-center text-lg font-medium text-white transition-colors hover:border-[#8f9cff]/40 hover:bg-[#8f9cff]/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="relative border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(143,156,255,0.18),transparent_34%)]" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h2 className="font-display text-5xl leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
                  Start with one agent. Build a record of trust.
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-lg leading-relaxed text-white/72">
                  Connect an agent, send a decision, and see the first evaluation inside your
                  Histeeria workspace.
                </p>
                <a
                  href="https://app.histeeria.com"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
