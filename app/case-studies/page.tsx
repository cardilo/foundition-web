"use client";

import { Navbar, FoundtitionMark } from "@/components/ui/navbar";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Case Studies",
    headline: "Operating-layer outcomes — across categories.",
    sub: "Each engagement is a P&L commitment, not a deliverable. Detailed write-ups available under NDA.",
    requestCta: "Request the case study deck",
    cases: [
      {
        category: "Personal Care · Body Wash",
        title: "From shelf-bound legacy brand to top-3 Amazon ranking",
        metrics: "+148% revenue · 5.8× ROAS · −32% CPFO",
        image:
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
        timeline: "6 months",
      },
      {
        category: "Hair Care · Premium Shampoo",
        title: "Defending a hero SKU against grey-market dilution",
        metrics: "100% MAP compliance · 4→1 vendor consolidation",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
        timeline: "4 months",
      },
      {
        category: "Household · Laundry",
        title: "Bundle architecture that doubled basket size",
        metrics: "+89% AOV · +210% subscribe-and-save",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        timeline: "3 months",
      },
      {
        category: "Men's Grooming",
        title: "Launching a D2C-native brand into Amazon at scale",
        metrics: "$2.4M Y1 revenue · category top-10 within 90 days",
        image:
          "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1200&auto=format&fit=crop",
        timeline: "12 months",
      },
    ],
  },
  fr: {
    eyebrow: "Études de cas",
    headline: "Des résultats opérationnels — toutes catégories.",
    sub: "Chaque mission est un engagement P&L, pas un livrable. Détails complets disponibles sous NDA.",
    requestCta: "Demander le dossier d'études de cas",
    cases: [
      {
        category: "Soins personnels · Gel douche",
        title: "D'une marque traditionnelle au top-3 du classement Amazon",
        metrics: "+148% de revenu · ROAS 5,8× · −32% CPFO",
        image:
          "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
        timeline: "6 mois",
      },
      {
        category: "Capillaire · Shampoing premium",
        title: "Protéger un SKU phare contre la dilution marché gris",
        metrics: "100% conformité MAP · consolidation 4→1",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
        timeline: "4 mois",
      },
      {
        category: "Maison · Lessive",
        title: "Architecture de bundles doublant le panier moyen",
        metrics: "+89% AOV · +210% abonnements",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
        timeline: "3 mois",
      },
      {
        category: "Soins homme",
        title: "Lancer une marque D2C native sur Amazon à grande échelle",
        metrics: "2,4 M$ rev. An 1 · top-10 catégorie en 90 jours",
        image:
          "https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1200&auto=format&fit=crop",
        timeline: "12 mois",
      },
    ],
  },
} as const;

export default function CaseStudiesPage() {
  const { locale, t } = useI18n();
  const c = COPY[locale];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-4">{c.eyebrow}</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {c.headline}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.cases.map((cs) => (
            <div
              key={cs.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-[#1B6CA8]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/30 to-transparent" />
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-foreground bg-card/90 backdrop-blur px-2.5 py-1 rounded-full border border-border">
                  {cs.category}
                </div>
                <div className="absolute top-3 right-3 text-[10px] text-muted-foreground bg-card/90 backdrop-blur px-2.5 py-1 rounded-full border border-border font-mono">
                  {cs.timeline}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-tight">
                  {cs.title}
                </h3>
                <p className="text-sm text-[#1B6CA8] font-mono mb-4">
                  {cs.metrics}
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground font-medium hover:text-[#1B6CA8] transition-colors"
                >
                  Read full case
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-10 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {c.requestCta}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
            {t.finalCta.sub}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all text-sm shadow-lg"
          >
            {t.nav.ctaLong}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <footer className="border-t border-border px-5 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <FoundtitionMark className="w-6 h-6" />
            <span className="font-brand text-foreground text-base">
              Foundition
            </span>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Foundition. {t.footer.location}
          </p>
        </div>
      </footer>
    </main>
  );
}
