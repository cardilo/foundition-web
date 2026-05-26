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
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   TRUST STRIP — categories we serve / brand-style chips
   ───────────────────────────────────────────────────────────── */

const categories = [
  "Food & Beverage",
  "Personal Care",
  "Beauty",
  "Wellness",
  "Household",
  "Pet",
  "Specialty CPG",
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-6">
          Built for CPG categories where margin & velocity matter
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((c) => (
            <span
              key={c}
              className="font-display text-lg md:text-xl text-foreground/70 hover:text-foreground transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   OUTCOMES — big visual + metrics + CTA
   ───────────────────────────────────────────────────────────── */

export function Outcomes() {
  const metrics = [
    { num: "+148%", label: "Avg. revenue lift in first 6 months" },
    { num: "5.8×", label: "Blended ROAS across managed brands" },
    { num: "−32%", label: "Reduction in cost per fulfilled order" },
    { num: "100%", label: "ASIN governance & MAP compliance" },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1400&auto=format&fit=crop"
              alt="CPG product line ready for marketplace launch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 via-transparent to-transparent" />
          </div>
          {/* Floating award chip */}
          <div className="absolute -bottom-6 -right-4 md:right-8 bg-card border border-border rounded-xl shadow-2xl px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9974C]/15 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#C9974C]" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Verified
              </div>
              <div className="text-sm font-medium text-foreground">
                Amazon Brand Registry
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Outcomes that compound</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
            Real numbers from real brands we operate.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            We don&apos;t pitch theory. We run the operating model that turns
            ASIN-level discipline into channel-level growth — measured weekly,
            optimized continuously.
          </p>
          <div className="grid grid-cols-2 gap-5 mb-8">
            {metrics.map((m) => (
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
            See what we can do for your brand
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PROCESS — 4 step
   ───────────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Diagnose",
    body: "Deep audit of your listings, ad spend, inventory health, and category dynamics. Profit-first baseline.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "02",
    icon: Cog,
    title: "Architect",
    body: "We design the operating layer — fulfillment, packaging, brand registry, ad strategy — built around your margin model.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Launch & Execute",
    body: "AI-enabled creative, conversion-optimized listings, paid campaigns, logistics. One team. One accountable plan.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    num: "04",
    icon: LineChart,
    title: "Compound",
    body: "Weekly executive reporting. Continuous optimization. Share-of-voice gains that translate to share of category.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Process() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="eyebrow mb-4">Our Process</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight max-w-2xl">
            From audit to compounding growth — in four disciplined moves.
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-foreground font-medium text-sm hover:text-[#1B6CA8] transition-colors whitespace-nowrap"
        >
          Start your audit
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-[#1B6CA8]/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
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
  return (
    <section className="border-b border-border bg-card/40">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Brand leader portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#C9974C] flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 text-[#0A2540]" />
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">What partners say</div>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-6">
              &ldquo;Foundition consolidated four vendor relationships into one
              accountable team. Our ad spend dropped, conversion went up, and
              for the first time we have a clean P&amp;L for the channel.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-medium text-foreground">
                  Director of eCommerce
                </div>
                <div className="text-sm text-muted-foreground">
                  North American Personal Care Brand
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
   STICKY CTA — appears after scroll
   ───────────────────────────────────────────────────────────── */

export function StickyCTA() {
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
        <span className="text-sm hidden sm:inline">
          Ready to consolidate your channel?
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 bg-background text-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-background/90 transition-colors"
        >
          Book a call
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MID-PAGE CTA BANNER
   ───────────────────────────────────────────────────────────── */

export function MidCTA() {
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
          <div className="text-background max-w-lg">
            <div className="text-xs uppercase tracking-widest text-[#C9974C] mb-2">
              Free 30-min strategy session
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              See where your channel is leaking margin — in 30 minutes.
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3.5 rounded-md font-medium hover:bg-background/90 transition-all whitespace-nowrap shadow-lg"
          >
            Book your session
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
