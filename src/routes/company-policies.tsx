import { createFileRoute, Link } from "@tanstack/react-router";
import { ScrollText, Shield, FileText, AlertTriangle, ArrowRight, Star, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/company-policies")({
  head: () => ({
    meta: [
      { title: "Company Policies — Praveen J & Associates" },
      { name: "description", content: "Transparency, trust and compliance — explore our Privacy Policy, Terms & Conditions and Disclaimer." },
    ],
    links: [{ rel: "canonical", href: "/company-policies" }],
  }),
  component: CompanyPolicies,
});

function CompanyPolicies() {
  const policies = [
    { icon: Shield, title: "Privacy Policy", desc: "How we collect, use and protect your personal and financial data.", covers: ["Data collection and usage", "Data protection measures", "User rights and confidentiality"], to: "/privacy-policy" as const },
    { icon: FileText, title: "Terms & Conditions", desc: "Terms governing the use of our website and services.", covers: ["User responsibilities", "Service terms", "Payment and usage policies"], to: "/terms-and-conditions" as const },
    { icon: AlertTriangle, title: "Disclaimer", desc: "Limitations of information and services on our website.", covers: ["General information disclaimer", "Limitation of liability", "Professional advice guidelines"], to: "/disclaimer" as const },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-14 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
              <ScrollText className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink">Company Policies — Praveen J &amp; Associates</h1>
            <p className="mt-3 text-xl font-semibold text-brand">Transparency, Trust &amp; Compliance — Our Commitment to You</p>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Explore our policies to understand your rights, responsibilities and our commitment to professional standards.</p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-5">
              {policies.map(p => (
                <Link key={p.title} to={p.to} className="group p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-0.5 hover:border-brand/40 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.covers.map(c => <li key={c} className="text-foreground/70">• {c}</li>)}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">View {p.title} <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white border">
              <h2 className="font-display text-xl font-bold text-ink">Our Commitment</h2>
              <ul className="mt-4 space-y-2 text-foreground/80 text-sm">
                <li>✓ Protecting your data and privacy</li>
                <li>✓ Delivering transparent and ethical services</li>
                <li>✓ Maintaining compliance with legal standards</li>
                <li>✓ Providing accurate and reliable information</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border">
              <h2 className="font-display text-xl font-bold text-ink">Why These Policies Matter</h2>
              <ul className="mt-4 space-y-2 text-foreground/80 text-sm">
                <li>✓ Understand how your data is handled</li>
                <li>✓ Know your rights and responsibilities</li>
                <li>✓ Make informed decisions</li>
                <li>✓ Build trust with our services</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
              <span className="ml-2 font-semibold text-ink">5/5 Client Rating</span>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {["Transparent and professional service.", "Clear policies and trustworthy firm.", "Reliable and ethical practices."].map(q => (
                <blockquote key={q} className="p-5 rounded-2xl border bg-brand/5 text-sm italic text-ink">“{q}”</blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-gradient-to-br from-brand to-brand/80 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Have Questions About Our Policies?</h2>
            <p className="mt-2 text-white/90">We're here to help clarify any concerns.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact-us" className="rounded-xl bg-white text-brand px-6 py-3 font-semibold hover:bg-white/90 transition">Contact Us</Link>
              <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3 font-semibold hover:opacity-90 transition"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
