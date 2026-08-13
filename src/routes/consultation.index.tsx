import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, MessageCircle, Star, ShieldCheck, BadgeCheck,
  Phone, ChevronDown, Calculator, Headphones, TrendingUp, PiggyBank,
  ClipboardCheck, FileText, ScrollText,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { CONSULTATION_SERVICES } from "@/data/consultationServices";

const FAQS = [
  { q: "Consultation mein kya kya discuss kar sakte hain?", a: "Income tax, GST, MCA / ROC, business setup, compliance, capital gain, advance tax — kuch bhi tax / business-related." },
  { q: "Consultation paid hai?", a: "Quick queries free; detailed live sessions ka nominal fee hota hai — quote upfront share kar dete hain." },
  { q: "Kaise book karu?", a: "Form fill karein ya WhatsApp karein — slot confirm hote hi meeting link share kar dete hain." },
  { q: "Live consultation ka mode kya hai?", a: "Phone call, WhatsApp video, ya Zoom — apki convenience par." },
  { q: "Consultation ke baad full service mil sakti hai?", a: "Bilkul — ITR, GST, MCA, calculations, sab end-to-end hum handle karte hain." },
];

const ICONS: Record<string, typeof Headphones> = {
  "live-tax-consultation": Headphones,
  "income-tax-calculation": Calculator,
  "advance-tax-calculation": TrendingUp,
  "capital-gain-calculation": PiggyBank,
};

export const Route = createFileRoute("/consultation/")({
  head: () => ({
    meta: [
      { title: "Tax & Business Consultation — Live CA, Tax Calculators | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Live CA consultation, income tax, advance tax & capital gain calculators. Expert tax & business guidance — India-wide, CA-led.",
      },
      { property: "og:title", content: "Tax & Business Consultation Hub — Praveen J & Associates" },
      { property: "og:description", content: "Live CA consultation + accurate tax calculators — talk to a CA today." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
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
  component: ConsultationHub,
});

function ConsultationHub() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
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
            <Sparkles className="h-3.5 w-3.5" /> CA Consultation
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            Expert Tax &amp; Business Consultation — Talk to a CA Today
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Sahi advice sahi waqt par — lakhon ke nuksaan se bachao.
          </p>
          <p className="mt-2 text-muted-foreground">
            Live CA consultation, income tax / advance tax / capital gain calculators — sab kuch CA-led, India-wide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              Book Consultation <ArrowRight className="h-4 w-4" />
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
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Confidential</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Free Callback from CA</h3>
          <p className="text-sm text-muted-foreground mt-1">Share details, CA will connect within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need a CA consultation.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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

function ServicesGrid() {
  return (
    <section id="services" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Consultation &amp; Calculators</h2>
        <p className="text-center text-muted-foreground mt-2">Pick what you need — or talk to a CA to plan it together.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {CONSULTATION_SERVICES.map((s) => {
            const Icon = ICONS[s.slug] ?? Headphones;
            return (
              <Link
                key={s.slug}
                to="/consultation/$slug"
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
    { icon: MessageCircle, title: "Share Query", text: "WhatsApp / form — tell us your question." },
    { icon: ClipboardCheck, title: "Slot Book", text: "Confirmed slot + meeting link share." },
    { icon: Headphones, title: "Live Session", text: "Talk to CA via call / Zoom / WhatsApp." },
    { icon: FileText, title: "Action Plan", text: "Clear next steps + written summary." },
    { icon: ScrollText, title: "Optional Service", text: "Continue full ITR / GST / MCA service." },
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">How It Works</h2>
        <p className="text-center text-muted-foreground mt-2">Quick. Practical. Expert-led.</p>
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
    { stat: "1000+", label: "Consultations" },
    { stat: "500+", label: "Happy Clients" },
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
        <h2 className="font-display text-3xl md:text-4xl font-bold">Talk to a CA Today — Get Clarity &amp; Act</h2>
        <p className="mt-3 text-white/90">Don't guess. Get expert advice and make confident decisions.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform">
            Book Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+918169887643" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors">
            <Phone className="h-4 w-4" /> Call CA Now
          </a>
        </div>
      </div>
    </section>
  );
}
