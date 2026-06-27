"use client";

import { useEffect, useState, useRef } from "react";

const logos: Record<string, React.ReactNode> = {
  OpenAI: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.372 2.02-1.163a.076.076 0 0 1 .071 0l4.83 2.786a4.49 4.49 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.678zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  Anthropic: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 10.959L8.453 7.687 6.205 14.48H10.7z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Jira: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.005 1.005 0 0 0-1.001-1.005zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24.017 12.49V1.005A1.005 1.005 0 0 0 23.013 0z"/>
    </svg>
  ),
  "AWS S3": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.87 0l.36.21v23.18l-.36.21-9.56-4.54V4.54L11.87 0zm.79.21l9.56 4.54v14.5l-9.56 4.54V.21zM5.87 16.26l5.21 2.48v-4.96l-5.21-1.02v3.5zm0-4.2l5.21 1.02V8.12L5.87 10.6v1.46zm0-2.22l5.21-2.48V3.4l-5.21 2.48v3.96zm7 6.42l5.21-2.48V10.6l-5.21 1.02v4.64zm0-5.42l5.21-1.02V5.88l-5.21 2.48v2.48z"/>
    </svg>
  ),
  "Google Drive": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M6.28 0l5.76 9.97H0L6.28 0zm11.44 0L24 9.97h-5.73L12.52 0h5.2zm1.16 10.82L24 19.94 17.72 24l-3.21-5.56 4.37-7.62zm-9.96.12L12 13.5l3.08-2.56H8.92zm-4.13 0L0 19.94l6.28 4.06 6.72-11.64-3.21-2.44zM12 14.06l-5.52 9.57h11.04L12 14.06z"/>
    </svg>
  ),
  Salesforce: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M9.765 3.782a4.31 4.31 0 0 1 3.104-1.314 4.35 4.35 0 0 1 3.91 2.43 3.304 3.304 0 0 1 1.38-.301 3.33 3.33 0 0 1 3.327 3.33c0 .27-.033.53-.092.78a2.978 2.978 0 0 1-.485 5.88H6.58a3.644 3.644 0 0 1-.573-7.236 4.32 4.32 0 0 1 3.758-3.57z"/>
    </svg>
  ),
  HubSpot: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M22.175 11.282a4.258 4.258 0 0 0-3.651-4.205V5.047a1.558 1.558 0 0 0 .898-1.406V3.6a1.561 1.561 0 0 0-3.123 0v.041c0 .626.372 1.166.898 1.406V7.08a4.239 4.239 0 0 0-2.027.78L8.916 4.28a1.856 1.856 0 0 0 .065-.47A1.855 1.855 0 1 0 7.125 5.66l5.92 3.51a4.267 4.267 0 0 0 .44 5.51l-1.75 1.75a1.404 1.404 0 0 0-.407-.062 1.42 1.42 0 1 0 1.42 1.42 1.404 1.404 0 0 0-.062-.407l1.73-1.73a4.27 4.27 0 1 0 7.759-4.369zm-4.27 2.764a1.84 1.84 0 1 1 0-3.68 1.84 1.84 0 0 1 0 3.68z"/>
    </svg>
  ),
  Zapier: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M14.974 10.61a5.978 5.978 0 0 1-.551 2.507H24v-5.01H14.422a5.978 5.978 0 0 1 .552 2.503zm-5.95 0a5.978 5.978 0 0 1 .552-2.503H0v5.01h9.576a5.978 5.978 0 0 1-.551-2.507zM12 16.56a5.966 5.966 0 0 1-2.505-.55v9.564h5.01V16.01A5.966 5.966 0 0 1 12 16.56zm0-11.9a5.97 5.97 0 0 1 2.505.55V5.646a.555.555 0 0 0 0-.075V-.43h-5.01v5.643A5.97 5.97 0 0 1 12 4.66z"/>
    </svg>
  ),
  Snowflake: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.1 1.049a1.1 1.1 0 0 0-2.2 0v3.388L8.746 2.283a1.1 1.1 0 0 0-1.556 1.556L9.957 6.6H6.57a1.1 1.1 0 0 0 0 2.2h3.387l-2.764 2.764a1.1 1.1 0 0 0 1.555 1.555L11.9 9.966v2.434a1.1 1.1 0 0 0 2.2 0V9.966l2.752 2.753a1.1 1.1 0 0 0 1.556-1.555L15.644 8.8H19.03a1.1 1.1 0 1 0 0-2.2h-3.386l2.766-2.761a1.1 1.1 0 0 0-1.556-1.556L14.1 4.437V1.049zM1.049 10.9a1.1 1.1 0 0 0 0 2.2h3.388l-2.154 2.154a1.1 1.1 0 0 0 1.556 1.556L6.6 14.043v3.387a1.1 1.1 0 0 0 2.2 0V14.043l2.764 2.767a1.1 1.1 0 0 0 1.555-1.556L9.966 12.1h2.434a1.1 1.1 0 0 0 0-2.2H9.966l2.753-2.752a1.1 1.1 0 0 0-1.555-1.556L8.8 8.356V4.97a1.1 1.1 0 0 0-2.2 0v3.386L4.439 5.59A1.1 1.1 0 0 0 2.883 7.146L5.437 9.9H1.049zm11.851 2.2h2.434l-2.767 2.764a1.1 1.1 0 0 0 1.556 1.556L16.87 14.662v2.768a1.1 1.1 0 0 0 2.2 0v-3.387l2.154 2.154a1.1 1.1 0 0 0 1.556-1.556L20.626 12.4h2.325a1.1 1.1 0 1 0 0-2.2H20.62l2.117-2.754a1.1 1.1 0 0 0-1.556-1.556L18.429 8.642V5.256a1.1 1.1 0 1 0-2.2 0V8.35l-2.764-2.766a1.1 1.1 0 0 0-1.556 1.556L14.662 9.9H12.9a1.1 1.1 0 1 0 0 2.2h-.001zm1.1 1.1v2.434l-2.753 2.752a1.1 1.1 0 0 0 1.555 1.556L15.556 18.2v3.386a1.1 1.1 0 0 0 2.2 0V18.2l2.154 2.742a1.1 1.1 0 0 0 1.556-1.556l-2.154-2.154h3.387a1.1 1.1 0 1 0 0-2.2H14z"/>
    </svg>
  ),
  Stripe: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
    </svg>
  ),
};

const integrations = [
  { name: "OpenAI", category: "LLM" },
  { name: "Anthropic", category: "LLM" },
  { name: "Slack", category: "Comms" },
  { name: "GitHub", category: "Code" },
  { name: "Jira", category: "PM" },
  { name: "AWS S3", category: "Storage" },
  { name: "Google Drive", category: "Docs" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Zapier", category: "Auto" },
  { name: "Snowflake", category: "Data" },
  { name: "Stripe", category: "Payments" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden">

      {/* Header — centré verticalement sur l'image */}
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Integrations
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Connect
          <br />
          <span className="text-muted-foreground">everything.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Bring traces, outputs, feedback, and tool activity from your agent workflows into Histeeria. We support monitoring across your entire stack.
        </p>
      </div>

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Integration grid — remonte sur l'image avec spacing mobile approprié */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                hoveredIndex === index
                  ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 30 + 300}ms`,
              }}
              onMouseEnter={(e) => {
                setHoveredIndex(index);
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos(null);
              }}
            >
              {/* Cursor-following halo */}
              {hoveredIndex === index && mousePos && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  }}
                />
              )}
              {/* Category tag */}
              <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 transition-colors ${
                hoveredIndex === index
                  ? "bg-foreground text-background"
                  : "bg-foreground/10 text-muted-foreground"
              }`}>
                {integration.category}
              </span>

              {/* Logo */}
              <div className={`w-10 h-10 mb-6 flex items-center justify-center transition-colors ${
                hoveredIndex === index ? "text-white" : "text-foreground/60"
              }`}>
                {logos[integration.name]}
              </div>

              <span className="font-medium block">{integration.name}</span>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "100+", label: "Integrations" },
              { value: "OAuth", label: "Auth built-in" },
              { value: "Webhooks", label: "Real-time sync" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            View all integrations
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
