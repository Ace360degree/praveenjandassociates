import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  Award,
  ArrowRight,
  BadgeCheck,
  Building2,
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
    q: "What is DPIIT recognition?",
    a: "It is the official recognition given to eligible startups under the Startup India initiative.",
  },
  {
    q: "Is DPIIT registration mandatory?",
    a: "No, but it is highly beneficial for tax, funding and recognition-related advantages.",
  },
  {
    q: "Can startups get tax exemption?",
    a: "Yes, eligible startups can claim benefits such as 80IAC tax exemption where applicable.",
  },
  {
    q: "How long does approval take?",
    a: "Usually a few days to a few weeks, depending on the quality of the application and supporting proof.",
  },
  {
    q: "Can CA handle the complete process?",
    a: "Yes. We provide complete support from eligibility review to filing and follow-up.",
  },
];

const BENEFITS = [
  "Income tax exemption for eligible startups",
  "Access to government funding schemes",
  "Faster patent and trademark support",
  "Self-certification under labor and environment laws",
  "Higher credibility with investors",
];

const WHAT_YOU_GET = [
  "Startup India DPIIT certificate",
  "Eligibility review and documentation support",
  "Tax benefit and filing guidance",
  "End-to-end application support",
  "Post-approval compliance guidance",
];

const ELIGIBILITY = [
  "Private Limited Company / LLP / Partnership",
  "Business within prescribed age limit",
  "Turnover within government threshold",
  "Innovative, scalable or improvement-driven business model",
];

const CHALLENGES = [
  "Confusion about Startup India eligibility",
  "Incorrect documentation submission",
  "Weak application leading to rejection",
  "Delay in approval",
  "Missing out on tax benefits",
];

const HELP = [
  "Eligibility evaluation",
  "Strong application drafting",
  "Proper documentation support",
  "Accurate DPIIT filing",
  "End-to-end process handling",
];

const PROCESS = [
  "Understand your startup idea",
  "Check eligibility criteria",
  "Prepare documentation",
  "Apply on Startup India portal",
  "Get DPIIT certificate",
];

const AUDIENCE = [
  "Early-stage startups",
  "Tech and innovative businesses",
  "Founders seeking funding",
  "Startups planning tax optimization",
  "Businesses aiming for rapid growth",
];

const DOCUMENTS = [
  "Company / LLP incorporation details",
  "PAN and Aadhaar",
  "Business description",
  "Pitch deck or concept note",
  "Supporting documents",
];

export const Route = createFileRoute("/startup-india-dpiit-registration-services")({
  head: () => ({
    meta: [
      { title: "Startup India DPIIT Registration in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Apply for Startup India DPIIT registration in India with expert CA support for recognition, tax benefits, funding access and documentation.",
      },
      {
        property: "og:title",
        content: "Startup India DPIIT Registration with Expert CA Support",
      },
      {
        property: "og:description",
        content:
          "Complete DPIIT recognition support for eligible startups with filing, documentation and follow-up.",
      },
      { property: "og:url", content: "/startup-india-dpiit-registration-services" },
    ],
    links: [{ rel: "canonical", href: "/startup-india-dpiit-registration-services" }],
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
          name: "Startup India DPIIT Registration Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Startup India DPIIT recognition, eligibility review, documentation and filing support with expert CA guidance.",
        }),
      },
    ],
  }),
  component: StartupIndiaDpiitRegistrationPage,
});

function StartupIndiaDpiitRegistrationPage() {
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
        <li className="font-medium text-ink">Startup India DPIIT Registration</li>
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
            <Sparkles className="h-3.5 w-3.5" /> Startup Recognition
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Startup India DPIIT Registration in India - Get Startup Recognition Certificate with CA
            Support
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Want tax benefits, funding access and startup recognition? Register under Startup India
            (DPIIT) and unlock powerful advantages for your business.
          </p>
          <p className="mt-2 text-muted-foreground">
            Get expert CA support for DPIIT registration, eligibility and documentation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for Startup India Registration <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> DPIIT Support
            </span>
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-white p-6 shadow-xl lg:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">Free DPIIT Consultation</h2>
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
              const msg = `Hi, I need help with Startup India DPIIT registration.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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
              <Users className="h-3.5 w-3.5" /> About DPIIT Recognition
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              Startup India DPIIT recognition is part of the Startup India initiative
            </h2>
            <p className="mt-4 text-muted-foreground">
              It allows startups to gain official government recognition, access funding and
              investors, avail tax exemptions and simplify compliance requirements.
            </p>
            <p className="mt-3 text-muted-foreground">
              It is essential for startups aiming to scale, raise funds and build credibility.
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
          Key Benefits of DPIIT Registration
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Build your startup with recognition, tax benefits and better funding chances.
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
              <Building2 className="h-5 w-5 text-brand" /> Why it matters
            </h3>
            <p className="mt-4 text-muted-foreground">
              DPIIT recognition unlocks tax exemptions, funding access and government scheme
              benefits for eligible startups.
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
              <ShieldCheck className="h-5 w-5 text-brand" /> We assess your eligibility first
            </h3>
            <p className="mt-4 text-muted-foreground">
              This helps ensure the application is aligned with DPIIT expectations and improves
              approval chances.
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
            We make DPIIT recognition clear, fast and fully supported.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Eligibility evaluation before filing",
              "Strong application drafting",
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
        <p className="mt-2 text-center text-muted-foreground">Smooth and guided execution.</p>
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
            Full assistance provided at every step.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Got DPIIT recognition without hassle.",
    "Helped us unlock startup tax benefits.",
    "Very professional and knowledgeable support.",
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted DPIIT Support
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clients trust us for Startup India recognition and compliance guidance.
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
            Unlock funding opportunities, tax benefits
            <br />
            and official startup recognition
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium text-white/92 sm:text-lg">
            Get your Startup India DPIIT recognition handled with clarity and care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for Startup India Registration <ArrowRight className="h-4 w-4" />
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
