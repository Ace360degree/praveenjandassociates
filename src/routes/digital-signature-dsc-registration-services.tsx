import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileSignature,
  FileText,
  Headphones,
  IdCard,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "What is DSC?",
    a: "A Digital Signature Certificate is used for online filings, authentication and secure digital signing of documents.",
  },
  {
    q: "Is DSC mandatory?",
    a: "Yes, for many MCA, GST and other compliance filings DSC is required.",
  },
  {
    q: "What is Class 3 DSC?",
    a: "Class 3 is the most secure and widely used DSC for filings and compliance work.",
  },
  {
    q: "How long does it take?",
    a: "Usually the DSC is issued the same day or within 1 to 2 days, depending on verification.",
  },
  {
    q: "Can CA help with DSC?",
    a: "Yes. We provide complete support for DSC application, issuance, activation and renewal.",
  },
];

const WHERE_REQUIRED = [
  "MCA company filings",
  "Income tax filing",
  "GST registration and filing",
  "E-tendering and bidding",
  "Import Export Code (IEC)",
  "PF, ESIC and other compliance",
];

const TYPES = [
  "Class 3 DSC for individuals",
  "DSC for directors and companies",
  "DSC for professionals",
  "DSC for e-tendering",
  "DSC renewal and update",
];

const BENEFITS = [
  "Mandatory for online filings",
  "Ensures secure transactions",
  "Legally valid digital signature",
  "Required for business compliance",
  "Saves time and paperwork",
];

const PROBLEMS = [
  "Delay in DSC approval",
  "Incorrect documentation",
  "Confusion about DSC type",
  "Technical issues during application",
  "Expired or inactive DSC",
];

const HELP = [
  "Fast DSC registration",
  "Guidance on correct type",
  "Complete documentation support",
  "Quick issuance and activation",
  "Renewal and update services",
];

const PROCESS = [
  "Understand requirement",
  "Collect documents",
  "Apply for DSC",
  "Complete verification",
  "Issue DSC",
];

const AUDIENCE = [
  "Business owners",
  "Company directors",
  "Professionals like CA, CS and consultants",
  "Tender applicants",
  "Anyone filing returns online",
];

const DOCUMENTS = [
  "PAN card",
  "Aadhaar",
  "Photograph",
  "Email and mobile number",
  "Additional documents if required",
];

export const Route = createFileRoute("/digital-signature-dsc-registration-services")({
  head: () => ({
    meta: [
      { title: "Digital Signature Certificate (DSC) Services | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Apply for Class 3 Digital Signature Certificate (DSC) in India with expert CA support for issuance, renewal and activation.",
      },
      {
        property: "og:title",
        content: "Digital Signature Certificate (DSC) in India",
      },
      {
        property: "og:description",
        content:
          "Fast and secure DSC registration, renewal and issuance for MCA, GST, income tax and e-filing support.",
      },
      { property: "og:url", content: "/digital-signature-dsc-registration-services" },
    ],
    links: [{ rel: "canonical", href: "/digital-signature-dsc-registration-services" }],
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
          name: "Digital Signature Certificate (DSC) Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Digital Signature Certificate issuance, renewal and activation for businesses and professionals.",
        }),
      },
    ],
  }),
  component: DigitalSignatureDSCPage,
});

function DigitalSignatureDSCPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <WhereRequiredSection />
        <TypesSection />
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
        <li className="font-medium text-ink">Digital Signature Certificate</li>
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
            <Sparkles className="h-3.5 w-3.5" /> DSC Registration
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Digital Signature Certificate (DSC) in India - Class 3 DSC Registration with CA Support
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Need a Digital Signature for GST, MCA or e-filing? Get your Class 3 Digital Signature
            Certificate quickly and securely.
          </p>
          <p className="mt-2 text-muted-foreground">
            Expert support for DSC registration, renewal and issuance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for DSC Now <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> Secure Issuance
            </span>
          </div>
        </div>

        <div id="lead" className="rounded-3xl border bg-white p-6 shadow-xl lg:p-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-ink">Free DSC Consultation</h2>
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
              const msg = `Hi, I need help with DSC registration.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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
          About Digital Signature (DSC)
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <FileSignature className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              A Digital Signature Certificate is used to:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Sign documents digitally</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>File returns online</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>Authenticate identity securely</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <IdCard className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">
              It is mandatory for many government and compliance processes.
            </h3>
            <div className="mt-4 rounded-xl bg-brand/5 p-4 text-sm text-ink">
              Quick, secure and legally valid digital signing for modern business workflows.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereRequiredSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Where DSC Is Required
        </h2>
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border bg-white p-6 shadow-sm">
          <ul className="grid gap-3 sm:grid-cols-2">
            {WHERE_REQUIRED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t pt-3 text-xs font-medium text-muted-foreground">
            Essential for digital compliance and business operations.
          </p>
        </div>
      </div>
    </section>
  );
}

function TypesSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Types of DSC We Provide
        </h2>
        <div className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-5">
          {TYPES.map((item) => (
            <div key={item} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <FileSignature className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Why DSC Is Important
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
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Common Problems Faced
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Without DSC, you cannot complete many online filings.
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
    <section className="bg-muted/30 py-14">
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
                "Fast DSC registration",
                "Correct type guidance",
                "Complete documentation support",
                "Renewal and update services",
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
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Our Process
        </h2>
        <p className="mt-2 text-center text-muted-foreground">Fast and seamless execution.</p>
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
            <Users className="h-5 w-5 text-brand" /> Who Needs DSC?
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
            Quick and simple documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Got my DSC quickly for MCA filings.",
    "Very smooth and fast process.",
    "Professional and reliable support.",
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted DSC Support
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clients trust us for secure and fast issuance.
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
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div> */}
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Get your Digital Signature Certificate quickly and stay compliant.
            <br />
            {/* Expert CA Se Baat Karein */}
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium text-white/92 sm:text-lg">
            Business ho ya tax problem — clarity aur compliance dono zaruri hai.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for DSC Now <ArrowRight className="h-4 w-4" />
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
