"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Search,
  LineChart,
  Rocket,
  Cog,
  Quote,
  Sparkles,
  Layers,
  Database,
  Package,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

/* ─────────────────────────────────────────────────────────────
   BRAND LOGO STRIP — stylized FMCG enterprise wordmarks
   (Generic typographic treatments — not actual brand logos)
   ───────────────────────────────────────────────────────────── */

export function BrandStrip() {
  const { t } = useI18n();
  const brands = [
    { name: "Unilever", style: "italic font-semibold tracking-tight" },
    { name: "P&G", style: "font-bold tracking-tighter" },
    { name: "MANSCAPED", style: "font-bold tracking-[0.18em] text-sm" },
    { name: "Colgate", style: "font-semibold tracking-tight" },
    { name: "Henkel", style: "font-bold tracking-wider uppercase text-sm" },
    { name: "Church & Dwight", style: "font-medium tracking-tight" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground text-center mb-8">
          {t.logos.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {brands.map((b) => (
            <span
              key={b.name}
              className={`text-xl md:text-2xl text-muted-foreground/70 hover:text-foreground transition-colors ${b.style}`}
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   OUTCOMES — Verified Channel Outcomes
   ───────────────────────────────────────────────────────────── */

export function Outcomes() {
  const { t } = useI18n();
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=1400&auto=format&fit=crop"
              alt="FMCG personal care product lineup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:right-8 bg-card border border-border rounded-xl shadow-2xl px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9974C]/15 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#C9974C]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {t.outcomes.verifyChipLabel}
              </div>
              <div className="text-sm font-medium text-foreground">
                {t.outcomes.verifyChip}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">{t.outcomes.eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
            {t.outcomes.headline}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            {t.outcomes.sub}
          </p>
          <div className="grid grid-cols-2 gap-5 mb-8">
            {t.outcomes.metrics.map((m) => (
              <div
                key={m.num}
                className="border-l-2 border-[#C9974C] pl-4 py-1"
              >
                <div className="font-display text-3xl font-bold text-foreground">
                  {m.num}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-foreground pb-1 hover:border-[#1B6CA8] hover:text-[#1B6CA8] transition-colors"
          >
            {t.outcomes.cta}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROCESS — Diagnose → Architect → Execute → Compound
   ───────────────────────────────────────────────────────────── */

const STEP_ICONS = [Search, Cog, Rocket, LineChart];
const STEP_IMAGES = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
];

export function Process() {
  const { t } = useI18n();
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="eyebrow mb-4">{t.process.eyebrow}</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-2xl">
            {t.process.headline}
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-[#1B6CA8] transition-colors whitespace-nowrap"
        >
          {t.process.ctaInline}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.process.steps.map((s, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <div
              key={s.num}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-[#1B6CA8]/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={STEP_IMAGES[i]}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-card/95 backdrop-blur flex items-center justify-center border border-border">
                  <Icon className="w-4 h-4 text-[#1B6CA8]" />
                </div>
                <div className="absolute top-3 right-3 font-display text-xs font-bold text-foreground bg-card/90 backdrop-blur px-2 py-1 rounded">
                  {s.num}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TESTIMONIAL
   ───────────────────────────────────────────────────────────── */

export function Testimonial() {
  const { t } = useI18n();
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Executive portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#C9974C] flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 text-[#0A2540]" />
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">{t.testimonial.eyebrow}</div>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-6">
              &ldquo;{t.testimonial.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-medium text-foreground">
                  {t.testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.testimonial.role}
                </div>
              </div>
              <div className="ml-auto flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="text-[#C9974C] text-sm">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STICKY CTA
   ───────────────────────────────────────────────────────────── */

export function StickyCTA() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setShow(y > 700 && y < max - 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-foreground text-background rounded-full shadow-2xl pl-5 pr-1 py-1 flex items-center gap-4 border border-foreground/10">
        <span className="text-sm hidden sm:inline">{t.stickyCta.text}</span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-background text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-background/90 transition-colors"
        >
          {t.stickyCta.cta}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DIAGNOSTIC CTA — Operational Diagnostic banner
   ───────────────────────────────────────────────────────────── */

export function DiagnosticCTA() {
  const { t } = useI18n();
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="relative rounded-2xl overflow-hidden border border-border">
        <img
          src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2000&auto=format&fit=crop"
          alt="Warehouse logistics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/40" />
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-background max-w-xl">
            <div className="text-xs uppercase tracking-widest text-[#C9974C] mb-2">
              {t.diagnostic.eyebrow}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">
              {t.diagnostic.headline}
            </h3>
            <p className="text-sm md:text-base text-background/80 max-w-lg leading-relaxed">
              {t.diagnostic.body}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3.5 rounded-md font-medium hover:bg-background/90 transition-all whitespace-nowrap shadow-lg"
          >
            {t.diagnostic.cta}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SERVICES GRID — lean replacement for ProjectShowcase
   ───────────────────────────────────────────────────────────── */

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop", // warehouse
  "https://images.unsplash.com/photo-1607006677018-83b3bff9b95d?q=80&w=1200&auto=format&fit=crop", // soap bars
  "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?q=80&w=1200&auto=format&fit=crop", // products lineup
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", // beauty creative
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop", // data
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // analytics
];

const SERVICE_ICONS = [
  Package,
  Layers,
  CheckCircle2,
  Sparkles,
  LineChart,
  Database,
];

export function ServicesGrid() {
  const { t } = useI18n();
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <div className="max-w-3xl mb-12">
        <div className="eyebrow mb-4">{t.services.eyebrow}</div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
          {t.services.headline}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {t.services.sub}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.services.items.map((s, i) => {
          const Icon = SERVICE_ICONS[i];
          return (
            <div
              key={s.title}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-[#1B6CA8]/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={SERVICE_IMAGES[i]}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-card/95 backdrop-blur flex items-center justify-center border border-border">
                  <Icon className="w-4 h-4 text-[#1B6CA8]" />
                </div>
                <div className="absolute top-3 right-3 text-xs font-mono text-muted-foreground bg-card/90 backdrop-blur px-2 py-1 rounded">
                  0{i + 1}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-foreground mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
