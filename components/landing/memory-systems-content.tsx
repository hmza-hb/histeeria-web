"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Clock, Compass, Cpu, Layers, Network, Database, Activity, MapPin } from "lucide-react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const pillars = [
  { icon: Activity, title: "Sensory Memory", body: "A machine receives far more data than it can store. Raw streams from cameras, audio, LIDAR and sensors flow into a perception buffer. Only relevant signals advance into structured memory — the rest dissolves in milliseconds." },
  { icon: Layers, title: "Working Memory", body: "The active cognitive workspace. Context relevant to the current task — goals, agent state, environmental cues — held temporarily so the agent can act without re-querying every prior experience." },
  { icon: Clock, title: "Episodic Memory", body: "A structured record of what happened, when it happened, who was involved, and what the outcome was. Not flat logs — rich, typed experiences that can be re-lived and reasoned over." },
  { icon: Brain, title: "Semantic Memory", body: "Patterns distilled from repeated episodes become generalized beliefs. The agent stops needing to re-observe and starts knowing — building an internal model of the world." },
  { icon: Cpu, title: "Procedural Memory", body: "Capabilities crystallized from experience. Instead of re-planning every action from scratch, learned procedures become reusable skills — motor patterns, navigation routes, task sequences." },
  { icon: Network, title: "Associative Memory", body: "Memories connect to each other. Recalling a person surfaces their relationships, preferences, history, and environment. The graph is the memory." },
  { icon: MapPin, title: "Spatial Memory", body: "For machines that move through the world, memory must exist in space. Objects, environments, and events are anchored to physical coordinates, not just timestamps." },
  { icon: Clock, title: "Temporal Memory", body: "Truth changes over time. The system understands when something became true, when it stopped being true, and how frequently patterns occur. Time is not metadata — it is structure." },
  { icon: Database, title: "Consolidation & Decay", body: "Not everything should be kept forever. Episodes compress into rules. Rules replace episodes. Low-salience memories fade. Forgetting is not failure — it is how the system stays accurate." },
];

const ecosystems = [
  { title: "AI Agents", body: "Persistent identity, project history, preference models, and decision records — across every conversation, session, and deployment. Agents that remember who you are." },
  { title: "Robotics", body: "Spatial maps of environments, learned object locations, interaction histories with humans, and procedural skills built from thousands of real executions." },
  { title: "Autonomous Vehicles", body: "Historical route memory, intersection behaviour patterns, hazard recognition from prior encounters, and temporal awareness of road conditions." },
  { title: "Humanoid Systems", body: "Social context, personal routines, long-term relationships, and accumulated physical skills — the full memory profile of an agent living and working alongside humans." },
  { title: "Virtual Worlds", body: "NPCs that remember prior conversations, world events with permanent consequences, and characters that develop through experience rather than scripted states." },
  { title: "Personal AI", body: "An assistant that builds a model of who you are over months and years — your goals, your decisions, your context — while remaining fully transparent and under your control." },
];

export function MemorySystemsContent() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");

  const hero = useInView(0.05);
  const visionRef = useInView();
  const pillarsRef = useInView();
  const ecoRef = useInView();
  const archRef = useInView();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) { setErr("Enter a valid email."); return; }
    if (!name.trim()) { setErr("Enter your name."); return; }
    setSubmitting(true); setErr("");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, role: "general", buildDetails: "" }) });
      if (res.ok) setDone(true); else setErr("Something went wrong. Try again.");
    } catch { setErr("Network error. Try again."); }
    finally { setSubmitting(false); }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2812%29-ng3RrNnsPMJ5CrtOjcPTmhHg01W11q.png" alt="" aria-hidden className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        </div>

        <div ref={hero.ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-40 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={`space-y-8 transition-all duration-1000 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-white/50">
              <span className="w-10 h-px bg-white/30" />
              Next launch · Memory Systems
            </span>
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] leading-[0.88] tracking-tight">
              Memory infrastructure<br />
              <span className="text-white/35">for intelligent machines.</span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-xl">
              Histeeria is evolving. Beyond monitoring and evaluation — into the foundational cognitive layer that lets machines perceive, learn, and carry experience across time.
            </p>
            <div className="flex gap-3 text-sm font-mono text-white/40">
              <span className="px-3 py-1 border border-white/10 rounded-full">Phase 1 · Memory Primitives</span>
              <span className="px-3 py-1 border border-white/10 rounded-full">Under Construction</span>
            </div>
          </div>

          {/* Right — Waitlist */}
          <div className={`transition-all duration-1000 delay-200 ${hero.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-10 space-y-6">
              {done ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mx-auto">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl">You're on the list.</h3>
                  <p className="text-white/55 text-sm">We'll reach out as early access opens. Thank you.</p>
                </div>
              ) : (
                <>
                  <div>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">Early Access Waitlist</p>
                    <h2 className="font-display text-3xl">Request SDK access.</h2>
                    <p className="text-sm text-white/55 mt-2">Be among the first to integrate Histeeria memory into your agent or robot.</p>
                  </div>
                  {err && <p className="text-red-400 text-xs">{err}</p>}
                  <form onSubmit={submit} className="space-y-4">
                    <input
                      type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
                    />
                    <input
                      type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Business email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 outline-none focus:border-white/30 transition-colors"
                    />
                    <Button type="submit" disabled={submitting} className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 font-semibold cursor-pointer">
                      {submitting ? "Submitting…" : "Join Waitlist"}
                    </Button>
                  </form>
                  <p className="text-xs text-white/30 text-center">No spam. Unsubscribe anytime.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-32 px-6 lg:px-12 relative z-10">
        <div ref={visionRef.ref} className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className={`lg:col-span-5 transition-all duration-1000 ${visionRef.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">The Problem</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9] mt-4">
              AI is capable.<br /><span className="text-white/30">But amnesiac.</span>
            </h2>
          </div>
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${visionRef.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p className="text-xl text-white/65 leading-relaxed">
              Modern AI systems are optimized around a single transaction: input → model → output. The moment a session ends, the experience is gone. Persistent memory is currently glued together from disconnected components — vector stores, RAG pipelines, conversation caches — none of which understand what a memory actually is.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {[["9", "Memory dimensions"], ["3", "Storage abstractions"], ["1", "Unified API"]].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl text-white">{v}</p>
                  <p className="text-xs font-mono text-white/40 mt-1 uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width image break */}
        <div className={`mt-24 relative w-full h-[420px] overflow-hidden rounded-2xl transition-all duration-1000 delay-300 ${visionRef.visible ? "opacity-100" : "opacity-0"}`}>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png" alt="Memory landscape" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <div className="absolute bottom-10 left-10 right-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Episodic chains", "Spatial anchoring", "Temporal validity", "Association graphs"].map(t => (
              <div key={t} className="border border-white/15 bg-black/40 backdrop-blur-md px-4 py-3 rounded-lg">
                <p className="text-sm font-medium text-white">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 PILLARS */}
      <section className="py-32 px-6 lg:px-12 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div ref={pillarsRef.ref} className="max-w-[1400px] mx-auto">
          <div className={`mb-20 transition-all duration-1000 ${pillarsRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Architecture</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[100px] tracking-tight leading-[0.9] mt-4">
              The 9 dimensions<br /><span className="text-white/30">of machine memory.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`bg-black p-8 lg:p-10 space-y-4 group hover:bg-white/[0.03] transition-all duration-500 ${pillarsRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-white/25 transition-colors">
                      <Icon className="w-4 h-4 text-white/60" />
                    </div>
                    <span className="text-xs font-mono text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="py-32 px-6 lg:px-12 relative z-10">
        <div ref={archRef.ref} className="max-w-[1400px] mx-auto">
          <div className={`grid lg:grid-cols-12 gap-16 items-start transition-all duration-1000 ${archRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">System Design</span>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95]">Memory is not above storage. It is between storage and intelligence.</h2>
              <p className="text-sm text-white/55 leading-relaxed">
                Histeeria sits at the orchestration layer. Raw storage — SQL, vector, graph — handles persistence. Histeeria handles classification, association, consolidation, and retrieval with cognitive context.
              </p>
            </div>
            <div className="lg:col-span-8">
              {/* Visual architecture stack */}
              <div className="space-y-2">
                {[
                  { label: "Intelligent System", sub: "LLM / Agent / Robot / Simulation", highlight: false },
                  { label: "Memory API", sub: "remember() · recall() · associate() · consolidate() · forget()", highlight: true },
                  { label: "Memory Orchestrator", sub: "Encode → Classify → Store → Associate → Retrieve → Reinforce → Decay", highlight: true },
                  { label: "Cognitive Engines", sub: "Episodic · Semantic · Procedural · Spatial · Temporal · Associative", highlight: false },
                  { label: "Retrieval Engine", sub: "Vector Search · Graph Traversal · Hybrid Retrieval · Context Ranking", highlight: false },
                  { label: "Storage Abstraction", sub: "SQL Store · Vector Store · Graph Store", highlight: false },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`px-6 py-4 border rounded-lg transition-all duration-500 ${row.highlight ? "border-white/20 bg-white/5" : "border-white/5 bg-white/[0.01]"}`}
                    style={{ transitionDelay: `${i * 80 + 200}ms` }}
                  >
                    <p className={`font-semibold text-sm ${row.highlight ? "text-white" : "text-white/70"}`}>{row.label}</p>
                    <p className="text-xs font-mono text-white/35 mt-1">{row.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image strip */}
          <div className={`mt-26 grid grid-cols-1 md:grid-cols-1 gap-4 transition-all duration-1000 delay-300 ${archRef.visible ? "opacity-100" : "opacity-0"}`}>
            {["/images/bridge.png"].map((src, i) => (
              <div key={src} className="aspect-square rounded-xl overflow-hidden border border-white/5">
                <img src={src} alt="" aria-hidden className="w-full h-full object-cover transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEMS */}
      <section className="py-32 px-6 lg:px-12 bg-white/[0.01] border-y border-white/5 relative z-10">
        <div ref={ecoRef.ref} className="max-w-[1400px] mx-auto">
          <div className={`mb-20 transition-all duration-1000 ${ecoRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Who it serves</span>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight mt-4">
              Built for systems<br /><span className="text-white/30">that act in the world.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystems.map((e, i) => (
              <div
                key={e.title}
                className={`p-8 border border-white/5 hover:border-white/15 bg-black hover:bg-white/[0.02] transition-all duration-500 rounded-xl space-y-4 ${ecoRef.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold text-white">{e.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA / ROADMAP */}
      <section className="py-32 px-6 lg:px-12 relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-uAia6REvB137CQyHFCf0za3O6h2zKO.png" alt="" aria-hidden className="absolute bottom-0 right-0 h-full object-contain object-right opacity-20" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-8">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Roadmap</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.9]">
              Where we are heading.
            </h2>
            <div className="space-y-4 pt-4">
              {[
                { phase: "Phase 1", name: "Memory Primitives", status: "In progress", detail: "Core memory object schema, typed memory classes, confidence scoring, temporal metadata, entity relationships, basic recall." },
                { phase: "Phase 2", name: "Memory Engine", status: "Upcoming", detail: "Hybrid retrieval, context-aware ranking, reinforcement, revision, decay, and active forgetting." },
                { phase: "Phase 3", name: "Cognitive Layer", status: "Planned", detail: "Consolidation pipelines, episodic-to-semantic transformation, spatial engine, procedural skill extraction." },
                { phase: "Phase 4", name: "SDKs & Integration", status: "Planned", detail: "Agent SDK, Robotics SDK, multi-agent shared memory, world-model integration." },
              ].map((r, i) => (
                <div key={r.phase} className={`border-l-2 pl-6 space-y-1 ${i === 0 ? "border-white" : "border-white/10"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-white/40">{r.phase}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${i === 0 ? "border-white/30 text-white" : "border-white/10 text-white/30"}`}>{r.status}</span>
                  </div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-8 space-y-6">
            <div>
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Early Access</p>
              <h3 className="font-display text-3xl">Join the waitlist.</h3>
              <p className="text-sm text-white/50 mt-2">We're opening limited developer access for Phase 1.</p>
            </div>
            {done ? (
              <div className="text-center py-6 space-y-2">
                <p className="text-white font-semibold">You're on the list ✓</p>
                <p className="text-white/40 text-sm">We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {err && <p className="text-red-400 text-xs">{err}</p>}
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 outline-none focus:border-white/25 transition-colors" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Business email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 outline-none focus:border-white/25 transition-colors" />
                <Button type="submit" disabled={submitting} className="w-full bg-white text-black hover:bg-white/90 rounded-full h-11 font-semibold cursor-pointer">
                  {submitting ? "Submitting…" : "Reserve Access"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
