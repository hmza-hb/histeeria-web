import Link from "next/link";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

type SecondaryPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function SecondaryPageLayout({
  eyebrow,
  title,
  description,
  children,
}: SecondaryPageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="relative pt-32 pb-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[920px] mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors mb-10"
          >
            Back to home
          </Link>

          <div className="mb-12 border-b border-white/10 pb-10">
            <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#8f9cff] mb-4">
              {eyebrow}
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.02] mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          <div className="space-y-8 text-white/70 leading-relaxed">{children}</div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
