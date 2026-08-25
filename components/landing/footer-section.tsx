"use client";

import { socialLinks } from "@/components/landing/social-icons";

const footerLinks = {
  Site: [
    { name: "Platform", href: "/platform" },
    { name: "Memory Systems", href: "/memory-systems" },
    { name: "Docs", href: "https://docs.histeeria.com", external: true },
    { name: "Changelog", href: "/changelog" },
    { name: "Blog", href: "/blog" },
  ],
  Product: [
    { name: "Monitoring", href: "#features" },
    { name: "Evaluations", href: "#how-it-works" },
    { name: "Alerts", href: "#features" },
    { name: "Credential ledger", href: "#" },
  ],
  Platform: [
    { name: "API Reference", href: "https://docs.histeeria.com", external: true },
    { name: "Webhooks", href: "https://docs.histeeria.com", external: true },
    { name: "Security", href: "#security" },
    { name: "Use cases", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Research", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Contact", href: "mailto:legal@histeeria.com" },
  ]

};

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-20 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <a href="/" className="inline-flex items-center gap-3 group mb-8">
                <img
                  src="/assets/logo-dark.png"
                  alt="Histeeria"
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-display text-2xl tracking-tight text-white leading-none">
                    Histeeria
                  </span>
                  <span className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/60 leading-none">
                    Infrastructure of Machine Judgment
                  </span>
                </div>
              </a>



              <p className="text-sm text-white/45 leading-relaxed max-w-md mb-8">
                Monitor, evaluate, alert, and improve agents before they fail in front of users.
                Built for teams who need judgment they can trust.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Histeeria on ${link.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-all duration-300 hover:border-[#8f9cff]/35 hover:bg-[#8f9cff]/10 hover:text-white"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35 mb-5">
                    {title}
                  </h3>
                  <ul className="space-y-3.5">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          target={"external" in link && link.external ? "_blank" : undefined}
                          rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                          className="text-sm text-white/50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                        >
                          {link.name}
                          {"badge" in link && link.badge && (
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/15 text-white/70">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-7 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p className="text-[12px] font-normal tracking-[0.14em] text-white/50">
            © 2026 Histeeria Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] font-normal tracking-[0.12em] text-white/50">

            <a href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white/60 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
