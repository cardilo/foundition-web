"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Locale = "en" | "fr";

export const content = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      caseStudies: "Case Studies",
      contact: "Contact",
      ctaShort: "Book Audit",
      ctaLong: "Book an Enterprise Audit",
    },
    hero: {
      eyebrow: "The eCommerce Operating Layer for Enterprise CPG",
      h1: "Consolidate Your",
      h2: "Marketplace",
      h3: "Infrastructure.",
      sub: "One integrated operating model replacing the patchwork of fragmented agencies, siloed 3PLs, and disconnected consultants.",
      subStrong: "30 years of CPG domain expertise",
      subTail:
        " supercharged by AI to scale your brand on Amazon and beyond.",
      ctaPrimary: "Book a Strategy Architecture Call",
      ctaSecondary: "Explore the Operating System",
      anchors: [
        "AI-Powered Intelligence",
        "Profit-First Margin Modeling",
        "End-to-End Fulfillment",
      ],
      ticker: {
        category: "Personal Care · Amazon",
        revenue: "+148% Revenue Lift · 30d",
        roas: "5.8× Blended ROAS",
        status: "Managed & Compliant",
      },
    },
    logos: {
      label: "Trusted by enterprise CPG leaders to operate the channel",
    },
    problem: {
      eyebrow: "The Systemic Flaw",
      headline:
        "Your Brand Has World-Class Products. What It Lacks Is an Integrated System.",
      p1: "Most CPG brands approach the 3P marketplace with exceptional product market fit but ",
      p1Strong:
        "highly fragmented infrastructure — structural margin erosion, siloed data, and no single partner accountable for the total bottom line.",
      p2: "Foundition eliminates this friction by serving as your unified eCommerce operating layer. We absorb the operational complexity so you can capture the margin.",
      stat: "4 → 1",
      statLabel: "Vendor consolidation",
      cta: "See how the system works",
    },
    services: {
      eyebrow: "Capabilities & Services",
      headline: "One Infrastructure. Six Integrated Capabilities.",
      sub: "Every function operates within a singular data feedback loop to drive compounding channel growth — not isolated wins.",
      items: [
        {
          title: "Fulfillment & Supply Chain Logistics",
          desc: "Temperature-sensitive cold chain logistics, automated packaging compliance, and multi-channel inventory allocation.",
        },
        {
          title: "eCommerce Packaging & Industrial Design",
          desc: "Marketplace-optimized packaging engineered for high-velocity conversion, low-cost fulfillment cubes, and shipping durability.",
        },
        {
          title: "Omnichannel Brand Governance",
          desc: "Total Amazon Brand Registry management, legal-grade MAP enforcement, listing defense, and regulatory compliance.",
        },
        {
          title: "Brand Acceleration & Creative Assets",
          desc: "AI-driven digital asset production, search-optimized catalog architecture, high-conversion A+ content, keyword indexing.",
        },
        {
          title: "Precision Performance Advertising",
          desc: "Data-backed capital allocation across Amazon Ads, tying ad spend directly to net contribution margin and share acquisition.",
        },
        {
          title: "Commercial Strategy & Advanced Analytics",
          desc: "C-suite visibility into market share, share of voice, inventory run-rates, and profitability modeling.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Performance Metrics",
      headline: "Verified Channel Outcomes. Zero Theory.",
      sub: "We deploy an operational framework that translates daily ASIN discipline into macro-level balance sheet growth — monitored weekly, optimized continuously.",
      metrics: [
        { num: "+148%", label: "Average Net Revenue Lift (First 6 Months)" },
        { num: "5.8×", label: "Blended Return on Ad Spend (ROAS)" },
        { num: "−32%", label: "Average Reduction in Cost Per Fulfilled Order" },
        { num: "100%", label: "ASIN Governance & Global MAP Compliance" },
      ],
      cta: "See what we can do for your brand",
      verifyChip: "Amazon Brand Registry",
      verifyChipLabel: "Verified",
    },
    diagnostic: {
      eyebrow: "Operational Diagnostic",
      headline: "Uncover Your Channel Margin Leaks in 30 Minutes.",
      body: "Secure a complimentary infrastructure audit with our principal strategists. We will evaluate your current listing health, inventory velocity, and advertising efficiency metrics to isolate hidden profit centers.",
      cta: "Schedule an Operational Audit",
    },
    process: {
      eyebrow: "The Framework",
      headline: "From Diagnostic to Compounding Scale.",
      ctaInline: "Start your audit",
      steps: [
        {
          num: "01",
          title: "Diagnose",
          body: "A deep architectural audit of your catalog, media spend efficiency, inventory health, and category market share to build a profit-first baseline.",
        },
        {
          num: "02",
          title: "Architect",
          body: "We construct your dedicated operating layer — re-aligning logistics, compliance, and advertising strategy around your margin targets.",
        },
        {
          num: "03",
          title: "Execute",
          body: "Simultaneous launch of optimized creative, refined search campaigns, and streamlined fulfillment under one accountable roadmap.",
        },
        {
          num: "04",
          title: "Compound",
          body: "Continuous algorithmic optimization backed by weekly executive reporting — shifting your position from trailing to owning the category.",
        },
      ],
    },
    diff: {
      eyebrow: "Strategic Edge",
      headline: "Engineered Differently.",
      items: [
        {
          title: "Full-System Integration",
          body: "While traditional agencies isolate media and 3PLs isolate boxes, we unite the entire ecosystem under one P&L-accountable leadership team.",
        },
        {
          title: "Predictive Data Modeling",
          body: "Every strategic shift is quantified by real-time competitor tracking, market share telemetry, and advanced financial modeling.",
        },
        {
          title: "CPG Legacy Meets Modern AI",
          body: "We fuse 30 years of foundational CPG retail knowledge with state-of-the-art machine intelligence to build persistent competitive advantage.",
        },
      ],
    },
    testimonial: {
      eyebrow: "Executive Endorsement",
      quote:
        "Foundition consolidated four fragmented vendor relationships into a single accountable partner. Our advertising waste dropped immediately, conversion metrics rose, and for the first time, our executive team has absolute clarity on our channel P&L.",
      author: "Director of eCommerce",
      role: "North American Personal Care Enterprise",
    },
    closing: {
      stats: [
        { num: "30+", label: "Years launching market-leading CPG brands" },
        { num: "0%", label: "Administrative overhead added to your team" },
        { num: "1", label: "Partner fully accountable for your eCommerce performance" },
      ],
    },
    finalCta: {
      eyebrow: "Secure your foundation",
      headline: "Secure Your eCommerce Foundation.",
      sub: "Let's transition your marketplace operations into a highly predictable, maximum-margin revenue engine.",
      ctaPrimary: "Request a Strategy Consultation",
      meetTeam: "Meet the team",
      directLine:
        "Connect with an Executive Sourcing Partner:",
      hours: "Mon–Fri 9AM–6PM ET",
    },
    footer: {
      tagline: "The eCommerce Operating Layer for Enterprise CPG",
      location: "Etobicoke, Ontario, Canada",
    },
    stickyCta: {
      text: "Ready to consolidate your channel?",
      cta: "Book Audit",
    },
    midCta: {
      eyebrow: "Free 30-min strategy session",
      headline:
        "See where your channel is leaking margin — in 30 minutes.",
      cta: "Book your session",
    },
  },

  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      caseStudies: "Études de cas",
      contact: "Contact",
      ctaShort: "Audit",
      ctaLong: "Réserver un audit entreprise",
    },
    hero: {
      eyebrow: "La couche opérationnelle e-commerce pour les CPG d'envergure",
      h1: "Consolidez votre",
      h2: "infrastructure",
      h3: "marketplace.",
      sub: "Un modèle opérationnel intégré qui remplace la mosaïque d'agences fragmentées, de 3PL cloisonnés et de consultants déconnectés.",
      subStrong: "30 ans d'expertise CPG",
      subTail:
        " supercharger par l'IA pour propulser votre marque sur Amazon et au-delà.",
      ctaPrimary: "Réserver un appel d'architecture stratégique",
      ctaSecondary: "Explorer le système opérationnel",
      anchors: [
        "Intelligence augmentée par IA",
        "Modélisation orientée marge",
        "Logistique de bout en bout",
      ],
      ticker: {
        category: "Soins personnels · Amazon",
        revenue: "+148% de revenus · 30j",
        roas: "ROAS mixte 5,8×",
        status: "Géré & conforme",
      },
    },
    logos: {
      label:
        "Adopté par les leaders CPG pour opérer le canal",
    },
    problem: {
      eyebrow: "La faille systémique",
      headline:
        "Votre marque a des produits de classe mondiale. Ce qui lui manque est un système intégré.",
      p1: "La plupart des marques CPG arrivent sur la marketplace 3P avec un excellent product-market fit mais ",
      p1Strong:
        "une infrastructure très fragmentée — érosion structurelle des marges, données cloisonnées, et aucun partenaire responsable du résultat global.",
      p2: "Foundition élimine ce frottement en devenant votre couche opérationnelle e-commerce unifiée. Nous absorbons la complexité opérationnelle pour que vous captiez la marge.",
      stat: "4 → 1",
      statLabel: "Fournisseurs consolidés",
      cta: "Voir comment fonctionne le système",
    },
    services: {
      eyebrow: "Capacités & services",
      headline: "Une infrastructure. Six capacités intégrées.",
      sub: "Chaque fonction opère dans une boucle de rétroaction unique pour générer une croissance composée — pas des victoires isolées.",
      items: [
        {
          title: "Logistique & chaîne d'approvisionnement",
          desc: "Logistique chaîne du froid, conformité d'emballage automatisée, et allocation d'inventaire multi-canal.",
        },
        {
          title: "Packaging e-commerce & design industriel",
          desc: "Packaging optimisé pour la conversion, des cubes de fulfillment économiques et la durabilité d'expédition.",
        },
        {
          title: "Gouvernance de marque omnicanale",
          desc: "Gestion complète d'Amazon Brand Registry, application MAP, défense des fiches produits et conformité réglementaire.",
        },
        {
          title: "Accélération de marque & assets créatifs",
          desc: "Production d'assets par IA, architecture catalogue SEO, contenu A+ à forte conversion et indexation par mots-clés.",
        },
        {
          title: "Publicité performance de précision",
          desc: "Allocation capitalistique fondée sur la donnée, alignant le spend sur la marge nette et l'acquisition de parts de marché.",
        },
        {
          title: "Stratégie commerciale & analytique avancée",
          desc: "Visibilité C-suite sur les parts de marché, share of voice, vitesse d'inventaire et modélisation de rentabilité.",
        },
      ],
    },
    outcomes: {
      eyebrow: "Métriques de performance",
      headline: "Des résultats canal vérifiés. Zéro théorie.",
      sub: "Nous déployons un cadre opérationnel qui traduit la discipline ASIN quotidienne en croissance bilantielle — suivie hebdomadairement, optimisée en continu.",
      metrics: [
        { num: "+148%", label: "Hausse moyenne du revenu net (6 premiers mois)" },
        { num: "5,8×", label: "Retour publicitaire mixte (ROAS)" },
        { num: "−32%", label: "Réduction moyenne du coût par commande" },
        { num: "100%", label: "Gouvernance ASIN & conformité MAP globale" },
      ],
      cta: "Voir ce que nous pouvons faire pour votre marque",
      verifyChip: "Amazon Brand Registry",
      verifyChipLabel: "Vérifié",
    },
    diagnostic: {
      eyebrow: "Diagnostic opérationnel",
      headline: "Identifiez vos fuites de marge en 30 minutes.",
      body: "Réservez un audit d'infrastructure complémentaire avec nos stratèges principaux. Nous évaluons la santé de vos fiches, la vélocité d'inventaire et l'efficacité publicitaire pour isoler des centres de profit cachés.",
      cta: "Planifier un audit opérationnel",
    },
    process: {
      eyebrow: "Le cadre",
      headline: "Du diagnostic à la croissance composée.",
      ctaInline: "Lancer votre audit",
      steps: [
        {
          num: "01",
          title: "Diagnostiquer",
          body: "Audit architectural profond de votre catalogue, efficacité media, santé d'inventaire et part de marché pour bâtir une base orientée profit.",
        },
        {
          num: "02",
          title: "Architecturer",
          body: "Nous construisons votre couche opérationnelle dédiée — réalignant logistique, conformité et stratégie publicitaire autour de vos objectifs de marge.",
        },
        {
          num: "03",
          title: "Exécuter",
          body: "Lancement simultané de créatifs optimisés, campagnes search affinées et fulfillment rationalisé sous une feuille de route unifiée.",
        },
        {
          num: "04",
          title: "Composer",
          body: "Optimisation algorithmique continue, reporting hebdomadaire exécutif — vous passez de suiveur à propriétaire de catégorie.",
        },
      ],
    },
    diff: {
      eyebrow: "Avantage stratégique",
      headline: "Ingénierie différente.",
      items: [
        {
          title: "Intégration full-system",
          body: "Là où les agences isolent le media et les 3PL les colis, nous unifions tout l'écosystème sous une équipe responsable du P&L.",
        },
        {
          title: "Modélisation prédictive",
          body: "Chaque inflexion stratégique est quantifiée par le suivi concurrentiel en temps réel, la télémétrie de parts de marché et la modélisation financière avancée.",
        },
        {
          title: "Héritage CPG × IA moderne",
          body: "Nous fusionnons 30 ans de connaissance retail CPG avec l'intelligence machine de pointe pour bâtir un avantage compétitif durable.",
        },
      ],
    },
    testimonial: {
      eyebrow: "Endossement exécutif",
      quote:
        "Foundition a consolidé quatre relations fournisseurs fragmentées en un seul partenaire responsable. Notre gaspillage publicitaire a chuté immédiatement, la conversion est montée, et pour la première fois notre direction a une clarté absolue sur le P&L canal.",
      author: "Directeur eCommerce",
      role: "Entreprise nord-américaine de soins personnels",
    },
    closing: {
      stats: [
        { num: "30+", label: "Années à lancer des marques CPG leaders" },
        { num: "0%", label: "Charge administrative ajoutée à votre équipe" },
        { num: "1", label: "Partenaire entièrement responsable de votre performance e-commerce" },
      ],
    },
    finalCta: {
      eyebrow: "Sécurisez votre fondation",
      headline: "Sécurisez votre fondation e-commerce.",
      sub: "Transitionnons vos opérations marketplace en un moteur de revenus prévisible à marge maximale.",
      ctaPrimary: "Demander une consultation stratégique",
      meetTeam: "Rencontrer l'équipe",
      directLine: "Joignez un partenaire exécutif :",
      hours: "Lun–Ven 9h–18h ET",
    },
    footer: {
      tagline: "La couche opérationnelle e-commerce pour les CPG d'envergure",
      location: "Etobicoke, Ontario, Canada",
    },
    stickyCta: {
      text: "Prêt à consolider votre canal ?",
      cta: "Audit",
    },
    midCta: {
      eyebrow: "Session stratégique gratuite · 30 min",
      headline:
        "Découvrez où votre canal perd de la marge — en 30 minutes.",
      cta: "Réserver ma session",
    },
  },
} as const;

export type Dict = typeof content.en;

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      (localStorage.getItem("locale") as Locale | null)) ||
      null;
    if (stored === "en" || stored === "fr") setLocaleState(stored);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  };

  const t = content[locale] as Dict;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
