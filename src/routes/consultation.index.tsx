import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ArrowRight, MessageCircle, Star, ShieldCheck, BadgeCheck,
  ChevronDown, Phone, CheckCircle2, AlertTriangle, Building2, Receipt,
  Scale, TrendingUp, Users
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { CONSULTATION_SERVICES } from "@/data/consultationServices";

const FAQS = [
  { q: "What can I ask in consultation?", a: "Anything related to tax, GST, business setup, or compliance." },
  { q: "How is consultation provided?", a: "Via call, WhatsApp, or online meeting." },
  { q: "Is consultation paid?", a: "Basic consultation may be free or chargeable depending on scope." },
  { q: "How long is the consultation?", a: "Typically 15–30 minutes." },
  { q: "Can I continue services after consultation?", a: "Yes, we offer complete end-to-end services." },
];

export const Route = createFileRoute("/consultation/")({
  head: () => ({
    meta: [
      { title: "Expert Tax & Business Consultation Services in India – Talk to CA Today | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Talk to experienced Chartered Accountants for expert guidance on tax, GST, company setup, and compliance. CA consultation services in India.",
      },
      { property: "og:title", content: "Expert Tax & Business Consultation Services in India – Talk to CA Today" },
      { property: "og:description", content: "Get clear answers for your tax & business questions. Talk to experienced CAs today." },
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
    <div className="min-h-screen flex flex-col min-w-0 overflow-x-hidden">
      <Header />
      <main className="flex-1 min-w-0">
        <Hero />
        <AboutServices />
        <ConsultationAreas />
        <WhyConsultCA />
        <CommonProblems />
        <HowWeHelp />
        <Process />
        <WhoShouldOpt />
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
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5 py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-w-0 box-border w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 shrink-0" /> Quick consultation with practical, actionable advice
          </span>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-ink break-words min-w-0">
            Expert Tax &amp; Business Consultation Services in India – Talk to CA Today
          </h1>
          <p className="mt-3 text-base sm:text-lg font-semibold text-brand">
            Get Clear Answers for Your Tax &amp; Business Questions
          </p>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Talk to experienced Chartered Accountants for expert guidance on tax, GST, company setup, and compliance.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#lead" className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all text-center">
              Book Consultation Now <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-6 py-3 font-semibold hover:bg-[#25D366]/20 transition-all text-center">
              <MessageCircle className="h-4 w-4 shrink-0" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand shrink-0" /> 100% Confidential</span>
          </div>
        </div>
        <div id="lead" className="bg-white rounded-2xl shadow-xl border p-4 sm:p-6 lg:p-8 min-w-0 w-full box-border">
          <h3 className="font-display text-lg sm:text-xl font-bold text-ink">Book Consultation / Callback</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Share details, our CA will connect with you shortly.</p>
          <form
            className="mt-5 space-y-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need CA consultation.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/918169887643?text=${msg}`, "_blank");
            }}
          >
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 min-h-[48px] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile Number" className="w-full rounded-lg border px-4 py-3 min-h-[48px] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email Address" className="w-full rounded-lg border px-4 py-3 min-h-[48px] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <button type="submit" className="w-full min-h-[48px] rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
              Request Callback <ArrowRight className="h-4 w-4 shrink-0" />
            </button>
            <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function AboutServices() {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border">
        <div className="rounded-2xl bg-gradient-to-br from-brand/5 to-transparent border border-brand/20 p-6 sm:p-8 lg:p-10">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink">
            About Our Consultation Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Whether you’re starting a business or managing compliance, getting the right advice at the right time is crucial.
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-ink text-sm sm:text-base mb-3">We provide expert consultation for:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Business setup and registration",
                "GST and tax planning",
                "Company and LLP compliance",
                "Financial and legal guidance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border text-sm text-ink font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold text-brand flex items-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0" /> Get clarity before making important business decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

function ConsultationAreas() {
  const areas = [
    {
      icon: Building2,
      title: "Business Setup Consultation",
      points: [
        "Pvt Ltd, LLP, Proprietorship guidance",
        "Structure selection advice",
        "Registration process understanding",
      ],
    },
    {
      icon: Receipt,
      title: "Tax & GST Consultation",
      points: [
        "Income tax planning",
        "GST registration and filing",
        "Tax saving strategies",
      ],
    },
    {
      icon: Scale,
      title: "Compliance Consultation",
      points: [
        "ROC and MCA compliance",
        "Annual filing requirements",
        "Legal and regulatory guidance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business & Financial Advisory",
      points: [
        "Business structuring",
        "Financial planning",
        "Growth and scaling advice",
      ],
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-14 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">Consultation Areas</h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
          Get expert advice tailored to your business needs.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="p-5 sm:p-6 rounded-2xl border bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 shrink-0" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">{area.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {area.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#lead" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
                  Book Slot <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t">
          <h3 className="font-display text-xl font-bold text-ink text-center mb-6">Specific Tax Calculators &amp; Live Sessions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONSULTATION_SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/consultation/$slug"
                params={{ slug: s.slug }}
                className="group p-5 rounded-xl border bg-white hover:border-brand/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display font-bold text-ink text-sm sm:text-base group-hover:text-brand transition-colors">{s.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.heroLead}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Learn more <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyConsultCA() {
  const points = [
    "Avoid costly mistakes",
    "Get expert insights",
    "Make informed decisions",
    "Save time and money",
    "Stay compliant with laws",
  ];
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">Why Consult a CA?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p) => (
            <div key={p} className="flex items-center gap-3 p-4 rounded-xl border bg-brand/5">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-ink">{p}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-brand">
          Right advice at the right time can save your business.
        </p>
      </div>
    </section>
  );
}

function CommonProblems() {
  const problems = [
    "Confusion in business structure",
    "Lack of tax planning",
    "Compliance mistakes",
    "Wrong financial decisions",
    "Delayed filings",
  ];
  return (
    <section className="py-10 sm:py-14 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">Common Problems People Face</h2>
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-1">A quick consultation can solve these issues.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((prob) => (
            <div key={prob} className="flex items-start gap-3 p-4 rounded-xl border bg-red-50/40">
              <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-ink">{prob}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  const points = [
    "Understand your business situation",
    "Provide clear and actionable advice",
    "Suggest best solutions",
    "Guide next steps",
    "Offer ongoing support",
  ];
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">How We Help You</h2>
        <p className="text-center text-xs sm:text-sm font-medium text-brand mt-1">Simple, clear, and practical consultation.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p) => (
            <div key={p} className="p-5 rounded-xl border bg-white hover:border-brand/30 transition-all shadow-sm">
              <BadgeCheck className="h-6 w-6 text-brand mb-2" />
              <p className="text-sm font-semibold text-ink">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { title: "Book consultation", text: "Fill online form or WhatsApp us." },
    { title: "Share your query", text: "Tell us your specific question or goal." },
    { title: "Talk to CA", text: "Connect via Call, WhatsApp, or Online Meeting." },
    { title: "Get expert advice", text: "Receive clear, practical guidance." },
    { title: "Take action confidently", text: "Execute with zero confusion." },
  ];
  return (
    <section className="py-10 sm:py-14 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">How It Works</h2>
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-1">Quick and hassle-free process.</p>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.title} className="p-5 rounded-xl border bg-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs shadow-md mb-3">{i + 1}</div>
                <h3 className="font-bold text-ink text-sm sm:text-base">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoShouldOpt() {
  const items = [
    "Entrepreneurs and startups",
    "Business owners",
    "Freelancers and professionals",
    "Companies and LLPs",
    "Anyone needing tax or compliance advice",
  ];
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">Who Should Opt For This?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((w) => (
            <div key={w} className="flex items-center gap-3 p-4 rounded-xl border bg-white shadow-sm">
              <Users className="h-5 w-5 text-brand shrink-0" />
              <span className="text-sm font-semibold text-ink">{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const reviews = [
    "Got clear guidance for my business setup.",
    "Very helpful tax consultation.",
    "Quick and practical advice.",
  ];
  return (
    <section className="py-10 sm:py-14 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl min-w-0 box-border text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Client Reviews &amp; Trust</h2>
        <div className="mt-2 flex items-center justify-center gap-1.5 text-sm">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />)}
          <span className="font-bold text-ink">4.8/5 Client Rating</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <blockquote key={r} className="p-5 rounded-xl border bg-white text-sm italic text-ink shadow-sm">"{r}"</blockquote>
          ))}
        </div>
        <div className="mt-8">
          <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-6 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all text-sm">
            Consult a CA Today <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink text-center">Frequently Asked Questions</h2>
        <div className="mt-6 sm:mt-8 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border bg-white overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-ink text-sm sm:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl min-w-0 box-border">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Talk to a CA Today – Get Clarity &amp; Take the Right Decision
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/90">Don’t guess—get expert advice.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto">
          <a href="#lead" className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform text-center">
            Book Consultation Now <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
          <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors text-center">
            <MessageCircle className="h-4 w-4 shrink-0" /> Chat with CA on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
