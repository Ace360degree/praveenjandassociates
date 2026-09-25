import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, MessageCircle, Play, Star,
  AlertTriangle, FileText, FileSpreadsheet, Receipt, RefreshCw, Bell, Gavel,
  IndianRupee, Globe2, Store, Briefcase, Users, ShoppingCart, TrendingUp,
  Zap, Headphones, BadgeCheck, ClipboardCheck, BookOpen, ChevronDown, Building2,
} from "lucide-react";
import { Header } from "@/components/site/Header"; ``
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import praveen from "@/assets/praveen.jpg";

const FAQS = [
  { q: "Who needs GST registration?", a: "Businesses crossing threshold or doing interstate/e-commerce trade." },
  { q: "How often do I need to file GST returns?", a: "Monthly or quarterly depending on scheme." },
  { q: "What happens if I don't file GST?", a: "Penalty and interest apply." },
  { q: "Can CA handle complete GST?", a: "Yes, end-to-end service available." },
  { q: "How long does registration take?", a: "Usually a few working days." },
];

const PROBLEMS = [
  { icon: AlertTriangle, title: "Registration Confusion", text: "Confusion about GST registration eligibility." },
  { icon: Bell, title: "Late Filing Stress", text: "Missing return deadlines." },
  { icon: FileText, title: "Filing Errors", text: "Errors in GST filing." },
  { icon: Gavel, title: "Department Notices", text: "Notices from GST department." },
  { icon: RefreshCw, title: "Compliance Difficulty", text: "Difficulty in compliance and reconciliation." },
];

const GST_SERVICES = [
  {
    icon: BadgeCheck, title: "GST Registration", sub: "Business registration + approval support",
    items: ["New GST registration", "Voluntary registration", "Documentation & approval support"],
    cta: "Explore",
  },
  {
    icon: FileSpreadsheet, title: "GST Return Filing", sub: "Monthly & annual GST filing",
    items: ["Monthly / Quarterly returns (GSTR-1, GSTR-3B)", "Annual return filing", "Nil return filing"],
    cta: "File Now",
  },
  {
    icon: ClipboardCheck, title: "GST Compliance & Advisory", sub: "Tax planning and advisory",
    items: ["GST consultation", "Tax planning", "Compliance management"],
    cta: "Consult Now",
  },
  {
    icon: RefreshCw, title: "GST Notice & Correction", sub: "Avoid notices and errors",
    items: ["GST notice handling", "Error correction", "GST reconciliation"],
    cta: "Check Compliance",
  },
];

const ITEM_TO_SLUG: Record<string, string> = {
  "New GST registration": "new-gst-registration",
  "Voluntary registration": "new-gst-registration",
  "Monthly / Quarterly returns (GSTR-1, GSTR-3B)": "gst-return-filing-gstr1-gstr3b-india",
  "GST notice handling": "gst-registration-return-filing-services",
};

const SEGMENTS = [
  { icon: TrendingUp, label: "Startups and new businesses" },
  { icon: Store, label: "Traders, retailers, and wholesalers" },
  { icon: Briefcase, label: "Service providers and freelancers" },
  { icon: ShoppingCart, label: "E-commerce sellers" },
  { icon: Building2, label: "Businesses with GST compliance issues" },
];

const WHY = [
  { icon: BadgeCheck, title: "Expert CA support", text: "Qualified Chartered Accountants on every file." },
  { icon: Zap, title: "Accurate and timely filing", text: "Never miss a due date — proactive reminders." },
  { icon: ShieldCheck, title: "Complete compliance management", text: "End-to-end ongoing compliance handling." },
  { icon: Bell, title: "Notice handling support", text: "Department notices ka time-bound reply." },
  { icon: RefreshCw, title: "Hassle-free process", text: "Focus on your business — we handle GST." },
];

const INSIGHTS = [
  { title: "Registration is Mandatory", text: "GST registration is mandatory above threshold." },
  { title: "Regular Returns", text: "Monthly/quarterly return filing required." },
  { title: "Penalties for Late Filing", text: "Late filing leads to penalties." },
  { title: "Proper ITC Claims", text: "Input tax credit must be claimed correctly." },
  { title: "Business Growth", text: "Compliance is essential for business growth." },
];

const STEPS = [
  { n: "01", title: "Share Requirement", text: "Understand your business requirement." },
  { n: "02", title: "Document Collection", text: "Collect documents and details." },
  { n: "03", title: "Preparation", text: "Register or prepare GST returns." },
  { n: "04", title: "Filing", text: "File returns accurately." },
  { n: "05", title: "Compliance Support", text: "Ongoing compliance support." },
];

const REG_DOCS = ["PAN & Aadhaar", "Business proof", "Address proof", "Bank details"];
const RET_DOCS = ["Sales & purchase data", "Invoices", "GST login details"];

const REVIEWS = [
  { name: "Rahul Agarwal", role: "Start-up Founder", text: "Smooth GST registration and filing service." },
  { name: "Sneha Kapoor", role: "Small Business Owner", text: "Very reliable CA for GST compliance." },
  { name: "Mohit Singh", role: "E-commerce Seller", text: "Handled everything professionally." },
];

const BLOGS = [
  { tag: "Registration", title: "GST Registration in India: 2026 Complete Guide", color: "from-red-100 to-rose-50" },
  { tag: "Notice", title: "ASMT-10 Reply: Step-by-Step Approach for Businesses", color: "from-amber-100 to-orange-50" },
  { tag: "ITC", title: "Input Tax Credit: Rules, Conditions & Mistakes to Avoid", color: "from-rose-100 to-red-50" },
  { tag: "Filing", title: "GSTR-1 vs GSTR-3B: How to Reconcile Without Errors", color: "from-red-100 to-rose-50" },
  { tag: "Amnesty", title: "GST Amnesty Scheme: Clear Old Defaults Smartly", color: "from-amber-100 to-orange-50" },
];

const FORM_OPTIONS = ["New Registration", "GST Return", "GST Notice", "GST Reconciliation", "GST Consultation"];

const MORE_KEYWORDS = [
  "GST Registration Online",
  "GST Return Filing India",
  "GSTR-1 & GSTR-3B Filing",
  "GST Notice Reply",
  "GST Reconciliation Services",
  "GST Amendment Services",
  "GST Refund Services",
  "GST Cancellation Support",
];

export const Route = createFileRoute("/gst-registration-return-filing-services")({
  head: () => ({
    meta: [
      { title: "GST Registration & Return Filing Services in Mumbai | Expert CA for GST Compliance" },
      { name: "description", content: "Expert CA support for GST registration, return filing, notices, compliance, and more. Manage your GST hassle-free." },
      { property: "og:title", content: "GST Registration & Return Filing Services in Mumbai" },
      { property: "og:description", content: "Managing GST can be complex — but we make it simple, accurate, and hassle-free. Complete GST services including registration, return filing, and compliance with expert CA support." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gst-registration-return-filing-services" },
    ],
    links: [{ rel: "canonical", href: "/gst-registration-return-filing-services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: (f as any).a ?? "" },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "GST Registration & Return Filing Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "Mumbai, IN",
        }),
      },
    ],
  }),
  component: GstPage,
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
      <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight break-words">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

function GstHero() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs font-semibold text-brand shadow-card">
            <ShieldCheck className="h-3.5 w-3.5" /> GST Expert CA Support
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            GST Registration & Return Filing Services in Mumbai – <span className="text-brand">Expert CA for GST Compliance</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Starting a business or already registered under GST? Managing GST can be complex — but we make it simple, accurate, and hassle-free. Get complete GST services including registration, return filing, and compliance with expert CA support.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> GST Experts</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Fast Filing</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> Notice Support</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand" /> Pan India Online</span>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
            <a href="#gst-lead" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-red px-5 sm:px-6 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all text-center">
              Get GST Registration Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#gst-lead" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white border border-border px-5 sm:px-6 text-sm font-semibold text-foreground hover:border-primary hover:text-brand transition text-center">
              File GST Returns
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 sm:px-6 text-sm font-semibold text-white hover:opacity-90 transition text-center">
              <MessageCircle className="h-4 w-4" /> WhatsApp CA
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          {/* <Same Hero Side Form / Lead Form setup> */}
          <div className="relative rounded-3xl overflow-hidden shadow-soft bg-white p-3">
            <div className="relative aspect-[16/12] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
              <img src={praveen} alt="CA Praveen Jain — GST Expert" className="absolute inset-0 w-full h-full object-cover" />
              <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 backdrop-blur shadow-soft flex items-center justify-center hover:scale-110 transition-transform" aria-label="Play GST intro video">
                <Play className="h-6 w-6 text-brand fill-brand ml-1" />
              </button>
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> GST Explainer
              </div>
            </div>
          </div>
          <div id="gst-lead" className="mt-5 rounded-3xl bg-white shadow-soft border border-border p-4 sm:p-6 box-border max-w-full overflow-hidden min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg">File GST Easily</h3>
              <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-1 rounded-full">Free Call</span>
            </div>
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
                <p className="mt-2 font-semibold">Thanks! Hamari team jaldi connect karegi.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-3">
                <input required placeholder="Your Name" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <select required className="h-11 rounded-xl border border-border px-4 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">GST Requirement</option>
                  {FORM_OPTIONS.map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="h-12 rounded-xl bg-gradient-red text-white font-semibold shadow-soft hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Talk To CA <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Quick response • No spam
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
        <SectionTitle eyebrow="Common GST Pain Points" title="Businesses often struggle with GST" sub="GST mistakes can lead to penalties and business disruption." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
      </div>
    </section>
  );
}

function GstServices() {
  return (
    <section id="gst-services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Explore GST Services" title="Our GST Services" sub="End-to-end GST support under one roof." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {GST_SERVICES.map((s) => (
            <div key={s.title} className="group relative rounded-3xl border border-border bg-white p-6 hover:border-primary hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 text-brand flex items-center justify-center mb-5 group-hover:bg-gradient-red group-hover:text-white transition-colors">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                {s.items.map(i => {
                  const slug = ITEM_TO_SLUG[i];
                  const label = (
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}
                    </span>
                  );
                  return (
                    <li key={i}>
                      {slug ? (
                        <Link to="/gst/$slug" params={{ slug }} className="flex items-center gap-2 hover:text-brand transition-colors">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}
                        </Link>
                      ) : label}
                    </li>
                  );
                })}
              </ul>
              <a href="#gst-lead" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                {s.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
        <SectionTitle eyebrow="Who Needs This" title="Who Should Use This Service?" sub="This is ideal for:" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {SEGMENTS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-5 text-center shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-3 font-semibold text-sm leading-tight">{s.label}</div>
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
        <SectionTitle eyebrow="Why PJ&A for GST" title="Why Choose Us For GST?" sub="Focus on your business — we handle GST." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold leading-tight">{w.title}</h3>
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
        <SectionTitle eyebrow="Important Insights" title="Important GST Points" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INSIGHTS.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 border-l-4 border-brand shadow-card">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold leading-tight">{i.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{i.text}</p>
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
        <SectionTitle eyebrow="Simple Process" title="Our Process" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-6 hover:border-primary/30 hover:shadow-card transition-all">
              <div className="font-display text-4xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-2 font-display font-bold leading-tight">{s.title}</h3>
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
        <SectionTitle eyebrow="Checklist" title="Documents Required" sub="Itna ready rakhein — baaki sab hum karenge." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { title: "For Registration", icon: BadgeCheck, items: REG_DOCS },
            { title: "For Return Filing", icon: FileSpreadsheet, items: RET_DOCS },
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

function GstReviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Client Trust" title="Businesses Trust PJ&A" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl bg-white border border-border p-6 shadow-card hover:shadow-soft transition-all">
              <div className="flex gap-0.5 mb-3">{[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
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
        <SectionTitle eyebrow="Learning Hub" title="GST Blogs & Guides" sub="Stay updated. Stay compliant." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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

function MoreGST() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-border bg-white px-6 py-8 lg:px-10 lg:py-10 shadow-sm max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> More
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">More About GST Registration & Return Filing</h2>
            <p className="mt-2 text-muted-foreground">
              Common search phrases people use when looking for GST registration, return filing,
              amendments, reconciliation, and notices.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {MORE_KEYWORDS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border bg-muted/30 px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function GstFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Frequently asked GST questions" />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{(f as any).a ?? (f as any).o}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GstFinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-red">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto px-4 relative text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-5">
          <ClipboardCheck className="h-4 w-4" /> Limited slots this week
        </div>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto break-words">
          GST compliance is critical for your business — don't take risks.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          Get expert CA support and manage your GST smoothly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3">
          <a href="#gst-lead" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-brand hover:shadow-lg transition-all text-center">
            Start GST Registration Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#gst-lead" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white/10 border border-white/40 backdrop-blur px-6 text-sm font-bold text-white hover:bg-white/20 transition-all text-center">
            File Your GST Returns
          </a>
          <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white hover:opacity-90 transition text-center">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function GstPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <GstHero />
        <Problems />
        <GstServices />
        <Segments />
        <WhyChoose />
        <Insights />
        <Process />
        <Documents />
        <GstReviews />
        <MoreGST />
        <Learning />
        <GstFAQ />
        <GstFinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}


