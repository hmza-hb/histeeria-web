import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { MemorySystemsContent } from "@/components/landing/memory-systems-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Memory Systems",
  description:
    "Explore Histeeria Memory Systems: the complete cognitive memory layer for intelligent machines. Built for AI agent networks, robotics, autonomous vehicles, and humanoid assistants to recall, associate, consolidate, and retain experiences over time.",
  alternates: {
    canonical: "/memory-systems",
  },
  openGraph: {
    type: "website",
    url: "https://histeeria.com/memory-systems",
    title: "Memory Systems | Histeeria",
    description:
      "Explore Histeeria Memory Systems: the complete cognitive memory layer for intelligent machines.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://histeeria.com" },
    { "@type": "ListItem", position: 2, name: "Memory Systems", item: "https://histeeria.com/memory-systems" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Histeeria Memory Systems",
  "operatingSystem": "All",
  "applicationCategory": "DeveloperApplication",
  "description": "A cognitive memory infrastructure for machines to perceive, learn, remember, reason, and act across time.",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  }
};

export default function MemorySystemsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <JsonLd id="schema-memory-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-memory-product" data={productSchema} />

      {/* Grid lines */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07]">
        {[...Array(10)].map((_, i) => (
          <div key={`h${i}`} className="absolute h-px bg-white w-full" style={{ top: `${10 * (i + 1)}%` }} />
        ))}
        {[...Array(14)].map((_, i) => (
          <div key={`v${i}`} className="absolute w-px bg-white h-full" style={{ left: `${7.14 * (i + 1)}%` }} />
        ))}
      </div>

      <Navigation />

      <main className="relative z-10">
        <MemorySystemsContent />
      </main>

      <FooterSection />
    </div>
  );
}
