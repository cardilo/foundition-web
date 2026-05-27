"use client";

import { useI18n } from "@/lib/i18n";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function ProblemDiagram() {
  const { t } = useI18n();
  const d = t.problem.diagram;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
      {/* BEFORE — Chaos panel */}
      <div className="relative rounded-2xl border border-border bg-secondary/30 p-6 md:p-8 overflow-hidden">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-3.5 h-3.5 text-destructive/80" />
          <div className="text-[10px] uppercase tracking-widest text-destructive/80 font-medium">
            Before
          </div>
        </div>
        <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
          {d.beforeLabel}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-7">
          {d.beforeCaption}
        </p>
        <ChaosDiagram
          silos={d.silos}
          brandLabel={d.brandLabel}
          marketLabel={d.marketLabel}
        />
      </div>

      {/* AFTER — Unified panel */}
      <div className="relative rounded-2xl border border-[#1B6CA8]/30 bg-[#1B6CA8]/[0.04] p-6 md:p-8 overflow-hidden">
        <div className="flex items-center gap-2 mb-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B6CA8]" />
          <div className="text-[10px] uppercase tracking-widest text-[#1B6CA8] font-medium">
            After
          </div>
        </div>
        <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">
          {d.afterLabel}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-7">
          {d.afterCaption}
        </p>
        <UnifiedDiagram
          brandLabel={d.brandLabel}
          marketLabel={d.marketLabel}
          layerLabel={d.layerLabel}
        />
      </div>
    </div>
  );
}

function ChaosDiagram({
  silos,
  brandLabel,
  marketLabel,
}: {
  silos: readonly string[];
  brandLabel: string;
  marketLabel: string;
}) {
  return (
    <div className="relative h-[320px]">
      {/* Brand box */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-medium z-10 shadow-md">
        {brandLabel}
      </div>

      {/* Crossed lines SVG */}
      <svg
        viewBox="0 0 400 320"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Brand → 4 silos (crossing each other) */}
        <line x1="200" y1="35" x2="60" y2="135" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" />
        <line x1="200" y1="35" x2="160" y2="135" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" />
        <line x1="200" y1="35" x2="240" y2="135" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" />
        <line x1="200" y1="35" x2="340" y2="135" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" />

        {/* Silos → Marketplace (crossing each other) */}
        <line x1="60" y1="175" x2="240" y2="285" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" strokeDasharray="3,3" />
        <line x1="160" y1="175" x2="340" y2="285" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" strokeDasharray="3,3" />
        <line x1="240" y1="175" x2="60" y2="285" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" strokeDasharray="3,3" />
        <line x1="340" y1="175" x2="160" y2="285" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/40" strokeDasharray="3,3" />
      </svg>

      {/* 4 silo chips */}
      <div className="absolute top-[125px] left-0 right-0 grid grid-cols-4 gap-1.5 px-1">
        {silos.map((s) => (
          <div
            key={s}
            className="text-[9px] sm:text-[10px] font-medium text-foreground bg-card border border-border rounded-md px-1.5 py-2 text-center leading-tight shadow-sm"
          >
            {s}
          </div>
        ))}
      </div>

      {/* Marketplace box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 px-4 py-2 rounded-lg bg-card border border-border text-foreground text-xs font-medium z-10 shadow-sm">
        {marketLabel}
      </div>

      {/* Friction dots */}
      <div className="absolute top-[200px] left-[30%] w-1.5 h-1.5 rounded-full bg-destructive/60 animate-pulse" />
      <div className="absolute top-[230px] right-[28%] w-1.5 h-1.5 rounded-full bg-destructive/60 animate-pulse" />
      <div className="absolute top-[245px] left-[45%] w-1.5 h-1.5 rounded-full bg-destructive/60 animate-pulse" />
    </div>
  );
}

function UnifiedDiagram({
  brandLabel,
  marketLabel,
  layerLabel,
}: {
  brandLabel: string;
  marketLabel: string;
  layerLabel: string;
}) {
  return (
    <div className="relative h-[320px] flex flex-col items-center justify-between">
      {/* Brand box */}
      <div className="px-4 py-2 rounded-lg bg-foreground text-background text-xs font-medium shadow-md">
        {brandLabel}
      </div>

      {/* Arrow down */}
      <svg width="14" height="20" viewBox="0 0 14 20" className="text-[#1B6CA8]">
        <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="2,12 7,19 12,12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>

      {/* Foundition Layer — full-width pill */}
      <div className="w-full">
        <div className="relative rounded-xl border border-[#1B6CA8]/40 bg-card shadow-md py-4 px-3 text-center">
          <div className="text-[10px] uppercase tracking-widest text-[#1B6CA8] mb-1">
            Operating Layer
          </div>
          <div className="font-display text-sm md:text-base font-bold text-foreground leading-tight">
            {layerLabel}
          </div>
          <div className="mt-2 flex items-center justify-center gap-1.5 flex-wrap">
            {["Logistics", "Brand", "Creative", "Ads", "Data"].map((c) => (
              <span
                key={c}
                className="text-[9px] px-1.5 py-0.5 rounded bg-[#1B6CA8]/10 text-[#1B6CA8] font-medium"
              >
                {c}
              </span>
            ))}
          </div>
          {/* Glow */}
          <div className="absolute inset-0 -z-10 rounded-xl bg-[#1B6CA8]/10 blur-2xl" />
        </div>
      </div>

      {/* Arrow down */}
      <svg width="14" height="20" viewBox="0 0 14 20" className="text-[#1B6CA8]">
        <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="2,12 7,19 12,12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>

      {/* Marketplace box */}
      <div className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-xs font-medium shadow-sm">
        {marketLabel}
      </div>
    </div>
  );
}
