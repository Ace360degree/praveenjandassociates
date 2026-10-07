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
  Home,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "form-26qc-tds-filing-rent",
  title: "Form 26QC (TDS on Rent)",
  h1: "File Form 26QC Online – TDS on Rent (Section 194IB) Made Simple",
  metaTitle: "File Form 26QC Online | TDS on Rent (Section 194IB) — Praveen J & Associates",
  metaDescription: "File Form 26QC TDS on rent online under Section 194IB with expert CA assistance. Calculate 5% TDS, pay challan online, avoid penalties & generate Form 16C easily.",
  heroLead: "Paying rent above ₹50,000/month?",
  heroSub: "You are required to deduct and file TDS under Section 194IB. 👉 Get expert CA support to calculate, pay and file Form 26QC accurately and on time.",
  primaryCta: "File Form 26QC Now",
  problems: [
    "Not aware of TDS requirement",
    "Confusion in calculation",
    "Errors in Form 26QC filing",
    "Delay in payment",
    "PAN mismatch issues",
  ],
  whatIsSection: {
    heading: "About TDS on Rent (Section 194IB)",
    points: [
      "Individuals paying rent above ₹50,000/month must deduct TDS",
      "TDS rate is 5% of rent",
      "TDS is deducted at the time of last payment or year-end",
      "Filed using Form 26QC",
    ],
    note: "👉 It is a mandatory compliance for tenants (even non-business individuals).",
  },
  whatIs26QC: {
    heading: "What is Form 26QC?",
    points: [
      "Challan-cum-statement for TDS on rent",
      "Used to deposit TDS under Section 194IB",
      "Filed by tenant (payer of rent)",
    ],
    note: "👉 It ensures proper reporting of rent-based TDS compliance.",
  },
  whatWeHandle: {
    heading: "What We Handle",
    points: [
      "TDS calculation (5%)",
      "Form 26QC preparation",
      "Online payment processing",
      "Accurate filing",
      "Assistance for Form 16C",
    ],
    note: "👉 End-to-end support provided.",
  },
  whoFor: [
    "Individuals paying high rent",
    "Salaried tenants",
    "NRIs paying rent in India",
    "Anyone with rent above ₹50,000/month",
  ],
  benefits: [
    "Avoid incorrect filing",
    "Ensure compliance with law",
    "Prevent penalties and notices",
    "Smooth Form 16C generation",
    "Hassle-free process",
  ],
  important: [
    "Applicable if rent exceeds ₹50,000/month",
    "TDS rate is 5%",
    "Filing required once in a year",
    "Must be filed within 30 days",
    "PAN of landlord required",
  ],
  process: [
    "Understand rent details",
    "Calculate TDS amount",
    "Prepare Form 26QC",
    "Process payment & filing",
    "Assist in Form 16C",
  ],
  documents: [
    "PAN of tenant & landlord",
    "Rent agreement details",
    "Payment details",
    "Contact information",
  ],
  faqs: [
    { q: "Who should file Form 26QC?", a: "Tenants paying rent above ₹50,000/month." },
    { q: "What is TDS rate on rent?", a: "5% under Section 194IB." },
    { q: "Is filing required monthly?", a: "No, once in a financial year." },
    { q: "What is Form 16C?", a: "TDS certificate issued to landlord." },
    { q: "Can CA help with filing?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/form-26qc-tds-filing-rent")({
  head: () => {
    return {
      meta: [
        { title: SERVICE_DATA.metaTitle },
        { name: "description", content: SERVICE_DATA.metaDescription },
        { property: "og:title", content: SERVICE_DATA.metaTitle },
        { property: "og:description", content: SERVICE_DATA.metaDescription },
        { property: "og:url", content: "/form-26qc-tds-filing-rent" },
      ],
      links: [{ rel: "canonical", href: "/form-26qc-tds-filing-rent" }],
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
    };
  },
  component: Form26QcPage,
});

function Form26QcPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC]">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200/80">
          <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/tds-tcs" className="hover:text-brand transition-colors">TDS & TCS Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink font-medium truncate">{SERVICE_DATA.title}</span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs font-semibold text-brand mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Section 194IB Compliance
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink max-w-4xl leading-tight">
              {SERVICE_DATA.h1}
            </h1>

            <div className="mt-6 space-y-3 max-w-3xl">
              <p className="text-lg md:text-xl font-medium text-ink">
                {SERVICE_DATA.heroLead}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {SERVICE_DATA.heroSub}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <ConsultationModal defaultService="Form 26QC (TDS on Rent - Section 194IB)" title="File Form 26QC Now">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {SERVICE_DATA.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </ConsultationModal>

              <a
                href="https://wa.me/918169887643?text=Hi%2C%20I%20need%20expert%20assistance%20with%20Form%2026QC%20TDS%20on%20Rent."
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
                <span className="text-xs font-medium text-ink">5% TDS Calculation</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Form 26QC Online</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Zero Error Penalty</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <Home className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Form 16C Generation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TDS ON RENT (SECTION 194IB) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Statutory Mandate
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {SERVICE_DATA.whatIsSection.heading}
            </h2>
            <p className="mt-2 text-muted-foreground">Under Section 194IB:</p>

            <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {SERVICE_DATA.whatIsSection.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 items-start p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-brand border-t pt-4">
                {SERVICE_DATA.whatIsSection.note}
              </p>
            </div>
          </div>
        </section>

        {/* COMMON PROBLEMS FACED */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Hurdles
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Common Problems Faced
            </h2>
            <p className="mt-2 text-muted-foreground">Many tenants face:</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((prob, idx) => (
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
              👉 These mistakes can lead to penalties and interest charges.
            </p>
          </div>
        </section>

        {/* WHAT IS FORM 26QC? */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <FileText className="h-3.5 w-3.5" /> Form Overview
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {SERVICE_DATA.whatIs26QC.heading}
            </h2>
            <p className="mt-2 text-muted-foreground">Form 26QC is:</p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-3 gap-4">
                {SERVICE_DATA.whatIs26QC.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                {SERVICE_DATA.whatIs26QC.note}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" /> Scope of Work
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {SERVICE_DATA.whatWeHandle.heading}
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.whatWeHandle.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 text-sm text-ink font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
              {SERVICE_DATA.whatWeHandle.note}
            </p>
          </div>
        </section>

        {/* WHO SHOULD USE THIS SERVICE? */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Users className="h-3.5 w-3.5" /> Applicability
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Who Should Use This Service?
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SERVICE_DATA.whoFor.map((w, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border text-sm font-medium text-ink shadow-sm"
                >
                  <div className="h-2 w-2 rounded-full bg-brand shrink-0" />
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY EXPERT HELP IS IMPORTANT */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" /> Key Advantages
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Why Expert Help is Important
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT POINTS */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Key Compliance Checklist
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Important Points
            </h2>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {SERVICE_DATA.important.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                    <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Clock className="h-3.5 w-3.5" /> Workflow
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Our Process
            </h2>

            <div className="mt-8 space-y-4">
              {SERVICE_DATA.process.map((step, idx) => (
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

            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Simple and quick execution.
            </p>
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

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {SERVICE_DATA.documents.map((doc, idx) => (
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
              👉 Minimal documentation required.
            </p>
          </div>
        </section>

        {/* TRUST SECTION */}
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
                  <p className="text-slate-300 italic text-sm">“Made rent TDS filing very easy.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Quick and smooth service.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Highly recommended CA support.”</p>
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
              {SERVICE_DATA.faqs.map((faq, idx) => (
                <FaqItem key={idx} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <FinalCTA
          title="Avoid penalties and stay compliant with rent TDS rules."
          sub="Get expert CA support and file Form 26QC easily."
          ctaText="File Form 26QC Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="Form 26QC (TDS on Rent - Section 194IB)"
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
