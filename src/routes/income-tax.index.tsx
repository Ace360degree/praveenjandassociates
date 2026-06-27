import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, MessageCircle, Play, Star,
  AlertTriangle, FileText, FileSpreadsheet, Receipt, RefreshCw, Bell, Gavel,
  IndianRupee, Globe2, Briefcase, Users, TrendingUp, Wallet, Building2,
  Zap, Headphones, BadgeCheck, ClipboardCheck, BookOpen, ChevronDown,
  Calculator, Landmark, Coins,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import praveen from "@/assets/praveen.jpg";
import { ITR_SERVICES } from "@/data/incomeTaxServices";

const FAQS = [
  { q: "Mujhe kaunsa ITR form file karna chahiye?", a: "Aapki income type pe depend karta hai — sirf salary/interest/rent (single property) hai toh ITR-1; capital gain / multiple properties par ITR-2; business / profession / F&O par ITR-3 / ITR-4. CA ek call par sahi form decide kar deta hai." },
  { q: "Kya pichle saal ka ITR file ho sakta hai?", a: "Haan — Section 139(8A) ke under Updated Return (ITR-U) 4 assessment years tak file kar sakte ho, additional tax (25–70%) pay karke. Refund claim ITR-U mein allowed nahi." },
  { q: "Notice aaya hai — kya karna chahiye?", a: "Notice ka type (143(1), 142, 148, 148A) dekh ke time-bound reply karna mandatory hai. Hum end-to-end notice handling karte hain — reply drafting se hearing tak." },
  { q: "NRI ko bhi ITR file karna padta hai?", a: "Agar India mein income (rent, interest, capital gain, business) > basic exemption hai, ya refund chahiye, toh haan. NRO TDS aksar zyada deduct hota hai — refund mil jaata hai." },
  { q: "Capital gain par tax kaise calculate hota hai?", a: "Equity LTCG > ₹1.25L: 12.5%, STCG: 20%. Property LTCG: 12.5% (without indexation) / 20% (with indexation, pre-23 July 2024 purchase). Section 54 / 54EC / 54F exemption planning se tax bachta hai." },
  { q: "Refund kab tak aata hai?", a: "ITR e-verify hone ke 15–45 din mein generally refund credit ho jaata hai. Bank account pre-validated hona zaroori. ITR-1 walon ke liye process tezi se hota hai." },
];

const PROBLEMS = [
  { icon: FileText, title: "Confused About ITR Form", text: "Salary, business, capital gain — kaunsa form sahi hai pata nahi." },
  { icon: AlertTriangle, title: "Wrong Filing", text: "Galat form ya galat figures se 143(1) demand / defective notice." },
  { icon: Coins, title: "Missed Deductions", text: "80C, 80D, HRA, NPS — eligible deductions miss ho jaate hain." },
  { icon: TrendingUp, title: "Capital Gain Confusion", text: "STCG vs LTCG, indexation, Section 54 — DIY se galti aam hai." },
  { icon: Globe2, title: "Crypto & Foreign Income", text: "VDA 30% flat, Schedule FA disclosure, DTAA relief — specialised area." },
  { icon: Bell, title: "Late Filing Risk", text: "Belated par penalty + interest + loss carry-forward khatam." },
];

const IT_SERVICES = [
  {
    icon: Wallet,
    title: "Simple ITR-1",
    sub: "Salary · Rent · Interest · Dividend",
    items: ["Salary income", "One house property", "Interest & dividend", "Pension"],
    cta: "Know More",
    slug: "simple-itr-1-salary",
  },
  {
    icon: Briefcase,
    title: "Business ITR-4",
    sub: "Presumptive — 44AD / 44ADA",
    items: ["Small business 44AD", "Professionals 44ADA", "Composition friendly"],
    cta: "Know More",
    slug: "business-itr-4-presumptive",
  },
  {
    icon: TrendingUp,
    title: "Capital Gain ITR-2",
    sub: "Shares · Mutual Funds · Property",
    items: ["Equity STCG / LTCG", "Mutual fund gains", "Property sale", "ESOP / RSU"],
    cta: "Know More",
    slug: "capital-gain-itr-2",
  },
  {
    icon: Calculator,
    title: "Business ITR-3",
    sub: "F&O · Intraday · Profession · Partner",
    items: ["F&O / derivatives", "Intraday trading", "Commission / professional", "Partnership income"],
    cta: "Know More",
    slug: "business-itr-3",
  },
  {
    icon: Building2,
    title: "LLP / Firm / Company",
    sub: "ITR-5 · ITR-6 · Corporate Tax",
    items: ["LLP & partnership firm", "Private Limited Company", "Tax audit u/s 44AB", "115BAA / 115BAB regime"],
    cta: "Know More",
    slug: "llp-firm-company-itr",
  },
  {
    icon: Globe2,
    title: "Special Income",
    sub: "Crypto · NRI · Lottery · Foreign",
    items: ["Crypto / VDA (30%)", "NRI ITR & DTAA", "Foreign salary / ESOP", "Lottery / gaming TDS refund"],
    cta: "Know More",
    slug: "special-income-crypto-nri",
  },
  {
    icon: RefreshCw,
    title: "Updated ITR (ITR-U)",
    sub: "Fix Past 1–4 Years",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "updated-itr-u",
  },
  {
    icon: FileSpreadsheet,
    title: "Revised & Rectification",
    sub: "139(5) · 139(9) · 154",
    items: ["Revised return 139(5)", "Defective notice 139(9)", "Rectification 154", "Refund mismatch"],
    cta: "Fix Return",
    slug: "revised-rectification",
  },
  {
    icon: Bell,
    title: "Income Tax Notice",
    sub: "143(1) · 142 · 148 · 148A",
    items: ["143(1) intimation", "142 / 143(2) scrutiny", "148 / 148A reassessment", "245 refund adjustment"],
    cta: "Get Help",
    slug: "income-tax-notice",
  },
  {
    icon: Gavel,
    title: "Appeal & Reply",
    sub: "CIT(A) · ITAT · Hearing",
    items: ["First appeal CIT(A)", "ITAT appeal", "Stay applications", "Faceless representation"],
    cta: "Talk To CA",
    slug: "appeal-reply",
  },
  {
    icon: FileText,
    title: "Draft Reply to Notice",
    sub: "Professional Letter Drafting",
    items: ["139(9) defective ITR", "143(1) intimation", "142(1) inquiry", "148 / 148A reassessment"],
    cta: "Get Drafted",
    slug: "drafting-reply-to-income-tax-notice",
  },
  {
    icon: Gavel,
    title: "Income Tax Appeal & Reply",
    sub: "Form 35 · CIT(A) · ITAT",
    items: ["Challenge assessment orders", "File Form 35", "ITAT escalation", "Dispute resolution"],
    cta: "File Appeal",
    slug: "income-tax-appeal-and-reply",
  },
  {
    icon: Gavel,
    title: "Appeal & Hearing",
    sub: "CIT(A) Representation u/s 250",
    items: ["Hearing preparation", "Written submissions", "Oral / video representation", "Post-order strategy"],
    cta: "Represent Me",
    slug: "appeal-and-hearing-income-tax",
  },
];

const SEGMENTS = [
  { icon: Wallet, label: "Salaried Employees" },
  { icon: Briefcase, label: "Freelancers" },
  { icon: Headphones, label: "Consultants" },
  { icon: Building2, label: "Business Owners" },
  { icon: TrendingUp, label: "Stock Traders" },
  { icon: Landmark, label: "LLPs" },
  { icon: Building2, label: "Companies" },
  { icon: Globe2, label: "NRIs" },
];

const WHY = [
  { icon: BadgeCheck, title: "Experienced Chartered Accountants", text: "Qualified CA team — every return reviewed by an expert." },
  { icon: ShieldCheck, title: "Accurate Filing", text: "AIS / 26AS / TIS reconciled — zero mismatch, zero stress." },
  { icon: ClipboardCheck, title: "Maximum Compliance", text: "Old vs New regime, deductions, exemptions — everything optimised." },
  { icon: Bell, title: "Notice Support", text: "143(1) demand, 148A, scrutiny — full notice & appeal support." },
  { icon: Zap, title: "Fast Turnaround", text: "Quick filing — refund tracking included till credit." },
  { icon: Headphones, title: "Expert Guidance", text: "Hinglish explanations, no jargon, transparent advice." },
];

const INSIGHTS = [
  { title: "ITR Filing Deadlines", text: "31 July (non-audit) / 31 Oct (audit) / 30 Nov (TP). Belated par penalty + interest." },
  { title: "Updated Return (ITR-U)", text: "Past 4 AYs tak file ho sakta hai — additional tax 25–70%. Refund nahi milta." },
  { title: "Capital Gain Rates", text: "Post 23 July 2024: Equity LTCG 12.5% (>₹1.25L), STCG 20%. Property LTCG 12.5%." },
  { title: "Notice Risk", text: "AIS / 26AS mismatch, high-value transaction = scrutiny ya 148 reopening risk." },
  { title: "Tax Planning", text: "80C ₹1.5L, 80D, NPS 50K, home loan interest ₹2L — proper planning se tax save hota hai." },
  { title: "Refund Process", text: "E-verification ke baad 15–45 din. Pre-validated bank account mandatory." },
];

const STEPS = [
  { n: "01", title: "Share Documents", text: "Form 16, broker statements, AIS — WhatsApp par bhejein." },
  { n: "02", title: "Income Analysis", text: "AIS / 26AS / TIS reconcile karke complete income picture banate hain." },
  { n: "03", title: "Correct ITR Selection", text: "ITR-1 to ITR-6 — sahi form aur regime (Old vs New) decide." },
  { n: "04", title: "Expert Filing", text: "Computation, deductions, schedules — CA review ke baad filing." },
  { n: "05", title: "Acknowledgement & Support", text: "ITR-V, e-verification, refund tracking + post-filing support." },
];

const DOC_PERSONAL = ["PAN & Aadhaar", "Form 16 (from employer)", "Bank statement / passbook", "Investment proofs (80C, 80D, NPS)", "Home loan / rent receipts"];
const DOC_BUSINESS = ["Books of accounts / P&L", "Capital gain statement (broker)", "Foreign income & assets docs", "GST returns (if registered)", "Bank statements (all accounts)"];

const REVIEWS = [
  { name: "Aniket Sharma", role: "Salaried IT Professional", text: "Form 16 share kiya, 2 din mein ITR filed + ₹38K refund. AIS mismatch bhi PJ&A ne sort kiya." },
  { name: "Priya Mehta", role: "Stock Trader (F&O)", text: "F&O turnover, audit applicability — sab handle. ITR-3 filing super smooth. Year-on-year le rahi hu." },
  { name: "Rohit Khanna", role: "NRI (Dubai)", text: "India mein rental income aur capital gain — DTAA relief le ke refund mila. Highly professional team." },
];

const BLOGS = [
  { tag: "Income Tax", title: "ITR Filing 2025: Complete Guide for Salaried Taxpayers", color: "from-red-100 to-rose-50" },
  { tag: "Capital Gain", title: "New Capital Gain Rules After 23 July 2024 — Explained", color: "from-amber-100 to-orange-50" },
  { tag: "Updated ITR", title: "ITR-U: How to File Updated Return for Past 4 Years", color: "from-rose-100 to-red-50" },
  { tag: "Notice", title: "Got a 143(1) Intimation? Here's What to Do", color: "from-red-100 to-rose-50" },
  { tag: "NRI Tax", title: "NRI ITR Filing in India: DTAA, Schedule FA & More", color: "from-amber-100 to-orange-50" },
  { tag: "Crypto", title: "Crypto Tax in India: 30% Flat, 1% TDS & Disclosure", color: "from-rose-100 to-red-50" },
];

const FORM_OPTIONS = ["Salary ITR", "Business ITR", "Capital Gain", "Updated ITR", "Notice", "NRI ITR", "Other"];

export const Route = createFileRoute("/income-tax/")({
  head: () => ({
    meta: [
      { title: "Income Tax Filing Services in India — Expert CA Help | Praveen J & Associates" },
      { name: "description", content: "Expert Chartered Accountant for Income Tax Return filing — Salary, Business, Capital Gain, F&O, NRI, Crypto, Updated ITR (ITR-U) & Notice handling. Pan India online." },
      { name: "keywords", content: "Income Tax Filing Services, ITR Filing, Income Tax Consultant, Chartered Accountant, Updated ITR, Income Tax Notice, Business ITR, Capital Gain Tax, NRI Tax Filing" },
      { property: "og:title", content: "Income Tax Filing Services by Praveen J & Associates" },
      { property: "og:description", content: "ITR filing for salaried, business, capital gain, F&O, NRI & crypto. Updated ITR, notice handling, appeal — all under one CA roof." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/income-tax" },
    ],
    links: [{ rel: "canonical", href: "/income-tax" }],
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
          serviceType: "Income Tax Return Filing",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: IncomeTaxPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function ItHero() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs font-semibold text-brand shadow-card">
            🔥 Income Tax Expert CA
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Income Tax Filing Services — <span className="text-brand">Expert Chartered Accountant</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Filing your Income Tax Return doesn't have to be stressful. Salaried, freelancer, trader, business owner ya company — accurate filing, maximum compliance aur timely submission, hum sambhalenge.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Expert CA Support</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Accurate Filing</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Notice Assistance</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand" /> Pan India Online</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#it-lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-red px-6 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#it-lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-white border border-border px-6 text-sm font-semibold text-foreground hover:border-primary hover:text-brand transition">
              File Your ITR
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white hover:opacity-90 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-soft bg-white p-3">
            <div className="relative aspect-[16/12] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
              <img src={praveen} alt="CA Praveen Jain — Income Tax Expert" className="absolute inset-0 w-full h-full object-cover" />
              <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 backdrop-blur shadow-soft flex items-center justify-center hover:scale-110 transition-transform" aria-label="Play Income Tax intro video">
                <Play className="h-6 w-6 text-brand fill-brand ml-1" />
              </button>
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Income Tax Explainer
              </div>
            </div>
          </div>
          <div id="it-lead" className="mt-5 rounded-3xl bg-white shadow-soft border border-border p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg">Talk To CA</h3>
              <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-1 rounded-full">Free Call</span>
            </div>
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
                <p className="mt-2 font-semibold">Thanks! Hamari CA team jaldi connect karegi.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-3">
                <input required placeholder="Your Name" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <select required className="h-11 rounded-xl border border-border px-4 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Income Tax Requirement</option>
                  {FORM_OPTIONS.map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="h-12 rounded-xl bg-gradient-red text-white font-semibold shadow-soft hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Talk To CA <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Quick response • No spam • Expert CA Support
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Common Tax Problems" title="Income Tax Galat File Hua To Notice Aa Sakta Hai ⚠️" sub="Yeh issues familiar lagte hain? Time rehte expert CA se baat karein." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center group-hover:bg-gradient-red group-hover:text-white transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">A small mistake today can become a costly notice tomorrow.</p>
      </div>
    </section>
  );
}

function ItServices() {
  return (
    <section id="it-services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Our Income Tax Services" title="Every Income Tax Case — Handled" sub="Salary, business, capital gain, F&O, NRI, crypto, notice, appeal — sab ek CA roof ke under." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IT_SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/income-tax/$slug"
              params={{ slug: s.slug }}
              className="group relative rounded-3xl border border-border bg-white p-6 hover:border-primary hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 text-brand flex items-center justify-center mb-5 group-hover:bg-gradient-red group-hover:text-white transition-colors">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                {s.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Segments() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Who Needs This Service" title="Kya Yeh Income Tax Service Aapke Liye Hai?" sub="Agar aap inme se kisi bhi category mein hain — yes, hum aapke liye hain." />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {SEGMENTS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 text-center shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-3 font-semibold text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Why Choose Us" title="Why Businesses & Individuals Trust PJ&A" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Important Tax Insights" title="Income Tax — Jo Aapko Pata Hona Chahiye" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSIGHTS.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 border-l-4 border-brand shadow-card">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold">{i.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Simple Process" title="5 Step Mein ITR Filed" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-6 hover:border-primary/30 hover:shadow-card transition-all">
              <div className="font-display text-4xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-2 font-display font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              {i < STEPS.length - 1 && <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand/40" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Document Checklist" title="Documents Required" sub="Itna ready rakhein — baaki sab hum karenge." />
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { title: "Personal Documents", icon: BadgeCheck, items: DOC_PERSONAL },
            { title: "Business / Investment Docs", icon: FileSpreadsheet, items: DOC_BUSINESS },
          ].map((g) => (
            <div key={g.title} className="rounded-3xl bg-white border border-border p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{g.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItReviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Google Reviews" title="Trusted by Individuals & Businesses" sub="⭐ 4.8 · 120+ Reviews" />
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white border border-border p-6 shadow-card hover:shadow-soft transition-all">
              <div className="flex gap-0.5 mb-3">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t">
                <div className="h-10 w-10 rounded-full bg-gradient-red text-white flex items-center justify-center font-bold">{r.name[0]}</div>
                <div><div className="font-semibold text-sm">{r.name}</div><div className="text-xs text-muted-foreground">{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learning() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Featured Blogs" title="Income Tax Blogs & Updates" sub="Stay updated. Stay compliant." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOGS.map((p) => (
            <a key={p.title} href="#" className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <BookOpen className="h-12 w-12 text-brand/40" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-brand px-2 py-0.5 rounded-full">{p.tag}</span>
                <h3 className="mt-3 font-display font-bold leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">Read More <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Frequently asked Income Tax questions" />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItFinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-red">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto px-4 relative text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-5">
          <ClipboardCheck className="h-4 w-4" /> Limited slots this week
        </div>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Don't Risk Penalties. File Your Income Tax Return Correctly.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          Expert Chartered Accountant Support for Individuals, Professionals & Businesses.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#it-lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-brand hover:shadow-lg transition-all">
            Start ITR Filing <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#it-lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 border border-white/40 backdrop-blur px-7 text-sm font-bold text-white hover:bg-white/20 transition-all">
            Book Consultation
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function IncomeTaxPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ItHero />
        <Problems />
        <ItServices />
        <Segments />
        <WhyChoose />
        <Insights />
        <Process />
        <Documents />
        <ItReviews />
        <Learning />
        <ItFAQ />
        <ItFinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}