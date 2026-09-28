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
  slug: "tds-on-rent-nri-section-195",
  title: "TDS on Rent Paid to NRI (Section 195)",
  h1: "TDS on Rent Paid to NRI (Section 195) – Rules, Rates & Filing Compliance",
  metaTitle: "TDS on Rent Paid to NRI (Section 195) – Rules, Rates & Filing Compliance | Praveen J & Associates",
  metaDescription: "Deduct TDS on rent paid to NRI landlord under Section 195. Expert CA support for monthly TDS calculation, TAN application, Form 27Q filing & Form 16A issuance.",
  heroLead: "Paying rent to an NRI landlord in India?",
  heroSub: "You are required to deduct TDS under Section 195 — non-compliance can lead to penalties and notices. 👉 Get expert CA support for monthly TDS calculation, filing & compliance.",
  primaryCta: "Get TDS Compliance Support",
  problems: [
    "Not deducting TDS at all",
    "Deducting incorrect rate (e.g., 5% or 10%)",
    "Not applying for TAN",
    "Missing monthly deductions",
    "Delay or non-filing of Form 27Q",
  ],
  about: {
    heading: "About TDS on Rent (NRI)",
    lead: "When rent is paid to a Non-Resident Indian (NRI), the tenant must deduct TDS under Section 195 of the Income Tax Act.",
    note: "👉 This applies regardless of rent amount and is different from resident rent rules.",
  },
  keyRules: [
    "TDS must be deducted on entire rent amount",
    "No minimum threshold — applicable from ₹1 onwards",
    "Tenant must obtain a TAN",
    "TDS must be deducted every month",
    "TDS return must be filed using Form 27Q",
  ],
  rates: [
    {
      title: "Standard TDS Rate on Rent to NRI",
      rate: "30%",
      sub: "Plus applicable surcharge and cess",
      desc: "Effective deduction may go 30%+, depending on income level.",
    },
  ],
  ratesNote: "👉 Effective deduction may go 30%+, depending on income level.",
  howWeHelp: [
    "Monthly TDS calculation",
    "TAN application",
    "TDS payment & challan handling",
    "Filing of Form 27Q (quarterly returns)",
    "Issuance of Form 16A (TDS certificate)",
    "Ongoing compliance & reminders",
  ],
  lowerTdsOption: {
    heading: "Lower TDS Option (Important)",
    desc: "The NRI landlord can apply for a Lower TDS Certificate under Section 197.",
    benefit: "👉 This can reduce TDS from 30% to actual tax liability",
    assist: [
      "Lower TDS application",
      "Coordination between tenant & landlord",
      "Compliance structuring",
    ],
  },
  process: [
    { step: "Step 1", title: "Understand rent agreement & details" },
    { step: "Step 2", title: "Calculate monthly TDS" },
    { step: "Step 3", title: "Deduct & deposit TDS" },
    { step: "Step 4", title: "File Form 27Q" },
    { step: "Step 5", title: "Issue TDS certificate (Form 16A)" },
  ],
  whoFor: [
    "Tenants paying rent to NRI landlords",
    "Corporates leasing property from NRIs",
    "Individuals renting residential or commercial property",
    "Anyone responsible for rent payments to non-residents",
  ],
  documents: [
    "PAN of tenant & landlord",
    "Rent agreement",
    "Monthly rent details",
    "TAN (if available)",
    "Lower TDS certificate (if applicable)",
  ],
  faqs: [
    {
      q: "Is TDS applicable on rent paid to NRI?",
      a: "Yes, TDS must be deducted under Section 195 on rent paid to NRIs.",
    },
    {
      q: "What is the TDS rate on NRI rent?",
      a: "Generally 30% plus applicable surcharge and cess.",
    },
    {
      q: "Is there any threshold limit?",
      a: "No, TDS applies from the first rupee of rent.",
    },
    {
      q: "What is Form 27Q?",
      a: "It is the TDS return form for payments made to non-residents.",
    },
    {
      q: "Can TDS be reduced?",
      a: "Yes, through a Lower TDS Certificate under Section 197.",
    },
  ],
};

export const Route = createFileRoute("/tds-on-rent-nri-section-195")({
  head: () => ({
    meta: [
      { title: SERVICE_DATA.metaTitle },
      { name: "description", content: SERVICE_DATA.metaDescription },
      { property: "og:title", content: SERVICE_DATA.metaTitle },
      { property: "og:description", content: SERVICE_DATA.metaDescription },
      { property: "og:url", content: `/tds-on-rent-nri-section-195` },
    ],
    links: [{ rel: "canonical", href: `/tds-on-rent-nri-section-195` }],
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
  component: TdsOnRentNriSection195Page,
});

function TdsOnRentNriSection195Page() {
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
              <span className="text-ink font-medium">TDS on Rent (NRI) – Section 195</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand/5 via-white to-white py-16 md:py-24 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1.5 text-xs font-semibold text-brand mb-4">
                  <Sparkles className="h-3.5 w-3.5" /> NRI Rent Tax Compliance
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
                  <ConsultationModal defaultService="TDS on Rent Paid to NRI (Section 195)" title="Get TDS Compliance Support">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3.5 text-base font-semibold shadow-lg shadow-brand/25 hover:bg-brand/90 transition-all cursor-pointer"
                    >
                      {SERVICE_DATA.primaryCta}
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </ConsultationModal>

                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20I%20am%20paying%20rent%20to%20an%20NRI%20landlord%20and%20need%20expert%20CA%20support%20for%20Section%20195%20TDS%20calculation%20and%20Form%2027Q%20filing."
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
                    <span>100% CA Led Compliance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BadgeCheck className="h-4 w-4 text-emerald-600" />
                    <span>Zero Penalty Assistance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-amber-500" />
                    <span>Fast TAN &amp; Form 27Q Filing</span>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Card */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 relative">
                  <div className="absolute -top-3 right-6 bg-amber-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                    NRI Tax Advisory
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2">Need Instant Guidance?</h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Connect directly with a Chartered Accountant to structure rent payments to non-resident landlords smoothly.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">TAN Registration Support</p>
                        <p className="text-[11px] text-muted-foreground">Quick TAN allocation for tenants</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">Form 27Q Quarterly Returns</p>
                        <p className="text-[11px] text-muted-foreground">Accurate &amp; timely filing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-ink">Form 16A TDS Certificates</p>
                        <p className="text-[11px] text-muted-foreground">Issued to NRI landlord for tax credit</p>
                      </div>
                    </div>
                  </div>

                  <ConsultationModal defaultService="TDS on Rent Paid to NRI (Section 195)" title="Schedule CA Consultation">
                    <button
                      type="button"
                      className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Phone className="h-4 w-4" /> Schedule CA Consultation
                    </button>
                  </ConsultationModal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-2">
                <BookOpen className="h-4 w-4" /> Section 195 Overview
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
                {SERVICE_DATA.about.heading}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                {SERVICE_DATA.about.lead}
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium">
                {SERVICE_DATA.about.note}
              </div>
            </div>
          </div>
        </section>

        {/* KEY RULES UNDER SECTION 195 */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Key Rules Under Section 195
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Mandatory requirements every tenant paying rent to an NRI must follow
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.keyRules.map((rule, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TDS RATE ON RENT TO NRI */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-brand/10 text-brand shadow-sm">
                <Percent className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  TDS Rate on Rent to NRI
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  Statutory rate breakup and applicable surcharges
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6 items-stretch max-w-5xl">
              {/* Rate Card */}
              <div className="md:col-span-7 bg-gradient-to-br from-brand/5 via-slate-50 to-emerald-50/30 rounded-2xl border border-brand/20 p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
                  Section 195
                </div>
                <div>
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">
                    Standard TDS Rate
                  </span>
                  <div className="flex items-baseline gap-3 my-2">
                    <span className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">30%</span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">Base Rate</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Plus applicable surcharge &amp; health/education cess.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Deduction applies on gross rent without threshold limits.</span>
                </div>
              </div>

              {/* Important Note Card */}
              <div className="md:col-span-5 bg-amber-500/10 border border-amber-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                    <Sparkles className="h-4 w-4 text-amber-600" /> Effective Tax Liability
                  </div>
                  <p className="text-sm font-semibold text-amber-950 leading-relaxed">
                    Effective deduction may exceed 30%+ depending on the NRI landlord's total income slab &amp; surcharge applicability.
                  </p>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-white border border-amber-200 text-xs font-bold text-amber-900 shadow-xs flex items-center gap-2">
                  <Scale className="h-4 w-4 text-amber-600 shrink-0" /> Lower rate available via Form 197
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES BY TENANTS */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-rose-100 text-rose-700">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Common Mistakes by Tenants
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Frequent errors that attract heavy tax interest and penal notices
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.problems.map((prob, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <p className="text-sm font-medium text-slate-800">{prob}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm font-medium">
              👉 These mistakes can result in penalties, interest &amp; notices from the Income Tax Department.
            </div>
          </div>
        </section>

        {/* LOWER TDS OPTION (IMPORTANT) */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-amber-500/10 via-amber-50 to-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-amber-800 font-semibold text-sm mb-2">
                <Scale className="h-4 w-4" /> Tax Optimization
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
                {SERVICE_DATA.lowerTdsOption.heading}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {SERVICE_DATA.lowerTdsOption.desc}
              </p>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold mb-6">
                {SERVICE_DATA.lowerTdsOption.benefit}
              </div>

              <h4 className="text-sm font-bold text-ink mb-3">💡 We assist with:</h4>
              <div className="grid sm:grid-cols-3 gap-3">
                {SERVICE_DATA.lowerTdsOption.assist.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                    <span className="text-xs font-semibold text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE HELP YOU */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  How We Help You
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  We offer complete end-to-end TDS compliance services
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_DATA.howWeHelp.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-brand text-sm font-semibold">
              👉 Ideal for tenants who want stress-free compliance.
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-2">
              Our Process
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-8">
              Reliable, accurate &amp; fully managed compliance workflow
            </p>

            <div className="grid md:grid-cols-5 gap-4">
              {SERVICE_DATA.process.map((p, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">
                    {p.step}
                  </span>
                  <p className="text-sm font-semibold text-ink">{p.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold">
              👉 Reliable, accurate &amp; fully managed process.
            </div>
          </div>
        </section>

        {/* WHO NEEDS THIS SERVICE? */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Who Needs This Service?
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Applicable entities and individuals paying rent to NRIs
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_DATA.whoFor.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOCUMENTS REQUIRED */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">
                  Documents Required
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Simple documentation required to initiate compliance
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_DATA.documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-xs font-semibold text-ink">{doc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-sm font-medium">
              👉 Full support provided for documentation.
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-12 md:py-16 bg-white border-b">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-amber-300">4.8/5 Client Rating</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
                  Trusted by Tenants Paying Rent to NRI Landlords
                </h2>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Handled monthly TDS for my NRI landlord smoothly.”</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Saved me from compliance issues and notices.”</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-xs italic text-slate-200">“Very professional and responsive CA team.”</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+918169887643"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 text-slate-950 px-6 py-3.5 text-base font-bold shadow-lg hover:bg-amber-300 transition-all"
                  >
                    <Phone className="h-5 w-5" /> Consult a CA Today
                  </a>
                  <a
                    href="https://wa.me/918169887643?text=Hi%2C%20I%20need%20CA%20assistance%20for%20TDS%20on%20Rent%20paid%20to%20NRI%20landlord."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 md:py-16 bg-slate-50 border-b">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-brand font-semibold text-sm mb-2">
                <HelpCircle className="h-4 w-4" /> Got Questions?
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {SERVICE_DATA.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-ink hover:text-brand transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${
                        openFaq === idx ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-slate-600 text-sm border-t border-slate-100 pt-3 leading-relaxed">
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
          title="Avoid penalties and stay compliant while paying rent to an NRI."
          sub="Get expert CA support for monthly TDS calculation, filing & compliance."
          ctaText="Start TDS Compliance Today"
          defaultService="TDS on Rent Paid to NRI (Section 195)"
        />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
