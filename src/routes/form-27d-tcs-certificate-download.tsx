import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceHeroForm } from "@/components/site/ServiceHeroForm";
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
  Sparkles,
  Star,
  BookOpen,
  Phone,
  FileSpreadsheet,
  XCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "form-27d-tcs-certificate-download",
  title: "Form 27D (TCS Certificate)",
  h1: "Form 27D TCS Certificate – Download, Verify & Resolve TCS Issues Easily",
  metaTitle: "Form 27D TCS Certificate Download & Verification | Praveen J & Associates",
  metaDescription: "Download, verify and resolve Form 27D TCS certificate issues with expert CA support. Match with Form 26AS/AIS, fix mismatches and claim full TCS credit.",
  heroLead: "Looking for your Form 27D (TCS certificate)?",
  heroSub: "Need help with download, verification or correction? 👉 Get expert CA support to access, verify and resolve TCS certificate issues quickly.",
  primaryCta: "Get Form 27D Help Now",
  problems: [
    "Not receiving Form 27D",
    "Difficulty in downloading certificate",
    "Mismatch with Form 26AS / AIS",
    "Incorrect details in certificate",
    "Missing TCS credit",
  ],
  whatIs: {
    heading: "What is Form 27D?",
    points: [
      "Purchase of motor vehicle",
      "Sale of specified goods",
      "High-value transactions",
      "E-commerce transactions",
    ],
    note: "👉 It acts as proof of tax collected on your behalf.",
  },
  whoFor: [
    "Individuals who paid TCS",
    "Buyers of high-value goods",
    "Businesses dealing in TCS transactions",
    "E-commerce buyers/sellers",
    "Anyone facing TCS mismatch",
  ],
  benefits: [
    "Assistance in downloading Form 27D",
    "Verification with Form 26AS / AIS",
    "Identification of mismatches",
    "Support in correction",
    "Guidance for ITR filing",
  ],
  whyImportant: [
    "Claim correct TCS credit",
    "Avoid mismatch in tax records",
    "Ensure accurate ITR filing",
    "Faster refund processing",
    "Maintain compliance",
  ],
  important: [
    "Form 27D is issued by collector",
    "Must match Form 26AS",
    "Required for claiming TCS credit",
    "Errors must be corrected before filing ITR",
    "Keep record for future reference",
  ],
  process: [
    "Understand your requirement",
    "Retrieve/download certificate",
    "Verify TCS details",
    "Identify mismatches",
    "Assist in correction & filing",
  ],
  documents: [
    "PAN details",
    "Transaction details",
    "Seller/collector details",
    "Tax records (if available)",
  ],
  faqs: [
    { q: "What is Form 27D?", a: "TCS certificate issued by seller." },
    { q: "When is Form 27D issued?", a: "When TCS is collected on transactions." },
    { q: "Is Form 27D important?", a: "Yes, for claiming TCS credit in ITR." },
    { q: "What if TCS does not match?", a: "It must be corrected before filing." },
    { q: "Can CA help with TCS certificate?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/form-27d-tcs-certificate-download")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/form-27d-tcs-certificate-download" },
    ],
    links: [{ rel: "canonical", href: "/form-27d-tcs-certificate-download" }],
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
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description: SERVICE_DATA.metaDescription,
        }),
      },
    ],
  }),
  component: Form27DPage,
});

function Form27DPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <nav className="border-b bg-muted/30" aria-label="Breadcrumb">
          <ol className="container mx-auto px-4 py-3 text-sm flex items-center gap-2 text-muted-foreground flex-wrap">
            <li>
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li>
              <Link to="/tds-tcs" className="hover:text-brand">
                TDS & TCS
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li className="text-ink font-medium">{SERVICE_DATA.title}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
          <div className="container mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
                <FileSpreadsheet className="h-3.5 w-3.5" /> TDS & TCS · TCS Certificate Services
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="Get Form 27D Help Now">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all cursor-pointer"
                  >
                    {SERVICE_DATA.primaryCta} <ArrowRight className="h-4 w-4" />
                  </button>
                </ConsultationModal>
                <a
                  href="https://wa.me/918169887643"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 font-semibold text-ink">5/5</span>
                </div>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified
                </span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-brand" /> TRACES Integrated
                </span>
              </div>
            </div>

            <ServiceHeroForm
              title="Talk to a CA — free callback"
              subtitle="Share details, our CA will connect within 30 mins."
              serviceName={SERVICE_DATA.title}
              ctaText={SERVICE_DATA.primaryCta}
              formName="Service Hero Form"
              ctaLocation="Route Hero Section"
            />
          </div>
        </section>

        {/* Introduction Section (UI Depth) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Introduction
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Form 27D (TCS Certificate)
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Form 27D is a TCS (Tax Collected at Source) certificate issued when tax is collected from you during certain transactions.
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-ink">It shows:</h3>
              <ul className="mt-4 grid sm:grid-cols-3 gap-4">
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Tax collected by seller
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Amount of transaction
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  TCS deposited with govt
                </li>
              </ul>

              <div className="mt-5 text-sm font-semibold text-brand">
                👉 It is essential for claiming tax credit while filing your Income Tax Return (ITR).
              </div>

              <div className="mt-6 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
                <span className="font-semibold text-rose-700 block mb-2">Without Form 27D:</span>
                <ul className="grid sm:grid-cols-3 gap-3 font-medium text-ink">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> You may miss TCS credit
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Your tax records may not match
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Refund may get delayed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems Faced */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-semibold mb-3 border border-rose-100">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Problems
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Common Problems Faced</h2>
            <p className="mt-2 text-muted-foreground">Many individuals and businesses face:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 These issues can affect your tax filing and refund process.
            </p>
          </div>
        </section>

        {/* What is Form 27D & How We Help */}
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs.heading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Form 27D is issued by the seller or collector when TCS is applied on transactions like:
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {SERVICE_DATA.whatIs.points.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {SERVICE_DATA.whatIs.note && (
                  <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                    {SERVICE_DATA.whatIs.note}
                  </p>
                )}
              </div>

              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand" /> How We Help
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">End-to-end CA support including:</p>
                  <ul className="mt-4 space-y-2.5">
                    {SERVICE_DATA.benefits.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                  👉 Complete support from certificate to tax filing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use This Service & Why Form 27D is Important */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                <ul className="mt-4 space-y-2.5">
                  {SERVICE_DATA.whoFor.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand" /> Why Form 27D is Important
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">Key advantages:</p>
                <ul className="mt-4 space-y-2.5">
                  {SERVICE_DATA.whyImportant.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Points */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
            <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_DATA.important.map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.process.map((step, i) => (
                <div key={step} className="p-4 rounded-xl border bg-muted/20 relative">
                  <span className="text-3xl font-bold text-brand/30">{i + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Simple and hassle-free process.</p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Minimal effort required.</p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-14 bg-brand-light/30 border-y">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Trust Our Expert CA Support</h2>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-amber-500 font-semibold text-lg">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-ink ml-1">5/5 Rating on Google</span>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                "Helped me claim my TCS credit easily.",
                "Solved mismatch issue quickly.",
                "Very helpful CA support.",
              ].map((r, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border shadow-sm flex flex-col justify-between">
                  <p className="text-sm italic text-muted-foreground font-medium">"{r}"</p>
                  <div className="mt-4 flex justify-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified Client
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="tel:+918169887643"
                className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-6 py-3 font-semibold shadow-lg shadow-brand/20 hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" /> Talk to CA Today
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-3">
              {SERVICE_DATA.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-ink hover:bg-muted/30 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="p-4 pt-0 text-sm text-muted-foreground border-t bg-muted/10">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          title="Don’t miss your TCS credit due to errors or delays."
          sub="Get expert CA support and handle your Form 27D correctly."
          ctaText="👉 Get Form 27D Help Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
