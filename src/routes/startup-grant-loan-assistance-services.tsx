import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileText,
  Headphones,
  HandCoins,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "Can startups get loans in India?",
    a: "Yes, startups can access business loans, MSME loans, OD/CC limits and scheme-based funding depending on eligibility.",
  },
  {
    q: "Are grants available for startups?",
    a: "Yes, there are government grants and subsidy schemes at central and state levels, subject to eligibility and timely filing.",
  },
  {
    q: "What documents are required?",
    a: "Business details, financial statements, project details, bank statements and KYC documents are usually required.",
  },
  {
    q: "Can CA help improve approval chances?",
    a: "Yes. Strong project reports, CMA data and clear financial projections significantly improve the chances of approval.",
  },
  {
    q: "Do you assist with the full process?",
    a: "Yes. We handle evaluation, documentation, application and follow-up till sanction or grant processing.",
  },
];

const FUNDING_TYPES = [
  {
    icon: HandCoins,
    title: "Startup Loans",
    items: [
      "Business loans for startups",
      "Working capital funding",
      "OD / CC limits",
      "MSME loans",
    ],
  },
  {
    icon: Building2,
    title: "Government Grants",
    items: [
      "Startup India schemes",
      "MSME benefits",
      "Subsidy programs",
      "State and central grants",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Preparation",
    items: ["Project reports", "CMA data", "Financial projections", "Loan documentation"],
  },
];

const BENEFITS = [
  "Higher approval and sanction chances",
  "Investor and bank-ready documentation",
  "Right-fit scheme and loan selection",
  "Single point of contact for funding needs",
  "CA-certified financials and projections",
];

const CHALLENGES = [
  "Confusion about which scheme or loan fits",
  "Weak project report or projections",
  "Bank loan rejection due to documentation",
  "Missed deadlines for government grants",
  "No clarity on subsidy eligibility",
];

const HELP = [
  "Identify suitable funding options",
  "Prepare strong project reports",
  "Create CMA data and projections",
  "Application and documentation support",
  "Follow-up with banks and authorities",
];

const PROCESS = [
  "Understand funding requirement",
  "Identify best funding options",
  "Prepare financial documents",
  "Apply for loan or grant",
  "Follow-up till approval",
];

const AUDIENCE = [
  "Startups seeking funding",
  "MSMEs and small businesses",
  "Entrepreneurs launching new ventures",
  "Businesses needing expansion capital",
  "Founders looking for government grants",
];

const DOCUMENTS = [
  "Business details",
  "Financial statements",
  "PAN and Aadhaar",
  "Bank statements",
  "Project details",
];

export const Route = createFileRoute("/startup-grant-loan-assistance-services")({
  head: () => ({
    meta: [
      { title: "Startup Grant & Loan Assistance in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Get expert support for startup grants, business loans, project reports, CMA data and funding documentation in India.",
      },
      {
        property: "og:title",
        content: "Startup Grant & Loan Assistance with Expert CA Support",
      },
      {
        property: "og:description",
        content:
          "Complete funding support for startups and MSMEs including loans, grants, CMA and project reports.",
      },
      { property: "og:url", content: "/startup-grant-loan-assistance-services" },
    ],
    links: [{ rel: "canonical", href: "/startup-grant-loan-assistance-services" }],
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
          name: "Startup Grant & Loan Assistance Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Startup funding support, grants, business loans, project reports and CMA documentation with expert CA guidance.",
        }),
      },
    ],
  }),
  component: StartupGrantLoanAssistancePage,
});

function StartupGrantLoanAssistancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <FundingSection />
        <BenefitsSection />
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
        <li className="font-medium text-ink">Startup Grant & Loan Assistance</li>
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
            <Sparkles className="h-3.5 w-3.5" /> Startup Funding Support
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Startup Grant & Loan Assistance in India - Funding Support with Expert CA Guidance
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Looking for funding to grow your startup? Get expert support for startup grants,
            business loans and funding opportunities in India.
          </p>
          <p className="mt-2 text-muted-foreground">
            We help you secure government schemes, bank loans and investor-ready documentation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for Startup Funding Support <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> Funding Support
            </span>
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-white p-6 shadow-xl lg:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">Free Funding Consultation</h2>
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
              const msg = `Hi, I need help with startup funding.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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
              <Users className="h-3.5 w-3.5" /> About Startup Funding
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Raising funds is one of the biggest challenges for startups
            </h2>
            <p className="mt-4 text-muted-foreground">
              We assist you with government grants and schemes, startup business loans, MSME funding
              support, and strong financial documentation and projections.
            </p>
            <p className="mt-3 text-muted-foreground">
              The goal is simple: turn ideas into funded businesses with proper planning and
              presentation.
            </p>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ClipboardCheck className="h-5 w-5 text-brand" /> What We Prepare
            </h3>
            <div className="mt-4 grid gap-3">
              {[
                "Project reports",
                "CMA data",
                "Financial projections",
                "Loan documentation",
                "Funding application support",
              ].map((item) => (
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

function FundingSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Types of Funding Support
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          One CA-led roof for loans, schemes and funding documentation.
        </p>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNDING_TYPES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border bg-gradient-to-br from-white to-brand/5 p-5 transition-all hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {item.items.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              Why professional support matters
            </h2>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border bg-muted/20 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <BadgeCheck className="h-5 w-5 text-brand" /> What Success Depends On
            </h3>
            <div className="mt-4 grid gap-3">
              {[
                "Proper planning and presentation",
                "Correct scheme or bank selection",
                "Accurate financial documents",
                "Clear repayment or grant strategy",
                "Timely follow-up and submission",
              ].map((item) => (
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

function ChallengesSection() {
  return (
    <section className="bg-muted/30 py-14">
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
                  className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3"
                >
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand" /> How We Help
            </h3>
            <div className="mt-4 grid gap-3">
              {HELP.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border bg-gradient-to-br from-brand/5 to-white px-4 py-3 text-sm text-ink"
                >
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
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm md:p-8">
          <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
            Why choose us?
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            We make funding support structured, practical and fully CA-led.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Identify the most suitable funding options",
              "Prepare strong project reports and CMA",
              "Support you until application and follow-up are complete",
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
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Our Process
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Structured and result-oriented approach.
        </p>
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
    <section className="bg-white py-14">
      <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-ink">
            <Users className="h-5 w-5 text-brand" /> Who Needs This Service?
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
            Complete assistance provided.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Helped us secure startup loan easily.",
    "Excellent support for project report and CMA.",
    "Very professional funding guidance.",
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted Funding Support
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clients trust us for funding guidance, documentation and follow-through.
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
            Secure funding and grow your business
            <br />
            with expert support
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium text-white/92 sm:text-lg">
            Get startup grants, loans and funding documentation handled with care and clarity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for Startup Funding Support <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#28d46c] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              WhatsApp
            </a>
            {/* <a
              href="#lead"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0b1635] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book Consultation
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
