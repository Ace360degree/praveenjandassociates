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
  MessageCircle,
  Phone,
  Receipt,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "What is ESIC and PF?",
    a: "ESIC provides medical and health benefits to eligible employees, while PF helps employees build retirement savings and long-term financial security.",
  },
  {
    q: "Is registration mandatory?",
    a: "Yes, for businesses that meet the applicable employee and salary thresholds under ESIC and PF laws.",
  },
  {
    q: "What is the eligibility limit?",
    a: "Eligibility depends on employee count and salary criteria, which we review based on your business structure.",
  },
  {
    q: "Do I need monthly filing?",
    a: "Yes. Once registered, monthly compliance filings and employee contribution management are required.",
  },
  {
    q: "Can CA handle complete compliance?",
    a: "Yes. We support registration, setup, employee onboarding guidance and ongoing compliance end to end.",
  },
];

const INCLUDED = [
  "ESIC registration support",
  "PF (EPF) registration support",
  "Employer compliance setup",
  "Employee onboarding guidance",
  "Monthly compliance support",
];

const BENEFITS = [
  "Mandatory compliance for eligible employers",
  "Employee medical and retirement benefits",
  "Avoids penalties and legal issues",
  "Required for audits and inspections",
  "Improves employee trust and retention",
];

const PROBLEMS = [
  "Confusion about eligibility",
  "Delay in registration",
  "Errors in employee details",
  "Missed monthly filings",
  "Penalties for non-compliance",
];

const HELP = [
  "Eligibility review and guidance",
  "Complete registration and setup",
  "Documentation support",
  "Monthly compliance assistance",
  "End-to-end payroll compliance support",
];

const PROCESS = [
  "Understand business and employee structure",
  "Check eligibility criteria",
  "Prepare required documents",
  "Apply for ESIC & PF registration",
  "Provide ongoing compliance support",
];

const AUDIENCE = [
  "Businesses with employees",
  "Startups hiring staff",
  "SMEs and companies",
  "Factories and service providers",
  "Employers needing payroll compliance",
];

const DOCUMENTS = [
  "PAN and Aadhaar",
  "Business registration details",
  "Employee details",
  "Bank details",
  "Address proof",
];

export const Route = createFileRoute("/esic-pf-registration-services")({
  head: () => ({
    meta: [
      { title: "ESIC & PF Registration Services in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Apply for ESIC and PF registration in India with expert CA support for employer setup, monthly compliance and employee benefits.",
      },
      {
        property: "og:title",
        content: "ESIC & PF Registration with Expert CA Support",
      },
      {
        property: "og:description",
        content:
          "Complete ESIC and PF registration support with compliance setup, documentation and ongoing filing assistance.",
      },
      { property: "og:url", content: "/esic-pf-registration-services" },
    ],
    links: [{ rel: "canonical", href: "/esic-pf-registration-services" }],
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
          name: "ESIC & PF Registration Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "ESIC and PF registration services with employee compliance setup and ongoing support.",
        }),
      },
    ],
  }),
  component: EsicPfRegistrationPage,
});

function EsicPfRegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <IncludedSection />
        <BenefitsSection />
        <ProblemsSection />
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
        <li className="font-medium text-ink">ESIC & PF Registration</li>
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
            <Sparkles className="h-3.5 w-3.5" /> Employee Compliance
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            ESIC & PF Registration Services in India - EPF & ESI Compliance with CA Support
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Hiring employees for your business? Ensure compliance with ESIC and PF laws and provide
            statutory benefits to your workforce.
          </p>
          <p className="mt-2 text-muted-foreground">
            Expert support for EPF & ESIC registration, filing and compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for ESIC & PF Registration <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> Employee Compliance
            </span>
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-white p-6 shadow-xl lg:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">
              Free Compliance Consultation
            </h2>
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
              const msg = `Hi, I need help with ESIC & PF registration.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
              window.open(`https://wa.me/918169887643?text=${msg}`, "_blank");
            }}
          >
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full Name"
              className="h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Mobile Number"
              className="h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              className="h-11 rounded-xl border border-border px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
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
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          About ESIC & PF Compliance
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              ESIC (Employee State Insurance)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              ESIC provides medical and health benefits to eligible employees and their families.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Receipt className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              EPF (Employees' Provident Fund)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              EPF helps employees build retirement savings and long-term financial security.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-medium text-ink">
          Both are mandatory for eligible businesses employing staff.
        </p>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          What's Included In Service
        </h2>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border bg-white p-6 shadow-sm">
          <ul className="grid gap-3 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t pt-3 text-xs font-medium text-muted-foreground">
            Complete payroll compliance solution.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Why ESIC & PF Registration Matters
        </h2>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-brand/5 p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Common Problems Faced
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Improper handling can lead to heavy fines and legal issues.
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl border bg-red-50/40 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <p className="text-sm text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <ShieldCheck className="h-5 w-5 text-brand" /> How We Help You
            </h3>
            <ul className="mt-4 space-y-3">
              {HELP.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-gradient-to-br from-white to-brand/5 p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
              <BadgeCheck className="h-5 w-5 text-brand" /> What You Get
            </h3>
            <div className="mt-4 grid gap-3">
              {[
                "Fast ESIC & PF registration",
                "Eligibility and type guidance",
                "Complete documentation support",
                "Ongoing filing assistance",
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

function ProcessSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Our Process
        </h2>
        <p className="mt-2 text-center text-muted-foreground">Smooth and efficient execution.</p>
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
            Full assistance provided.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Handled ESIC and PF registration smoothly.",
    "Very helpful in payroll compliance.",
    "Professional and reliable service.",
  ];

  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted Compliance Support
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clients trust us for payroll registration and ongoing assistance.
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
    <section className="bg-white py-14">
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
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div> */}
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Ensure compliance and employee benefits
            <br />
            with ESIC & PF registration
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium text-white/92 sm:text-lg">
            Payroll compliance done right keeps your business protected and your employees
            supported.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for ESIC & PF Registration <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#28d46c] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" /> WhatsApp
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
