import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[820px] mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <div className="mb-12 border-b border-white/10 pb-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8f9cff] mb-4">
              Legal
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02] mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <p className="mt-6 text-xs font-mono uppercase tracking-[0.16em] text-white/35">
              Last updated: {lastUpdated}
            </p>
          </div>

          <article className="legal-content">{children}</article>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
