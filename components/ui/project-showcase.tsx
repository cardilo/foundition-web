"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Fulfillment & Inventory",
    description:
      "Temperature-sensitive logistics, packaging standards, cross-channel inventory optimization.",
    year: "01",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "eCommerce Packaging Design",
    description:
      "Marketplace-ready packaging built for conversion, logistics efficiency, and scalable launches.",
    year: "02",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop",
  },
  {
    title: "Brand Management",
    description:
      "Full Amazon Brand Registry leverage: listing integrity, MAP enforcement, compliance oversight.",
    year: "03",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Brand Acceleration",
    description:
      "AI-enabled creative assets, conversion-optimized listings, A+ content, keyword strategy.",
    year: "04",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Advertising",
    description:
      "Data-driven Amazon Ads campaigns aligning ad spend with revenue outcomes.",
    year: "05",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Strategy & Data Analytics",
    description:
      "Executive-level visibility into rankings, share of voice, and profitable scaling decisions.",
    year: "06",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-2xl mx-auto px-6 py-20"
    >
      <div className="eyebrow mb-3">What we do</div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
        One Foundation. Six Capabilities.
      </h2>
      <p className="text-muted-foreground text-base mb-10 max-w-xl">
        Every service is designed to work together — not in silos. That&apos;s
        how we drive compounding growth rather than fragmented wins.
      </p>

      {/* Floating image preview */}
      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 110}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.85,
          transition:
            "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), scale 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-secondary rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.08,
                filter: hoveredIndex === index ? "none" : "blur(8px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </div>
      </div>

      {/* List */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="relative py-5 border-t border-border transition-all duration-300 ease-out">
              <div
                className={`absolute inset-0 -mx-4 px-4 bg-secondary/40 rounded-lg transition-all duration-300 ease-out ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-lg tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-px bg-primary transition-all duration-300 ease-out ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`w-4 h-4 text-primary transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-sm mt-1 leading-relaxed transition-all duration-300 ease-out ${
                      hoveredIndex === index
                        ? "text-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono tabular-nums transition-all duration-300 ease-out ${
                    hoveredIndex === index
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
