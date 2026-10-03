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
  Building,
  XCircle,
  IdCard,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "tan-registration-services-india",
  title: "TAN Registration Services",
  h1: "TAN Registration Services in India – Apply for TDS/TCS TAN Online with Expert CA Support",
  metaTitle: "TAN Registration Online in India | Apply for TDS/TCS TAN with CA Support",
  metaDescription: "Apply for TAN registration online in India. Quick 10-digit Tax Deduction Account Number allotment with expert Chartered Accountant assistance for TDS/TCS compliance.",
  heroLead: "Starting TDS or TCS compliance for your business?",
  heroSub: "You need a TAN (Tax Deduction Account Number) before you begin. 👉 Get expert CA support to apply for TAN online quickly and ensure smooth tax compliance from day one.",
  primaryCta: "Apply for TAN Now",
  introPoints: [
    "Paying salaries",
    "Hiring professionals",
    "Making contractor payments",
    "Running a business",
  ],
  introRisks: [
    "You cannot file TDS returns",
    "You may face penalties",
    "Your compliance becomes invalid",
  ],
  problems: [
    "Penalty for non-compliance",
    "Inability to deduct TDS legally",
    "Delay in return filing",
    "Notices from Income Tax Department",
  ],
  whatIsTan: [
    "TDS (Tax Deducted at Source)",
    "TCS (Tax Collected at Source)",
    "Filing TDS/TCS returns",
    "Government tax reporting",
  ],
  whoFor: [
    "Companies & businesses",
    "Employers paying salary",
    "Professionals making payments",
    "Contractors & firms",
    "E-commerce operators (in some cases)",
  ],
  benefits: [
    "Legal compliance for TDS/TCS",
    "Avoid penalties and notices",
    "Smooth return filing",
    "Required for business operations",
    "Builds credibility and trust",
  ],
  penalties: [
    "₹10,000 penalty for not obtaining TAN under Section 272BB",
    "Inability to deposit TDS/TCS and generate challans",
    "Issues and delays in filing quarterly TDS returns",
    "Risk of scrutiny notices from Income Tax Department",
  ],
  process: [
    "Understand your requirement",
    "Collect basic documents",
    "Prepare TAN application",
    "Submit online application",
    "Track and deliver TAN",
  ],
  documents: [
    "PAN Card",
    "Aadhaar Card",
    "Business details",
    "Address proof",
    "Contact details",
  ],
  faqs: [
    { q: "What is TAN?", a: "Tax Deduction Account Number required for TDS." },
    { q: "Is TAN mandatory?", a: "Yes, if you deduct TDS or collect TCS." },
    { q: "How long does TAN registration take?", a: "Usually a few working days." },
    { q: "Can individuals apply for TAN?", a: "Yes, if liable to deduct TDS." },
    { q: "Can CA handle TAN registration?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/tan-registration-services-india")({
  head: () => {
    return {
      meta: [
        { title: SERVICE_DATA.metaTitle },
        { name: "description", content: SERVICE_DATA.metaDescription },
        { property: "og:title", content: SERVICE_DATA.metaTitle },
        { property: "og:description", content: SERVICE_DATA.metaDescription },
        { property: "og:url", content: "/tan-registration-services-india" },
      ],
      links: [{ rel: "canonical", href: "/tan-registration-services-india" }],
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
  component: TanRegistrationPage,
});

function TanRegistrationPage() {
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
              Section 203A Compliance
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
              <ConsultationModal defaultService="TAN Registration Services" title="Apply for TAN Now">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-dark transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {SERVICE_DATA.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </ConsultationModal>

              <a
                href="https://wa.me/918169887643?text=Hi%2C%20I%20want%20to%20apply%20for%20a%20new%20TAN%20Registration."
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
                <IdCard className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">10-Digit TAN Allotment</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <FileText className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Form 49B Online Filing</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Zero Penalty Assurance</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-white border shadow-sm">
                <Clock className="h-4 w-4 text-brand shrink-0" />
                <span className="text-xs font-medium text-ink">Fast Allotment (3-4 Days)</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION (VERY IMPORTANT FOR UI FILL) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Mandatory Requirement
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Mandatory Identity for TDS & TCS Deductors
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              TAN (Tax Deduction and Collection Account Number) is a mandatory requirement for any individual or business responsible for deducting or collecting tax at source.
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
              <p className="font-semibold text-ink mb-3">Whether you are:</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICE_DATA.introPoints.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-brand border-t pt-4">
                👉 You must have a TAN before deducting TDS or collecting TCS.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-red-50/70 border border-red-200">
                <p className="text-sm font-semibold text-rose-700 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-rose-600" />
                  Without TAN:
                </p>
                <ul className="grid sm:grid-cols-3 gap-3">
                  {SERVICE_DATA.introRisks.map((risk, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink font-medium">
                      <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TAN REGISTRATION IS IMPORTANT */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Avoid Costly Delays
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Why TAN Registration is Important
            </h2>
            <p className="mt-2 text-muted-foreground">Many businesses delay TAN registration and face:</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
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

            <p className="mt-6 text-sm font-semibold text-brand bg-brand-light/30 border border-brand/20 p-4 rounded-xl">
              👉 Getting TAN on time ensures smooth and legal tax operations.
            </p>
          </div>
        </section>

        {/* WHAT IS TAN? */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <IdCard className="h-3.5 w-3.5" /> 10-Digit Identifier
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              What is TAN?
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              TAN is a 10-digit alphanumeric number issued by the Income Tax Department. It is used for:
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SERVICE_DATA.whatIsTan.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-brand border-t pt-4">
                👉 It acts as your identity for tax deduction compliance.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS TAN REGISTRATION? */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Users className="h-3.5 w-3.5" /> Applicability
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Who Needs TAN Registration?
            </h2>
            <p className="mt-2 text-muted-foreground">TAN is required for:</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.whoFor.map((w, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                >
                  <Building className="h-4 w-4 text-brand shrink-0" />
                  <span>{w}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-semibold text-brand">
              👉 If you deduct TDS — TAN is mandatory.
            </p>
          </div>
        </section>

        {/* BENEFITS OF TAN REGISTRATION */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" /> Core Advantages
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Benefits of TAN Registration
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

        {/* PENALTY FOR NOT HAVING TAN */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-semibold mb-3">
              <AlertTriangle className="h-3.5 w-3.5" /> Non-Compliance Risk
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Penalty for Not Having TAN
            </h2>

            <div className="mt-6 bg-red-50/40 rounded-2xl border border-red-100 p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {SERVICE_DATA.penalties.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-rose-700 border-t border-red-200 pt-4">
                👉 It’s a small step that avoids big problems.
              </p>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Clock className="h-3.5 w-3.5" /> Fast Execution
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Our TAN Registration Process
            </h2>
            <p className="mt-2 text-muted-foreground">We keep it simple and fast:</p>

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
              👉 Usually completed within a few working days.
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

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              👉 Minimal documentation, quick process.
            </p>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-14 bg-slate-50 border-b">
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
                  <p className="text-slate-300 italic text-sm">“Got TAN quickly without any hassle.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Very smooth and professional process.”</p>
                </div>
                <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4">
                  <p className="text-slate-300 italic text-sm">“Great support for new business setup.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white border-b">
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
          title="Don’t delay your compliance and risk penalties."
          sub="Get your TAN registration done quickly with expert CA support."
          ctaText="Apply for TAN Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="TAN Registration Services"
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
