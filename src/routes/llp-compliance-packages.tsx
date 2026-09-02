import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "What is included in LLP compliance package?",
    a: "Form 8, Form 11, GST, accounting and tax filings are covered according to the bundle you choose.",
  },
  {
    q: "Are packages customizable?",
    a: "Yes, the package can be tailored based on your LLP's requirements.",
  },
  {
    q: "Is LLP compliance mandatory?",
    a: "Yes, annual filing is required even if there is no business activity.",
  },
  {
    q: "Can I upgrade package later?",
    a: "Yes, all LLP packages are scalable and can be upgraded as your business grows.",
  },
  {
    q: "Do I get CA support?",
    a: "Yes, expert CA support is included in every package.",
  },
];

const PACKAGES = [
  {
    icon: Sparkles,
    title: "Basic LLP Compliance Package",
    text: "Designed for LLPs with minimal transactions and simple compliance needs.",
    items: ["Form 8 (Statement of Accounts & Solvency)", "Form 11 (Annual Return)", "Compliance reminders", "Basic CA support"],
    note: "Best for LLPs with minimal transactions",
  },
  {
    icon: ClipboardCheck,
    title: "Standard LLP Package",
    text: "Ideal for small LLPs and service businesses that need compliance plus routine support.",
    items: ["All Basic package inclusions", "GST return filing", "Basic accounting support", "Email support"],
    note: "Ideal for small LLPs and service businesses",
  },
  {
    icon: FileText,
    title: "Advanced LLP Package",
    text: "Suited for growing LLPs that need monthly accounting and stronger compliance handling.",
    items: ["All Standard package inclusions", "Monthly accounting & bookkeeping", "GST + Income Tax filing", "Financial reports"],
    note: "Perfect for growing LLPs",
  },
  {
    icon: Briefcase,
    title: "Complete LLP Package",
    text: "A full-service plan for expanding LLPs and professional firms that want end-to-end support.",
    items: ["All Advanced package inclusions", "Partner change filings (Form 3, Form 4)", "LLP agreement updates", "Compliance advisory", "Dedicated CA support"],
    note: "Best for expanding LLPs and professional firms",
  },
];

const PROBLEMS = [
  "Missing Form 8 / Form 11 deadlines",
  "Managing multiple service providers",
  "Lack of proper accounting",
  "Confusion in compliance requirements",
  "High cost of individual services",
];

const HELP = [
  "Handle complete LLP compliance",
  "Manage tax and filings",
  "Provide expert advisory",
  "Ensure timely execution",
  "Simplify business operations",
];

const PROCESS = [
  "Choose your package",
  "Share LLP details",
  "Onboard with our team",
  "We manage filings and compliance",
  "You grow your business",
];

const AUDIENCE = [
  "LLPs and partnerships",
  "Consultants and professionals",
  "Agencies and service firms",
  "Small and medium businesses",
  "Growing LLPs",
];

const TRUST_QUOTES = [
  "Great LLP compliance support.",
  "Timely filing without stress.",
  "Affordable and reliable packages.",
];

export const Route = createFileRoute("/llp-compliance-packages")({
  head: () => ({
    meta: [
      { title: "LLP Compliance Packages in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "LLP compliance packages in India with Form 8, Form 11, GST, accounting and tax filing support from expert Chartered Accountants.",
      },
      {
        property: "og:title",
        content: "LLP Compliance Packages in India - Complete Tax & Filing Services",
      },
      {
        property: "og:description",
        content:
          "All-in-one LLP compliance solutions with CA support for filings, accounting, tax and ongoing advisory.",
      },
      { property: "og:url", content: "/llp-compliance-packages" },
      {
        name: "keywords",
        content:
          "LLP compliance packages India, LLP annual compliance services, LLP CA packages, LLP service packages, LLP tax filing services",
      },
    ],
    links: [{ rel: "canonical", href: "/llp-compliance-packages" }],
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
          name: "LLP Compliance Packages",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "LLP compliance packages covering Form 8, Form 11, GST, accounting, tax filing and ongoing advisory.",
        }),
      },
    ],
  }),
  component: LLPCompliancePackagesPage,
});

function LLPCompliancePackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <PackagesSection />
        <ProblemsSection />
        <HelpSection />
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
          <Link to="/compliance" className="hover:text-brand">
            Compliance
          </Link>
        </li>
        <ChevronRight className="h-3 w-3" />
        <li className="font-medium text-ink">LLP Compliance Packages</li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto grid gap-10 px-4 py-12 relative lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> LLP Compliance Plans
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            LLP Compliance Packages in India - Complete Tax &amp; Filing Services
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            All-in-One Compliance Solutions for Your LLP.
          </p>
          <p className="mt-2 text-muted-foreground">
            Manage your LLP&apos;s tax, filing, and compliance requirements easily with expert CA support under one package.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              View LLP Packages <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> Annual Compliance
            </span>
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-brand">Package Summary</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink">What LLPs usually need</h2>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Simple</span>
          </div>
          <div className="mt-6 space-y-3">
            {[
              [Building2, "Annual ROC compliance"],
              [Wallet, "Bundled pricing"],
              [Clock3, "Timely filing support"],
              [FileText, "Accounting, GST and tax help"],
            ].map(([Icon, text]) => (
              <div key={String(text)} className="flex items-start gap-3 rounded-2xl bg-muted/40 px-4 py-3">
                <div className="mt-0.5 h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-foreground/75">{text}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function AboutSection() {
  const items = [
    "Annual LLP compliance",
    "GST and tax filings",
    "Accounting support",
    "Ongoing advisory",
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">About LLP Packages</p>
              <h2 className="font-display text-2xl font-bold text-ink">Everything your LLP needs</h2>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">
            Running an LLP involves regular compliance like Form 8, Form 11, GST filings, and income tax returns.
          </p>
          <p className="mt-3 text-sm md:text-base text-foreground/75">
            Our packages combine complete LLP compliance in one place so you can avoid penalties and manage everything efficiently.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {items.map((point) => (
              <div key={point} className="flex items-start gap-2 rounded-xl bg-brand/5 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-foreground/80">{point}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border bg-muted/20 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Simple Value</p>
              <h2 className="font-display text-2xl font-bold text-ink">One package, all support</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "Handle complete LLP compliance",
              "Manage tax and filings",
              "Provide expert advisory",
              "Ensure timely execution",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-brand">Our LLP Service Packages</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Choose the right LLP package</h2>
          </div>
          <p className="max-w-2xl text-sm md:text-base text-foreground/70">
            Flexible plans for LLPs, professionals and growing businesses that want complete CA support.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <article key={pkg.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">{pkg.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand">{pkg.note}</p>
                <p className="mt-3 text-sm leading-6 text-foreground/75">{pkg.text}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <AlertTriangleIcon />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Common Problems LLPs Face</p>
              <h2 className="font-display text-2xl font-bold text-ink">What this package solves</h2>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {PROBLEMS.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl bg-brand/5 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-semibold text-brand">Our packages solve all these issues.</p>
        </article>

        <aside className="rounded-2xl border bg-muted/20 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">How We Help You</p>
              <h2 className="font-display text-2xl font-bold text-ink">Support that keeps LLPs moving</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {HELP.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">
            Focus on your business while we manage compliance.
          </p>
        </aside>
      </div>
    </section>
  );
}

function HelpSection() {
  return null;
}

function AlertTriangleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h17a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ProcessSection() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-brand">How It Works</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">A simple and hassle-free process</h2>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {PROCESS.map((step, index) => (
            <div key={step} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white font-bold">
                {index + 1}
              </div>
              <p className="mt-4 font-semibold text-ink">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Who Should Opt For This?</p>
              <h2 className="font-display text-2xl font-bold text-ink">A fit for LLPs at every stage</h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {AUDIENCE.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-muted/40 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <aside className="rounded-2xl border bg-muted/20 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Trust Section</p>
              <h2 className="font-display text-2xl font-bold text-ink">4.8/5 Client Rating</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_QUOTES.map((quote) => (
              <blockquote key={quote} className="rounded-2xl bg-white p-4 text-sm text-foreground/75 shadow-sm">
                ?{quote}?
              </blockquote>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-ink p-5 text-white flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/70">Need help now?</p>
              <p className="text-2xl font-bold">Consult a CA Today</p>
            </div>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function TrustSection() {
  return null;
}

function FAQSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand">FAQs</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">Common questions about LLP compliance</h2>
        </div>
        <div className="mt-8 space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border bg-muted/20 p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-ink flex items-center justify-between gap-4">
                <span>{faq.q}</span>
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-foreground/75">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative -mt-4 bg-brand py-8 sm:py-12 lg:py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className="rounded-[32px] px-6 py-10 sm:px-10 sm:py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]"
          style={{ backgroundImage: "linear-gradient(135deg, #db1f1f 0%, #d31919 48%, #b71212 100%)" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/95">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Choose the Right Package for Your LLP
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Simplify compliance and grow your business with expert support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              View LLP Packages <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
