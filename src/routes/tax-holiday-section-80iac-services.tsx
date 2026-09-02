import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "What is Section 80IAC?",
    a: "It is a provision that allows eligible startups to claim 100% income tax exemption on profits for selected years.",
  },
  {
    q: "Is DPIIT required?",
    a: "Yes, DPIIT recognition is mandatory before applying for Section 80IAC approval.",
  },
  {
    q: "How many years exemption is available?",
    a: "Eligible startups can claim exemption for any 3 consecutive years out of the first 10 years.",
  },
  {
    q: "Can all startups apply?",
    a: "No. Only startups meeting the eligibility conditions can apply for 80IAC approval.",
  },
  {
    q: "Can CA help with approval?",
    a: "Yes. We provide complete support from eligibility check to filing and follow-up.",
  },
];

const BENEFITS = [
  "100% income tax exemption on profits",
  "Reduced financial burden",
  "Improved cash flow",
  "Better investor appeal",
  "Boost to startup growth and valuation",
];

const WHAT_YOU_GET = [
  "80IAC application support",
  "Tax exemption eligibility assessment",
  "Documentation and justification support",
  "End-to-end filing support",
  "Follow-up with authorities",
];

const ELIGIBILITY = [
  "DPIIT-recognized startup",
  "Private Limited Company or LLP",
  "Within eligible time period",
  "Working on innovation or scalable model",
  "Turnover within prescribed limits",
];

const CHALLENGES = [
  "Lack of clarity on eligibility",
  "Rejection due to weak application",
  "Incorrect documentation",
  "Delay in approval",
  "Missing tax benefits",
];

const HELP = [
  "Detailed eligibility check",
  "Strong application preparation",
  "Proper documentation support",
  "Accurate filing process",
  "End-to-end handling",
];

const PROCESS = [
  "Evaluate eligibility",
  "Review financials and structure",
  "Prepare application",
  "Submit to authorities",
  "Follow up till approval",
];

const AUDIENCE = [
  "DPIIT-recognized startups",
  "Early-stage companies",
  "Startups with profits or expected profits",
  "Founders planning tax optimization",
  "Businesses looking to scale",
];

const DOCUMENTS = [
  "DPIIT recognition certificate",
  "Company incorporation documents",
  "Financial statements",
  "Business details",
  "Supporting documents",
];

export const Route = createFileRoute("/tax-holiday-section-80iac-services")({
  head: () => ({
    meta: [
      { title: "Startup Tax Holiday (Section 80IAC) in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Apply for Section 80IAC tax exemption in India with expert CA support for DPIIT startups, eligibility review, documentation and filing.",
      },
      {
        property: "og:title",
        content: "Startup Tax Holiday (Section 80IAC) with Expert CA Support",
      },
      {
        property: "og:description",
        content:
          "Complete 80IAC support for eligible startups with documentation, filing and follow-up.",
      },
      { property: "og:url", content: "/tax-holiday-section-80iac-services" },
    ],
    links: [{ rel: "canonical", href: "/tax-holiday-section-80iac-services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
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
          name: "Startup Tax Holiday (Section 80IAC) Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Section 80IAC tax exemption support for DPIIT-recognized startups with eligibility review, filing and follow-up.",
        }),
      },
    ],
  }),
  component: TaxHolidaySection80IACPage,
});

function TaxHolidaySection80IACPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <EligibilitySection />
        <ChallengesSection />
        <HelpSection />
        <ProcessSection />
        <AudienceDocsSection />
        <TrustSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <nav className="border-b bg-muted/30" aria-label="Breadcrumb">
      <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-brand">
            Home
          </Link>
        </li>
        <ChevronRight className="h-3 w-3" />
        <li>
          <Link to="/registrations" className="hover:text-brand">
            Registrations
          </Link>
        </li>
        <ChevronRight className="h-3 w-3" />
        <li className="font-medium text-ink">Startup Tax Holiday (Section 80IAC)</li>
      </ol>
    </nav>
  );
}

function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto grid gap-10 px-4 py-12 relative lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Tax Holiday Approval
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Startup Tax Holiday (Section 80IAC) in India - 100% Tax Exemption with CA Support
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Want to save 100% income tax on your startup profits? Apply for Section 80IAC Tax
            Holiday and reduce your tax burden legally.
          </p>
          <p className="mt-2 text-muted-foreground">
            Get expert CA support for 80IAC certificate, eligibility and approval process.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for 80IAC Tax Exemption <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 px-5 py-3 font-semibold text-[#128C7E] transition-all hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
              <BadgeCheck className="h-4 w-4 text-brand" /> 80IAC Support
            </span>
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-white p-6 shadow-xl lg:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">Free 80IAC Consultation</h2>
            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-brand">
              Free
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Share your details and our team will connect within 30 mins.
          </p>
          <form
            className="mt-5 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = `Hi, I need help with Section 80IAC tax holiday.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/918169887643?text=${msg}`, "_blank");
            }}
          >
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Mobile Number"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Request Callback <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">No spam. 100% confidential.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <Users className="h-3.5 w-3.5" /> About Section 80IAC
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Section 80IAC gives 100% tax exemption on profits for eligible startups
            </h2>
            <p className="mt-4 text-muted-foreground">
              Available only to DPIIT-recognized startups, it allows eligible businesses to claim
              tax exemption for selected years and improve cash flow during growth.
            </p>
            <p className="mt-3 text-muted-foreground">
              It is a major financial advantage for scaling startups that want to reinvest profits
              into product, team and expansion.
            </p>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ClipboardCheck className="h-5 w-5 text-brand" /> What You Get
            </h3>
            <div className="mt-4 grid gap-3">
              {WHAT_YOU_GET.map((item) => (
                <div key={item} className="rounded-xl border bg-white px-4 py-3 text-sm text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Key Benefits of 80IAC
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          A major advantage for startups that are ready to scale.
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <div
              key={item}
              className="rounded-xl border bg-gradient-to-br from-white to-brand/5 p-5 transition-all hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <BadgeCheck className="h-5 w-5 text-brand" /> What You Get
            </h3>
            <div className="mt-4 grid gap-3">
              {WHAT_YOU_GET.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border bg-gradient-to-br from-brand/5 to-white px-4 py-3 text-sm text-ink"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand" /> Why It Matters
            </h3>
            <p className="mt-4 text-muted-foreground">
              80IAC can significantly reduce the tax burden on an eligible startup and improve the
              runway available for reinvestment and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EligibilitySection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Eligibility Criteria
            </h2>
            <ul className="mt-6 space-y-3">
              {ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand" /> Proper evaluation is critical
            </h3>
            <p className="mt-4 text-muted-foreground">
              A strong evaluation ensures the application is aligned with IMB expectations and
              improves the chance of approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Common Challenges
            </h2>
            <ul className="mt-6 space-y-3">
              {CHALLENGES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-muted/20 px-4 py-3"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand" /> How We Help
            </h3>
            <div className="mt-4 grid gap-3">
              {HELP.map((item) => (
                <div key={item} className="rounded-xl border bg-white px-4 py-3 text-sm text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm md:p-8">
          <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
            Why choose us?
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            We make 80IAC approval clear, fast and fully supported.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Detailed eligibility check",
              "Strong application preparation",
              "Documentation and follow-up support",
            ].map((item) => (
              <div key={item} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Our Process
        </h2>
        <p className="mt-2 text-center text-muted-foreground">Professional and guided execution.</p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((item, index) => (
            <div
              key={item}
              className="rounded-xl border bg-gradient-to-br from-white to-brand/5 p-5 transition-all hover:shadow-lg"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-md shadow-brand/30">
                {index + 1}
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceDocsSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-ink">
            <Users className="h-5 w-5 text-brand" /> Who Should Apply?
          </h3>
          <ul className="space-y-2">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-ink">
            <FileText className="h-5 w-5 text-brand" /> Documents Required
          </h3>
          <ul className="space-y-2">
            {DOCUMENTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <FileText className="h-4 w-4 shrink-0 text-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold text-muted-foreground">
            Complete guidance provided.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Saved huge tax with 80IAC approval.",
    "Very professional handling of startup case.",
    "Excellent guidance on eligibility and filing.",
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted 80IAC Support
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clients trust us for tax exemption support and compliance guidance.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review}
              className="rounded-xl border bg-gradient-to-br from-brand/5 to-white p-6 shadow-sm"
            >
              <p className="text-sm italic text-ink">"{review}"</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Verified client
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
          >
            Consult a CA Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-3">
          {FAQS.map((item, index) => (
            <div key={item.q} className="overflow-hidden rounded-xl border bg-white">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted/30"
                aria-expanded={open === index}
              >
                <span className="font-semibold text-ink">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === index && (
                <div className="border-t border-muted/50 px-5 pb-5 pt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#c91818] via-[#d61f1f] to-[#b51212] py-18 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Stop paying unnecessary tax
            <br />
            and maximize your startup profits
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium text-white/92 sm:text-lg">
            Apply for 80IAC tax exemption with expert support from start to finish.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+918169887643"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 font-semibold text-[#d81f1f] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Headphones className="h-4 w-4" /> Call Now
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#28d46c] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
            <a
              href="#lead"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0b1635] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
