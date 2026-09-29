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
  ReceiptText,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "form-27eq-tcs-return-filing",
  title: "Form 27EQ (TCS Return)",
  h1: "Form 27EQ TCS Return Filing – Accurate & Timely TCS Compliance by Expert CA",
  metaTitle: "Form 27EQ TCS Return Filing Online | Expert CA Support — Praveen J & Associates",
  metaDescription: "Ensure accurate reporting and timely Form 27EQ TCS return filing with expert CA support. Rate verification, buyer PAN mapping and notice avoidance.",
  heroLead: "Collecting TCS (Tax Collected at Source) in your business?",
  heroSub: "Ensure accurate reporting and timely filing with expert CA support. We help you prepare and file Form 27EQ returns correctly to avoid penalties and compliance issues.",
  primaryCta: "File TCS Return Now",
  problems: [
    "Confusion about applicability of TCS",
    "Incorrect collection rates",
    "Errors in return filing",
    "Mismatch in data reporting",
    "Late filing penalties",
  ],
  whatIs: {
    heading: "What is Form 27EQ?",
    points: [
      "Reporting tax collected at source",
      "Filing quarterly TCS returns",
      "Maintaining compliance with Income Tax laws",
    ],
    note: "👉 Mandatory for businesses required to collect TCS.",
  },
  whatIs2: {
    heading: "Types of Transactions Covered",
    points: [
      "Sale of specified goods (scrap, minerals, etc.)",
      "Sale of motor vehicles (above threshold)",
      "E-commerce transactions",
      "Foreign remittance (in some cases)",
    ],
    note: "👉 Each category has specific rules and rates.",
  },
  whoFor: [
    "Businesses collecting TCS",
    "Traders dealing in specified goods",
    "E-commerce operators",
    "Dealers in high-value transactions",
    "Companies with TCS applicability",
  ],
  benefits: [
    "Correct TCS rate application",
    "Accurate return filing",
    "Timely compliance",
    "Avoid penalties",
    "Proper documentation",
  ],
  important: [
    "Form 27EQ must be filed quarterly",
    "TCS must be collected at correct rate",
    "Data must match books of accounts",
    "Late filing attracts penalty",
    "Incorrect filing may trigger notices",
  ],
  process: [
    "Analyze TCS applicability",
    "Verify transaction details",
    "Calculate TCS correctly",
    "Prepare Form 27EQ",
    "File return and confirm",
  ],
  documents: [
    "TAN details",
    "Transaction/sales data",
    "PAN details of buyers",
    "TCS collection details",
    "Financial records",
  ],
  faqs: [
    { q: "What is Form 27EQ?", a: "TCS return filing form." },
    { q: "How often is it filed?", a: "Quarterly." },
    { q: "Is TCS return mandatory?", a: "Yes, if TCS is applicable." },
    { q: "What is penalty for late filing?", a: "₹200 per day." },
    { q: "Can CA handle TCS return filing?", a: "Yes, full support available." },
  ],
};

export const Route = createFileRoute("/form-27eq-tcs-return-filing")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/form-27eq-tcs-return-filing" },
    ],
    links: [{ rel: "canonical", href: "/form-27eq-tcs-return-filing" }],
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
  component: Form27EQPage,
});

function Form27EQPage() {
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
                <ReceiptText className="h-3.5 w-3.5" /> TDS & TCS · TCS Return Compliance
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="File TCS Return Now">
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
                  <span className="ml-1 font-semibold text-ink">4.8/5</span>
                </div>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified
                </span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-brand" /> Section 206C Compliant
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

        {/* Introduction Section (For UI Depth) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Introduction
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Form 27EQ (TCS Return)
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Form 27EQ is a quarterly return used to report TCS (Tax Collected at Source). TCS is applicable when tax is collected from buyers at the time of sale in certain transactions.
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <h3 className="font-display font-semibold text-lg text-ink">This includes:</h3>
              <ul className="mt-4 grid sm:grid-cols-3 gap-4">
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Sale of specified goods
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  E-commerce transactions
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  High-value transactions
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">
                  👉 Proper filing of Form 27EQ ensures that your TCS compliance is complete and error-free.
                </span>
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
            <p className="mt-2 text-muted-foreground">Businesses dealing with TCS often face:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Incorrect compliance can lead to notices and financial penalties.
            </p>
          </div>
        </section>

        {/* What is Form 27EQ & Types of Transactions Covered */}
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs.heading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Form 27EQ is used for:</p>
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
                    <ReceiptText className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs2.heading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Form 27EQ includes TCS on:</p>
                  <ul className="mt-4 space-y-2.5">
                    {SERVICE_DATA.whatIs2.points.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {SERVICE_DATA.whatIs2.note && (
                  <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                    {SERVICE_DATA.whatIs2.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use This Service & Why Professional Filing Matters */}
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
                  <ShieldCheck className="h-5 w-5 text-brand" /> Why Professional Filing Matters
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {SERVICE_DATA.benefits.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Expert handling ensures smooth and compliant operations.
              </p>
            </div>
          </div>
        </section>

        {/* Important Compliance Points */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
            <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brand" /> Important Compliance Points
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
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Hassle-free and reliable process.</p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Complete support provided.</p>
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
              <span className="text-ink ml-1">4.8/5 Rating on Google</span>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                "Handled TCS filing without any errors.",
                "Very smooth compliance process.",
                "Reliable CA for tax filings.",
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
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
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
          title="Ensure smooth TCS compliance and avoid penalties."
          sub="Get expert CA support for Form 27EQ filing today."
          ctaText="👉 File TCS Return Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
