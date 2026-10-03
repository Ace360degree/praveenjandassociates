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
  Percent,
  Landmark,
  Scale,
  Building,
  HelpCircle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "tds-on-property-nri-section-195",
  title: "TDS on Property (NRI) – Section 195",
  h1: "TDS on Property Purchase from NRI (Section 195) – Rules, Rates & Compliance",
  metaTitle: "TDS on Property Purchase from NRI (Section 195) | Rates, TAN & Form 27Q — Praveen J & Associates",
  metaDescription: "Buying property from an NRI in India? Learn Section 195 TDS rates (20%+), TAN requirements, Form 27Q filing & Lower TDS certificate (197) with CA assistance.",
  heroLead: "Buying property from an NRI in India?",
  heroSub: "You are legally required to deduct TDS under Section 195 — and mistakes can lead to heavy penalties. 👉 Get expert CA support for accurate TDS calculation, filing & compliance.",
  primaryCta: "Get TDS Calculation & Filing Help",
  problems: [
    "Deducting only 1% TDS (incorrect – applies only to residents)",
    "Not obtaining TAN",
    "Wrong TDS calculation",
    "Incorrect filing or delay in Form 27Q",
    "Ignoring lower TDS certificate (leading to excess deduction)",
  ],
  about: {
    heading: "About TDS on NRI Property",
    lead: "When purchasing property from a Non-Resident Indian (NRI), the buyer must deduct TDS under Section 195 of the Income Tax Act.",
    note: "👉 Unlike resident transactions, TDS is not 1% — it is significantly higher and more complex.",
  },
  keyRules: [
    "TDS is deducted on total sale value (not just capital gains)",
    "Applicable for all property values (no ₹50 lakh threshold)",
    "Buyer must obtain a TAN (Tax Deduction Account Number)",
    "TDS must be deposited with the government",
    "Return must be filed using Form 27Q",
  ],
  rates: [
    {
      title: "Long-Term Capital Gains (LTCG)",
      rate: "20%",
      sub: "Plus applicable surcharge and cess",
      desc: "Applicable when property is held for more than 24 months before transfer.",
    },
    {
      title: "Short-Term Capital Gains (STCG)",
      rate: "Slab Rates",
      sub: "As per applicable individual tax slab",
      desc: "Applicable when property is held for 24 months or less before transfer.",
    },
  ],
  ratesNote: "👉 Effective TDS can go 20%–30%+, depending on the case.",
  howWeHelp: [
    "Accurate TDS calculation (case-specific)",
    "TAN application for buyer",
    "Lower TDS certificate guidance (if applicable)",
    "TDS payment & challan handling",
    "Filing of Form 27Q",
    "Issuance of TDS certificate (Form 16A)",
    "Advisory to avoid future tax issues",
  ],
  lowerTdsOption: {
    heading: "Important: Lower TDS Option",
    desc: "In many cases, the seller (NRI) can apply for a Lower TDS Certificate under Section 197.",
    benefit: "👉 This helps reduce TDS from 20–30% to actual tax liability",
    assist: [
      "Lower TDS application",
      "Coordination between buyer & seller",
      "Compliance planning",
    ],
  },
  process: [
    { step: "Step 1", title: "Review property transaction details" },
    { step: "Step 2", title: "Calculate correct TDS liability" },
    { step: "Step 3", title: "Apply for TAN (if not available)" },
    { step: "Step 4", title: "Deduct & deposit TDS" },
    { step: "Step 5", title: "File Form 27Q" },
    { step: "Step 6", title: "Issue TDS certificate" },
  ],
  whoFor: [
    "Property buyers purchasing from NRIs",
    "Real estate investors",
    "Brokers facilitating NRI deals",
    "Anyone involved in NRI property transactions",
  ],
  documents: [
    "Buyer & seller PAN",
    "Property agreement / sale deed",
    "Payment details",
    "NRI status proof",
    "Lower TDS certificate (if applicable)",
  ],
  faqs: [
    {
      q: "What is TDS under Section 195?",
      a: "TDS applicable when making payments to a non-resident, including property purchase.",
    },
    {
      q: "Is 1% TDS applicable for NRI property?",
      a: "No, 1% applies only to residents. NRI transactions attract higher TDS.",
    },
    {
      q: "What is Form 27Q?",
      a: "TDS return form filed for payments made to NRIs.",
    },
    {
      q: "Can TDS be reduced?",
      a: "Yes, through a Lower TDS Certificate (Section 197).",
    },
    {
      q: "Is TAN mandatory for buyer?",
      a: "Yes, TAN is required for deducting and filing TDS.",
    },
  ],
};

export const Route = createFileRoute("/tds-on-property-nri-section-195")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: `/tds-on-property-nri-section-195` },
    ],
    links: [{ rel: "canonical", href: `/tds-on-property-nri-section-195` }],
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
  }),
  component: TdsOnPropertyNriSection195Page,
});

function TdsOnPropertyNriSection195Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-brand transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/tds-tcs" className="hover:text-brand transition-colors">
                TDS &amp; TCS Services
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-ink font-medium">TDS on Property (NRI) – Section 195</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1.5 text-xs font-semibold text-brand mb-4">
                  <Sparkles className="h-3.5 w-3.5" /> NRI Property Tax Compliance
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
                  {SERVICE_DATA.h1}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-ink font-semibold">
                  {SERVICE_DATA.heroLead}
                </p>
                <p className="mt-2 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {SERVICE_DATA.heroSub}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <ConsultationModal defaultService="TDS on Property (NRI) – Section 195" title="Get TDS Calculation & Filing Help">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3.5 text-base font-semibold shadow-lg shadow-brand/25 hover:bg-brand/90 transition-all cursor-pointer"
                    >
                      {SERVICE_DATA.primaryCta}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </ConsultationModal>

                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20I%20am%20buying%20property%20from%20an%20NRI%20and%20need%20expert%20CA%20support%20for%20Section%20195%20TDS%20calculation%20and%20Form%2027Q%20filing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-600 text-emerald-700 bg-emerald-50/50 px-6 py-3.5 text-base font-semibold hover:bg-emerald-100/60 transition-all"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    Chat with CA on WhatsApp
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span>100% CA Led Verification</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span>Zero Penalty Assurance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span>5/5 Rating on Google</span>
                  </div>
                </div>
              </div>

              {/* Side Quick Card */}
              <div className="lg:col-span-4">
                <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl -mr-10 -mt-10" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Important Statutory Rule
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-white">Section 195 vs Section 194-IA</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Resident seller TDS is 1% under 194-IA. For NRI sellers, Section 195 mandates 20%+ TDS plus TAN &amp; Form 27Q return filing.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>TAN is mandatory for the buyer</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Form 27Q quarterly return required</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Form 16A TDS certificate issuance</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <ConsultationModal defaultService="TDS on Property (NRI) – Section 195" title="Speak to NRI Property Tax CA">
                      <button
                        type="button"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand/90 text-white py-3 text-xs font-semibold transition-all cursor-pointer"
                      >
                        Talk to a CA Today <ArrowRight className="h-4 w-4" />
                      </button>
                    </ConsultationModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES / PROBLEMS SECTION */}
        <section className="py-14 bg-rose-50/40 border-b border-rose-100/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Avoid Costly Errors
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Common Mistakes by Property Buyers
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Many buyers make critical assumptions when dealing with NRI sellers, triggering demand notices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((prob, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-rose-200/70 shadow-sm"
                >
                  <AlertTriangle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-ink">{prob}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-semibold text-rose-700 bg-rose-100/70 border border-rose-200 rounded-lg p-3 inline-block">
                👉 These mistakes can lead to penalties, interest &amp; legal notices.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT TDS ON NRI PROPERTY */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> Statutory Framework
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                {SERVICE_DATA.about.heading}
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {SERVICE_DATA.about.lead}
              </p>
              <div className="mt-4 inline-block bg-brand/10 text-brand font-semibold text-sm px-4 py-2 rounded-lg border border-brand/20">
                {SERVICE_DATA.about.note}
              </div>
            </div>
          </div>
        </section>

        {/* KEY RULES UNDER SECTION 195 */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Scale className="h-3.5 w-3.5" /> Mandatory Provisions
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Key Rules Under Section 195
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.keyRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-ink leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TDS RATES FOR NRI PROPERTY */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <Percent className="h-3.5 w-3.5" /> Tax Slabs &amp; Computation
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                TDS Rates for NRI Property
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {SERVICE_DATA.rates.map((rateItem, idx) => (
                <div
                  key={idx}
                  className="p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">{rateItem.title}</h3>
                    <div className="text-3xl font-extrabold text-brand my-2">{rateItem.rate}</div>
                    <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block mb-3 border border-emerald-200">
                      {rateItem.sub}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {rateItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 inline-block text-amber-900 font-semibold text-sm">
                {SERVICE_DATA.ratesNote}
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE HELP YOU */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Full CA Solution
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How We Help You
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                We provide complete end-to-end TDS compliance support:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.howWeHelp.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-brand/20 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT: LOWER TDS OPTION (SECTION 197) */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand/5 via-white to-brand/10 border-2 border-brand/30 shadow-md">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 text-brand px-3 py-1 text-xs font-bold mb-3">
                  <Sparkles className="h-3.5 w-3.5" /> Tax Optimization
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                  {SERVICE_DATA.lowerTdsOption.heading}
                </h2>
                <p className="mt-3 text-base md:text-lg text-ink font-medium leading-relaxed">
                  {SERVICE_DATA.lowerTdsOption.desc}
                </p>
                <div className="mt-3 inline-block bg-emerald-100 text-emerald-800 font-bold text-sm px-3.5 py-1.5 rounded-lg border border-emerald-300">
                  {SERVICE_DATA.lowerTdsOption.benefit}
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">
                    💡 We assist in:
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {SERVICE_DATA.lowerTdsOption.assist.map((asst, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-ink shadow-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                        <span>{asst}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/lower-tds-certificate-section-197"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                  >
                    Learn more about Lower TDS Certificate (Section 197) <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Clock className="h-3.5 w-3.5" /> Structured Execution
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Our Process
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Smooth, compliant &amp; fully managed process from valuation to certificate generation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_DATA.process.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md">
                      {p.step}
                    </span>
                    <span className="text-2xl font-black text-slate-200">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-ink leading-snug">
                    {p.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-semibold text-brand bg-brand/5 border border-brand/20 rounded-lg p-3 inline-block">
                👉 Smooth, compliant &amp; fully managed process.
              </p>
            </div>
          </div>
        </section>

        {/* WHO NEEDS THIS SERVICE & DOCUMENTS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Who Needs This Service */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                  <Users className="h-3.5 w-3.5" /> Target Audience
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-6">
                  Who Needs This Service?
                </h2>
                <div className="space-y-3">
                  {SERVICE_DATA.whoFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-ink"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                  <FileText className="h-3.5 w-3.5" /> Checklist
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-6">
                  Documents Required
                </h2>
                <div className="space-y-3">
                  {SERVICE_DATA.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-ink"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs font-semibold text-brand">
                  👉 Complete assistance provided.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold mb-3">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                5/5 Rating on Google
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                Trusted by NRI Property Buyers Across India
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Handled complete TDS filing for NRI property purchase.",
                  author: "Client Review",
                },
                {
                  quote: "Saved us from major compliance issues.",
                  author: "Client Review",
                },
                {
                  quote: "Very smooth and professional process.",
                  author: "Client Review",
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between"
                >
                  <p className="text-sm text-slate-200 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                    <span>{t.author}</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="tel:+918169887643"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-8 py-3.5 text-base font-semibold shadow-lg shadow-brand/20 hover:bg-brand/90 transition-all"
              >
                <Phone className="h-5 w-5" />
                Talk to a CA Today
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <HelpCircle className="h-3.5 w-3.5" /> FAQs
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear answers to common questions about Section 195 TDS on NRI property.
              </p>
            </div>

            <div className="space-y-3">
              {SERVICE_DATA.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-ink hover:text-brand transition-colors cursor-pointer"
                    >
                      <span className="text-base">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 text-brand" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground border-t border-slate-100 bg-white leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <FinalCTA
          title="Avoid costly mistakes while buying property from an NRI."
          sub="Get expert CA support for accurate TDS calculation, filing, and compliance."
          ctaText="Get TDS Filing Assistance Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="TDS on Property (NRI) – Section 195"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
