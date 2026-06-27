import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, MessageCircle, Star, ShieldCheck, BadgeCheck,
  Phone, ChevronDown, Calculator, BookOpen, FileSearch,
  TrendingUp, FileText, AlertTriangle, CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { ACCOUNTING_SERVICES } from "@/data/accountingServices";

const FAQS = [
  { q: "What services are included in accounting?", a: "Bookkeeping, financial statements, GST/TDS accounting, reconciliation aur compliance reporting — sab kuch covered." },
  { q: "Is audit mandatory for all businesses?", a: "Depends on turnover and legal requirements — tax audit u/s 44AB, statutory audit for companies, GST audit thresholds ke according." },
  { q: "Do you provide monthly accounting services?", a: "Haan — monthly, quarterly aur yearly retainer-based packages available hain." },
  { q: "Can you handle GST and tax compliance?", a: "Complete end-to-end compliance — GST returns, TDS, ITR, ROC filings sab included." },
  { q: "Do startups need accounting services?", a: "Bilkul — proper books from Day 1 fundraising, valuation aur compliance ke liye critical hain." },
];

const ACCOUNTING = [
  "Bookkeeping & financial record maintenance",
  "Preparation of Balance Sheet & P&L",
  "GST accounting and reconciliation",
  "Accounts payable & receivable management",
  "Monthly / quarterly MIS reporting",
];

const AUDIT = [
  "Statutory audit",
  "Internal audit",
  "Tax audit (u/s 44AB)",
  "GST audit",
  "Compliance audit",
];

const PROBLEMS = [
  "Inaccurate or incomplete records",
  "Non-compliance with tax laws",
  "Lack of financial clarity",
  "Errors in GST or tax filings",
  "Difficulty during audits",
];

const HELP = [
  "Organized and accurate accounting system",
  "Compliance with Income Tax & GST laws",
  "Regular financial monitoring",
  "Audit readiness and support",
  "Expert financial guidance",
];

const STEPS = [
  "Understand business operations",
  "Set up accounting structure",
  "Maintain records regularly",
  "Conduct audits and reviews",
  "Provide reports and insights",
];

const WHO = [
  "Small & medium businesses (SMEs)",
  "Startups and growing companies",
  "Proprietors and partnerships",
  "Companies requiring audit compliance",
  "Businesses seeking professional accounting in India",
];

const DOCS = [
  "Financial transactions data",
  "Bank statements",
  "Invoices & bills",
  "GST details",
  "Previous financial records",
];

export const Route = createFileRoute("/accounting-audit-services/")({
  head: () => ({
    meta: [
      { title: "Accounting & Audit Services in India — CA Praveen J & Associates" },
      { name: "description", content: "Professional accounting & audit services in India — bookkeeping, balance sheet, P&L, statutory, internal, tax & GST audit. CA-led, accurate, compliant." },
      { property: "og:title", content: "Accounting & Audit Services — Praveen J & Associates" },
      { property: "og:description", content: "End-to-end CA-led accounting and audit support — bookkeeping, MIS, statutory, tax & GST audit. India-wide." },
      { property: "og:url", content: "/accounting-audit-services" },
    ],
    links: [{ rel: "canonical", href: "/accounting-audit-services" }],
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
  component: AccountingPage,
});

function AccountingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ServicesSplit />
        <SubServicesGrid />
        <Problems />
        <Help />
        <Process />
        <Who />
        <Documents />
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
            <Calculator className="h-3.5 w-3.5" /> Accounting & Audit
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            Accounting & Audit Services in India — Professional CA Support for Businesses
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Struggling with accounting, compliance ya financial accuracy? Hum ensure karte hain aapka business smoothly chale.
          </p>
          <p className="mt-2 text-muted-foreground">
            Accurate bookkeeping, statutory compliance & complete financial transparency — CA-led.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              Get Accounting Support <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Compliant</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Free Accounting Consultation</h3>
          <p className="text-sm text-muted-foreground mt-1">Apna business detail share kariye — CA expert 30 mins mein connect karega.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need accounting & audit support.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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

function SubServicesGrid() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">All Accounting & Audit Services</h2>
        <p className="text-center text-muted-foreground mt-2">Choose the service you need — CA-led, compliant, fast.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {ACCOUNTING_SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/accounting-audit-services/$slug"
              params={{ slug: s.slug }}
              className="group p-6 rounded-2xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{s.heroLead}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Maintaining accurate financial records",
    "Ensuring statutory compliance",
    "Making informed business decisions",
    "Building credibility with banks and investors",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">About Accounting & Audit Services</h2>
        <p className="text-center text-muted-foreground mt-3">
          Proper accounting and auditing aapke business ki backbone hai. CA Praveen Jain & Associates provides end-to-end solutions tailored to your needs.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-3 p-4 rounded-xl border bg-muted/20">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSplit() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6 max-w-6xl">
        <div className="p-7 rounded-2xl border bg-white">
          <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">Our Accounting Services</h2>
          <ul className="mt-4 space-y-2.5">
            {ACCOUNTING.map((i) => (
              <li key={i} className="flex gap-2 items-start"><BadgeCheck className="h-4 w-4 text-brand shrink-0 mt-1" /><span className="text-ink">{i}</span></li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">Accurate, timely and compliant accounting — har month.</p>
        </div>
        <div className="p-7 rounded-2xl border bg-white">
          <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
            <FileSearch className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">Our Audit Services</h2>
          <ul className="mt-4 space-y-2.5">
            {AUDIT.map((i) => (
              <li key={i} className="flex gap-2 items-start"><BadgeCheck className="h-4 w-4 text-brand shrink-0 mt-1" /><span className="text-ink">{i}</span></li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">Ensure transparency and regulatory compliance.</p>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Common Problems Faced by Businesses</h2>
        <p className="text-center text-muted-foreground mt-2">Poor accounting can lead to penalties and business risks.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p) => (
            <div key={p} className="flex items-start gap-3 p-5 rounded-xl border bg-red-50/50">
              <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Help() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">How We Help You</h2>
        <p className="text-center text-muted-foreground mt-2">Focus on your business while we handle your finances.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HELP.map((p) => (
            <div key={p} className="flex items-start gap-3 p-5 rounded-xl border bg-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
        <p className="text-center text-muted-foreground mt-2">Structured and professional approach.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {STEPS.map((s, i) => (
            <div key={s} className="relative p-5 rounded-xl border bg-muted/20 hover:shadow-lg transition-all">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <p className="mt-3 text-sm font-medium text-ink">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Who Needs This Service?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHO.map((p) => (
            <div key={p} className="flex items-start gap-3 p-5 rounded-xl border bg-white">
              <TrendingUp className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
        <p className="text-center text-muted-foreground mt-2">Full onboarding support provided.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {DOCS.map((d) => (
            <div key={d} className="flex items-start gap-3 p-4 rounded-xl border bg-muted/20">
              <FileText className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-ink">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { stat: "1000+", label: "Books Maintained" },
    { stat: "500+", label: "Audits Completed" },
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
        <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            "Excellent accounting support for my business.",
            "Very professional audit services.",
            "Helped maintain compliance without stress.",
          ].map((q) => (
            <div key={q} className="p-5 rounded-2xl bg-white border">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
              <p className="mt-3 text-sm text-ink italic">"{q}"</p>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold">Ensure your business stays compliant, accurate and financially strong</h2>
        <p className="mt-3 text-white/90">Get expert CA-led accounting & audit support today.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            Get Accounting & Audit Support <ArrowRight className="h-4 w-4" />
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
          </a>
          <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA
          </a>
        </div>
      </div>
    </section>
  );
}
