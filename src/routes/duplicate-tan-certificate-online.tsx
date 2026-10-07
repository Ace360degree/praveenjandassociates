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
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "duplicate-tan-certificate-online",
  title: "Duplicate TAN Certificate Online",
  h1: "Duplicate TAN Certificate Online – Reissue Lost TAN Allotment Letter Easily",
  metaTitle: "Duplicate TAN Certificate Online – Reissue Lost TAN Letter | Praveen J & Associates",
  metaDescription: "Lost TAN certificate? Get duplicate TAN allotment letter online with expert CA support. Quick retrieval, verification and hassle-free download.",
  heroLead: "Lost your TAN certificate (allotment letter)?",
  heroSub: "Don’t worry — you can easily get a duplicate copy online. Get expert CA support to reissue and download your TAN certificate quickly and hassle-free.",
  primaryCta: "Get Duplicate TAN Certificate Now",
  problems: [
    "Lost TAN allotment letter",
    "Not knowing how to download TAN certificate",
    "Difficulty accessing old TAN details",
    "Errors while requesting duplicate TAN",
    "Urgent requirement for compliance",
  ],
  whatIs: {
    heading: "What is Duplicate TAN Certificate?",
    points: [
      "A reissued copy of your TAN allotment letter",
      "Official proof of your TAN number",
      "Required for compliance and verification",
    ],
    note: "👉 It holds the same validity as the original certificate.",
  },
  whoFor: [
    "Businesses who lost TAN certificate",
    "Companies needing duplicate copy for records",
    "Professionals handling compliance",
    "Firms facing audit/document requirements",
    "Anyone unable to access TAN certificate",
  ],
  benefits: [
    "Lost or misplaced certificate",
    "Required for TDS return filing",
    "Needed for audit or compliance",
    "Required for bank or documentation",
    "Unable to download from portal",
  ],
  important: [
    "TAN number must be active",
    "Correct details required for retrieval",
    "Certificate must match PAN database",
    "Delay can affect compliance",
    "Expert handling ensures quick reissue",
  ],
  process: [
    "Collect TAN and basic details",
    "Verify information",
    "Apply for duplicate TAN certificate",
    "Retrieve/download certificate",
    "Share with client",
  ],
  documents: [
    "TAN number (if available)",
    "PAN details",
    "Business details",
    "Contact details",
  ],
  faqs: [
    { q: "Can I get duplicate TAN certificate online?", a: "Yes, it can be reissued online." },
    { q: "Is duplicate TAN valid?", a: "Yes, it has the same validity as original." },
    { q: "What if I don’t remember TAN number?", a: "It can be retrieved using PAN details." },
    { q: "How long does it take?", a: "Usually quick, depending on details." },
    { q: "Can CA help with reissue?", a: "Yes, complete support available." },
  ],
};

export const Route = createFileRoute("/duplicate-tan-certificate-online")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/duplicate-tan-certificate-online" },
    ],
    links: [{ rel: "canonical", href: "/duplicate-tan-certificate-online" }],
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
  component: DuplicateTanPage,
});

function DuplicateTanPage() {

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
                <Sparkles className="h-3.5 w-3.5" /> TDS & TCS · {SERVICE_DATA.title}
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="Get Duplicate TAN Certificate Now">
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
                  <BadgeCheck className="h-4 w-4 text-brand" /> 100% Compliant
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

        {/* Introduction Section */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> Introduction
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Duplicate TAN Certificate Online
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Your TAN certificate (allotment letter) is an important document required for:
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  TDS return filing
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Compliance verification
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Business documentation
                </li>
                <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  Bank & audit requirements
                </li>
              </ul>

              <div className="mt-6 flex gap-3 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink items-start">
                <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-brand">👉 </span>
                  If your TAN certificate is lost, misplaced, or unavailable, you can apply for a duplicate TAN certificate online and download it again.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Faced */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Common Problems Faced</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-5 rounded-xl border bg-red-50/40">
                  <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <p className="text-sm text-ink">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
              👉 Delay in getting TAN certificate can affect your TDS filing and business operations.
            </div>
          </div>
        </section>

        {/* What is Duplicate TAN */}
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{SERVICE_DATA.whatIs.heading}</h2>
            <ul className="mt-6 space-y-3">
              {SERVICE_DATA.whatIs.points.map((p) => (
                <li key={p} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-ink">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-brand/5 border border-brand/20 p-4 text-sm text-ink">
              <span className="font-semibold text-brand">Note: </span>
              {SERVICE_DATA.whatIs.note}
            </div>
          </div>
        </section>

        {/* Who Should Use */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
              Who Should Use This Service?
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {SERVICE_DATA.whoFor.map((w) => (
                <div key={w} className="p-5 rounded-xl border bg-white shadow-sm">
                  <div className="h-9 w-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-ink">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When You Need Duplicate TAN & Important Points */}
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand" /> When You Need Duplicate TAN
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {SERVICE_DATA.benefits.map((b) => (
                    <li key={b} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Quick retrieval and document support.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
              <div>
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
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Expert handling ensures quick reissue.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {SERVICE_DATA.process.map((step, i) => (
                <div key={step} className="p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5 shadow-sm">
                  <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">
                    {i + 1}
                  </div>
                  <p className="mt-3 text-sm font-medium text-ink">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
              👉 Fast and hassle-free process.
            </div>
          </div>
        </section>

        {/* Documents Required */}
        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex gap-3 p-4 rounded-xl bg-white border shadow-sm">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm text-ink">{d}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
              👉 Minimal documentation required.
            </div>
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
                "Got duplicate TAN within no time.",
                "Very helpful and quick service.",
                "Solved urgent compliance issue.",
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

        {/* FAQ Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-3">
              {SERVICE_DATA.faqs.map((f, i) => (
                <div key={f.q} className="rounded-xl border bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                  >
                    <span className="font-semibold text-ink">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          title="Lost your TAN certificate? Don’t delay your compliance."
          sub="Get your duplicate TAN certificate quickly with expert CA support."
          ctaText="👉 Get Duplicate TAN Certificate Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
