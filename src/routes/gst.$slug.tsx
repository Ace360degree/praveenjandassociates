import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, MessageCircle, AlertTriangle, FileText,
  Sparkles, ChevronDown, ShieldCheck, Phone, Star, BadgeCheck, ChevronRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { GST_SERVICES, getGstServiceBySlug } from "@/data/gstServices";

export const Route = createFileRoute("/gst/$slug")({
  loader: ({ params }) => {
    const service = getGstServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    const s = loaderData;
    if (!s) return {};
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: `/gst/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/gst/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            provider: { "@type": "Organization", name: "Praveen J & Associates" },
            areaServed: "IN",
            description: s.metaDescription,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <p className="text-muted-foreground mt-3">Looks like this GST service page doesn't exist.</p>
        <Link to="/gst" className="inline-flex mt-6 items-center gap-2 text-brand font-semibold">
          <ArrowRight className="h-4 w-4" /> Back to GST services
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-lg bg-brand text-white px-4 py-2">Try again</button>
    </div>
  ),
  component: GstServicePage,
});

function GstServicePage() {
  const s = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs title={s.title} />
        <Hero s={s} />
        <Problems items={s.problems} />
        <WhatIs whatIs={s.whatIs} />
        <WhoFor items={s.whoFor} />
        <Benefits items={s.benefits} important={s.important} />
        <Process steps={s.process} />
        <Documents items={s.documents} />
        <Trust />
        <FAQ items={s.faqs} />
        <FinalCTA s={s} />
        <RelatedServices currentSlug={s.slug} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA cta={s.primaryCta} />
    </div>
  );
}

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="border-b bg-muted/30" aria-label="Breadcrumb">
      <ol className="container mx-auto px-4 py-3 text-sm flex items-center gap-2 text-muted-foreground flex-wrap">
        <li><Link to="/" className="hover:text-brand">Home</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li><Link to="/gst" className="hover:text-brand">GST</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li className="text-ink font-medium">{title}</li>
      </ol>
    </nav>
  );
}

function Hero({ s }: { s: ReturnType<typeof getGstServiceBySlug> & {} }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> GST · {s.title}
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            {s.h1}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{s.heroLead}</p>
          <p className="mt-2 text-muted-foreground">{s.heroSub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              {s.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">5/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Online</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Get expert CA help — free callback</h3>
          <p className="text-sm text-muted-foreground mt-1">Share details, our CA will call within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need help with ${s.title}.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/918169887643?text=${msg}`, "_blank");
            }}
          >
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
              {s.primaryCta} <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Problems({ items }: { items: string[] }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
          Common Problems Businesses Face
        </h2>
        <p className="text-center text-muted-foreground mt-2">Sound familiar? You're not alone.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((p) => (
            <div key={p} className="flex gap-3 p-5 rounded-xl border bg-red-50/40 hover:bg-red-50 transition-colors">
              <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <p className="text-sm text-ink">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIs({ whatIs }: { whatIs: { heading: string; points: string[]; note?: string } }) {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{whatIs.heading}</h2>
        <ul className="mt-6 space-y-3">
          {whatIs.points.map((p) => (
            <li key={p} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </li>
          ))}
        </ul>
        {whatIs.note && (
          <div className="mt-5 rounded-xl bg-brand/5 border border-brand/20 p-4 text-sm text-ink">
            <span className="font-semibold text-brand">Note: </span>{whatIs.note}
          </div>
        )}
      </div>
    </section>
  );
}

function WhoFor({ items }: { items: string[] }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Who Should Use This Service?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((w) => (
            <div key={w} className="p-5 rounded-xl border hover:border-brand/40 hover:shadow-md transition-all bg-white">
              <div className="h-9 w-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-ink">{w}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ items, important }: { items: string[]; important: string[] }) {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
          <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand" /> Benefits
          </h3>
          <ul className="mt-4 space-y-2.5">
            {items.map((b) => (
              <li key={b} className="flex gap-2 items-start text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
          <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
          </h3>
          <ul className="mt-4 space-y-2.5">
            {important.map((b) => (
              <li key={b} className="flex gap-2 items-start text-sm">
                <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process({ steps }: { steps: string[] }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
        <p className="text-center text-muted-foreground mt-2">Simple, transparent, expert-led.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={step} className="relative p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5 hover:shadow-lg transition-all">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <p className="mt-3 text-sm font-medium text-ink">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents({ items }: { items: string[] }) {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
        <p className="text-center text-muted-foreground mt-2">We'll guide you step-by-step on documentation.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {items.map((d) => (
            <div key={d} className="flex gap-3 p-4 rounded-xl bg-white border hover:border-brand/40 transition-colors">
              <FileText className="h-5 w-5 text-brand shrink-0" />
              <span className="text-sm text-ink">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const reviews = [
    "Got my work done quickly without any hassle.",
    "Very smooth and professional service.",
    "Highly recommended — expert CA guidance.",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Trusted by Businesses</h2>
        <div className="mt-3 flex items-center justify-center gap-1 text-sm">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
          <span className="ml-2 font-semibold">5/5 on Google</span>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <blockquote key={r} className="p-5 rounded-xl border bg-muted/30 text-sm italic text-ink">"{r}"</blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {items.map((f, i) => (
            <div key={f.q} className="rounded-xl border bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-ink">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ s }: { s: ReturnType<typeof getGstServiceBySlug> & {} }) {
  return (
    <section className="py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to get started?</h2>
        <p className="mt-3 text-white/90">Expert CA support, quick turnaround, full compliance — talk to us today.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            {s.primaryCta} <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+918169887643" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA Now
          </a>
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = GST_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 6);
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Explore More GST Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/gst/$slug"
              params={{ slug: r.slug }}
              className="group p-5 rounded-xl border hover:border-brand/40 hover:shadow-lg transition-all bg-white"
            >
              <h3 className="font-display font-bold text-ink group-hover:text-brand transition-colors">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{r.heroLead}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gst" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
            View all GST services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StickyMobileCTA({ cta }: { cta: string }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t shadow-2xl p-3 flex gap-2">
      <a href="tel:+918169887643" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-muted text-ink px-4 py-3 font-semibold text-sm">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a href="#lead" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-white px-4 py-3 font-semibold text-sm shadow-lg shadow-brand/30">
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
