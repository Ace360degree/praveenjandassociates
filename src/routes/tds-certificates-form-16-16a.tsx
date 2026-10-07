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
  Layers,
  FileSpreadsheet,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "tds-certificates-form-16-16a",
  title: "TDS Certificates (Form 16 & 16A)",
  h1: "TDS Certificates (Form 16 & Form 16A) – Download, Verify & Resolve TDS Issues",
  metaTitle: "TDS Certificates (Form 16 & Form 16A) Download & Verification | Praveen J & Associates",
  metaDescription: "Download, verify and resolve Form 16 and Form 16A TDS certificate issues with expert CA support. Match with Form 26AS/AIS, fix mismatches and file ITR smoothly.",
  heroLead: "Looking for your TDS certificates (Form 16 or Form 16A)?",
  heroSub: "Need help with download, verification or correction? 👉 Get expert CA support to access, understand and resolve TDS certificate issues easily.",
  primaryCta: "Get TDS Certificate Help Now",
  problems: [
    "Unable to download Form 16 / 16A",
    "Mismatch in TDS credit (Form 26AS vs certificate)",
    "Incorrect details in certificate",
    "Missing TDS entries",
    "Delay from employer or deductor",
  ],
  whoFor: [
    "Salaried individuals",
    "Freelancers & professionals",
    "Vendors receiving payments",
    "Anyone facing TDS mismatch",
    "Individuals filing ITR",
  ],
  benefits: [
    "Assistance in downloading Form 16 / 16A",
    "Verification of TDS details",
    "Matching with Form 26AS / AIS",
    "Correction support for errors",
    "Guidance for ITR filing",
  ],
  whyImportant: [
    "Ensures correct tax credit",
    "Avoids ITR rejection",
    "Helps in faster refund",
    "Prevents notices",
    "Maintains financial accuracy",
  ],
  important: [
    "Form 16 is issued annually",
    "Form 16A is issued quarterly",
    "Data must match Form 26AS",
    "Errors must be corrected before filing ITR",
    "Verification is critical",
  ],
  process: [
    "Understand your requirement",
    "Collect necessary details",
    "Retrieve/download certificate",
    "Verify TDS entries",
    "Assist in correction (if needed)",
  ],
  documents: [
    "PAN details",
    "Employer / deductor details",
    "Income details",
    "Access to tax records (if available)",
  ],
  faqs: [
    { q: "What is Form 16?", a: "TDS certificate for salary income." },
    { q: "What is Form 16A?", a: "TDS certificate for non-salary income." },
    { q: "Can I download Form 16 online?", a: "Yes, with proper access or through employer/CA." },
    { q: "What if TDS does not match?", a: "It must be corrected before filing ITR." },
    { q: "Can CA help with TDS certificate issues?", a: "Yes, full support available." },
  ],
};

export const Route = createFileRoute("/tds-certificates-form-16-16a")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/tds-certificates-form-16-16a" },
    ],
    links: [{ rel: "canonical", href: "/tds-certificates-form-16-16a" }],
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
  component: TdsCertificatesPage,
});

function TdsCertificatesPage() {
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
                <Layers className="h-3.5 w-3.5" /> TDS & TCS · Certificate Services
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="Get TDS Certificate Help Now">
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
              TDS Certificates (Form 16 & Form 16A)
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              TDS certificates are essential documents that show:
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-3 gap-4">
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Tax deducted from your income
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Details of deductions & deposits
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Proof of tax paid to government
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink">
                <span className="font-semibold text-brand block mb-2">These certificates are required for:</span>
                <ul className="grid sm:grid-cols-3 gap-3 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Filing Income Tax Returns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Claiming tax credit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Financial documentation
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs md:text-sm text-rose-700 font-medium pt-2">
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
                <span>👉 Errors in TDS certificates can lead to tax mismatches and refund issues.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Types of TDS Certificates (Form 16 & Form 16A) */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-2">
                <FileSpreadsheet className="h-3.5 w-3.5" /> Certificate Breakdown
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Types of TDS Certificates
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Form 16 Card */}
              <div className="rounded-2xl border border-sky-100 bg-sky-50/30 p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-600 shrink-0" />
                    <h3 className="font-display text-xl font-bold text-ink">
                      Form 16 (Salary TDS Certificate)
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Issued by employers to employees, it includes:
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Salary details</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>TDS deducted on salary</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Tax computation</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>Form 16 Part A & Part B</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-blue-700 border-t border-sky-200/60 pt-3">
                  👉 Required for ITR filing for salaried individuals.
                </p>
              </div>

              {/* Form 16A Card */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-600 shrink-0" />
                    <h3 className="font-display text-xl font-bold text-ink">
                      Form 16A (Non-Salary TDS Certificate)
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Issued for TDS on non-salary income:
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Professional fees</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Rent</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Interest income</span>
                    </li>
                    <li className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Commission & brokerage</span>
                    </li>
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-emerald-700 border-t border-emerald-200/60 pt-3">
                  👉 Used by freelancers, professionals and vendors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems Faced */}
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-semibold mb-3 border border-rose-100">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Problems
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Common Problems Faced</h2>
            <p className="mt-2 text-muted-foreground">People often face:</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-white border border-rose-100 text-sm shadow-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 These issues can impact your tax filing and refund claims.
            </p>
          </div>
        </section>

        {/* How We Help & Why This is Important */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand" /> How We Help
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {SERVICE_DATA.benefits.map((pt) => (
                    <li key={pt} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                👉 Complete end-to-end assistance.
              </p>
            </div>

            <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand" /> Why This is Important
                </h3>
                <ul className="mt-6 space-y-2.5">
                  {SERVICE_DATA.whyImportant.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                👉 Ensures 100% accurate tax compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Use This Service */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {SERVICE_DATA.whoFor.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-brand-light/30 border text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Points */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-3xl bg-muted/20 rounded-2xl p-6 lg:p-8 border shadow-sm">
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
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.process.map((step, i) => (
                <div key={step} className="p-4 rounded-xl border bg-white relative shadow-sm">
                  <span className="text-3xl font-bold text-brand/30">{i + 1}</span>
                  <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Simple and stress-free process.</p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-muted/20 border">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Minimal effort from your side.</p>
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
                "Helped me fix Form 16 mismatch quickly.",
                "Got my TDS details sorted easily.",
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
          title="Don’t let TDS errors affect your tax filing."
          sub="Get expert CA support and resolve your TDS certificate issues today."
          ctaText="👉 Get TDS Certificate Help Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
