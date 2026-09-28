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
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "form-26qc-correction-tds-rent",
  title: "Form 26QC Correction (Rent TDS)",
  h1: "Correct Form 26QC Online – Fix TDS on Rent Errors Easily via TRACES",
  metaTitle: "Correct Form 26QC Online | Fix TDS on Rent Errors via TRACES — Praveen J & Associates",
  metaDescription: "Fix errors in Form 26QC (TDS on Rent) online via TRACES. Expert CA assistance for PAN correction, rent amount, financial year fix, challan mismatch & Form 16C issue.",
  heroLead: "Made a mistake while filing Form 26QC (TDS on Rent)?",
  heroSub: "Incorrect details can lead to penalties, mismatch and delay in Form 16C. 👉 Get expert CA support to correct Form 26QC quickly and accurately through TRACES.",
  primaryCta: "Correct Form 26QC Now",
  problems: [
    "Wrong PAN of landlord or tenant",
    "Incorrect rent amount entered",
    "Wrong TDS calculation",
    "Incorrect financial year",
    "Challan mismatch issues",
  ],
  whatIsSection: {
    heading: "About Form 26QC Correction",
    lead: "Form 26QC correction is required when wrong details are submitted while filing TDS on rent under Section 194IB.",
    points: [
      "Fix incorrect information",
      "Resolve mismatches",
      "Ensure proper tax credit to landlord",
    ],
    note: "👉 Corrections are processed through the TRACES portal with proper validation.",
  },
  benefits: [
    "Ensures correct TDS credit to landlord",
    "Enables proper Form 16C generation",
    "Avoids penalties and notices",
    "Maintains compliance",
    "Prevents future tax issues",
  ],
  whatWeHelp: {
    heading: "What We Help With",
    points: [
      "PAN correction (tenant/landlord)",
      "Rent amount & TDS correction",
      "Financial year correction",
      "Challan correction linkage",
      "TRACES processing support",
    ],
    note: "👉 End-to-end correction handled professionally.",
  },
  whoFor: [
    "Tenants who filed Form 26QC incorrectly",
    "Individuals facing Form 16C issues",
    "Users with PAN mismatch errors",
    "Anyone dealing with rent TDS mismatch",
  ],
  important: [
    "Correction is done via TRACES",
    "Some corrections require approval",
    "Details must match original challan",
    "Incorrect correction may get rejected",
    "Early correction avoids complications",
  ],
  process: [
    "Review Form 26QC details",
    "Identify errors",
    "Prepare correction request",
    "Process via TRACES",
    "Confirm successful update",
  ],
  documents: [
    "PAN of tenant & landlord",
    "Form 26QC acknowledgement",
    "Rent agreement details",
    "Payment details",
  ],
  faqs: [
    { q: "Can Form 26QC be corrected?", a: "Yes, through TRACES portal." },
    { q: "What details can be corrected?", a: "PAN, rent amount, TDS details, financial year." },
    { q: "What happens if not corrected?", a: "Mismatch, credit issues, and penalties may arise." },
    { q: "Is correction complicated?", a: "It requires proper process and validation." },
    { q: "Can CA handle correction?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/form-26qc-correction-tds-rent")({
  head: () => {
    return {
      meta: [
        { title: SERVICE_DATA.metaTitle },
        { name: "description", content: SERVICE_DATA.metaDescription },
        { property: "og:title", content: SERVICE_DATA.metaTitle },
        { property: "og:description", content: SERVICE_DATA.metaDescription },
        { property: "og:url", content: "/form-26qc-correction-tds-rent" },
      ],
      links: [{ rel: "canonical", href: "/form-26qc-correction-tds-rent" }],
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
  component: Form26QcCorrectionPage,
});

function Form26QcCorrectionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFC]">
      <Header />
      <main className="flex-1">
        {/* Breadcrumbs */}
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
              TRACES Rent TDS Rectification
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
              <ConsultationModal defaultService="Form 26QC Correction (Rent TDS)" title="Correct Form 26QC Now">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {SERVICE_DATA.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </ConsultationModal>

              <a
                href="https://wa.me/918169887643?text=Hi%2C%20I%20need%20expert%20assistance%20with%20Form%2026QC%20Correction."
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
                <span className="text-xs font-medium text-ink">PAN Rectification</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <Wrench className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Rent Amount Fix</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">TRACES Validation</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <FileText className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Form 16C Resolution</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT FORM 26QC CORRECTION */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Overview
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {SERVICE_DATA.whatIsSection.heading}
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {SERVICE_DATA.whatIsSection.lead}
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
              <p className="font-semibold text-ink mb-4">It helps you:</p>
              <ul className="grid sm:grid-cols-3 gap-4">
                {SERVICE_DATA.whatIsSection.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
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

        {/* COMMON ERRORS IN FORM 26QC */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Frequent Mistakes
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Common Errors in Form 26QC
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
              👉 These errors can impact Form 16C and tax credit for landlord.
            </p>
          </div>
        </section>

        {/* WHY CORRECTION IS IMPORTANT */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" /> Core Benefits
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Why Correction is Important
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border text-sm font-medium text-ink shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE HELP WITH */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold mb-3">
              <Wrench className="h-3.5 w-3.5" /> Full Assistance
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {SERVICE_DATA.whatWeHelp.heading}
            </h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.whatWeHelp.points.map((pt, idx) => (
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
              {SERVICE_DATA.whatWeHelp.note}
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

        {/* IMPORTANT POINTS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> TRACES Guidelines
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Important Points
            </h2>

            <div className="mt-6 bg-slate-50 rounded-2xl border p-6 shadow-sm">
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
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Clock className="h-3.5 w-3.5" /> 5-Step Resolution
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Our Process
            </h2>

            <div className="mt-8 space-y-4">
              {SERVICE_DATA.process.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border text-sm font-medium text-ink shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="text-base">{step}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Smooth and hassle-free process.
            </p>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-14 bg-white border-b">
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                >
                  <BadgeCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Minimal effort required.
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
                  <span className="text-lg font-bold">4.8/5 Rating on Google</span>
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
                  <p className="text-slate-300 italic text-sm">“Fixed my 26QC error quickly.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Very smooth correction process.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Professional and reliable service.”</p>
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
          title="Fix your Form 26QC errors before they create bigger problems."
          sub="Get expert CA support and ensure accurate rent TDS compliance."
          ctaText="Correct Form 26QC Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="Form 26QC Correction (Rent TDS)"
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
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180 text-brand" : ""
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
