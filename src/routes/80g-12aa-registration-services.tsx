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
  Landmark,
  Headphones,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import praveen from "@/assets/praveen-about.jpg";

const FAQS = [
  {
    q: "What is 12AA registration?",
    a: "It provides income tax exemption to NGOs and trusts, so receipts and surplus used for charitable purposes are not taxed in the normal way.",
  },
  {
    q: "What is 80G registration?",
    a: "It allows donors to claim tax deduction on donations made to your NGO, which helps build trust and support fundraising.",
  },
  {
    q: "Is 80G & 12AA registration mandatory?",
    a: "No, it is not mandatory to register an NGO, but it is highly beneficial if you want donor tax benefits and better tax treatment for the organization.",
  },
  {
    q: "How long does approval take?",
    a: "Approval usually takes a few weeks to a few months, depending on documentation quality and department processing time.",
  },
  {
    q: "Can a CA handle the complete process?",
    a: "Yes. We handle eligibility review, drafting, documentation, filing and follow-up with the department end to end.",
  },
];

const BENEFITS = [
  "Income tax exemption for the NGO",
  "Donors get tax benefits on eligible donations",
  "Increased credibility and public trust",
  "Better fundraising and CSR opportunities",
  "Legal recognition for charitable activities",
];

const ELIGIBILITY = [
  "Registered Trust / Society / Section 8 Company",
  "Charitable or non-profit objectives",
  "Proper documentation and activity records",
  "Compliance with Income Tax Act rules",
];

const WHAT_YOU_GET = [
  "12AA / 12A registration support",
  "80G certificate application support",
  "Documentation and drafting assistance",
  "End-to-end filing on the Income Tax portal",
  "Post-approval compliance guidance",
];

const HOW_WE_HELP = [
  "Eligibility evaluation before filing",
  "Drafting and polishing of objectives",
  "Accurate filing with complete documentation",
  "End-to-end process handling",
  "Follow-up and query response support",
];

const CHALLENGES = [
  "Incorrect application filing",
  "Rejection due to documentation errors",
  "Delay in approval",
  "Lack of compliance understanding",
  "Difficulty in drafting NGO objectives",
];

const PROCESS = [
  "Understand the NGO structure",
  "Check eligibility and documents",
  "Prepare the required paperwork",
  "File the application",
  "Follow up till approval",
];

const AUDIENCE = [
  "NGOs and charitable trusts",
  "Section 8 companies",
  "Social organizations",
  "Foundations and welfare institutions",
  "Anyone seeking tax exemption for NGO donations",
];

const DOCUMENTS = [
  "Trust deed or incorporation certificate",
  "PAN details of the NGO",
  "Activity details",
  "Financial statements",
  "Supporting KYC documents",
];

export const Route = createFileRoute("/80g-12aa-registration-services")({
  head: () => ({
    meta: [
      { title: "80G & 12AA Registration Services - NGO Tax Exemption | PJ&A" },
      {
        name: "description",
        content:
          "Apply for 80G and 12AA registration with expert CA support. Get income tax exemption for your NGO or trust and offer tax deductions to donors.",
      },
      {
        property: "og:title",
        content: "80G & 12AA NGO Tax Exemption Registration Services",
      },
      {
        property: "og:description",
        content:
          "Expert CA support for 12AA registration and 80G certificate filing with documentation, filing and department follow-up.",
      },
      { property: "og:url", content: "/80g-12aa-registration-services" },
    ],
    links: [{ rel: "canonical", href: "/80g-12aa-registration-services" }],
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
          name: "80G & 12AA Registration Services",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Apply for 80G and 12AA registration with full CA support for tax exemption and donor benefits.",
        }),
      },
    ],
  }),
  component: Registration80G12AA,
});

function Registration80G12AA() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <ChallengesSection />
        <ProcessSection />
        <AudienceSection />
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
        <li className="font-medium text-ink">80G & 12AA Registration</li>
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
            <Sparkles className="h-3.5 w-3.5" /> NGO Tax Exemption
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            80G & 12AA Registration in India - NGO Tax Exemption with CA Support
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Running an NGO or planning to start one? Get 80G &amp; 12AA registration and unlock tax
            exemptions and donor benefits.
          </p>
          <p className="mt-2 text-muted-foreground">
            Expert CA support for NGO tax registration, approval and compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              Apply for 80G & 12AA Registration <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> End-to-End Filing
            </span>
          </div>
        </div>

        <div className="grid gap-5">
          {/* <div className="overflow-hidden rounded-3xl border bg-white p-3 shadow-soft">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-light to-white">
              <img
                src={praveen}
                alt="CA Praveen Jain"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> NGO advisory
              </div>
              <div className="absolute bottom-3 left-3 right-3 grid gap-3 sm:grid-cols-3">
                {[
                  { stat: "12A", label: "Eligibility review" },
                  { stat: "80G", label: "Donor benefit filing" },
                  { stat: "1-3", label: "Months typical timeline" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/90 p-3 text-center shadow-sm backdrop-blur"
                  >
                    <div className="font-display text-lg font-bold text-ink">{item.stat}</div>
                    <div className="text-[11px] font-medium text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div id="lead" className="rounded-3xl border bg-white p-5 shadow-soft sm:p-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink">
                Free NGO Registration Consultation
              </h2>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-brand">
                Free
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Share your details and our CA team will connect within 30 minutes.
            </p>
            <form
              className="mt-5 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const msg = `Hi, I need help with 80G & 12AA Registration.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}`;
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
                Apply Now <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                No spam. 100% confidential.
              </p>
            </form>
          </div>
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
          About 80G &amp; 12AA Registration
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Landmark className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">12AA / 12A Registration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Provides income tax exemption to NGOs and trusts.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-ink">80G Registration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Allows donors to claim tax deduction on donations made to your NGO.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-brand/20 bg-brand/5 p-6 text-center">
          <p className="font-display text-lg font-semibold text-brand">Together, they ensure:</p>
          <div className="mt-4 grid gap-3 text-sm text-ink sm:grid-cols-3">
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Tax-free income for NGO
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Increased donor trust
            </div>
            <div className="inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Better funding opportunities
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
      <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <Sparkles className="h-5 w-5 text-brand" /> Key Benefits
          </h3>
          <ul className="mt-4 space-y-3">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t pt-3 text-xs font-medium text-muted-foreground">
            Essential for NGO growth and sustainability.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <ShieldCheck className="h-5 w-5 text-brand" /> Eligibility Criteria
          </h3>
          <ul className="mt-4 space-y-3">
            {ELIGIBILITY.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t pt-3 text-xs font-semibold text-brand">
            Proper structuring is key for approval success.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <FileText className="h-5 w-5 text-brand" /> What You Get
          </h3>
          <ul className="mt-4 space-y-3">
            {WHAT_YOU_GET.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t pt-3 text-xs font-medium text-muted-foreground">
            Complete assistance from application to approval.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
            <BadgeCheck className="h-5 w-5 text-brand" /> How We Help You
          </h3>
          <ul className="mt-4 space-y-3">
            {HOW_WE_HELP.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t pt-3 text-xs font-semibold text-brand">
            Maximize your chances of successful approval.
          </p>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className="bg-muted/30 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Common Challenges Faced
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Mistakes in NGO registration can lead to rejection or long delays.
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((item) => (
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

function ProcessSection() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-2xl font-bold text-ink md:text-3xl">
          Our Process
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Smooth, professional and time-bound execution.
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

function AudienceSection() {
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
            Full assistance provided in compiling documents.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const reviews = [
    "Got 80G approval smoothly.",
    "Helped us increase donor trust.",
    "Very professional NGO support.",
  ];

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8/5 Client Rating
          </div>
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Trusted NGO Advisory
          </h2>
          <p className="mt-2 text-muted-foreground">See what social organizations say about us.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review}
              className="rounded-xl border bg-gradient-to-br from-brand/5 to-white p-6 shadow-sm"
            >
              <p className="text-sm italic text-ink">"{review}"</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Verified NGO client
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
        <p className="mt-2 text-center text-muted-foreground">
          Find answers to common queries regarding 80G and 12AA registrations.
        </p>
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
          Get tax exemption and boost funding for your NGO.
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
              Apply for 80G & 12AA Registration <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#28d46c] px-6 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
             Chat with CA on WhatsApp
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
