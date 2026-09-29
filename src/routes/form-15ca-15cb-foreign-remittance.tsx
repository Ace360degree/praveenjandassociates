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
  Globe,
  Coins,
  Send,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";
const SERVICE_DATA = {
  slug: "form-15ca-15cb-foreign-remittance",
  title: "Form 15CA / 15CB Foreign Remittance",
  h1: "Form 15CA / 15CB Filing for Foreign Remittance – Get CA Certificate Fast & Hassle-Free",
  metaTitle: "Form 15CA 15CB Filing for Foreign Remittance | CA Certificate — Praveen J & Associates",
  metaDescription: "Get Form 15CB CA certificate and file Form 15CA online for foreign remittances under Section 195. Fast 24-48 hr turnaround, bank compliance and expert CA guidance.",
  heroLead: "Sending money abroad from India?",
  heroSub: "You may be required to file Form 15CA & obtain Form 15CB certificate before remittance. 👉 Get expert CA assistance for quick, compliant and smooth foreign remittance.",
  primaryCta: "Get 15CA / 15CB Certificate Now",
  problems: [
    "Confusion about applicability",
    "Incorrect form selection (Part A/B/C/D of 15CA)",
    "Delay in CA certification",
    "Errors leading to rejection by bank",
    "Non-compliance with Section 195",
  ],
  whatIs: {
    heading: "About Form 15CA / 15CB",
    points: [
      "Form 15CA: Declaration submitted online by the remitter",
      "Form 15CB: Certificate issued by a Chartered Accountant verifying tax determination",
      "Mandatory compliance under the Income Tax Act for foreign remittances",
    ],
    note: "👉 These ensure that taxes are correctly deducted under Section 195 before sending money abroad.",
  },
  whenRequired: [
    "NRI property sale proceeds",
    "Sending money to family abroad",
    "Business payments to foreign entities",
    "Import/export transactions",
    "Investment or asset transfers",
  ],
  whatIs2: {
    heading: "Types of Form 15CA",
    points: [
      "Part A – Small remittances (below threshold)",
      "Part B – With Assessing Officer approval",
      "Part C – Requires Form 15CB (most common)",
      "Part D – No tax applicable cases",
    ],
    note: "👉 We identify the correct category to ensure compliance.",
  },
  whoFor: [
    "NRIs repatriating funds abroad",
    "Individuals sending money outside India",
    "Businesses making foreign payments",
    "Exporters & importers",
    "Anyone making foreign remittance from India",
  ],
  benefits: [
    "Case evaluation & applicability check",
    "Tax calculation under Section 195",
    "Preparation of Form 15CB (CA Certificate)",
    "Filing of Form 15CA online",
    "Coordination with bank (if required)",
    "Fast turnaround & error-free filing",
  ],
  process: [
    "Understand remittance purpose",
    "Check tax applicability (Section 195)",
    "Prepare CA certificate (Form 15CB)",
    "File Form 15CA online",
    "Assist with bank submission",
  ],
  documents: [
    "PAN of remitter",
    "Remittance details & purpose",
    "Bank details",
    "Agreement/invoice (if applicable)",
    "Supporting documents",
  ],
  faqs: [
    { q: "What is Form 15CA?", a: "A declaration required for foreign remittance under income tax rules." },
    { q: "What is Form 15CB?", a: "A CA certificate confirming tax compliance for remittance." },
    { q: "Is 15CA mandatory for all remittances?", a: "Not always — depends on nature and amount of transaction." },
    { q: "How long does it take?", a: "Usually within 24–48 hours with proper documents." },
    { q: "Can CA handle complete process?", a: "Yes, from certification to filing and bank coordination." },
  ],
};

export const Route = createFileRoute("/form-15ca-15cb-foreign-remittance")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: "/form-15ca-15cb-foreign-remittance" },
    ],
    links: [{ rel: "canonical", href: "/form-15ca-15cb-foreign-remittance" }],
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
  component: Form15CA15CBPage,
});

function Form15CA15CBPage() {
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
                <Globe className="h-3.5 w-3.5" /> TDS & TCS · Foreign Remittance & 15CB Certification
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
                {SERVICE_DATA.h1}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{SERVICE_DATA.heroLead}</p>
              <p className="mt-2 text-muted-foreground">{SERVICE_DATA.heroSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ConsultationModal defaultService="TDS / TCS" title="Get 15CA / 15CB Certificate Now">
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
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Certified
                </span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-brand" /> Section 195 Expert
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

        {/* About Form 15CA / 15CB (UI Depth) */}
        <section className="py-14 bg-brand-light/20 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <BookOpen className="h-3.5 w-3.5" /> About Form 15CA / 15CB
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Mandatory Compliance for Foreign Remittances
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Form 15CA and 15CB are mandatory compliance requirements under the Income Tax Act for foreign remittances.
            </p>

            <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-brand/5 border border-brand/10 flex items-start gap-3">
                  <FileText className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">Form 15CA</span>
                    <span className="text-sm text-muted-foreground">Declaration submitted online by the remitter.</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand/5 border border-brand/10 flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink block">Form 15CB</span>
                    <span className="text-sm text-muted-foreground">Certificate issued by a Chartered Accountant.</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 These ensure that taxes are correctly deducted under Section 195 before sending money abroad.
              </p>
            </div>
          </div>
        </section>

        {/* When is Form 15CA / 15CB Required? */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
              <Send className="h-3.5 w-3.5" /> Applicability
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              When is Form 15CA / 15CB Required?
            </h2>
            <p className="mt-2 text-muted-foreground">Required when making payments outside India such as:</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.whenRequired.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-brand/5 border border-brand/15 text-sm font-medium text-ink">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-brand">
              👉 Banks will not process remittance without these forms (if applicable).
            </p>
          </div>
        </section>

        {/* Common Problems Faced */}
        <section className="py-14 bg-rose-50/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs font-semibold mb-3 border border-rose-100">
              <AlertTriangle className="h-3.5 w-3.5" /> Common Problems
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Common Problems Faced
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((p) => (
                <div key={p} className="flex gap-3 p-4 rounded-xl bg-white border border-rose-100 text-sm">
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium text-ink">{p}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-rose-700">
              👉 Mistakes can delay transactions or trigger notices.
            </p>
          </div>
        </section>

        {/* How We Help You & Types of Form 15CA */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-brand-light/35 rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand" /> How We Help You
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">We provide complete end-to-end 15CA / 15CB service:</p>
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

              <div className="bg-brand-light/35 rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <Globe className="h-5 w-5 text-brand" /> {SERVICE_DATA.whatIs2.heading}
                  </h3>
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

        {/* Who Needs This Service */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-brand" /> Who Needs This Service?
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
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Fast, compliant & hassle-free execution.</p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-14 bg-muted/30 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.documents.map((d) => (
                <div key={d} className="flex items-center gap-3 p-4 rounded-xl bg-white border">
                  <FileText className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-brand">👉 Full guidance provided.</p>
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
              <span className="text-ink ml-1">5/5 Client Rating</span>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                "Got my 15CA/15CB done within a day.",
                "Smooth remittance process without any issues.",
                "Highly professional and quick service.",
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
                <Phone className="h-4 w-4" /> Talk to a CA Today
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
          title="Don’t delay your foreign remittance due to compliance issues."
          sub="Get expert CA support for fast and accurate Form 15CA / 15CB filing."
          ctaText="👉 Get 15CA / 15CB Certificate Now"
          whatsappText="👉 Chat with CA on WhatsApp"
        />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
