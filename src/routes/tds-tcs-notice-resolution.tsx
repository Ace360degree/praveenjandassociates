import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  MessageCircle,
  ShieldCheck,
  Star,
  BookOpen,
  Phone,
  Clock,
  Sparkles,
  Users,
  Percent,
  Landmark,
  Scale,
  Building,
  HelpCircle,
  XCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "tds-tcs-notice-resolution",
  title: "TDS / TCS Notice Resolution",
  h1: "Received TDS/TCS Notice? Fix Short Deduction, Mismatch & Demand Fast",
  metaTitle: "Received TDS/TCS Notice? Fix Short Deduction, Mismatch & Demand Fast | Praveen J & Associates",
  metaDescription: "Received a TDS or TCS notice from Income Tax Department? Get expert CA support to resolve short deduction, demand, 234E late fee, 201(1A) interest & TRACES mismatch.",
  heroLead: "Received a TDS or TCS notice from the Income Tax Department?",
  heroSub: "Don’t ignore it — even small errors can lead to interest, penalties, or repeated notices. 👉 Get expert CA assistance to resolve TDS/TCS notices quickly and accurately.",
  primaryCta: "Resolve My TDS Notice Now",
  problems: [
    "Accumulating interest & penalties",
    "Continuous notices from department",
    "Legal complications in severe cases",
    "Business compliance issues",
    "Difficulty in future filings",
  ],
  about: {
    heading: "About TDS/TCS Notice",
    lead: "A TDS/TCS notice is issued when the Income Tax Department detects short deduction of TDS, mismatch in returns, incorrect filing or reporting, or outstanding demand / unpaid tax.",
    note: "👉 These notices are commonly generated through the TRACES portal.",
  },
  noticeTypes: [
    "TDS Demand Notice (Outstanding Demand)",
    "Short Deduction Notice",
    "TDS Mismatch Notice (PAN / Challan mismatch)",
    "Late Filing Fee Notice (Section 234E)",
    "Interest Notice (Section 201(1A))",
    "TCS Default Notices",
  ],
  commonReasons: [
    "Incorrect PAN details",
    "Wrong challan mapping",
    "Short deduction of tax",
    "Late TDS return filing",
    "Non-payment or delayed payment of TDS",
  ],
  howWeHelp: [
    "TRACES notice analysis",
    "Identification of error or mismatch",
    "Correction of TDS returns (revised filing)",
    "Demand justification & response submission",
    "Interest/penalty reduction assistance",
    "End-to-end compliance support",
  ],
  process: [
    { step: "Step 1", title: "Review notice & TRACES data" },
    { step: "Step 2", title: "Identify root cause" },
    { step: "Step 3", title: "Prepare correction / revised return" },
    { step: "Step 4", title: "Submit response to department" },
    { step: "Step 5", title: "Close or reduce demand" },
  ],
  whoFor: [
    "Businesses & companies",
    "Accountants handling TDS filings",
    "SMEs & proprietors",
    "Anyone who has received a TDS/TCS notice or demand",
  ],
  documents: [
    "TDS notice copy",
    "PAN & TAN details",
    "TDS return filings",
    "Challan details",
    "Supporting documents",
  ],
  faqs: [
    {
      q: "What is a TDS notice?",
      a: "A notice issued for errors, mismatch, or non-compliance in TDS filings.",
    },
    {
      q: "What is short deduction of TDS?",
      a: "When TDS is deducted at a lower rate than required.",
    },
    {
      q: "Can TDS demand be reduced?",
      a: "Yes, with proper correction and justification.",
    },
    {
      q: "How to respond to TDS notice?",
      a: "Through TRACES portal with correct data and documentation.",
    },
    {
      q: "Can CA help in resolving notice?",
      a: "Yes, professional handling ensures faster and accurate resolution.",
    },
  ],
};

export const Route = createFileRoute("/tds-tcs-notice-resolution")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: `/tds-tcs-notice-resolution` },
    ],
    links: [{ rel: "canonical", href: `/tds-tcs-notice-resolution` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SERVICE_DATA.faqs.map((f) => ({
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
          name: SERVICE_DATA.title,
          provider: {
            "@type": "Organization",
            name: "Praveen J & Associates",
          },
          areaServed: "IN",
          description: SERVICE_DATA.metaDescription,
        }),
      },
    ],
  }),
  component: TdsTcsNoticeResolutionPage,
});

function TdsTcsNoticeResolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/tds-tcs" className="hover:text-brand transition-colors">
                TDS &amp; TCS Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-ink font-medium">TDS / TCS Notice Resolution</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-rose-500/5 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 border border-rose-200 px-3.5 py-1.5 text-xs font-semibold text-rose-700 mb-4">
                  <AlertTriangle className="h-3.5 w-3.5 text-rose-600" /> Income Tax Notice Assistance
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
                  {SERVICE_DATA.h1}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-ink font-semibold">
                  {SERVICE_DATA.heroLead}
                </p>
                <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {SERVICE_DATA.heroSub}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <ConsultationModal defaultService="TDS / TCS Notice Resolution" title="Resolve My TDS Notice Now">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3.5 text-base font-semibold shadow-lg shadow-brand/25 hover:bg-brand/90 transition-all cursor-pointer"
                    >
                      {SERVICE_DATA.primaryCta}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </ConsultationModal>

                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20I%20have%20received%20a%20TDS%2FTCS%20notice%20and%20need%20urgent%20CA%20assistance%20to%20resolve%20demand%20and%20file%20response."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-700 bg-emerald-50/50 px-6 py-3.5 text-base font-semibold hover:bg-emerald-100/60 transition-all"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    Chat with CA on WhatsApp
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span>100% CA Resolution</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span>TRACES Portal Support</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Fast Penalty Reduction</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 relative">
                  <div className="absolute -top-3 right-6 bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Notice Response
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Urgent Notice Help?</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Connect directly with a Chartered Accountant to analyze TRACES demand &amp; draft immediate rectification responses.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">TRACES Justification Analysis</p>
                        <p className="text-[11px] text-muted-foreground">Detailed root-cause analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">Revised Return Filing</p>
                        <p className="text-[11px] text-muted-foreground">PAN/Challan correction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">Penalty &amp; Interest Reduction</p>
                        <p className="text-[11px] text-muted-foreground">Legal submission to AO</p>
                      </div>
                    </div>
                  </div>

                  <ConsultationModal defaultService="TDS / TCS Notice Resolution" title="Schedule CA Notice Consultation">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Phone className="h-4 w-4" /> Schedule CA Consultation
                    </button>
                  </ConsultationModal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TDS/TCS NOTICE */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-2">
                <BookOpen className="h-4 w-4" /> TRACES Notice Overview
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                {SERVICE_DATA.about.heading}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                {SERVICE_DATA.about.lead}
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
                {SERVICE_DATA.about.note}
              </div>
            </div>
          </div>
        </section>

        {/* COMMON TYPES OF TDS/TCS NOTICES */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-rose-100 text-rose-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Common Types of TDS/TCS Notices
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Various categories of demand and mismatch notices issued by the department
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.noticeTypes.map((type, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <FileText className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-ink">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RISKS OF IGNORING TDS NOTICE */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-rose-100 text-rose-700">
                <XCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Risks of Ignoring TDS Notice
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Delaying response can lead to compounding interest and legal notices
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((prob, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-rose-100 shadow-sm flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <p className="text-sm font-medium text-slate-800">{prob}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
              👉 Early resolution helps avoid escalation.
            </div>
          </div>
        </section>

        {/* COMMON REASONS FOR TDS NOTICE */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-brand/10 text-brand">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Common Reasons for TDS Notice
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Primary errors in return filing that trigger TRACES default notices
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.commonReasons.map((reason, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE HELP YOU */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  How We Help You
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We provide complete end-to-end TDS/TCS notice resolution services
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.benefits.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">
              Our Process
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-8">
              Structured, compliant &amp; efficient handling
            </p>

            <div className="grid md:grid-cols-5 gap-4">
              {SERVICE_DATA.process.map((p, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">
                    {p.step}
                  </span>
                  <p className="text-sm font-semibold text-ink">{p.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold">
              👉 Structured, compliant &amp; efficient handling.
            </div>
          </div>
        </section>

        {/* WHO NEEDS THIS SERVICE? */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Who Needs This Service?
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Entities facing TDS default notices or TRACES demands
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_DATA.whoFor.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Documents Required
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Basic documents needed to analyze and resolve your notice
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-ink">{doc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-sm font-medium">
              👉 Our team will guide you step-by-step.
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-amber-300">4.8/5 Client Satisfaction</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
                  Trusted CA Team for TDS Notice Resolution
                </h2>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Resolved my TDS demand quickly.”</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Very knowledgeable and responsive CA team.”</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Helped reduce penalty significantly.”</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+918169887643"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-950 px-6 py-3.5 text-base font-bold shadow-lg hover:bg-amber-300 transition-all"
                  >
                    <Phone className="h-5 w-5" /> Consult a CA Today
                  </a>
                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20I%20need%20CA%20assistance%20to%20resolve%20my%20TDS%2FTCS%20notice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-2">
                <HelpCircle className="h-4 w-4" /> Got Questions?
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {SERVICE_DATA.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-ink hover:text-brand transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openFaq === idx ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-slate-600 text-sm border-t border-slate-100 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <FinalCTA
          title="Don’t let TDS notices turn into heavy penalties."
          sub="Get expert CA assistance to resolve your TDS/TCS notice quickly and correctly."
          ctaText="Resolve My TDS Notice Now"
          defaultService="TDS / TCS Notice Resolution"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
