import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, MessageCircle, Star, ShieldCheck, BadgeCheck,
  Phone, ChevronDown, FileText, Calculator, ClipboardCheck, AlertTriangle,
  Building2, Users, ShoppingCart, Briefcase, CheckCircle2, Receipt,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { TDS_SERVICES } from "@/data/tdsServices";

const FAQS = [
  { q: "Is TDS return filing mandatory?", a: "Yes — agar TDS deduct kiya hai, quarterly return filing mandatory hai." },
  { q: "How often are TDS returns filed?", a: "Quarterly — 24Q (salary), 26Q (non-salary residents), 27Q (non-residents), and TCS returns 27EQ." },
  { q: "What is the penalty for late filing?", a: "₹200 per day under Section 234E (subject to TDS amount), plus interest u/s 201 for late deposit." },
  { q: "What is TAN?", a: "Tax Deduction & Collection Account Number — 10-digit alphanumeric ID required to deduct/collect TDS or TCS." },
  { q: "Can a CA handle complete compliance?", a: "Haan — TAN apply se lekar calculation, deposit, return filing, correction & notice reply, sab end-to-end handle karte hain." },
  { q: "Mujhe TCS bhi file karna hai, kya aap karte ho?", a: "Bilkul — 27EQ TCS returns, scrap / motor vehicle / e-commerce / specified goods sab cover karte hain." },
];

const SERVICES = [
  { icon: Receipt, title: "TAN Registration", text: "TAN application & allotment for new deductors / collectors." },
  { icon: FileText, title: "TDS Return Filing", text: "24Q (salary), 26Q (non-salary), 27Q (non-resident) — quarterly." },
  { icon: ClipboardCheck, title: "TCS Return Filing", text: "27EQ quarterly returns — scrap, motor vehicles, e-commerce & more." },
  { icon: Calculator, title: "TDS Calculation", text: "Correct section / rate / threshold mapping for every payment." },
  { icon: AlertTriangle, title: "Correction & Revised Returns", text: "PAN errors, challan mismatches, demand notices — defect-free fix." },
  { icon: ShieldCheck, title: "Compliance Advisory", text: "Notices, defaults, lower-deduction certificates & TRACES support." },
];

export const Route = createFileRoute("/tds-tcs/")({
  head: () => ({
    meta: [
      { title: "TDS & TCS Return Filing Services in India — Expert CA | Praveen J & Associates" },
      {
        name: "description",
        content:
          "End-to-end TDS & TCS compliance — TAN registration, 24Q/26Q/27Q/27EQ return filing, correction returns, notice reply & advisory by expert CA.",
      },
      { property: "og:title", content: "TDS & TCS Return Filing Services — CA-Led Compliance" },
      { property: "og:description", content: "Avoid penalties. CA-managed TDS / TCS calculation, deposit, quarterly returns & corrections — India-wide." },
      { property: "og:url", content: "/tds-tcs" },
      { name: "keywords", content: "TDS return filing India, TCS return filing India, TDS compliance services, TDS filing online India, CA TDS TCS services, 24Q 26Q 27Q 27EQ filing" },
    ],
    links: [{ rel: "canonical", href: "/tds-tcs" }],
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "TDS & TCS Return Filing",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description: "End-to-end TDS & TCS compliance — TAN, calculation, deposit, quarterly returns, corrections & notices.",
        }),
      },
    ],
  }),
  component: TdsTcsHub,
});

function TdsTcsHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <WhatIs />
        <WhoFor />
        <ServicesGrid />
        <SubServices />
        <Compliance />
        <Process />
        <Docs />
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
            <Sparkles className="h-3.5 w-3.5" /> TDS &amp; TCS Expert
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            TDS &amp; TCS Return Filing Services in India — Complete Compliance by Expert CA
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Penalties se bachao, deadlines miss mat karo — CA-led TDS / TCS compliance, end-to-end.
          </p>
          <p className="mt-2 text-muted-foreground">
            TAN registration, calculation, quarterly returns (24Q, 26Q, 27Q, 27EQ), corrections & notice support — sab handle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              Start TDS/TCS Filing <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat with CA
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> Zero-Penalty Focus</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Free CA Callback for TDS / TCS</h3>
          <p className="text-sm text-muted-foreground mt-1">Share details — CA will connect within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need TDS/TCS filing support.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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
  const items = [
    "Wrong TDS deduction rate / section",
    "Missed quarterly filing deadlines",
    "Late fees & interest piling up",
    "PAN errors & challan mismatches",
    "Demand notices from TRACES / IT Department",
    "Vendor TDS credit mismatches",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Common TDS / TCS Problems</h2>
        <p className="text-center text-muted-foreground mt-2">Chhoti chook bhi heavy penalty bana deti hai.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t) => (
            <div key={t} className="p-4 rounded-xl border bg-amber-50/50 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <span className="text-sm text-ink">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">What is TDS &amp; TCS?</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border-l-4 border-brand shadow-sm">
            <h3 className="font-display text-xl font-bold text-brand">TDS — Tax Deducted at Source</h3>
            <p className="text-sm text-muted-foreground mt-2">Specified payments par tax payer ko paisa dene se pehle deduct hota hai.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {["Salary payments (Section 192)", "Rent (194I / 194IB)", "Professional fees (194J)", "Contractor payments (194C)", "Commission, interest, dividend, etc."].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border-l-4 border-emerald-500 shadow-sm">
            <h3 className="font-display text-xl font-bold text-emerald-600">TCS — Tax Collected at Source</h3>
            <p className="text-sm text-muted-foreground mt-2">Specified goods / services bechte waqt buyer se tax collect hota hai.</p>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              {["Sale of goods (206C(1H))", "E-commerce transactions (194-O)", "Scrap, motor vehicle, minerals", "Foreign remittance under LRS", "High-value specified transactions"].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-6 text-sm">
          Dono mein <span className="font-semibold text-ink">accurate deduction, timely deposit &amp; return filing</span> zaroori hai.
        </p>
      </div>
    </section>
  );
}

function WhoFor() {
  const items = [
    { icon: Building2, t: "Businesses & Companies" },
    { icon: Users, t: "Employers & HR Teams" },
    { icon: Briefcase, t: "Traders & Service Providers" },
    { icon: Sparkles, t: "Startups & SMEs" },
    { icon: ShoppingCart, t: "E-commerce Businesses" },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Who Should Use This Service?</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((i) => (
            <div key={i.t} className="p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5 text-center">
              <i.icon className="h-6 w-6 text-brand mx-auto" />
              <p className="mt-3 text-sm font-semibold text-ink">{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Services We Offer</h2>
        <p className="text-center text-muted-foreground mt-2">End-to-end TDS &amp; TCS compliance — one CA, zero stress.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="group p-6 rounded-2xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all">
              <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-bold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return ComplianceInner();
}

function SubServices() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Explore TDS / TCS Sub-Services</h2>
        <p className="text-center text-muted-foreground mt-2">Dedicated CA-led pages — forms, certificates, corrections & more.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TDS_SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/tds-tcs/$slug"
              params={{ slug: s.slug }}
              className="group p-6 rounded-2xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all"
            >
              <h3 className="font-display font-bold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.heroLead}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceInner() {
  const items = [
    "TDS must be deducted at the correct section & rate",
    "Deposit by 7th of next month (April: 30th)",
    "Quarterly returns: 24Q / 26Q / 27Q / 27EQ",
    "Late filing fee ₹200/day u/s 234E",
    "Interest 1% / 1.5% per month for delays",
    "Form 16 / 16A issuance to deductees",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Important Compliance Points</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {items.map((t) => (
            <div key={t} className="p-4 rounded-xl border bg-emerald-50/40 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-ink">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Applicability Check", text: "Sections, rates & thresholds map kiye jaate hain." },
    { title: "TAN Registration", text: "Naye deductor hain to TAN allotment karte hain." },
    { title: "Calculate & Deposit", text: "Accurate TDS / TCS, time pe challan deposit." },
    { title: "Quarterly Return", text: "24Q / 26Q / 27Q / 27EQ — error-free filing." },
    { title: "Ongoing Support", text: "Form 16/16A, corrections, notice reply — sab cover." },
  ];
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our 5-Step Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative p-5 rounded-xl border bg-white">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-ink text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Docs() {
  const docs = ["PAN & Aadhaar of deductor", "TAN details (if available)", "Salary / vendor / payment data", "Challan copies & bank statement", "Deductee PAN list & financial records"];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
        <p className="text-center text-muted-foreground mt-2">Hum end-to-end handle karte hain — bas yeh share kar dein.</p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {docs.map((d) => (
            <li key={d} className="p-4 rounded-xl border bg-muted/30 flex items-start gap-3">
              <FileText className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm text-ink">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { stat: "5000+", label: "TDS / TCS Returns Filed" },
    { stat: "500+", label: "Happy Businesses" },
    { stat: "10+", label: "Years Experience" },
    { stat: "4.8/5", label: "Google Rating" },
  ];
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((i) => (
            <div key={i.label} className="p-6 rounded-2xl bg-white border text-center">
              <div className="font-display text-3xl font-bold text-brand">{i.stat}</div>
              <div className="text-sm text-muted-foreground mt-1">{i.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {["Never missed TDS deadlines after working with them.", "Smooth and accurate filing every quarter.", "Very reliable CA support — notice bhi resolve kara diya."].map((q) => (
            <blockquote key={q} className="p-5 rounded-2xl bg-white border text-sm text-ink italic">
              &ldquo;{q}&rdquo;
              <div className="mt-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
              </div>
            </blockquote>
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
        <h2 className="font-display text-3xl md:text-4xl font-bold">Avoid Penalties — Get Expert TDS &amp; TCS Filing Today</h2>
        <p className="mt-3 text-white/90">Quarter-end ki tension khatam. CA-led compliance, zero stress.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            Start TDS/TCS Filing <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+918169887643" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA Now
          </a>
        </div>
      </div>
    </section>
  );
}
