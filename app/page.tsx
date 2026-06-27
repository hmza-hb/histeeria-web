import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { IntegrationsSection } from "@/components/landing/integrations-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Histeeria — The Reliability Layer for Production AI Agents",
  description:
    "Monitor, evaluate, alert, and improve your AI agents from one command center. Catch mistakes, measure judgment across eight dimensions, and build agents you can trust.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd id="schema-faq" data={faqSchema} />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
