import { Navbar, FoundtitionMark } from "@/components/ui/navbar";

const stats = [
  { num: "3P", label: "Marketplace specialists — deep, not broad" },
  { num: "AI+", label: "Intelligence layered into every decision" },
  { num: "1", label: "Integrated operating model, not a patchwork" },
];

const values = [
  {
    title: "Structured for growth",
    body: "Commerce shouldn't be chaotic. We design the systems and discipline that let your brand scale with control — not just speed.",
  },
  {
    title: "Shared success model",
    body: "Your growth is our mandate. We integrate deeply with your team, aligning strategy, accountability, and execution toward sustainable results.",
  },
  {
    title: "Disciplined execution",
    body: "From inventory management to ASIN governance, we operate with the rigor and consistency that protects your margin and brand equity at scale.",
  },
  {
    title: "Data with intent",
    body: "We don't just report numbers — we turn marketplace data into focused action, enabling smarter decisions and measurable growth every month.",
  },
];

const team = [
  { name: "John Holbrook", role: "President", initials: "JH" },
  { name: "Carlos Dilone", role: "SVP, Channel Development", initials: "CD" },
  { name: "Phu Nguyen Quang", role: "Marketing & AI Director", initials: "PN" },
  { name: "Cody Hacking", role: "Operations Manager", initials: "CH" },
  { name: "Ivone Holbrook", role: "Production Manager", initials: "IH" },
  { name: "Michelle-Lea Sivanesan", role: "Sales Executive", initials: "MS" },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        {/* HERO */}
        <section className="pb-12 border-b border-border">
          <div className="eyebrow mb-4">About Foundition</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            We Build the Operating
            <br />
            Foundation That{" "}
            <span className="text-[#1B6CA8] italic font-normal">Wins</span>
            <br />
            on eCommerce.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Most brands have the products. What they&apos;re missing is the
            system — the structure, intelligence, and execution discipline to
            turn marketplace complexity into a compounding growth engine.
            That&apos;s exactly what we built Foundition to deliver.
          </p>
        </section>

        {/* STAT ROW */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 border-b border-border">
          {stats.map((s) => (
            <div
              key={s.num}
              className="bg-card rounded-lg p-5 border border-border"
            >
              <div className="font-display text-3xl font-bold text-foreground">
                {s.num}
              </div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </section>

        {/* STORY */}
        <section className="py-12 border-b border-border">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Our Story
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
            Built for a Problem Most Agencies Won&apos;t Admit Exists
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            As eCommerce accelerated, CPG brands were left navigating a maze of
            fragmented systems, rising costs, and eroding margins — with no
            single partner accountable for the full picture. The opportunity
            was there.{" "}
            <span className="text-foreground font-medium">
              The structure to capture it
            </span>{" "}
            was not.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Foundition was founded by leaders who had lived through that chaos
            inside some of the world&apos;s most demanding CPG environments. We
            didn&apos;t build another agency. We built{" "}
            <span className="text-foreground font-medium">
              a disciplined operating foundation
            </span>{" "}
            — combining decades of marketplace expertise with AI-powered
            intelligence — so brands can finally grow with clarity, control,
            and confidence.
          </p>
        </section>

        {/* VISION / MISSION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 border-b border-border">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become the operating foundation behind the world&apos;s most
              successful CPG brands in eCommerce — building scalable,
              profitable, and disciplined marketplace leadership.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Help CPG brands unlock profitable 3P marketplace growth by
              combining disciplined operations, AI-powered intelligence, and
              performance-driven marketing into one integrated model.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-12 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            How We Operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-border rounded-lg p-5 hover:border-primary/40 transition-colors"
              >
                <div className="text-[#C9974C] text-sm mb-2">◆</div>
                <h3 className="font-medium text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="py-12 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Team Behind the Foundation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {team.map((m) => (
              <div key={m.name} className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-3 text-sm font-medium text-muted-foreground">
                  {m.initials}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {m.name}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {m.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to build your eCommerce foundation?
          </h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            Let&apos;s talk about what disciplined, profitable marketplace
            growth looks like for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+16476186488"
              className="inline-flex items-center justify-center px-7 py-3 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-all text-sm"
            >
              Book a conversation ↗
            </a>
            <a
              href="/#services"
              className="inline-flex items-center justify-center px-7 py-3 bg-transparent text-foreground font-medium rounded-md hover:bg-foreground/5 transition-all text-sm border border-border"
            >
              See our services
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t border-border px-5 sm:px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <FoundtitionMark className="w-6 h-6" />
            <span className="font-brand text-foreground text-base">
              Foundition
            </span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            © {new Date().getFullYear()} Foundition. Etobicoke, Ontario, Canada.
          </p>
        </div>
      </footer>
    </main>
  );
}
