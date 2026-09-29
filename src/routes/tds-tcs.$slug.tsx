import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ServiceHeroForm } from "@/components/site/ServiceHeroForm";
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, MessageCircle, AlertTriangle, FileText,
  Sparkles, ChevronDown, ShieldCheck, Phone, Star, BadgeCheck, ChevronRight, BookOpen,
  Check, XCircle, Globe, Building, Users, Percent, Wrench, Clock, HelpCircle, Scale, Landmark,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { TDS_SERVICES, getTdsServiceBySlug } from "@/data/tdsServices";
import { FinalCTA } from "@/components/site/Sections";
export const Route = createFileRoute("/tds-tcs/$slug")({
  loader: ({ params }) => {
    const s = getTdsServiceBySlug(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const s = loaderData;
    if (!s) return {};
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: `/tds-tcs/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/tds-tcs/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question", name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org", "@type": "Service",
            name: s.title, provider: { "@type": "Organization", name: "Praveen J & Associates" },
            areaServed: "IN", description: s.metaDescription,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <p className="text-muted-foreground mt-3">This TDS/TCS service page doesn't exist.</p>
        <Link to="/tds-tcs" className="inline-flex mt-6 items-center gap-2 text-brand font-semibold">
          <ArrowRight className="h-4 w-4" /> Back to TDS & TCS services
        </Link>
      </main>
      <Footer />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
      <button onClick={reset} className="mt-4 rounded-lg bg-brand text-white px-4 py-2">Try again</button>
    </div>
  ),
  component: TdsServicePage,
});

function TdsServicePage() {
  const s = Route.useLoaderData();
  if (s.slug === "tds-tcs-return-filing-services") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />
          <Problems items={s.problems} note="👉 Even small mistakes can lead to heavy penalties and compliance issues." />

          {/* WHAT IS TDS & TCS */}
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

          {/* WHO SHOULD USE THIS SERVICE */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Users className="h-3.5 w-3.5" /> Ideal Audience
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Who Should Use This Service?
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.whoFor.map((w, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{w}</span>
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
                {(s.whatIs2?.points || []).map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink">{pt}</span>
                  </div>
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
                  {s.important.map((item, idx) => (
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

          <Process steps={s.process} note="👉 Simple, quick & compliant execution." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 We handle everything end-to-end." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={[
              "Never missed TDS deadlines after working with them.",
              "Smooth and accurate filing every quarter.",
              "Very reliable CA support.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

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

  if (s.slug === "tds-on-rent-multiple-parties") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Problems items={s.problems} note="👉 Incorrect filing can lead to penalties and mismatch in Form 16C." />

          {/* ABOUT MULTIPLE PARTY RENT TDS */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                  <BookOpen className="h-3.5 w-3.5" /> Joint Tenancy Rules
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                  About Multiple Party Rent TDS
                </h2>
                <p className="mt-4 text-base md:text-lg font-semibold text-ink">
                  When rent agreement includes:
                </p>

                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-sm font-medium text-ink shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>More than one tenant (flatmates / co-tenants)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-slate-200 text-sm font-medium text-ink shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>More than one landlord</span>
                  </div>
                </div>

                <p className="mt-6 text-sm font-semibold text-brand">
                  👉 TDS filing becomes more detailed. You cannot file just one Form 26QC.
                </p>

                <div className="mt-3 inline-block bg-brand/10 text-brand font-bold text-sm px-4 py-2.5 rounded-xl border border-brand/20">
                  👉 Separate filing is required based on tenant–landlord combinations.
                </div>
              </div>
            </div>
          </section>

          {/* HOW TDS WORKS IN JOINT RENT */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <Percent className="h-3.5 w-3.5" /> Calculation Rule
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How TDS Works in Joint Rent
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {(s.whatIs2?.points || []).map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border shadow-sm flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                👉 Example: 2 Tenants × 1 Landlord = 2 Form 26QC filings | 2 Tenants × 2 Landlords = 4 filings
              </p>
            </div>
          </section>

          {/* WHAT WE HANDLE */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Wrench className="h-3.5 w-3.5" /> Scope of Work
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                What We Handle
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs font-semibold text-brand">
                👉 End-to-end handling of complex cases.
              </p>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Critical Points
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Important Points
              </h2>
              <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-ink">
                  {s.important.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <ChevronRight className="h-4 w-4 text-brand shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and hassle-free execution." />
          {s.documents && <Documents items={s.documents} note="👉 Complete guidance provided." />}
          <TrustSection
            ratingText="4.8/5 Rating on Google"
            reviews={[
              "Handled our joint rent TDS perfectly.",
              "No confusion, everything managed smoothly.",
              "Great support for shared agreements.",
            ]}
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />
          <FinalCTA
            title="Avoid confusion and costly mistakes in joint rent TDS filing."
            sub="Get expert CA support and handle multiple Form 26QC correctly."
            ctaText="File Joint Rent TDS Now"
            whatsappText="Chat with CA on WhatsApp"
            defaultService="TDS on Rent (Multiple Parties)"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tds-on-property-multiple-buyers-sellers") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Problems items={s.problems} note="👉 Incorrect filing can lead to penalties and mismatch in Form 16B." />

          {/* ABOUT MULTIPLE BUYER/SELLER TDS */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> Joint Ownership Rules
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                About Multiple Buyer/Seller TDS
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                When property involves more than one buyer or more than one seller, TDS compliance under Section 194IA becomes more detailed.
              </p>

              <div className="mt-6 bg-slate-50 border rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-ink text-base mb-3">Key Requirement:</p>
                <ul className="space-y-3 text-sm text-ink font-medium">
                  {s.whatIs.points.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t text-sm font-semibold text-brand">
                  👉 You must file separate Form 26QB for each buyer–seller combination.
                </div>
              </div>
            </div>
          </section>

          {/* HOW TDS WORKS IN JOINT PROPERTY */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <Percent className="h-3.5 w-3.5" /> Calculation Rule
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How TDS Works in Joint Property
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {(s.whatIs2?.points || []).map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border shadow-sm flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                👉 Example: 2 Buyers × 2 Sellers = 4 Form 26QB filings
              </p>
            </div>
          </section>

          {/* WHAT WE HANDLE */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Wrench className="h-3.5 w-3.5" /> Scope of Work
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                What We Handle
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs font-semibold text-brand">
                👉 End-to-end handling of complex cases.
              </p>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Critical Points
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Important Points
              </h2>
              <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-ink">
                  {s.important.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <ChevronRight className="h-4 w-4 text-brand shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Hassle-free and accurate execution." />
          {s.documents && <Documents items={s.documents} note="👉 Complete guidance provided." />}
          <TrustSection
            ratingText="4.8/5 Rating on Google"
            reviews={[
              "Handled our joint property TDS perfectly.",
              "No confusion, everything managed smoothly.",
              "Highly recommended for complex cases.",
            ]}
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />
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

  if (s.slug === "tds-on-property-section-194ia") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          {/* ABOUT TDS ON PROPERTY */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                  <BookOpen className="h-3.5 w-3.5" /> Introduction
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                  Introduction to TDS on Property (Section 194IA)
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  TDS on property is a mandatory requirement when purchasing immovable property in India.
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-ink text-base mb-3">
                    As per Section 194IA:
                  </p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {s.whatIs.points.map((pt, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-ink">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 inline-block bg-rose-50 text-rose-700 font-semibold text-sm px-4 py-2.5 rounded-xl border border-rose-200">
                  👉 Non-compliance can result in penalties, interest, and legal complications.
                </div>
              </div>
            </div>
          </section>

          {/* KEY COMPLIANCE REQUIREMENTS */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <CheckCircle2 className="h-3.5 w-3.5" /> Mandatory Requirements
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Key Compliance Requirements
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(s.whatIs2?.points || []).map((req, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border shadow-sm flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* WHY PROFESSIONAL HELP IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Value Add
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Why Professional Help is Important
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border flex items-center gap-3 text-sm font-semibold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs font-semibold text-brand bg-brand/5 p-3 rounded-lg border border-brand/20">
                👉 Property transactions are high value — errors can be costly.
              </p>
            </div>
          </section>

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Important Points
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Important Compliance Rules
              </h2>
              <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-ink">
                  {s.important.map((pt, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <ChevronRight className="h-4 w-4 text-brand shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and hassle-free process." />
          {s.documents && <Documents items={s.documents} note="👉 Minimal documentation required." />}
          <TrustSection
            ratingText="4.8/5 Rating on Google"
            reviews={[
              "Handled property TDS smoothly.",
              "No confusion, very clear guidance.",
              "Highly professional CA support.",
            ]}
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />
          <FinalCTA
            title="Don’t risk penalties in your property transaction."
            sub="Get expert CA support and complete your TDS compliance easily."
            ctaText="File Property TDS Now"
            whatsappText="Chat with CA on WhatsApp"
            defaultService="TDS on Property (Section 194IA)"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tds-on-property-nri-section-195") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Problems items={s.problems} note="👉 These mistakes can lead to penalties, interest & legal notices." />

          {/* ABOUT TDS ON NRI PROPERTY */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> About TDS on NRI Property
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Section 195 TDS on Property Purchase
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                When purchasing property from a Non-Resident Indian (NRI), the buyer must deduct TDS under Section 195 of the Income Tax Act.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm font-semibold text-brand">
                👉 Unlike resident transactions, TDS is not 1% — it is significantly higher and more complex.
              </div>
            </div>
          </section>

          {/* KEY RULES UNDER SECTION 195 */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <FileText className="h-3.5 w-3.5" /> Mandatory Rules
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Key Rules Under Section 195
              </h2>
              <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {s.important.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* TDS RATES FOR NRI PROPERTY */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Statutory Rates
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                TDS Rates for NRI Property
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block">Long-Term Capital Gains</span>
                  <div className="text-3xl font-extrabold text-ink my-2">20%</div>
                  <p className="text-xs text-muted-foreground">Plus applicable surcharge and cess</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block">Short-Term Capital Gains</span>
                  <div className="text-3xl font-extrabold text-ink my-2">Slab Rates</div>
                  <p className="text-xs text-muted-foreground">As per individual income tax slab + surcharge & cess</p>
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-brand bg-brand/5 p-4 rounded-xl border border-brand/20">
                👉 Effective TDS can go 20%–30%+, depending on the case.
              </p>
            </div>
          </section>

          {/* HOW WE HELP */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Comprehensive Support
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How We Help You
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IMPORTANT: LOWER TDS OPTION */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="p-6 md:p-8 rounded-2xl bg-brand-light/20 border border-brand/30">
                <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">
                  Tax Relief
                </span>
                <h3 className="text-xl font-bold text-ink">
                  Important: Lower TDS Option (Section 197)
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  In many cases, the seller (NRI) can apply for a Lower TDS Certificate under Section 197 to reduce TDS from 20–30% to actual tax liability.
                </p>
                <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs font-semibold text-ink">
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Lower TDS application
                  </div>
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Coordination between buyer & seller
                  </div>
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Compliance planning
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Smooth, compliant & fully managed process." />
          <WhoFor items={s.whoFor} />
          {s.documents && <Documents items={s.documents} note="👉 Complete assistance provided." />}
          <TrustSection
            ratingText="4.8/5 Rating on Google"
            reviews={[
              "Handled complete TDS filing for NRI property purchase.",
              "Saved us from major compliance issues.",
              "Very smooth and professional process.",
            ]}
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />
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

  if (s.slug === "tds-on-rent-nri-section-195") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Problems items={s.problems} note="👉 These mistakes can result in penalties, interest & notices from the Income Tax Department." />

          {/* ABOUT TDS ON RENT (NRI) */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> About TDS on Rent (NRI)
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Section 195 TDS on Rent Payments to NRI Landlords
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {s.whatIs.points[0]}
              </p>
              <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm font-semibold text-brand">
                👉 {s.whatIs.points[1]}
              </div>
            </div>
          </section>

          {/* KEY RULES UNDER SECTION 195 */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Mandatory Rules
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Key Rules Under Section 195
              </h2>
              <div className="mt-6 bg-white rounded-2xl border p-6 md:p-8 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {s.important.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-ink font-medium">
                      <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* TDS RATE ON RENT TO NRI */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-brand/10 text-brand shadow-sm">
                  <Percent className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                    TDS Rate on Rent to NRI
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                    Statutory rate breakup and applicable surcharges
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 items-stretch">
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

          {/* HOW WE HELP YOU */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Comprehensive Support
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How We Help You
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center text-xs font-semibold text-brand">
                👉 Ideal for tenants who want stress-free compliance.
              </p>
            </div>
          </section>

          {/* LOWER TDS OPTION (IMPORTANT) */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Tax Optimization
                </span>
                <h3 className="text-xl font-bold text-ink">
                  Lower TDS Option (Important)
                </h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  The NRI landlord can apply for a Lower TDS Certificate under Section 197.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
                  👉 This can reduce TDS from 30% to actual tax liability
                </div>
                <div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs font-semibold text-ink">
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" /> Lower TDS application
                  </div>
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" /> Coordination between tenant &amp; landlord
                  </div>
                  <div className="p-3 bg-white rounded-lg border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" /> Compliance structuring
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Reliable, accurate &amp; fully managed process." />
          <WhoFor items={s.whoFor} />
          {s.documents && <Documents items={s.documents} note="👉 Full support provided for documentation." />}
          <TrustSection
            ratingText="4.8/5 Rating on Google"
            reviews={[
              "Handled monthly TDS for my NRI landlord smoothly.",
              "Saved me from compliance issues and notices.",
              "Very professional and responsive CA team.",
            ]}
            ctaText="Consult a CA Today"
          />
          <FAQ items={s.faqs} />
          <FinalCTA
            title="Avoid penalties and stay compliant while paying rent to an NRI."
            sub="Get expert CA support for monthly TDS calculation, filing & compliance."
            ctaText="Start TDS Compliance Today"
            whatsappText="Chat with CA on WhatsApp"
            defaultService="TDS on Rent Paid to NRI (Section 195)"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tds-tcs-notice-resolution") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Problems items={s.problems} note="👉 Early resolution helps avoid compounding penalties & legal escalation." />

          {/* ABOUT TDS/TCS NOTICE */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <BookOpen className="h-3.5 w-3.5" /> TRACES Notice Overview
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                About TDS/TCS Notice
              </h2>
              <div className="mt-4 space-y-3">
                {s.whatIs.points.map((pt, idx) => (
                  <p key={idx} className="text-base md:text-lg text-slate-700 leading-relaxed flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-1" />
                    <span>{pt}</span>
                  </p>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-semibold">
                {s.whatIs.note}
              </div>
            </div>
          </section>

          {/* COMMON TYPES OF TDS/TCS NOTICES */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-800 px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5" /> Notice Categories
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Common Types of TDS/TCS Notices
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(s.whatIs2?.points || []).map((type, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <FileText className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-ink">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW WE HELP YOU */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" /> Comprehensive Resolution
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                How We Help You
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMMON REASONS FOR TDS NOTICE */}
          <section className="py-14 bg-slate-50 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs font-semibold mb-3">
                <HelpCircle className="h-3.5 w-3.5" /> Root Causes
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Common Reasons for TDS Notice
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.important.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Structured, compliant &amp; efficient handling." />
          <WhoFor items={s.whoFor} />
          {s.documents && <Documents items={s.documents} note="👉 Our team will guide you step-by-step." />}
          <TrustSection
            ratingText="4.8/5 Client Satisfaction"
            reviews={[
              "Resolved my TDS demand quickly.",
              "Very knowledgeable and responsive CA team.",
              "Helped reduce penalty significantly.",
            ]}
            ctaText="Consult a CA Today"
          />
          <FAQ items={s.faqs} />
          <FinalCTA
            title="Don’t let TDS notices turn into heavy penalties."
            sub="Get expert CA assistance to resolve your TDS/TCS notice quickly and correctly."
            ctaText="Resolve My TDS Notice Now"
            whatsappText="Chat with CA on WhatsApp"
            defaultService="TDS / TCS Notice Resolution"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (
    s.slug === "tan-registration-services-india" ||
    s.slug === "new-tan-registration-certificate-services" ||
    s.slug === "new-tan-registration"
  ) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <TanRegistrationIntroductionSection />
          <Problems items={s.problems} note="👉 Getting TAN on time ensures smooth and legal tax operations." />

          {/* WHAT IS TAN */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" /> 10-Digit Identifier
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                What is TAN?
              </h2>
              <p className="mt-2 text-muted-foreground">
                TAN is a 10-digit alphanumeric number issued by the Income Tax Department. It is used for:
              </p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "TDS (Tax Deducted at Source)",
                  "TCS (Tax Collected at Source)",
                  "Filing TDS/TCS returns",
                  "Government tax reporting",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-brand/5 border border-brand/15 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-brand">
                👉 It acts as your identity for tax deduction compliance.
              </p>
            </div>
          </section>

          {/* WHO NEEDS TAN & BENEFITS */}
          <section className="py-14 bg-muted/20 border-b">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <Building className="h-5 w-5 text-brand" /> Who Needs TAN Registration?
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">TAN is required for:</p>
                    <ul className="mt-4 space-y-2.5">
                      {s.whoFor.map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                    👉 If you deduct TDS — TAN is mandatory.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-brand" /> Benefits of TAN Registration
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.benefits.map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                  {[
                    "₹10,000 penalty for not obtaining TAN",
                    "Issues in filing TDS returns",
                    "Possible notices from department",
                    "Mandatory before making TDS payment",
                  ].map((item, idx) => (
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

          <Process steps={s.process} note="👉 Usually completed within a few working days." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal documentation, quick process." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={[
              "Got TAN quickly without any hassle.",
              "Very smooth and professional process.",
              "Great support for new business setup.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

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

  if (s.slug === "lower-tds-certificate-section-197") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <LowerTdsIntroductionSection />
          <Problems items={s.problems} note="👉 Without proper planning, large amounts get blocked unnecessarily." />

          {/* WHERE LOWER TDS IS APPLICABLE */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Income Streams
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                Where Lower TDS is Applicable
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Sale of property (especially NRI cases)",
                  "Rental income",
                  "Interest income",
                  "Professional / consultancy income",
                  "Any income where actual tax is lower",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-brand/5 border border-brand/15 text-sm font-medium text-ink">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BENEFITS & WHAT WE HANDLE */}
          <section className="py-14 bg-muted/20 border-b">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-brand" /> Benefits of Lower TDS Certificate
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.benefits.map((pt) => (
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
                      <Building className="h-5 w-5 text-brand" /> {s.whatIs2?.heading || "What We Handle"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(s.whatIs2?.points || []).map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.whatIs2?.note && (
                    <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                      {s.whatIs2.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* WHO SHOULD APPLY */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-brand-light/30 rounded-2xl p-6 lg:p-8 border shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Apply?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {s.whoFor.map((p) => (
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
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <AlertTriangle className="h-3.5 w-3.5 text-brand" /> Important Points
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Important Points to Note</h2>
              <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.important.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start text-sm">
                      <span className="h-2 w-2 rounded-full bg-brand shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Professional and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Complete guidance provided." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={[
              "Saved huge TDS on my property sale.",
              "Very professional handling of NRI case.",
              "Smooth and quick approval process.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Stop overpaying TDS and blocking your funds."
            sub="Get expert CA support and apply for Lower TDS Certificate today."
            ctaText="Apply for Lower TDS Certificate"
            whatsappText="Chat with CA on WhatsApp"
            defaultService="Lower TDS Certificate (Section 197)"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-15ca-15cb-foreign-remittance") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form15CA15CBIntroductionSection />

          {/* WHEN IS FORM 15CA / 15CB REQUIRED */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Applicability
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                When is Form 15CA / 15CB Required?
              </h2>
              <p className="mt-2 text-muted-foreground">Required when making payments outside India such as:</p>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {s.important.map((item) => (
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

          <Problems items={s.problems} note="👉 Mistakes can delay transactions or trigger notices." />

          {/* HOW WE HELP & TYPES OF FORM 15CA */}
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
                      {s.benefits.map((pt) => (
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
                      <Globe className="h-5 w-5 text-brand" /> {s.whatIs2?.heading || "Types of Form 15CA"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(s.whatIs2?.points || [
                        "Part A – Small remittances (below threshold)",
                        "Part B – With Assessing Officer approval",
                        "Part C – Requires Form 15CB (most common)",
                        "Part D – No tax applicable cases",
                      ]).map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                    {s.whatIs2?.note || "👉 We identify the correct category to ensure compliance."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHO NEEDS THIS SERVICE */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-brand" /> Who Needs This Service?
                </h3>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.whoFor.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <Process steps={s.process} note="👉 Fast, compliant & hassle-free execution." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Full guidance provided." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Got my 15CA/15CB done within a day.", "Smooth remittance process without any issues.", "Highly professional and quick service."]}
            ratingText="4.8/5 Client Rating"
            ctaText="Talk to a CA Today"
          />

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

  if (s.slug === "form-26qb-correction-tds-property") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form26QBCorrectionIntroductionSection />
          <Problems items={s.problems} note="👉 These errors can impact Form 16B generation and seller’s tax credit." />

          {/* WHY CORRECTION IS IMPORTANT & WHAT WE HELP WITH */}
          <section className="py-14 bg-muted/20 border-b">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border p-6 lg:p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-brand" /> Why Correction is Important
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {s.benefits.map((pt) => (
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
                      <Building className="h-5 w-5 text-brand" /> {s.whatIs2?.heading || "What We Help With"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(s.whatIs2?.points || []).map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.whatIs2?.note && (
                    <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                      {s.whatIs2.note}
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
                  {s.whoFor.map((p) => (
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
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Smooth and hassle-free experience." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Resolved my 26QB error quickly.", "Very smooth correction process.", "Professional and reliable CA support."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Fix your Form 26QB errors before they create bigger problems."
            sub="Get expert CA support and ensure accurate property TDS compliance."
            ctaText="👉 Correct Form 26QB Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-16b-tds-certificate-property") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form16BIntroductionSection />
          <Problems items={s.problems} note="👉 These issues can delay tax credit and ITR filing." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY FORM 16B IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Form 16B is Important
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Helped me download Form 16B quickly.", "Solved TRACES issue easily.", "Very smooth experience."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Complete your property TDS process with proper documentation."
            sub="Get expert CA support to download and verify Form 16B easily."
            ctaText="👉 Download Form 16B Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-26qb-tds-filing-property") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form26QBIntroductionSection />
          <Problems items={s.problems} note="👉 Even a small error can cause serious compliance issues." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY EXPERT HELP IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Expert Help is Important
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Expert Help is Important"
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Fast and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal documentation required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Form 26QB filed without any hassle.", "Very smooth process for property TDS.", "Highly recommended CA service."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Avoid costly mistakes in your property TDS filing."
            sub="Get expert CA support and file Form 26QB correctly."
            ctaText="👉 File Form 26QB Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tds-challan-correction-online") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <ChallanCorrectionIntroductionSection />
          <Problems items={s.problems} note="👉 These errors directly affect your TDS return filing and compliance." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY CHALLAN CORRECTION IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Challan Correction is Important
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Challan Correction is Important"
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Fast and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Complete guidance provided." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Fixed challan mismatch issue quickly.", "Helped avoid return rejection.", "Very efficient CA support."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Fix your TDS challan errors before they cause bigger problems."
            sub="Get expert CA support and ensure smooth compliance."
            ctaText="👉 Correct TDS Challan Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "revised-tds-tcs-return-filing") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <RevisedTdsIntroductionSection />
          <Problems items={s.problems} note="👉 Even small errors can trigger income tax notices." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY REVISION IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Revision is Important
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Revision is Important"
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Quick and reliable process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Complete guidance provided." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Fixed my TDS return errors quickly.", "Helped avoid penalty and notices.", "Very professional CA service."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FinalCTA
            title="Don’t let small mistakes become big problems."
            sub="Get expert CA support and correct your TDS/TCS return today."
            ctaText="👉 Revise TDS/TCS Return Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tds-certificates-form-16-16a") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />
          <TdsCertificatesIntroductionSection />
          <TdsCertificatesTypesSection />
          <Problems items={s.problems} note="👉 These issues can impact your tax filing and refund claims." />

          {/* HOW WE HELP & WHY THIS IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand" /> How We Help
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                  👉 Complete end-to-end assistance.
                </p>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why This is Important
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.whyImportant && s.whyImportant.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                  👉 Ensures 100% accurate tax compliance.
                </p>
              </div>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and stress-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort from your side." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Helped me fix Form 16 mismatch quickly.", "Got my TDS details sorted easily.", "Very helpful CA support."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FinalCTA
            title="Don’t let TDS errors affect your tax filing."
            sub="Get expert CA support and resolve your TDS certificate issues today."
            ctaText="👉 Get TDS Certificate Help Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-16a-tds-certificate-download") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />
          <Form16AIntroductionSection />
          <Problems items={s.problems} note="👉 These issues can lead to incorrect ITR filing and tax complications." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* HOW WE HELP */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" /> How We Help
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">End-to-end CA support including:</p>
              <ul className="mt-4 space-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Complete support from certificate to tax filing.
              </p>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* WHY FORM 16A IS IMPORTANT */}
          {s.whyImportant && <WhyImportantSection items={s.whyImportant} title="Why Form 16A is Important" />}

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Easy and stress-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Helped me fix Form 16A mismatch quickly.", "Got my TDS credit correctly.", "Very supportive CA service."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FinalCTA
            title="Don’t miss your TDS credit due to errors or confusion."
            sub="Get expert CA support and handle your Form 16A correctly."
            ctaText="👉 Get Form 16A Help Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-16b-tds-certificate-property") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />
          <Form16BIntroductionSection />
          <Problems items={s.problems} note="👉 These issues can delay tax credit and ITR filing." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHAT WE HELP WITH */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" /> What We Help With
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                👉 Complete end-to-end support provided.
              </p>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* WHY FORM 16B IS IMPORTANT */}
          {s.whyImportant && <WhyImportantSection items={s.whyImportant} />}

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Helped me download Form 16B quickly.", "Solved TRACES issue easily.", "Very smooth experience."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="👉 Talk to CA Today"
          />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-16c-tds-certificate-rent") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form16CIntroductionSection />
          <Problems items={s.problems} note="👉 These issues can delay tax credit for landlord." />

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
                      {s.benefits.map((pt) => (
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
                      <Building className="h-5 w-5 text-brand" /> {s.whatIs2?.heading || "What We Help With"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(s.whatIs2?.points || []).map((pt) => (
                        <li key={pt} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.whatIs2?.note && (
                    <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                      {s.whatIs2.note}
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
                  {s.whoFor.map((p) => (
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
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Quick and smooth process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />

          <TrustSection
            reviews={["Got Form 16C easily without confusion.", "Very smooth and fast support.", "Helped me complete rent TDS process."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

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

  if (s.slug === "form-24q-tds-filing-salary") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form24QIntroductionSection />
          <Problems items={s.problems} note="👉 Poor filing can impact employee trust and legal compliance." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY PROFESSIONAL FILING MATTERS */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                <ul className="mt-4 space-y-2.5">
                  {s.whoFor.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm">
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand" /> Why Professional Filing Matters
                </h3>
                <ul className="mt-8 space-y-2.5">
                  {s.benefits.map((p) => (
                    <li key={p} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                  👉 Expert handling ensures complete peace of mind.
                </p>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Professional Filing Matters"
            importantTitle="Important Compliance Points"
          />

          <Process steps={s.process} note="👉 Smooth and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 We handle everything end-to-end." />}
          <FAQ items={s.faqs} />

          <TrustSection
            reviews={["Handled salary TDS for our company perfectly.", "No more errors in Form 16.", "Very reliable payroll compliance support."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />

          <FinalCTA
            title="Ensure smooth salary compliance and avoid penalties."
            sub="Get expert CA support for Form 24Q filing today."
            ctaText="👉 File Form 24Q Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-26q-tds-return-filing") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form26QIntroductionSection />
          <Problems items={s.problems} note="👉 Even minor mistakes can cause major compliance issues." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY PROFESSIONAL FILING MATTERS */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Professional Filing Matters
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {["Correct section-wise TDS deduction", "Error-free return filing", "PAN validation", "Timely submission", "Avoid penalties and notices"].map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                  👉 Expert support ensures 100% compliance and accuracy.
                </p>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            importantTitle="Important Compliance Points"
          />

          <Process steps={s.process} note="👉 Smooth and reliable process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} />}
          <TrustSection
            reviews={["Handled vendor TDS perfectly.", "No more confusion on TDS sections.", "Very reliable CA for compliance."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />

          <FinalCTA
            title="Avoid penalties and ensure smooth vendor compliance."
            sub="Get expert CA support for Form 26Q filing today."
            ctaText="👉 File Form 26Q Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-27q-nri-foreign-payments") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form27QIntroductionSection />
          <Problems items={s.problems} note="👉 International transactions require expert-level compliance." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY EXPERT HANDLING IS CRITICAL */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Expert Handling is Critical
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                  👉 This is not basic compliance — it requires expert tax understanding.
                </p>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Expert Handling is Critical"
            importantTitle="Important Compliance Points"
          />

          <Process steps={s.process} note="👉 Complete end-to-end compliance support." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 We guide you at every step." />}
          <TrustSection
            reviews={[
              "Handled NRI payments compliance perfectly.",
              "Great support for foreign transactions.",
              "Very knowledgeable CA team.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText=" Talk to CA Today"
          />
          <FAQ items={s.faqs} />

          <FinalCTA
            title="Avoid costly mistakes in foreign payment compliance."
            sub="Get expert CA support and file your Form 27Q accurately."
            ctaText="👉 File Form 27Q Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-27eq-tcs-return") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form27EQIntroductionSection />
          <Problems items={s.problems} note="👉 Incorrect compliance can lead to notices and financial penalties." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />

          {/* WHO SHOULD USE & WHY PROFESSIONAL FILING MATTERS */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-brand" /> Who Should Use This Service?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">This is ideal for:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whoFor.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Professional Filing Matters
                  </h3>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                  👉 Expert handling ensures smooth and compliant operations.
                </p>
              </div>
            </div>
          </section>

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="Why Professional Filing Matters"
            importantTitle="Important Compliance Points"
          />

          <Process steps={s.process} note="👉 Hassle-free and reliable process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Complete support provided." />}
          <TrustSection
            reviews={[
              "Handled TCS filing without any errors.",
              "Very smooth compliance process.",
              "Reliable CA for tax filings.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />

          <FinalCTA
            title="Ensure smooth TCS compliance and avoid penalties."
            sub="Get expert CA support for Form 27EQ filing today."
            ctaText="👉 File TCS Return Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "form-27d-tcs-certificate") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <Form27DIntroductionSection />
          <Problems items={s.problems} note="👉 These issues can affect your tax filing and refund process." />
          <WhatIs whatIs={s.whatIs} />

          {/* HOW WE HELP & WHY FORM 27D IS IMPORTANT */}
          <section className="py-14 bg-white border-b">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-brand" /> How We Help
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">End-to-end CA support including:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.benefits.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-6 text-sm font-semibold text-brand border-t pt-3">
                  👉 Complete support from certificate to tax filing.
                </p>
              </div>

              <div className="bg-brand-light/35 rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-brand" /> Why Form 27D is Important
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">Key advantages:</p>
                  <ul className="mt-4 space-y-2.5">
                    {s.whyImportant && s.whyImportant.map((p) => (
                      <li key={p} className="flex gap-2 items-start text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <WhoFor items={s.whoFor} />

          {/* IMPORTANT POINTS */}
          <section className="py-14 bg-muted/30 border-b">
            <div className="container mx-auto px-4 max-w-3xl bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
              <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-brand" /> Important Points
              </h3>
              <ul className="mt-4 space-y-2.5">
                {s.important.map((b) => (
                  <li key={b} className="flex gap-2 items-start text-sm">
                    <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <Process steps={s.process} note="👉 Simple and hassle-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal effort required." />}
          <FAQ items={s.faqs} />
          <TrustSection
            reviews={["Helped me claim my TCS credit easily.", "Solved mismatch issue quickly.", "Very helpful CA support."]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FinalCTA
            title="Don’t miss your TCS credit due to errors or delays."
            sub="Get expert CA support and handle your Form 27D correctly."
            ctaText="👉 Get Form 27D Help Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "new-tan-registration") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <TanRegistrationIntroductionSection />
          <Problems items={s.problems} note="👉 Small mistakes can delay your compliance process." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />
          <WhoFor items={s.whoFor} note="👉 If you are deducting tax — you must apply for TAN." />

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="What You Get"
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Quick and error-free process." />
          {s.documents && s.documents.length > 0 && <Documents items={s.documents} note="👉 Minimal documentation required." />}
          <TrustSection
            reviews={[
              "Got TAN approved quickly without errors.",
              "Very smooth process for new business.",
              "Excellent CA support.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="👉 Talk to CA Today"
          />
          <FAQ items={s.faqs} />

          <FinalCTA
            title="Start your tax compliance the right way."
            sub="Apply for TAN today with expert CA support."
            ctaText="👉 Apply for New TAN Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "tan-correction-services") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <IntroductionSection />
          <Problems items={s.problems} note="👉 Even small errors can cause major compliance problems." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />
          <WhoFor items={s.whoFor} />

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={true}
            title="Types of TAN Corrections"
            note="👉 All corrections handled professionally."
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Quick and error-free process." />
          {s.documents && s.documents.length > 0 && (
            <Documents items={s.documents} note="👉 Simple documentation, complete support." />
          )}
          <TrustSection
            reviews={[
              "Corrected TAN without any hassle.",
              "Solved TDS filing issue quickly.",
              "Very professional CA support.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />

          <FinalCTA
            title="Fix your TAN errors before they create bigger problems."
            sub="Get expert CA support and update your TAN details today."
            ctaText="👉 Correct TAN Details Now"
            whatsappText="👉 Chat with CA on WhatsApp"
          />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (s.slug === "duplicate-tan-certificate-online") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Breadcrumbs title={s.title} />
          <Hero s={s} />

          <DuplicateTanIntroductionSection />
          <Problems items={s.problems} note="👉 Delay in getting TAN certificate can affect your TDS filing and business operations." />
          <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />
          <WhoFor items={s.whoFor} />

          <Benefits
            items={s.benefits}
            important={s.important}
            isTanCorrection={false}
            title="When You Need Duplicate TAN"
            importantTitle="Important Points"
          />

          <Process steps={s.process} note="👉 Fast and hassle-free process." />
          {s.documents && s.documents.length > 0 && (
            <Documents items={s.documents} note="👉 Minimal documentation required." />
          )}
          <TrustSection
            reviews={[
              "Got duplicate TAN within no time.",
              "Very helpful and quick service.",
              "Solved urgent compliance issue.",
            ]}
            ratingText="4.8/5 Rating on Google"
            ctaText="Talk to CA Today"
          />
          <FAQ items={s.faqs} />

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs title={s.title} />
        <Hero s={s} />
        {s.slug === "tan-correction-services" && <IntroductionSection />}
        {s.slug === "form-15ca-15cb-foreign-remittance" && <RemittanceRequirementsSection />}
        {s.slug === "form-16b-tds-certificate-property" && <Form16BIntroductionSection />}
        {s.slug === "form-26q-tds-return-filing" && <Form26QIntroductionSection />}
        <Problems items={s.problems} note={
          s.slug === "tan-correction-services"
            ? "👉 Even small errors can cause major compliance problems."
            : s.slug === "form-15ca-15cb-foreign-remittance"
              ? "👉 Mistakes can delay transactions or trigger notices."
              : s.slug === "form-16b-tds-certificate-property"
                ? "👉 These issues can delay tax credit and ITR filing."
                : s.slug === "form-16c-tds-certificate-rent"
                  ? "👉 These issues can delay tax credit for landlord."
                  : s.slug === "form-24q-tds-filing-salary"
                    ? "👉 Poor filing can impact employee trust and legal compliance."
                    : s.slug === "form-26q-tds-return-filing"
                      ? "👉 Even minor mistakes can cause major compliance issues."
                      : undefined
        } />
        <WhatIs whatIs={s.whatIs} whatIs2={s.whatIs2} />
        <WhoFor items={s.whoFor} note={s.slug === "form-15ca-15cb-foreign-remittance" ? "👉 Banks will not process remittance without these forms (if applicable)." : undefined} />
        <Benefits
          items={s.benefits}
          important={s.important}
          isTanCorrection={s.slug === "tan-correction-services"}
          title={
            s.slug === "form-15ca-15cb-foreign-remittance"
              ? "How We Help You"
              : s.slug === "form-16b-tds-certificate-property"
                ? "What We Help With"
                : undefined
          }
          note={s.slug === "form-16b-tds-certificate-property" ? "👉 Complete end-to-end support provided." : undefined}
          importantTitle={
            s.slug === "form-15ca-15cb-foreign-remittance"
              ? "Types of Form 15CA"
              : s.slug === "form-16b-tds-certificate-property"
                ? "Important Points"
                : undefined
          }
          importantNote={s.slug === "form-15ca-15cb-foreign-remittance" ? "👉 We identify the correct category to ensure compliance." : undefined}
        />
        {s.whyImportant && <WhyImportantSection items={s.whyImportant} />}
        <Process steps={s.process} note={s.slug === "tan-correction-services" ? "👉 Quick and error-free process." : s.slug === "form-15ca-15cb-foreign-remittance" ? "👉 Fast, compliant & hassle-free execution." : undefined} />
        {s.documents && s.documents.length > 0 && <Documents items={s.documents} note={s.slug === "tan-correction-services" ? "👉 Simple documentation, complete support." : s.slug === "form-15ca-15cb-foreign-remittance" ? "👉 Full guidance provided." : undefined} />}
        <FAQ items={s.faqs} />
        {(s.slug === "tan-correction-services" || s.slug === "form-15ca-15cb-foreign-remittance") && (
          <TrustSection
            reviews={s.slug === "form-15ca-15cb-foreign-remittance"
              ? ["Got my 15CA/15CB done within a day.", "Smooth remittance process without any issues.", "Highly professional and quick service."]
              : ["Corrected TAN without any hassle.", "Solved TDS filing issue quickly.", "Very professional CA support."]
            }
            ratingText={s.slug === "form-15ca-15cb-foreign-remittance" ? "4.8/5 Client Rating" : "4.8/5 Rating on Google"}
            ctaText={s.slug === "form-15ca-15cb-foreign-remittance" ? "👉 Talk to a CA Today" : "👉 Talk to CA Today"}
          />
        )}
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function TrustSection({ reviews, ratingText, ctaText }: { reviews: string[]; ratingText?: string; ctaText?: string }) {
  return (
    <section className="py-14 bg-brand-light/30 border-y">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Trust Our Expert CA Support</h2>
        <div className="mt-4 flex items-center justify-center gap-1.5 text-amber-500 font-semibold text-lg">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <span className="text-ink ml-1">{ratingText || "4.8/5 Rating on Google"}</span>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border shadow-sm flex flex-col justify-between">
              <p className="text-sm italic text-muted-foreground font-medium">"{r}"</p>
              <div className="mt-4 flex justify-center">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">Verified Client</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a href="tel:+918169887643" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-6 py-3 font-semibold shadow-lg shadow-brand/20 hover:scale-105 transition-transform">
            <Phone className="h-4 w-4" /> {ctaText || "👉 Talk to CA Today"}
          </a>
        </div>
      </div>
    </section>
  );
}

function RemittanceRequirementsSection() {
  const items = [
    "NRI property sale proceeds",
    "Sending money to family abroad",
    "Business payments to foreign entities",
    "Import/export transactions",
    "Investment or asset transfers"
  ];
  return (
    <section className="py-14 bg-brand-light/10 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Requirements
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">When is Form 15CA / 15CB Required?</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Required when making payments outside India such as:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5 items-center p-3 rounded-xl bg-muted/30 border text-sm font-medium text-ink">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink items-start">
            <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-brand">👉 </span>
              Banks will not process remittance without these forms (if applicable).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TdsCertificatesIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          TDS Certificates (Form 16 & Form 16A)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          TDS certificates are essential documents that show:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Tax deducted from your income
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Details of deductions & deposits
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Proof of tax paid to government
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink">
            <span className="font-semibold text-brand block mb-2">These certificates are required for:</span>
            <ul className="grid sm:grid-cols-3 gap-3 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Filing Income Tax Returns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Claiming tax credit
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Financial documentation
              </li>
            </ul>
          </div>

          <div className="mt-4 flex items-start gap-2 text-xs md:text-sm text-rose-700 font-medium pt-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
            <span>👉 Errors in TDS certificates can lead to tax mismatches and refund issues.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TdsCertificatesTypesSection() {
  return (
    <section className="py-14 bg-white border-b">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
            Types of TDS Certificates
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/30 p-6 lg:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-600 shrink-0" />
                <h3 className="font-display text-xl font-bold text-ink">
                  Form 16 (Salary TDS Certificate)
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Issued by employers to employees, it includes:
              </p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Salary details</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>TDS deducted on salary</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Tax computation</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Form 16 Part A & Part B</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm font-semibold text-blue-700 border-t border-sky-200/60 pt-3">
              👉 Required for ITR filing for salaried individuals.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 lg:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-600 shrink-0" />
                <h3 className="font-display text-xl font-bold text-ink">
                  Form 16A (Non-Salary TDS Certificate)
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Issued for TDS on non-salary income:
              </p>
              <ul className="mt-4 space-y-2.5">
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Professional fees</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rent</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Interest income</span>
                </li>
                <li className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Commission & brokerage</span>
                </li>
              </ul>
            </div>
            <p className="mt-6 text-sm font-semibold text-emerald-700 border-t border-emerald-200/60 pt-3">
              👉 Used by freelancers, professionals and vendors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form27DIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Form 27D (TCS Certificate)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 27D is a TCS (Tax Collected at Source) certificate issued when tax is collected from you during certain transactions.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-ink">It shows:</h3>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Tax collected by seller
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Amount of transaction
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              TCS deposited with govt
            </li>
          </ul>

          <div className="mt-5 text-sm font-semibold text-brand">
            👉 It is essential for claiming tax credit while filing your Income Tax Return (ITR).
          </div>

          <div className="mt-6 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
            <span className="font-semibold text-rose-700 block mb-2">Without Form 27D:</span>
            <ul className="grid sm:grid-cols-3 gap-3 font-medium text-ink">
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> You may miss TCS credit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> Your tax records may not match
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> Refund may get delayed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form16AIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Form 16A (Non-Salary TDS Certificate)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 16A is a TDS certificate issued for non-salary income.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-ink">It shows:</h3>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Tax deducted on your income
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Details of deductor (payer)
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Amount paid & tax deposited
            </li>
          </ul>

          <div className="mt-5 text-sm font-semibold text-brand">
            👉 It is essential for accurate income tax return (ITR) filing.
          </div>

          <div className="mt-6 p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-sm">
            <span className="font-semibold text-rose-700 block mb-2">Without Form 16A:</span>
            <ul className="grid sm:grid-cols-3 gap-3 font-medium text-ink">
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> You may miss TDS credit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> Income may not match records
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">❌</span> You may face refund delays
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form24QIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Form 24Q (Salary TDS Return)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 24Q is a quarterly TDS return filed by employers for tax deducted on employee salaries.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-ink">It includes:</h3>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Employee salary details
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              TDS deducted
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Tax deposited with govt
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              PAN-wise reporting
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink">
            <span className="font-semibold text-brand">👉 Filing Form 24Q correctly is essential for:</span>
            <ul className="grid sm:grid-cols-3 gap-3 mt-2 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Employee tax records
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Form 16 generation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Avoiding notices
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              Even small errors can lead to compliance issues and penalties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form27QIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction & Authority
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Form 27Q (NRI / Foreign Payments)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 27Q is a quarterly TDS return filed for payments made to:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Non-Resident Indians (NRIs)
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Foreign companies
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Overseas service providers
            </li>
          </ul>

          <div className="mt-6 p-5 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink">
            <p className="font-semibold text-brand text-base">
              These payments are governed by Section 195 of the Income Tax Act, which requires:
            </p>
            <ul className="grid sm:grid-cols-3 gap-3 mt-3 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Correct TDS deduction
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> DTAA consideration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Proper reporting & filing
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-brand/10 flex items-start gap-2 text-rose-700 font-medium">
              <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
              <span>👉 Even a small mistake can lead to heavy penalties, scrutiny, or legal complications.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form27EQIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Form 27EQ (TCS Return)
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 27EQ is a quarterly return used to report TCS (Tax Collected at Source). TCS is applicable when tax is collected from buyers at the time of sale in certain transactions.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-ink">This includes:</h3>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Sale of specified goods
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              E-commerce transactions
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              High-value transactions
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <span className="font-medium">
              👉 Proper filing of Form 27EQ ensures that your TCS compliance is complete and error-free.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DuplicateTanIntroductionSection() {
  return (
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
  );
}

function Form15CA15CBIntroductionSection() {
  return (
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
  );
}

function IntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">TAN Details Must Be Accurate</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          TAN (Tax Deduction Account Number) must have accurate and updated details for proper TDS/TCS compliance.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <h3 className="font-display font-semibold text-lg text-ink">If your TAN has errors like:</h3>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
              Wrong name
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
              Incorrect address
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
              PAN mismatch
            </li>
          </ul>

          <div className="mt-6 flex gap-3 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink items-start">
            <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-brand">👉 </span>
              Inaccurate TAN details can lead to return rejection, non-compliance, and penalties.
            </div>
          </div>
        </div>

        <p className="mt-6 text-base text-muted-foreground">
          👉 <strong>TAN correction</strong> allows you to update and fix these errors officially.
        </p>
      </div>
    </section>
  );
}

function Form16BIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          TDS Certificate Issued for Property Transactions
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 16B is the TDS certificate issued for property transactions. After filing Form 26QB:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Buyer can download Form 16B from TRACES
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              It serves as proof of TDS deduction
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Seller uses it to claim tax credit
            </li>
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="text-sm font-semibold text-rose-700 mb-2">👉 Without Form 16B:</p>
            <ul className="grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>Seller cannot claim TDS credit</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>Tax records may mismatch</span>
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>Compliance remains incomplete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form16CIntroductionSection() {
  return (
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
  );
}

function TanRegistrationIntroductionSection() {
  return (
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
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Paying salaries
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Hiring professionals
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Making contractor payments
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Running a business
            </li>
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
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>You cannot file TDS returns</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>You may face penalties</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                <span>Your compliance becomes invalid</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LowerTdsIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> About Lower TDS Certificate
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Reduce Excess TDS Legally Under Section 197
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          A Lower TDS Certificate under Section 197 allows:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Deduction of tax at lower rate or NIL rate
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Avoiding excess tax deduction
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Better cash flow and tax planning
            </li>
          </ul>

          <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
            👉 Application is made using Form 13 through Income Tax portal.
          </p>
        </div>
      </div>
    </section>
  );
}

function Form26QBCorrectionIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> About Correction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          About Form 26QB Correction
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 26QB correction is required when incorrect details are submitted while filing TDS on property (Section 194IA).
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <p className="font-semibold text-ink mb-3">It allows you to:</p>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Update wrong information
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Fix mismatches
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Ensure proper tax credit
            </li>
          </ul>

          <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
            👉 Correction is done through the TRACES portal with proper validation.
          </p>
        </div>
      </div>
    </section>
  );
}

function Form26QIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Form 26Q (Non-Salary TDS Return)</h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 26Q is a quarterly TDS return used to report tax deducted on non-salary payments.
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <p className="font-semibold text-ink mb-3">Used to report tax deducted on payments such as:</p>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Contractor payments
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Professional fees
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Rent
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Commission & brokerage
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
              Interest payments
            </li>
          </ul>

          <div className="mt-5 text-sm font-semibold text-brand border-t pt-3">
            👉 It is one of the most commonly filed TDS returns for businesses.
          </div>

          <div className="mt-6 flex gap-3 p-4 rounded-xl bg-red-50/40 border border-red-100 text-sm text-ink items-start">
            <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold text-red-600 block mb-1">👉 Incorrect filing can lead to:</span>
              <ul className="grid sm:grid-cols-3 gap-4 mt-2">
                <li className="flex items-center gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Penalties</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Return rejection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="shrink-0">❌</span>
                  <span>Notices from Income Tax Department</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Form26QBIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Mandatory TDS on Property Transactions under Section 194IA
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Form 26QB is used for:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-3 gap-4">
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Paying TDS on property
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Filing return under Section 194IA
            </li>
            <li className="flex gap-2.5 items-center p-3.5 rounded-xl bg-brand/5 border border-brand/10 text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
              Reporting buyer & seller details
            </li>
          </ul>

          <div className="mt-5 text-sm font-semibold text-brand border-t pt-3">
            👉 It is a mandatory compliance for property transactions above ₹50 lakh.
          </div>

          <div className="mt-6 p-4 rounded-xl bg-red-50/60 border border-red-200">
            <p className="text-sm font-semibold text-rose-700 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
              Incorrect filing can lead to:
            </p>
            <ul className="grid sm:grid-cols-3 gap-3 mt-3">
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Penalties
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Interest charges
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Delay in Form 16B generation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallanCorrectionIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          TDS Challan Deposit & Correction Significance
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          TDS challan is used to deposit tax with the government. If any detail is incorrect — such as:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              PAN / TAN
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Amount
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Assessment year
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Section
            </li>
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-red-50/60 border border-red-200">
            <p className="text-sm font-semibold text-rose-700 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
              👉 It can cause serious compliance issues, including:
            </p>
            <ul className="grid sm:grid-cols-3 gap-3 mt-3">
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> TDS credit mismatch
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Return rejection
              </li>
              <li className="flex items-center gap-2 text-sm text-ink font-medium">
                <XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Notices from Income Tax Department
              </li>
            </ul>
          </div>

          <div className="mt-5 text-sm font-semibold text-brand flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>TDS challan correction allows you to rectify these errors officially.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevisedTdsIntroductionSection() {
  return (
    <section className="py-14 bg-brand-light/20 border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <BookOpen className="h-3.5 w-3.5" /> Introduction
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          Mistakes in TDS/TCS Returns Are Common — Ignoring Them Can Be Costly
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          Errors like:
        </p>

        <div className="mt-6 bg-white rounded-2xl border p-6 shadow-sm">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Wrong PAN details
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Incorrect TDS amount
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Missing entries
            </li>
            <li className="flex gap-2.5 items-center p-3 rounded-xl bg-red-50/50 border border-red-100 text-sm font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0" />
              Wrong section applied
            </li>
          </ul>

          <div className="mt-4 flex items-start gap-2 text-xs md:text-sm text-rose-700 font-medium pt-2">
            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
            <span>👉 Can lead to notices, penalties, and compliance issues.</span>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-brand/5 border border-brand/20 text-sm text-ink">
            <span className="font-semibold text-brand block mb-2">A revised return allows you to:</span>
            <ul className="grid sm:grid-cols-3 gap-3 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Correct errors
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Update missing data
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" /> Ensure accurate compliance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs({ title }: { title: string }) {
  return (
    <nav className="border-b bg-muted/30" aria-label="Breadcrumb">
      <ol className="container mx-auto px-4 py-3 text-sm flex items-center gap-2 text-muted-foreground flex-wrap">
        <li><Link to="/" className="hover:text-brand">Home</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li><Link to="/tds-tcs" className="hover:text-brand">TDS & TCS</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li className="text-ink font-medium">{title}</li>
      </ol>
    </nav>
  );
}

function Hero({ s }: { s: NonNullable<ReturnType<typeof getTdsServiceBySlug>> }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> TDS & TCS · {s.title}
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">{s.h1}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{s.heroLead}</p>
          <p className="mt-2 text-muted-foreground">{s.heroSub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              {s.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Compliant</span>
          </div>
        </div>
        <ServiceHeroForm 
          title="Talk to a CA — free callback" 
          subtitle="Share details, our CA will connect within 30 mins." 
          serviceName={s.title} 
          ctaText={s.primaryCta} 
          formName="Service Hero Form" 
          ctaLocation="Route Hero Section" 
        />
      </div>
    </section>
  );
}



function WhatIs({ whatIs, whatIs2 }: { whatIs: { heading: string; points: string[]; note?: string }; whatIs2?: { heading: string; points: string[]; note?: string } }) {
  if (whatIs2) {
    return (
      <section className="py-14 bg-muted/30 border-b">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{whatIs.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {whatIs.points.map((p) => (
                  <li key={p} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {whatIs.note && (
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                {whatIs.note}
              </p>
            )}
          </div>
          <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{whatIs2.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {whatIs2.points.map((p) => (
                  <li key={p} className="flex gap-2 items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            {whatIs2.note && (
              <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
                {whatIs2.note}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{whatIs.heading}</h2>
        <ul className="mt-6 space-y-3">
          {whatIs.points.map((p) => (
            <li key={p} className="flex gap-3 items-start">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-ink">{p}</span>
            </li>
          ))}
        </ul>
        {whatIs.note && (
          <div className="mt-5 rounded-xl bg-brand/5 border border-brand/20 p-4 text-sm text-ink">
            <span className="font-semibold text-brand">Note: </span>{whatIs.note}
          </div>
        )}
      </div>
    </section>
  );
}

function Problems({ items, note }: { items: string[]; note?: string }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Common Issues Faced</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((p) => (
            <div key={p} className="flex gap-3 p-5 rounded-xl border bg-red-50/40">
              <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <p className="text-sm text-ink">{p}</p>
            </div>
          ))}
        </div>
        {note && (
          <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}


function Benefits({ items, important, title, importantTitle, isTanCorrection, note, importantNote }: { items: string[]; important: string[]; title?: string; importantTitle?: string; isTanCorrection?: boolean; note?: string; importantNote?: string }) {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              {isTanCorrection ? (
                <>💡 Types of TAN Corrections</>
              ) : (
                <><Sparkles className="h-5 w-5 text-brand" /> {title || "Benefits"}</>
              )}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {items.map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {(isTanCorrection || note) && (
            <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
              {note || "👉 All corrections handled professionally."}
            </p>
          )}
        </div>
        <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-brand" /> {importantTitle || "Important Points"}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {important.map((b) => (
                <li key={b} className="flex gap-2 items-start text-sm"><ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" /><span>{b}</span></li>
              ))}
            </ul>
          </div>
          {importantNote && (
            <p className="mt-5 text-sm font-semibold text-brand border-t pt-3">
              {importantNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function WhoFor({ items, note }: { items: string[]; note?: string }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Who Should Use This Service?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((w) => (
            <div key={w} className="p-5 rounded-xl border bg-white">
              <div className="h-9 w-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-ink">{w}</p>
            </div>
          ))}
        </div>
        {note && (
          <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}

function Process({ steps, note }: { steps: string[]; note?: string }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Our Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={step} className="p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5">
              <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">{i + 1}</div>
              <p className="mt-3 text-sm font-medium text-ink">{step}</p>
            </div>
          ))}
        </div>
        {note && (
          <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}

function Documents({ items, note }: { items: string[]; note?: string }) {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Documents Required</h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {items.map((d) => (
            <div key={d} className="flex gap-3 p-4 rounded-xl bg-white border">
              <FileText className="h-5 w-5 text-brand shrink-0" />
              <span className="text-sm text-ink">{d}</span>
            </div>
          ))}
        </div>
        {note && (
          <div className="mt-8 text-center text-base font-semibold text-brand flex items-center justify-center gap-1.5">
            {note}
          </div>
        )}
      </div>
    </section>
  );
}

// function Related({ currentSlug }: { currentSlug: string }) {
//   const related = TDS_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 6);
//   return (
//     <section className="py-14 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Explore More TDS & TCS Services</h2>
//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
//           {related.map((r) => (
//             <Link key={r.slug} to="/tds-tcs/$slug" params={{ slug: r.slug }} className="group p-5 rounded-xl border hover:border-brand/40 hover:shadow-lg transition-all bg-white">
//               <h3 className="font-display font-bold text-ink group-hover:text-brand transition-colors">{r.title}</h3>
//               <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.heroLead}</p>
//               <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {items.map((f, i) => (
            <div key={f.q} className="rounded-xl border bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors">
                <span className="font-semibold text-ink">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyImportantSection({ items, title = "💡 Why This is Important" }: { items: string[]; title?: string }) {
  const displayTitle = title.startsWith("💡") ? title : `💡 ${title}`;
  return (
    <section className="py-14 bg-white border-b">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">{displayTitle}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((w) => (
            <div key={w} className="p-5 rounded-xl border bg-brand/5 flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-ink">{w}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
