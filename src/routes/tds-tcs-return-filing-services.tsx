import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
  ShieldCheck,
  BadgeCheck,
  Phone,
  ChevronDown,
  ChevronRight,
  FileText,
  Calculator,
  ClipboardCheck,
  AlertTriangle,
  Building2,
  Users,
  ShoppingCart,
  Briefcase,
  CheckCircle2,
  Receipt,
  XCircle,
  Wrench,
  BookOpen,
  Clock,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { TDS_SERVICES } from "@/data/tdsServices";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { FinalCTA } from "@/components/site/Sections";

const FAQS = [
  {
    q: "Is TDS return filing mandatory?",
    a: "Yes, if TDS is deducted.",
  },
  {
    q: "How often are TDS returns filed?",
    a: "Quarterly.",
  },
  {
    q: "What is penalty for late filing?",
    a: "₹200 per day (subject to limits).",
  },
  {
    q: "What is TAN?",
    a: "Tax Deduction Account Number required for TDS.",
  },
  {
    q: "Can CA handle complete compliance?",
    a: "Yes, full support available.",
  },
];

const SERVICES_OFFERED = [
  {
    icon: Receipt,
    title: "TDS Registration",
    text: "TAN application (Form 49B) and allotment for new deductors.",
  },
  {
    icon: FileText,
    title: "TDS Return Filing",
    text: "Quarterly returns (Form 24Q, 26Q, 27Q) prepared and filed on time.",
  },
  {
    icon: ClipboardCheck,
    title: "TCS Return Filing",
    text: "Form 27EQ compliance for sale of goods, minerals & transactions.",
  },
  {
    icon: Calculator,
    title: "TDS Calculation & Deduction",
    text: "Accurate rate mapping, threshold calculation & challan generation.",
  },
  {
    icon: Wrench,
    title: "Correction & Revised Returns",
    text: "Rectification of PAN errors, challan mismatches & demand notices.",
  },
  {
    icon: ShieldCheck,
    title: "TDS/TCS Compliance Advisory",
    text: "Lower deduction certificates (Section 197), TRACES & advisory.",
  },
];

export const Route = createFileRoute("/tds-tcs-return-filing-services")({
  head: () => ({
    meta: [
      {
        title:
          "TDS & TCS Return Filing Services in India – Complete Compliance by Expert CA",
      },
      {
        name: "description",
        content:
          "Complete TDS & TCS return filing services in India. End-to-end TAN registration, calculation, return filing (24Q, 26Q, 27Q, 27EQ), corrections & advisory with expert CA.",
      },
      {
        property: "og:title",
        content:
          "TDS & TCS Return Filing Services in India – Complete Compliance by Expert CA",
      },
      {
        property: "og:description",
        content:
          "Avoid penalties and stay compliant with expert CA support. End-to-end TDS/TCS services – registration, calculation, return filing & compliance.",
      },
      { property: "og:url", content: "/tds-tcs-return-filing-services" },
      {
        name: "keywords",
        content:
          "TDS return filing India, TCS return filing India, TDS compliance services, TDS filing online India, CA TDS TCS services",
      },
    ],
    links: [{ rel: "canonical", href: "/tds-tcs-return-filing-services" }],
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
          name: "TDS & TCS Return Filing Services in India",
          provider: {
            "@type": "Organization",
            name: "Praveen J & Associates",
          },
          areaServed: "IN",
          description:
            "Complete TDS & TCS return filing, TAN registration, challan correction, and compliance advisory by Chartered Accountants.",
        }),
      },
    ],
  }),
  component: TdsTcsMainPage,
});

function TdsTcsMainPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC]">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink font-medium">TDS &amp; TCS Return Filing Services</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs font-semibold text-brand mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Complete Compliance Support
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink max-w-4xl leading-tight">
              TDS &amp; TCS Return Filing Services in India – Complete Compliance by Expert CA
            </h1>

            <div className="mt-6 space-y-3 max-w-3xl">
              <p className="text-lg md:text-xl font-medium text-ink">
                Managing TDS &amp; TCS compliance can be complex and time-sensitive.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Avoid penalties and stay compliant with expert CA support. 👉 We provide end-to-end TDS/TCS services – registration, calculation, return filing &amp; compliance.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
              <ConsultationModal defaultService="TDS / TCS Compliance" title="Start TDS/TCS Filing Now">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Start TDS/TCS Filing Now
                  <ArrowRight className="h-5 w-5" />
                </button>
              </ConsultationModal>

              <a
                href="https://wa.me/918169887643?text=Hi%2C%20I%20need%20expert%20CA%20support%20for%20TDS%20%26%20TCS%20compliance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-500/30 bg-emerald-50 px-6 py-4 text-base font-semibold text-emerald-800 hover:bg-emerald-100/70 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 text-emerald-600" />
                Chat with CA on WhatsApp
              </a>
            </div>

            {/* Quick Feature Pills */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <BadgeCheck className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Zero-Penalty Focus</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-ink">100% CA-Managed</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <FileText className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Quarterly Timely Filing</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />
                <span className="text-xs font-medium text-ink">4.8/5 Rated on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Risks
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Problems Businesses Commonly Face
            </h2>
            <p className="mt-2 text-muted-foreground">Businesses commonly face:</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Wrong TDS deduction rates",
                "Missed return filing deadlines",
                "Late fees & interest penalties",
                "Errors in filing returns",
                "Notices from Income Tax Department",
                "TDS credit mismatch in Form 26AS",
              ].map((prob, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-red-100 bg-red-50/40 text-sm text-ink font-medium"
                >
                  <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{prob}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 p-4 rounded-xl">
              👉 Even small mistakes can lead to heavy penalties and compliance issues.
            </p>
          </div>
        </section>

        {/* WHAT IS TDS & TCS? */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> Statutory Concept
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                What is TDS &amp; TCS?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* TDS CARD */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-brand/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-brand font-bold text-lg mb-2">
                    <span className="h-3 w-3 rounded-full bg-brand" />
                    TDS (Tax Deducted at Source)
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deducted while making specified payments like:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Salary (Section 192 / Form 24Q)",
                      "Rent (Section 194I / 194IB)",
                      "Professional & technical fees (194J)",
                      "Contractor & vendor payments (194C)",
                      "Interest, commission & dividend",
                    ].map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-ink font-medium">
                        <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* TCS CARD */}
              <div className="p-6 md:p-8 rounded-2xl bg-white border border-emerald-500/20 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg mb-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    TCS (Tax Collected at Source)
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Collected while selling specific goods/services:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Sale of goods exceeding threshold (206C(1H))",
                      "E-commerce operator collections (194-O)",
                      "Specified high-value transactions",
                      "Scrap, minerals & motor vehicles",
                      "Foreign remittance under LRS",
                    ].map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-ink font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-sm font-semibold text-brand bg-brand-light/30 border border-brand/20 p-4 rounded-xl">
              👉 Both require accurate deduction, timely payment &amp; return filing.
            </p>
          </div>
        </section>

        {/* WHO SHOULD USE THIS SERVICE? */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Users className="h-3.5 w-3.5" /> Ideal Audience
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Who Should Use This Service?
            </h2>
            <p className="mt-2 text-muted-foreground">This is ideal for:</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Businesses & Companies", icon: Building2 },
                { title: "Employers & HR Teams", icon: Users },
                { title: "Traders & Service Providers", icon: Briefcase },
                { title: "Startups & SMEs", icon: Sparkles },
                { title: "E-commerce Businesses", icon: ShoppingCart },
                { title: "Property Buyers & Landlords", icon: FileText },
              ].map((w, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                >
                  <w.icon className="h-5 w-5 text-brand shrink-0" />
                  <span>{w.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES WE OFFER */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Full Scope
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Services We Offer
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES_OFFERED.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-3">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-base">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPLORE ALL DEDICATED TDS / TCS SERVICES */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <FileText className="h-3.5 w-3.5" /> Direct Service Access
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Explore TDS &amp; TCS Sub-Services
              </h2>
              <p className="mt-2 text-muted-foreground">Dedicated CA assistance for every specific form, certificate and correction.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TDS_SERVICES.map((serv) => (
                <Link
                  key={serv.slug}
                  to={`/${serv.slug}` as any}
                  className="group p-5 rounded-2xl border bg-slate-50/50 hover:bg-white hover:border-brand hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-brand uppercase tracking-wider block mb-1">
                      {serv.slug.startsWith("form") ? "Form Service" : "Compliance"}
                    </span>
                    <h3 className="font-display font-bold text-ink group-hover:text-brand transition-colors text-lg">
                      {serv.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {serv.heroSub}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t flex items-center gap-1 text-sm font-semibold text-brand">
                    View Service Details <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT COMPLIANCE POINTS */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Compliance Checklist
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Important Compliance Points
            </h2>

            <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "TDS must be deducted at correct rate",
                  "TDS must be deposited on time",
                  "Returns must be filed quarterly",
                  "Late filing attracts penalty (₹200/day)",
                  "Interest applicable on delay",
                  "Form 16 / 16A generation post filing",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                    <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-brand border-t pt-4">
                👉 Expert handling ensures zero penalty compliance.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Clock className="h-3.5 w-3.5" /> 5-Step Execution
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Our Process
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Understand your TDS/TCS applicability",
                "Register TAN (if required)",
                "Calculate TDS/TCS accurately",
                "File returns on time",
                "Provide ongoing compliance support",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="text-base">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <FileText className="h-3.5 w-3.5" /> Checklist
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Documents Required
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "PAN & Aadhaar",
                "TAN details (if available)",
                "Salary/vendor/payment data",
                "Bank details",
                "Financial records",
              ].map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border text-sm font-medium text-ink shadow-sm"
                >
                  <BadgeCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-brand">
              👉 We handle everything end-to-end.
            </p>
          </div>
        </section>

        {/* TRUSTED BY BUSINESSES */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 text-white shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/80 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-lg font-bold">5/5 Rating on Google</span>
                </div>

                <a
                  href="tel:+918169887643"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-brand-dark transition-colors"
                >
                  <Phone className="h-4 w-4" /> Talk to CA Today
                </a>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">
                    “Never missed TDS deadlines after working with them.”
                  </p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">
                    “Smooth and accurate filing every quarter.”
                  </p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">
                    “Very reliable CA support.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <FileText className="h-3.5 w-3.5" /> Got Questions?
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <FaqItem key={idx} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <FinalCTA
          title="Avoid penalties and ensure smooth tax compliance."
          sub="Get expert CA support for TDS & TCS filing today."
          ctaText="Start TDS/TCS Filing Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="TDS / TCS Compliance"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-ink hover:text-brand transition-colors"
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180 text-brand" : ""
            }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t pt-3">
          {a}
        </div>
      )}
    </div>
  );
}
