import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, MessageCircle, Star, ShieldCheck, BadgeCheck,
  Phone, ChevronDown, FileText, Building2, Briefcase, Store, Receipt,
  Rocket, Award, Landmark, HandCoins,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { REGISTRATION_SERVICES } from "@/data/registrationServices";

const FAQS = [
  { q: "Mujhe konsi registration chahiye?", a: "Apke business type, turnover, state aur partners ke basis pe required registrations decide hote hain — free consultation pe clarity de denge." },
  { q: "Kya sab kuch ek jagah ho jayega?", a: "Haan — GST, PAN, TAN, MSME, Shop License, firm/company registration, DPIIT — sab CA-led single window." },
  { q: "Kitna time lagega?", a: "Most registrations few working days mein ho jaate hain; company/LLP/DPIIT thoda zyada le sakta hai." },
  { q: "Pricing kaisi hai?", a: "Initial consultation free — scope clear hone ke baad transparent quote share karte hain." },
  { q: "Compliance bhi handle karte ho?", a: "Haan — post-registration GST, ITR, ROC, accounting sab compliance bundles available hain." },
];

const ICONS: Record<string, typeof FileText> = {
  "tax-registration": Receipt,
  "sole-proprietorship-registration": Store,
  "partnership-firm-registration": Briefcase,
  "professional-tax-registration": FileText,
  "shop-establishment-registration": Building2,
  "startup-ngo-registration": Rocket,
  "startup-india-dpiit-registration": Award,
  "tax-holiday-section-80iac": Landmark,
  "startup-grant-loan-assistance": HandCoins,
};

export const Route = createFileRoute("/registrations/")({
  head: () => ({
    meta: [
      { title: "Business & Tax Registration Services in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "All-in-one registration hub — GST, PAN, TAN, Sole Proprietorship, Partnership Firm, Shop & Establishment, Startup India DPIIT, 80IAC, NGO and funding support.",
      },
      { property: "og:title", content: "Registrations Hub — Praveen J & Associates" },
      { property: "og:description", content: "CA-led business & tax registration services — start, register and stay compliant from day one." },
      { property: "og:url", content: "/registrations" },
    ],
    links: [{ rel: "canonical", href: "/registrations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: RegistrationsHub,
});

function RegistrationsHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Grid />
        <Process />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Business & Tax Registrations
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            Business &amp; Tax Registration Services in India — CA-led, End-to-End
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Start, register and stay compliant from day one — GST, PAN, TAN, firm/company, Shop License, Startup India, NGO & more.
          </p>
          <p className="mt-2 text-muted-foreground">
            One CA team for every registration your business needs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              Start Registration <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat with CA
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> Pan-India</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Free Registration Consultation</h3>
          <p className="text-sm text-muted-foreground mt-1">Share details, CA will connect within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need help with business / tax registration.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
            }}
          >
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
              Request Callback <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section id="services" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">All Registration Services</h2>
        <p className="text-center text-muted-foreground mt-2">From single-window tax setup to startup recognition and funding.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {REGISTRATION_SERVICES.map((s) => {
            const Icon = ICONS[s.slug] ?? FileText;
            return (
              <Link
                key={s.slug}
                to="/registrations/$slug"
                params={{ slug: s.slug }}
                className="group p-6 rounded-2xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.heroLead}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Share your business details",
    "Get a tailored registration plan",
    "Documents prepared & verified",
    "Filings & follow-ups by CA",
    "Certificates & compliance roadmap delivered",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={s} className="relative p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5 hover:shadow-lg transition-all">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <p className="mt-3 text-sm font-medium text-ink">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { stat: "2000+", label: "Registrations Done" },
    { stat: "10+", label: "Years Experience" },
    { stat: "All States", label: "Pan-India Coverage" },
    { stat: "4.8/5", label: "Google Rating" },
  ];
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {items.map((i) => (
            <div key={i.label} className="p-6 rounded-2xl bg-white border text-center">
              <div className="font-display text-3xl font-bold text-brand">{i.stat}</div>
              <div className="text-sm text-muted-foreground mt-1">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-ink">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Start your business — the right way</h2>
        <p className="mt-3 text-white/90">CA-led registration & compliance support from day one.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            Start Registration <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA Now
          </a>
        </div>
      </div>
    </section>
  );
}