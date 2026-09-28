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
  Building,
  HelpCircle,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FinalCTA } from "@/components/site/Sections";
import { ConsultationModal } from "@/components/site/ConsultationModal";

const SERVICE_DATA = {
  slug: "tds-on-property-multiple-buyers-sellers",
  title: "TDS on Property — Multiple Buyers / Sellers",
  h1: "TDS on Property with Multiple Buyers/Sellers – Form 26QB Filing Made Simple",
  metaTitle: "TDS on Property with Multiple Buyers/Sellers | Form 26QB | Praveen J & Associates",
  metaDescription: "Buying or selling property with multiple buyers or sellers? Get expert CA support to handle Form 26QB correctly for joint ownership and avoid costly mistakes.",
  heroLead: "Buying or selling property with multiple buyers or sellers?",
  heroSub: "TDS filing becomes more complex and error-prone. 👉 Get expert CA support to handle Form 26QB correctly for joint ownership and avoid costly mistakes.",
  primaryCta: "File Joint Property TDS Now",
  problems: [
    "How many Form 26QB to file",
    "How to split TDS amount",
    "Which PAN to use in each form",
    "Handling unequal ownership share",
    "Filing errors in joint property",
  ],
  about: {
    heading: "About Multiple Buyer/Seller TDS",
    lead: "When property involves more than one buyer or more than one seller, TDS compliance under Section 194IA becomes more detailed.",
    points: [
      "You cannot file just one Form 26QB.",
      "You must file separate Form 26QB for each buyer–seller combination.",
    ],
    note: "👉 You must file separate Form 26QB for each buyer–seller combination.",
  },
  howItWorks: [
    "TDS is still 1% (if property > ₹50 lakh)",
    "Each buyer deducts TDS individually",
    "Separate Form 26QB for each combination",
    "Amount is split as per ownership share",
  ],
  exampleNote: "👉 Example: 2 Buyers × 2 Sellers = 4 Form 26QB filings",
  whatWeHandle: [
    "Calculation of TDS for each party",
    "Structuring correct filing combinations",
    "Preparation of multiple Form 26QB",
    "Accurate online filing & payment",
    "Assistance with Form 16B for each party",
  ],
  whoFor: [
    "Joint property buyers",
    "Properties with co-owners",
    "Family property transactions",
    "Investors buying jointly",
    "Anyone confused with multiple 26QB filing",
  ],
  whyExpertHelp: [
    "Avoid incorrect number of filings",
    "Ensure correct TDS split",
    "Prevent penalty and notices",
    "Accurate Form 16B generation",
    "Smooth compliance process",
  ],
  importantPoints: [
    "Separate Form 26QB is mandatory",
    "PAN of all parties must be correct",
    "Ownership ratio must be considered",
    "Delay attracts penalty",
    "Errors lead to mismatch issues",
  ],
  process: [
    { step: "Step 1", title: "Understand ownership structure" },
    { step: "Step 2", title: "Calculate TDS split" },
    { step: "Step 3", title: "Determine required filings" },
    { step: "Step 4", title: "Prepare and file Form 26QB" },
    { step: "Step 5", title: "Assist with Form 16B" },
  ],
  documents: [
    "PAN of all buyers & sellers",
    "Property agreement details",
    "Ownership share details",
    "Payment breakup",
  ],
  faqs: [
    {
      q: "How many Form 26QB are required?",
      a: "Depends on number of buyers and sellers (each combination).",
    },
    {
      q: "Is TDS still 1%?",
      a: "Yes, if property value exceeds ₹50 lakh.",
    },
    {
      q: "Can one form be filed for all?",
      a: "No, separate forms are required.",
    },
    {
      q: "What if ownership is unequal?",
      a: "TDS is split based on ownership share.",
    },
    {
      q: "Can CA handle joint property filing?",
      a: "Yes, complete support available.",
    },
  ],
};

export const Route = createFileRoute("/tds-on-property-multiple-buyers-sellers")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: `/tds-on-property-multiple-buyers-sellers` },
    ],
    links: [{ rel: "canonical", href: `/tds-on-property-multiple-buyers-sellers` }],
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
  component: TdsOnPropertyMultipleBuyersSellersPage,
});

function TdsOnPropertyMultipleBuyersSellersPage() {
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
              <span className="text-ink font-medium">TDS on Property (Multiple Buyers/Sellers)</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1.5 text-xs font-semibold text-brand mb-4">
                  <Sparkles className="h-3.5 w-3.5" /> Joint Property Compliance
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
                  <ConsultationModal defaultService="TDS on Property (Multiple Buyers/Sellers)" title="File Joint Property TDS Now">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3.5 text-base font-semibold shadow-lg shadow-brand/25 hover:bg-brand/90 transition-all cursor-pointer"
                    >
                      {SERVICE_DATA.primaryCta}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </ConsultationModal>

                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20we%20have%20multiple%20buyers%2Fsellers%20in%20our%20property%20deal%20and%20need%20expert%20CA%20support%20for%20multiple%20Form%2026QB%20filing."
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
                    <span>100% CA Led Structuring</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span>Zero Penalty Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span>4.8/5 Rating on Google</span>
                  </div>
                </div>
              </div>

              {/* Side Quick Card */}
              <div className="lg:col-span-4">
                <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 rounded-full blur-3xl -mr-10 -mt-10" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Rule of Thumb
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-white">1 Form per Combination</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    You cannot file one single Form 26QB for joint owners. Separate Form 26QB must be filed for each buyer-seller pair.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>2 Buyers &times; 2 Sellers = 4 Form 26QBs</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>TDS split as per ownership ratio</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Separate Form 16B for each party</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <ConsultationModal defaultService="TDS on Property (Multiple Buyers/Sellers)" title="File Joint Property 26QB">
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

        {/* COMMON CONFUSION */}
        <section className="py-14 bg-rose-50/40 border-b border-rose-100/60">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Common Confusion
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Common Confusion Facing Joint Owners
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Most people get confused about how to structure multi-party Form 26QB filings:
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
                👉 Incorrect filing can lead to penalties and mismatch in Form 16B.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT MULTIPLE BUYER/SELLER TDS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> Section 194IA Multi-Party Rule
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                {SERVICE_DATA.about.heading}
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {SERVICE_DATA.about.lead}
              </p>

              <div className="mt-6 space-y-3">
                {SERVICE_DATA.about.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-sm font-medium text-ink shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-block bg-brand/10 text-brand font-semibold text-sm px-4 py-2.5 rounded-xl border border-brand/20">
                {SERVICE_DATA.about.note}
              </div>
            </div>
          </div>
        </section>

        {/* HOW TDS WORKS IN JOINT PROPERTY */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <Percent className="h-3.5 w-3.5" /> Calculation Rule
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How TDS Works in Joint Property
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_DATA.howItWorks.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-ink leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 inline-block text-emerald-800 font-bold text-sm">
                {SERVICE_DATA.exampleNote}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE HANDLE */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Wrench className="h-3.5 w-3.5" /> Scope of Work
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                What We Handle
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.whatWeHandle.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-ink shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm font-semibold text-brand">
              👉 End-to-end handling of complex cases.
            </div>
          </div>
        </section>

        {/* WHO SHOULD USE THIS SERVICE & WHY EXPERT HELP */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Who Should Use This Service */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                  <Users className="h-3.5 w-3.5" /> Target Audience
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-6">
                  Who Should Use This Service?
                </h2>
                <div className="space-y-3">
                  {SERVICE_DATA.whoFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-ink"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Expert Help is Important */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-semibold mb-3">
                  <ShieldCheck className="h-3.5 w-3.5" /> Value Add
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-ink mb-6">
                  Why Expert Help is Important
                </h2>
                <div className="space-y-3">
                  {SERVICE_DATA.whyExpertHelp.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-ink"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPORTANT POINTS */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Critical Rules
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Important Points
              </h2>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <ul className="grid sm:grid-cols-2 gap-4">
                {SERVICE_DATA.importantPoints.map((pt, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-14 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Clock className="h-3.5 w-3.5" /> Execution Process
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Our Process
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Hassle-free and accurate execution for multi-owner filings.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.process.map((p, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md">
                      {p.step}
                    </span>
                    <span className="text-xl font-black text-slate-300">0{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-ink leading-snug">
                    {p.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-semibold text-brand bg-brand/5 border border-brand/20 rounded-lg p-3 inline-block">
                👉 Hassle-free and accurate execution.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-14 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <FileText className="h-3.5 w-3.5" /> Checklist
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Documents Required
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICE_DATA.documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-ink shadow-sm">
                  <FileText className="h-4 w-4 text-brand shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm font-semibold text-brand">
              👉 Complete guidance provided.
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full text-amber-400 text-xs font-bold mb-3">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                4.8/5 Rating on Google
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                Trusted by Joint Property Owners Across India
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Handled our joint property TDS perfectly.",
                  author: "Client Review",
                },
                {
                  quote: "No confusion, everything managed smoothly.",
                  author: "Client Review",
                },
                {
                  quote: "Highly recommended for complex cases.",
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
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-brand" : ""
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
          title="Avoid costly mistakes in joint property TDS filing."
          sub="Get expert CA support and handle multiple Form 26QB correctly."
          ctaText="File Joint Property TDS Now"
          whatsappText="Chat with CA on WhatsApp"
          defaultService="TDS on Property (Multiple Buyers/Sellers)"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
