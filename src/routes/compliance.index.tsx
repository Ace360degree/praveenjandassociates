import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Briefcase, Users, Landmark, Layers, ShieldCheck, Star, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { COMPLIANCE_BUNDLES } from "@/data/compliancePackages";

const ICONS: Record<string, typeof Building2> = {
  "proprietorship": Briefcase,
  "partnership-firm": Users,
  "llp": Layers,
  "private-limited-company": Building2,
  "complete-tax-business": Landmark,
};

export const Route = createFileRoute("/compliance/")({
  head: () => ({
    meta: [
      { title: "Compliance Solutions by Entity — Proprietorship, Partnership, LLP, Pvt Ltd | Praveen J & Associates" },
      { name: "description", content: "CA-led compliance bundles for every business type — ITR, GST, ROC, accounting & secretarial. Enquiry-based, no DIY guesswork." },
      { property: "og:title", content: "Compliance Solutions by Entity — Praveen J & Associates" },
      { property: "og:description", content: "End-to-end compliance bundles for proprietorships, partnership firms, LLPs and Pvt Ltd companies." },
      { property: "og:url", content: "/compliance" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: ComplianceHub,
});

function ComplianceHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5">
          <div className="container mx-auto px-4 py-14 lg:py-20 text-center max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
              <ShieldCheck className="h-3.5 w-3.5" /> Bundled Compliance Solutions
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
              Compliance Solutions for Every Business Type
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Proprietorship se Pvt Ltd tak — ek CA team, complete handling. Enquiry-based, no fixed e-commerce checkout.
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                <span className="ml-1 font-semibold text-ink">5/5</span>
              </div>
              <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA-led</span>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {COMPLIANCE_BUNDLES.map((b) => {
                const Icon = ICONS[b.slug] ?? Building2;
                return (
                  <Link
                    key={b.slug}
                    to="/compliance/$slug"
                    params={{ slug: b.slug }}
                    className="group p-6 rounded-2xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all"
                  >
                    <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-ink group-hover:text-brand transition-colors">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{b.heroLead}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View bundles <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 bg-brand text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Not sure which bundle fits?</h2>
            <p className="mt-2 text-white/90">Talk to a CA — we'll recommend the right solution for your business.</p>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
