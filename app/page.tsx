"use client";

import { HeroGrid } from "@/components/ui/the-infinite-grid";
import { Navbar, FoundtitionMark } from "@/components/ui/navbar";
import {
  BrandStrip,
  Outcomes,
  Process,
  Testimonial,
  StickyCTA,
  DiagnosticCTA,
  ServicesGrid,
} from "@/components/ui/sections";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const DIFF_IMAGES = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
];

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* HERO */}
      <HeroGrid />

      {/* BRAND LOGO STRIP */}
      <BrandStrip />

      {/* PROBLEM */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">{t.problem.eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              {t.problem.headline}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              {t.problem.p1}
              <span className="text-foreground font-medium">
                {t.problem.p1Strong}
              </span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {t.problem.p2}
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-foreground pb-1 hover:border-[#1B6CA8] hover:text-[#1B6CA8] transition-colors"
            >
              {t.problem.cta}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-border aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1607006677018-83b3bff9b95d?q=80&w=800&auto=format&fit=crop"
                  alt="Soap bars production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-border aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop"
                    alt="Beauty FMCG"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=800&auto=format&fit=crop"
                    alt="Hand wash"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating consolidation stat */}
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl shadow-2xl px-5 py-4">
              <div className="font-display text-2xl font-bold text-foreground">
                {t.problem.stat}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {t.problem.statLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <ServicesGrid />

      {/* OUTCOMES */}
      <Outcomes />

      {/* DIAGNOSTIC CTA */}
      <DiagnosticCTA />

      {/* PROCESS */}
      <Process />

      {/* DIFFERENTIATORS */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
        <div className="eyebrow mb-4">{t.diff.eyebrow}</div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-12">
          {t.diff.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.diff.items.map((d, i) => (
            <div
              key={d.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-[#1B6CA8]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={DIFF_IMAGES[i]}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* CLOSING STATS */}
      <section className="border-b border-border bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-border">
          {t.closing.stats.map((l, i) => (
            <div
              key={l.num}
              className={`text-center ${i > 0 ? "md:pl-8" : ""}`}
            >
              <div className="font-display text-5xl font-bold text-foreground">
                {l.num}
              </div>
              <div className="text-sm text-muted-foreground mt-2 max-w-[240px] mx-auto">
                {l.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-28 text-center"
      >
        <div className="rounded-2xl border border-border bg-secondary/40 p-12 md:p-20 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-[-10%] top-[-20%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-[#C9974C]/15 blur-[120px]" />
          </div>
          <div className="relative z-10">
            <div className="eyebrow mb-4">{t.finalCta.eyebrow}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
              {t.finalCta.headline}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              {t.finalCta.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+16476186488"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all text-sm shadow-lg"
              >
                {t.finalCta.ctaPrimary}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-foreground font-medium rounded-md hover:bg-secondary transition-all text-sm border border-border"
              >
                {t.finalCta.meetTeam}
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              {t.finalCta.directLine}{" "}
              <a href="tel:+16476186488" className="text-foreground font-mono">
                +1 (647) 618-6488
              </a>
              {" · "}
              {t.finalCta.hours}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-2.5">
            <FoundtitionMark className="w-6 h-6" />
            <span
              className="font-display text-foreground text-sm"
              style={{ letterSpacing: "0.04em" }}
            >
              FOUNDITION
            </span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            © {new Date().getFullYear()} Foundition. {t.footer.location}
            <br />
            +1 (647) 618-6488 · {t.finalCta.hours}
          </p>
          <p className="text-muted-foreground text-xs md:text-right">
            {t.footer.tagline}
          </p>
        </div>
      </footer>

      <StickyCTA />
    </main>
  );
}
