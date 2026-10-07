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
  Home,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "form-16c-tds-certificate-rent",
  title: "Form 16C TDS Certificate (Rent)",
  h1: "Download Form 16C Online – TDS Certificate for Rent (Section 194IB)",
  metaTitle: "Download Form 16C Online | TDS Certificate for Rent (Section 194IB) — Praveen J & Associates",
  metaDescription: "Download Form 16C TDS certificate on rent online via TRACES under Section 194IB. Expert CA support for TRACES login, certificate verification and landlord tax credit.",
  heroLead: "Filed Form 26QC but unable to download Form 16C?",
  heroSub: "Facing issues with TRACES or certificate mismatch? 👉 Get expert CA support to download, verify and resolve Form 16C issues easily.",
  primaryCta: "Download Form 16C Now",
  problems: [
    "Unable to download from TRACES",
    "Login or registration issues",
    "Certificate not available",
    "PAN mismatch problems",
    "Errors in certificate details",
  ],
  whatIs: {
    heading: "About Form 16C",
    points: [
      "Form 16C is the TDS certificate for rent payments under Section 194IB.",
      "TDS is deposited with the government after filing Form 26QC.",
      "Form 16C becomes available on TRACES for the tenant to download and issue to the landlord.",
    ],
    note: "👉 It acts as proof of TDS deduction on rent.",
  },
  whatWeHelp: {
    heading: "What We Help With",
    points: [
      "TRACES login & registration support",
      "Form 16C download assistance",
      "Verification of certificate details",
      "Correction guidance (if needed)",
      "Support for ITR usage",
    ],
    note: "👉 Complete assistance from download to compliance.",
  },
  whoFor: [
    "Tenants who filed Form 26QC",
    "Landlords expecting TDS certificate",
    "Individuals facing TRACES issues",
    "Anyone with mismatch or delay",
  ],
  benefits: [
    "Required for landlord to claim TDS credit",
    "Must match Form 26AS",
    "Essential for income tax filing",
    "Proof of rent TDS deduction",
    "Completes compliance",
  ],
  important: [
    "Available after Form 26QC processing",
    "Download only via TRACES",
    "PAN must be correct",
    "Must be issued to landlord",
    "Required for ITR filing",
  ],
  process: [
    "Check Form 26QC status",
    "Access TRACES portal",
    "Download Form 16C",
    "Verify certificate details",
    "Assist in correction (if required)",
  ],
  documents: [
    "PAN of tenant & landlord",
    "Form 26QC acknowledgement",
    "Rent details",
  ],
  faqs: [
    { q: "What is Form 16C?", a: "TDS certificate for rent payments." },
    { q: "Who issues Form 16C?", a: "Tenant issues it to landlord." },
    { q: "When can I download Form 16C?", a: "After filing Form 26QC." },
    { q: "Where to download Form 16C?", a: "From TRACES portal." },
    { q: "Can CA help with download?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/form-16c-tds-certificate-rent")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/form-16c-tds-certificate-rent" },
    ],
    links: [{ rel: "canonical", href: "/form-16c-tds-certificate-rent" }],
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
  component: Form16CPage,
});

function Form16CPage() {
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
                <Home className="h-3.5 w-3.5" /> TDS on Rent · Section 194IB
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="Download Form 16C Now">
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
                  <BadgeCheck className="h-4 w-4 text-brand" /> TRACES Section 194IB
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

        {/* ABOUT FORM 16C (UI DEPTH) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> About Form 16C
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              TDS Certificate for Rent Payments (Section 194IB)
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Form 16C is the TDS certificate for rent payments under Section 194IB. After filing Form 26QC:
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-3 gap-4">
                <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  TDS is deposited with the government
                </li>
                <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  Form 16C becomes available on TRACES
                </li>
                <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                  Tenant must issue it to landlord
                </li>
              </ul>

              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 It acts as proof of TDS deduction on rent.
              </p>
            </div>
          </div>
        </section>

        {/* COMMON ISSUES FACED */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-semibold mb-3 border border-rose-100">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Issues
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Common Issues Faced
            </h2>
            <p className="mt-2 text-muted-foreground">Many users face:</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 These issues can delay tax credit for landlord.
            </p>
          </div>
        </section>

        {/* WHY FORM 16C IS IMPORTANT & WHAT WE HELP WITH */}
        <section className="py-14 bg-muted/20 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Form 16C is Important
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {SERVICE_DATA.benefits.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <Building className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatWeHelp.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {SERVICE_DATA.whatWeHelp.points.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {SERVICE_DATA.whatWeHelp.note && (
                  <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                    {SERVICE_DATA.whatWeHelp.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WHO SHOULD USE THIS SERVICE */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
              </h3>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {SERVICE_DATA.whoFor.map((p) => (
                  <li key={p} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* IMPORTANT POINTS */}
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
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Quick and smooth process.</p>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-white border shadow-sm">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Minimal effort required.</p>
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
                "Got Form 16C easily without confusion.",
                "Very smooth and fast support.",
                "Helped me complete rent TDS process.",
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
          title="Complete your rent TDS compliance without hassle."
          sub="Get expert CA support and download Form 16C easily."
          ctaText="👉 Download Form 16C Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
