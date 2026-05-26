import { HeroGrid } from "@/components/ui/the-infinite-grid";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { Navbar, FoundtitionMark } from "@/components/ui/navbar";
import {
  TrustStrip,
  Outcomes,
  Process,
  Testimonial,
  StickyCTA,
  MidCTA,
} from "@/components/ui/sections";
import { ArrowUpRight } from "lucide-react";

const proofPoints = [
  { num: "30+", label: "Years of CPG & marketplace experience" },
  { num: "6", label: "Integrated services, one operating model" },
  { num: "AI+", label: "Intelligence embedded in every decision" },
];

const differentiators = [
  {
    title: "Full-system thinking",
    body: "Most agencies manage ads. Most 3PLs manage logistics. We integrate everything into one cohesive eCommerce engine — with one team accountable.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Data before every decision",
    body: "Every move is backed by market share data, keyword intelligence, competitor tracking, and profit-first modeling. No guesswork.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Deep roots, sharp edge",
    body: "30 years of CPG expertise combined with cutting-edge AI capabilities. We know the industry — and we know what's coming next.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
];

const legacy = [
  { big: "30+", label: "Years launching market-leading CPG brands" },
  { big: "0", label: "Administrative overhead added to your team" },
  { big: "1", label: "Partner accountable for your full eCommerce P&L" },
];

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* HERO */}
      <HeroGrid />

      {/* TRUST STRIP */}
      <TrustStrip />

      {/* PROOF BAR */}
      <section className="border-b border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-border">
          {proofPoints.map((p, i) => (
            <div key={p.num} className={i > 0 ? "md:pl-8" : ""}>
              <div className="font-display text-4xl font-bold text-foreground">
                {p.num}
              </div>
              <div className="text-sm text-muted-foreground mt-1.5 leading-snug max-w-[240px]">
                {p.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">The real problem</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
              Your Brand Has the Products.
              <br />
              What It Needs Is the System.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Most CPG brands enter the 3P marketplace with strong products and
              weak infrastructure. The result?{" "}
              <span className="text-foreground font-medium">
                Fragmented vendor relationships, eroding margins, and no single
                partner accountable for the full picture.
              </span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Foundition was built to close that gap — your integrated
              eCommerce operating layer.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-foreground pb-1 hover:border-[#1B6CA8] hover:text-[#1B6CA8] transition-colors"
            >
              See how the system works
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden border border-border aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"
                  alt="Warehouse fulfillment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden border border-border aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop"
                    alt="CPG product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-border aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
                    alt="Team strategy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl shadow-2xl px-5 py-4">
              <div className="font-display text-2xl font-bold text-foreground">
                4→1
              </div>
              <div className="text-[11px] text-muted-foreground">
                Vendors consolidated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section id="services" className="border-b border-border">
        <div className="flex justify-center">
          <ProjectShowcase />
        </div>
      </section>

      {/* OUTCOMES */}
      <Outcomes />

      {/* MID CTA */}
      <MidCTA />

      {/* PROCESS */}
      <Process />

      {/* DIFFERENTIATORS — now with images */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-border">
        <div className="eyebrow mb-4">Why Foundition</div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-12">
          What Makes Us Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-[#1B6CA8]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={d.image}
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

      {/* LEGACY STRIP */}
      <section className="border-b border-border bg-card/20">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-border">
          {legacy.map((l, i) => (
            <div
              key={l.big}
              className={`text-center ${i > 0 ? "md:pl-8" : ""}`}
            >
              <div className="font-display text-5xl font-bold text-foreground">
                {l.big}
              </div>
              <div className="text-sm text-muted-foreground mt-2 max-w-[240px] mx-auto">
                {l.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-28 text-center"
      >
        <div className="rounded-2xl border border-border bg-card/40 p-12 md:p-20 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-[-10%] top-[-20%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-[#C9974C]/15 blur-[120px]" />
          </div>
          <div className="relative z-10">
            <div className="eyebrow mb-4">Let&apos;s build</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
              Your eCommerce Foundation
              <br />
              Starts Here.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
              Let&apos;s build the operating model that turns marketplace
              complexity into your most profitable growth channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+16476186488"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all text-sm shadow-lg"
              >
                Book a strategy call
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent text-foreground font-medium rounded-md hover:bg-foreground/5 transition-all text-sm border border-border"
              >
                Meet the team
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              Or call us directly:{" "}
              <a href="tel:+16476186488" className="text-foreground font-mono">
                +1 (647) 618-6488
              </a>
              {" · "}Mon–Fri 9AM–6PM ET
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
            © {new Date().getFullYear()} Foundition. Etobicoke, Ontario, Canada.
            <br />
            Mon–Fri 9AM–6PM · +1 (647) 618-6488
          </p>
          <p className="text-muted-foreground text-xs md:text-right">
            The eCommerce Operating Foundation
            <br />
            for CPG Brands
          </p>
        </div>
      </footer>

      {/* Sticky conversion CTA */}
      <StickyCTA />
    </main>
  );
}
