"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";
import { ArrowUpRight, Sparkles, TrendingUp, Package } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const HeroGrid = () => {
  const { t } = useI18n();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.35) % 48);
    gridOffsetY.set((gridOffsetY.get() + 0.35) % 48);
  });

  const maskImage = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const ANCHOR_ICONS = [Sparkles, TrendingUp, Package];
  const ANCHOR_COLORS = ["#C9974C", "#1B6CA8", "#E8762C"];

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-12"
      )}
    >
      {/* Base subtle grid */}
      <div className="absolute inset-0 z-0 opacity-[0.12] dark:opacity-[0.08]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Cursor-revealed grid */}
      <motion.div
        className="absolute inset-0 z-0 opacity-90 dark:opacity-60"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Ambient brand glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-15%] top-[-15%] w-[50%] h-[50%] rounded-full bg-[#1B6CA8]/12 blur-[140px]" />
        <div className="absolute right-[20%] top-[5%] w-[20%] h-[20%] rounded-full bg-[#C9974C]/15 blur-[100px]" />
        <div className="absolute left-[-15%] bottom-[-20%] w-[45%] h-[45%] rounded-full bg-[#E8762C]/10 blur-[140px]" />
        <div className="absolute left-[15%] bottom-[10%] w-[18%] h-[18%] rounded-full bg-[#1B6CA8]/10 blur-[120px]" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        {/* LEFT: Copy */}
        <div className="text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur-sm mb-6"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8762C] animate-pulse" />
            <span className="eyebrow !mb-0">{t.hero.eyebrow}</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            {t.hero.h1}
            <br />
            {t.hero.h2}
            <br />
            <span className="text-[#1B6CA8] italic font-normal">
              {t.hero.h3}
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            {t.hero.sub}{" "}
            <span className="text-foreground font-medium">
              {t.hero.subStrong}
            </span>
            {t.hero.subTail}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all text-sm shadow-lg shadow-foreground/10"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-foreground font-medium rounded-md hover:bg-secondary transition-all text-sm border border-border"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Visual anchors */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {t.hero.anchors.map((a, i) => {
              const Icon = ANCHOR_ICONS[i];
              return (
                <div key={a} className="flex items-center gap-1.5">
                  <Icon
                    className="w-3.5 h-3.5"
                    style={{ color: ANCHOR_COLORS[i] }}
                  />
                  {a}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Collage with live ticker */}
        <HeroCollage />
      </div>
    </div>
  );
};

const HeroCollage = () => {
  const { t } = useI18n();
  return (
    <div className="relative hidden lg:block h-[560px]">
      {/* Big back card — shampoo / FMCG product */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute right-0 top-6 w-[78%] h-[64%] rounded-2xl overflow-hidden shadow-2xl border border-border"
        style={{ transform: "rotate(3deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
          alt="Personal care products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/30 via-transparent to-transparent" />
      </motion.div>

      {/* Live data ticker / analytics card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="absolute left-0 top-0 w-[66%] bg-card rounded-2xl shadow-2xl border border-border p-5 z-20"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {t.hero.ticker.category}
          </div>
          <div className="text-[10px] px-2 py-0.5 rounded-full bg-[#1B6CA8]/10 text-[#1B6CA8] font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B6CA8] animate-pulse" />
            LIVE
          </div>
        </div>
        <div className="font-display text-3xl font-bold text-foreground mb-1">
          {t.hero.ticker.revenue}
        </div>
        <div className="text-xs text-muted-foreground mb-3">
          {t.hero.ticker.roas} · {t.hero.ticker.status}
        </div>
        <Sparkline />
      </motion.div>

      {/* Floating product card — soap/hand wash */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-6 bottom-4 w-[58%] rounded-2xl overflow-hidden shadow-2xl border border-border z-10 bg-card"
      >
        <img
          src="https://images.unsplash.com/photo-1585751119414-ef2636f8aede?q=80&w=1200&auto=format&fit=crop"
          alt="Personal care product line"
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <div className="text-[10px] uppercase tracking-widest text-[#C9974C] mb-1">
            Launch ready
          </div>
          <div className="text-sm font-medium text-foreground">
            Personal Care · Premium Line
          </div>
        </div>
      </motion.div>

      {/* Floating ROAS chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="absolute right-4 bottom-12 bg-foreground text-background rounded-xl shadow-2xl px-5 py-4 z-30"
      >
        <div className="text-[10px] uppercase tracking-widest opacity-60">
          ROAS
        </div>
        <div className="font-display text-2xl font-bold">5.8×</div>
      </motion.div>

      {/* Floating gold dot */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 top-2 w-3 h-3 rounded-full bg-[#C9974C] shadow-lg shadow-[#C9974C]/40"
      />
    </div>
  );
};

const Sparkline = () => (
  <svg viewBox="0 0 200 50" className="w-full h-12">
    <defs>
      <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#1B6CA8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#1B6CA8" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,38 L20,34 L40,36 L60,28 L80,30 L100,22 L120,24 L140,16 L160,18 L180,8 L200,10 L200,50 L0,50 Z"
      fill="url(#spark)"
    />
    <path
      d="M0,38 L20,34 L40,36 L60,28 L80,30 L100,22 L120,24 L140,16 L160,18 L180,8 L200,10"
      fill="none"
      stroke="#1B6CA8"
      strokeWidth="2"
    />
  </svg>
);

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[#0A2540] dark:text-[#4A8BC2]"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
