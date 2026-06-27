import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronRight, MessageCircle, Phone,
  Sparkles, Star, ShieldCheck, AlertCircle, Users, ClipboardList,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { getComplianceBundle, COMPLIANCE_BUNDLES, type ComplianceBundle } from "@/data/compliancePackages";

export const Route = createFileRoute("/compliance/$slug")({
  loader: ({ params }) => {
    const bundle = getComplianceBundle(params.slug);
    if (!bundle) throw notFound();
    return { bundle };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.bundle;
    if (!b) return {};
    return {
      meta: [
        { title: b.metaTitle },
        { name: "description", content: b.metaDescription },
        { name: "keywords", content: b.keywords.join(", ") },
        { property: "og:title", content: b.metaTitle },
        { property: "og:description", content: b.metaDescription },
        { property: "og:url", content: `/compliance/${b.slug}` },
      ],
      links: [{ rel: "canonical", href: `/compliance/${b.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: b.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">Bundle not found.</div>
  ),
  errorComponent: () => (
    <div className="min-h-screen flex items-center justify-center">Something went wrong.</div>
  ),
  component: BundlePage,
});

function BundlePage() {
  const { bundle: b } = Route.useLoaderData() as { bundle: ComplianceBundle };
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", pkg: "" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6">
          <nav className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/compliance" className="hover:text-brand">Compliance</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink font-medium">{b.entity}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-10 lg:py-14 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" /> {b.entity} Compliance
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-ink leading-tight">{b.h1}</h1>
              <p className="mt-3 text-lg text-muted-foreground">{b.heroHeadline}</p>
              <p className="mt-2 text-muted-foreground">{b.heroLead}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#bundles" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
                  View Bundles <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
                  <MessageCircle className="h-4 w-4" /> WhatsApp CA
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  <span className="ml-1 font-semibold text-ink">4.8/5</span>
                </div>
                <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
              <h3 className="font-display text-xl font-bold text-ink">Request a Custom Quote</h3>
              <p className="text-sm text-muted-foreground mt-1">Share your details — CA will call within 30 mins.</p>
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const msg = `Hi, I'm interested in ${b.entity} compliance bundle.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0APreferred bundle: ${form.pkg || "Not sure"}`;
                  window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
                }}
              >
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
                <select value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30">
                  <option value="">Preferred bundle (optional)</option>
                  {b.packages.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
                <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
                  Request Callback <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">No payment online. CA discusses scope &amp; quote first.</p>
              </form>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-10 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            {b.about.map((p, i) => (
              <p key={i} className="text-muted-foreground mt-3 first:mt-0">{p}</p>
            ))}
          </div>
        </section>

        {/* Bundles */}
        <section id="bundles" className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our {b.entity} Bundles</h2>
            <p className="text-center text-muted-foreground mt-2">Pick a starting point — final scope &amp; quote tailored to your business.</p>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {b.packages.map((p, idx) => (
                <div key={p.name} className={`relative p-6 rounded-2xl border bg-white flex flex-col ${idx === b.packages.length - 1 ? "border-brand shadow-lg shadow-brand/10" : ""}`}>
                  {idx === b.packages.length - 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                  )}
                  <h3 className="font-display font-bold text-ink text-lg">{p.name}</h3>
                  <p className="text-xs text-brand font-semibold mt-1">{p.tagline}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-muted-foreground border-t pt-3"><span className="font-semibold text-ink">Best for:</span> {p.bestFor}</p>
                  <a href="#lead" onClick={() => setForm({ ...form, pkg: p.name })} className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand/10 text-brand font-semibold py-2.5 hover:bg-brand hover:text-white transition-all">
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems & Who for */}
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border">
              <div className="flex items-center gap-2"><AlertCircle className="h-5 w-5 text-amber-600" /><h3 className="font-display font-bold text-ink">Common Problems</h3></div>
              <ul className="mt-4 space-y-2">
                {b.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-amber-600 mt-0.5">•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white border">
              <div className="flex items-center gap-2"><Users className="h-5 w-5 text-brand" /><h3 className="font-display font-bold text-ink">Who Should Opt</h3></div>
              <ul className="mt-4 space-y-2">
                {b.whoFor.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">How It Works</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {["Choose bundle", "Share details", "Onboard with CA team", "We manage filings", "You focus on growth"].map((s, i) => (
                <div key={s} className="p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5">
                  <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
                  <ClipboardList className="h-5 w-5 text-brand mt-3" />
                  <p className="mt-2 font-semibold text-ink text-sm">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-3">
              {b.faqs.map((f, i) => (
                <div key={f.q} className="rounded-xl border bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-semibold text-ink">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="lead" className="py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Choose the Right Bundle for Your {b.entity}</h2>
            <p className="mt-3 text-white/90">Simplify compliance with expert CA support — enquiry first, transparent scope.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
                <MessageCircle className="h-4 w-4" /> WhatsApp CA
              </a>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
                <Phone className="h-4 w-4" /> Call CA Now
              </a>
            </div>
          </div>
        </section>

        {/* Other bundles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="font-display text-xl font-bold text-ink text-center">Explore other compliance bundles</h3>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {COMPLIANCE_BUNDLES.filter((x) => x.slug !== b.slug).map((x) => (
                <Link key={x.slug} to="/compliance/$slug" params={{ slug: x.slug }} className="p-4 rounded-xl border bg-muted/30 hover:border-brand/40 hover:bg-white transition-all">
                  <p className="font-semibold text-ink text-sm">{x.entity}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{x.heroHeadline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
