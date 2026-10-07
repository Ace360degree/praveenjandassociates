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
  Star,
  BookOpen,
  Phone,
  Building,
  Briefcase,
  XCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "form-26q-tds-return-filing",
  title: "Form 26Q TDS Return Filing",
  h1: "Form 26Q TDS Return Filing – Non-Salary TDS Compliance by Expert CA",
  metaTitle: "Form 26Q TDS Return Filing Online | Non-Salary TDS by CA — Praveen J & Associates",
  metaDescription: "File Form 26Q quarterly TDS returns for non-salary payments (194C, 194J, 194I, 194H, 194A) with expert CA support. Accurate calculation, PAN validation, and zero penalty.",
  heroLead: "Making payments to vendors, contractors or professionals?",
  heroSub: "Ensure correct TDS deduction and filing with expert CA support. 👉 We help you prepare and file Form 26Q accurately and on time, avoiding penalties and notices.",
  primaryCta: "File Form 26Q Now",
  problems: [
    "Incorrect TDS rates (194C, 194J, 194I, etc.)",
    "PAN errors of vendors",
    "Missing deductions",
    "Data mismatch in returns",
    "Late filing penalties",
  ],
  whatIs: {
    heading: "What is Form 26Q?",
    points: [
      "Reporting TDS on non-salary payments",
      "Filing quarterly TDS returns",
      "Maintaining vendor-level tax compliance",
    ],
    note: "👉 It is mandatory for all businesses deducting TDS on payments (other than salary).",
  },
  whatIs2: {
    heading: "Types of Payments Covered",
    points: [
      "Contractor payments (Section 194C)",
      "Professional fees (Section 194J)",
      "Rent (Section 194I)",
      "Commission/Brokerage (Section 194H)",
      "Interest payments (Section 194A)",
    ],
    note: "👉 Each category has different TDS rules — accuracy is critical.",
  },
  whoFor: [
    "Businesses and companies",
    "Startups & SMEs",
    "Professionals making vendor payments",
    "Traders and service providers",
    "Firms handling multiple vendors",
  ],
  benefits: [
    "Correct section-wise TDS deduction",
    "Error-free return filing",
    "PAN validation",
    "Timely submission",
    "Avoid penalties and notices",
  ],
  important: [
    "Form 26Q must be filed quarterly",
    "Correct TDS section must be applied",
    "PAN mismatch leads to higher TDS",
    "Late filing attracts ₹200/day penalty",
    "Data must match books and payments",
  ],
  process: [
    "Analyze payment data",
    "Identify correct TDS sections",
    "Calculate TDS accurately",
    "Prepare Form 26Q return",
    "File and confirm submission",
  ],
  documents: [
    "TAN details",
    "Vendor payment data",
    "PAN details of vendors",
    "TDS payment details",
    "Financial records",
  ],
  faqs: [
    { q: "What is Form 26Q?", a: "TDS return for non-salary payments." },
    { q: "How often is it filed?", a: "Quarterly." },
    { q: "Is Form 26Q mandatory?", a: "Yes, if TDS is deducted on non-salary payments." },
    { q: "What is penalty for late filing?", a: "₹200 per day." },
    { q: "Can CA handle Form 26Q filing?", a: "Yes, full support available." },
  ],
};

export const Route = createFileRoute("/form-26q-tds-return-filing")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/form-26q-tds-return-filing" },
    ],
    links: [{ rel: "canonical", href: "/form-26q-tds-return-filing" }],
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
  component: Form26QPage,
});

function Form26QPage() {
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
                <Briefcase className="h-3.5 w-3.5" /> Non-Salary TDS · Form 26Q
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="File Form 26Q Now">
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
                  <BadgeCheck className="h-4 w-4 text-brand" /> 100% Compliant Filing
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

        {/* INTRODUCTION (DEPTH FOR UI) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Introduction
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Quarterly TDS Return for Non-Salary Payments
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Form 26Q is a quarterly TDS return used to report tax deducted on non-salary payments such as:
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Contractor payments",
                  "Professional fees",
                  "Rent",
                  "Commission & brokerage",
                  "Interest payments",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-center p-3 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 It is one of the most commonly filed TDS returns for businesses.
              </p>

              <div className="mt-6 border-t pt-4">
                <p className="text-sm font-semibold text-rose-700 mb-2">👉 Incorrect filing can lead to:</p>
                <ul className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>Penalties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>Return rejection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>Notices from Income Tax Department</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON PROBLEMS FACED */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-semibold mb-3 border border-rose-100">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Problems
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Common Problems Faced
            </h2>
            <p className="mt-2 text-muted-foreground">Businesses often struggle with:</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Even minor mistakes can cause major compliance issues.
            </p>
          </div>
        </section>

        {/* WHAT IS FORM 26Q & TYPES OF PAYMENTS COVERED */}
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs.heading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Form 26Q is used for:</p>
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
                    <Building className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs2.heading}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Form 26Q includes TDS on:</p>
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

        {/* WHO SHOULD USE & WHY PROFESSIONAL FILING MATTERS */}
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
                <ul className="mt-4 space-y-2.5">
                  {SERVICE_DATA.benefits.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Expert support ensures 100% compliance and accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* IMPORTANT COMPLIANCE POINTS */}
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

        {/* PROCESS */}
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
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Smooth and reliable process.</p>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-white border shadow-sm">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 End-to-end support provided.</p>
          </div>
        </section>

        {/* TRUST SECTION */}
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
                "Handled vendor TDS perfectly.",
                "No more confusion on TDS sections.",
                "Very reliable CA for compliance.",
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

        {/* FAQS */}
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

        {/* FINAL CTA */}
        <FinalCTA
          title="Avoid penalties and ensure smooth vendor compliance."
          sub="Get expert CA support for Form 26Q filing today."
          ctaText="👉 File Form 26Q Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
