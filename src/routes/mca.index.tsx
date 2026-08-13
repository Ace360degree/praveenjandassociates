import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, MessageCircle, Star,
  AlertTriangle, Building2, FileText, Users, Briefcase, BadgeCheck,
  ClipboardCheck, ChevronDown, Phone, Landmark, ScrollText, RefreshCw,
  IdCard, UserCheck, MapPin, PenLine, TrendingUp, FileSignature,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { MCA_SERVICES } from "@/data/mcaServices";

const FAQS = [
  { q: "Pvt Ltd, LLP ya OPC — kaunsa best hai?", a: "Funding aur ESOP plan ho toh Pvt Ltd. Solo founder + limited liability ke liye OPC. Service / consulting ke liye LLP (kam compliance, kam cost)." },
  { q: "Incorporation ke baad kya karna hota hai?", a: "30 days mein auditor appoint, capital deposit, INC-20A within 180 days, share certificate within 2 months, statutory registers maintain." },
  { q: "DIN aur DPIN mein difference?", a: "DIN companies ke directors ke liye, DPIN LLP designated partners ke liye. Existing DIN holder same number LLP mein use kar sakta hai." },
  { q: "Annual ROC filing kya hoti hai?", a: "MGT-7 (Annual Return), AOC-4 (Financials), DIR-3 KYC har director ke liye — every financial year mandatory." },
  { q: "Late filing penalty kitna hai?", a: "Most forms par ₹100/day late fees + form-specific penalty. DIR-3 KYC miss par ₹5,000 flat penalty + DIN deactivation." },
  { q: "Company strike-off ho gayi — revival possible?", a: "Haan — NCLT mein restoration petition 20 years tak file ho sakti hai. Hum strike-off revival cases handle karte hain." },
];

const PROBLEMS = [
  { icon: Building2, title: "Entity Selection Confusion", text: "Pvt Ltd, LLP, OPC — har structure ke compliance, tax, funding implications alag." },
  { icon: AlertTriangle, title: "Missed 30-Day Compliance", text: "INC-20A, auditor, share certificate — first month miss ho toh heavy penalties." },
  { icon: RefreshCw, title: "Name / Address Change Hassle", text: "RUN approval, MGT-14, INC-22, INC-24 — sequence galat to rejection." },
  { icon: IdCard, title: "DIN / DSC Issues", text: "DIR-3 KYC miss, DSC expired — director sign hi nahi kar sakte." },
  { icon: TrendingUp, title: "Capital Increase Stuck", text: "Funding aane wali hai, authorised capital exhausted — SH-7 + stamp duty needed." },
  { icon: FileSignature, title: "Share Certificate Pending", text: "Allotment ke 2 months mein SH-1 issue + PAS-3 file mandatory." },
];

const SERVICE_ICONS: Record<string, typeof Building2> = {
  "company-incorporation": Building2,
  "initial-30-days-compliance": ClipboardCheck,
  "din-dpin-registration": IdCard,
  "dpin-llp-designated-partner": Users,
  "director-kyc-dir3": UserCheck,
  "company-address-change": MapPin,
  "company-name-change": PenLine,
  "increase-authorised-capital": TrendingUp,
  "issue-share-certificate-sh1": FileSignature,
};

export const Route = createFileRoute("/mca/")({
  head: () => ({
    meta: [
      { title: "MCA / ROC Services — Company Incorporation, Compliance, DIN | Praveen J & Associates" },
      {
        name: "description",
        content:
          "End-to-end MCA & ROC services — Pvt Ltd / LLP / OPC incorporation, DIN, DIR-3 KYC, address & name change, share certificates, capital increase. CA-led, fully compliant.",
      },
      { property: "og:title", content: "MCA / ROC Services Hub — Praveen J & Associates" },
      { property: "og:description", content: "Incorporation, ROC filings, DIN, name change, capital increase — all MCA needs in one place." },
      { property: "og:url", content: "/mca" },
    ],
    links: [{ rel: "canonical", href: "/mca" }],
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
  component: McaHub,
});

function McaHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <ServicesGrid />
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
            <Sparkles className="h-3.5 w-3.5" /> MCA / ROC Experts
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            Complete MCA & ROC Compliance — Incorporation to Annual Filings
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Company start karni hai ya existing entity ki compliance manage karni hai?
          </p>
          <p className="mt-2 text-muted-foreground">
            Pvt Ltd, LLP, OPC incorporation, DIN/DPIN, DIR-3 KYC, address/name change, capital increase, share certificate — sab kuch CA-led, MCA-ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              Talk to MCA Expert <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Online</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Free MCA / ROC Consultation</h3>
          <p className="text-sm text-muted-foreground mt-1">Share details — CA will call you within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need help with MCA / ROC services.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/918169887643?text=${msg}`, "_blank");
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

function Problems() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Common MCA / ROC Pain Points</h2>
        <p className="text-center text-muted-foreground mt-2">Familiar problems? We solve them every day.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="p-5 rounded-xl border bg-red-50/40 hover:bg-red-50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section id="services" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">All MCA / ROC Services</h2>
        <p className="text-center text-muted-foreground mt-2">Pick the service you need — or talk to a CA to plan it together.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {MCA_SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Landmark;
            return (
              <Link
                key={s.slug}
                to="/mca/$slug"
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
    { icon: MessageCircle, title: "Share Requirement", text: "WhatsApp / form — tell us what you need." },
    { icon: ClipboardCheck, title: "CA Consultation", text: "Free call to map structure, timelines, costs." },
    { icon: FileText, title: "Document Prep", text: "We collect, verify, draft & attest all paperwork." },
    { icon: ScrollText, title: "MCA Filing", text: "Forms filed end-to-end with MCA / ROC." },
    { icon: BadgeCheck, title: "Approval & Handover", text: "Receive certificates + post-filing support." },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">How We Work</h2>
        <p className="text-center text-muted-foreground mt-2">Simple, transparent, expert-led.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="relative p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <s.icon className="h-5 w-5 text-brand mt-3" />
              <h3 className="mt-2 font-semibold text-ink text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { stat: "1000+", label: "Happy Clients" },
    { stat: "500+", label: "Companies Incorporated" },
    { stat: "10+", label: "Years Experience" },
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
        <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to start or scale your company?</h2>
        <p className="mt-3 text-white/90">CA-led incorporation, ROC filings & MCA compliance — talk to us today.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            Request Callback <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+918169887643" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA Now
          </a>
        </div>
      </div>
    </section>
  );
}
