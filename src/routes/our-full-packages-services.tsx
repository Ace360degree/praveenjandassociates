import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "Are these packages customizable?",
    a: "Yes, we can tailor each package as per your business size, structure and compliance needs.",
  },
  {
    q: "What is included in the compliance package?",
    a: "It typically includes ROC filings, GST returns, and KYC compliance support based on the plan selected.",
  },
  {
    q: "Do I get dedicated CA support?",
    a: "Yes, dedicated support is provided depending on the package you choose.",
  },
  {
    q: "Are these packages affordable?",
    a: "Yes, bundled pricing is designed to be more cost-effective than buying services separately.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes, the plans are scalable and can grow with your business.",
  },
];

const PACKAGES = [
  {
    icon: Sparkles,
    title: "Startup Package",
    text: "Ideal for new businesses that need a smart launch plan with compliance basics covered.",
    items: ["Business setup guidance", "Basic compliance support", "Founder-friendly CA assistance"],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Package",
    text: "Built for businesses that need regular filing, reminders and structured compliance handling.",
    items: ["ROC filings", "GST returns", "KYC and statutory tracking"],
  },
  {
    icon: FileText,
    title: "Accounting & Tax Package",
    text: "For businesses that want bookkeeping, taxation and reporting managed together.",
    items: ["Accounts management", "Tax filing support", "Periodic reporting"],
  },
  {
    icon: Briefcase,
    title: "Corporate Package",
    text: "A complete solution for companies that want end-to-end tax, accounting and compliance support.",
    items: ["Corporate compliance", "Strategic CA support", "All-in-one service coordination"],
  },
];

const BENEFITS = [
  "Cost-effective bundled pricing",
  "Expert CA support",
  "Timely compliance reminders",
  "One-point contact for all work",
  "Scalable plans for growing businesses",
];

const PROBLEMS = [
  "Managing multiple vendors for each service",
  "Missing important filing deadlines",
  "High cost when services are bought separately",
  "Lack of clear guidance on compliance",
  "Disorganized records and follow-ups",
];

const HELP = [
  "Tailored packages for your business needs",
  "Handle all filings and routine compliance",
  "Continuous support throughout the year",
  "Timely execution and reminders",
  "Simplify operations so you can focus on growth",
];

const PROCESS = [
  "Choose the right package",
  "Share your business details",
  "Complete onboarding",
  "We manage compliance and filings",
  "You focus on growing the business",
];

const AUDIENCE = [
  "Startups and new businesses",
  "Private limited companies",
  "LLPs and partnerships",
  "Growing SMEs",
  "Business owners who want full support",
];

const TRUST_QUOTES = [
  "All services handled in one package - very convenient.",
  "Saved time and cost with bundled services.",
  "Reliable CA support for all compliance needs.",
];

export const Route = createFileRoute("/our-full-packages-services")({
  head: () => ({
    meta: [
      { title: "Complete Tax, Accounting & Compliance Packages in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Choose complete tax, accounting and compliance packages in India with expert CA support for startups, companies, LLPs and growing businesses.",
      },
      {
        property: "og:title",
        content: "Complete Tax, Accounting & Compliance Packages in India",
      },
      {
        property: "og:description",
        content:
          "Affordable CA service packages for business compliance, accounting, taxation and corporate support in India.",
      },
      { property: "og:url", content: "/our-full-packages-services" },
    ],
    links: [{ rel: "canonical", href: "/our-full-packages-services" }],
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
          name: "Complete Tax, Accounting & Compliance Packages",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "All-in-one CA packages for tax, accounting, compliance and corporate support.",
        }),
      },
    ],
  }),
  component: OurFullPackagesPage,
});

function OurFullPackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <PackagesSection />
        <BenefitsSection />
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
          <Link to="/registrations" className="hover:text-brand">
            Registrations
          </Link>
        </li>
        <ChevronRight className="h-3 w-3" />
        <li className="font-medium text-ink">Complete Tax &amp; Business Service Packages</li>
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
            <Sparkles className="h-3.5 w-3.5" /> All-in-One CA Packages
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Complete Tax, Accounting &amp; Compliance Packages in India - All-in-One CA Services
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Everything your business needs - in one package with expert CA support.
          </p>
          <p className="mt-2 text-muted-foreground">
            Affordable packages designed for startups, companies, LLPs, and growing businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              View Packages &amp; Pricing <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> All-in-One Support
            </span>
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-brand">Package Highlights</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink">What you get in one plan</h2>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Simple</span>
          </div>
          <div className="mt-6 space-y-3">
            {[
              [Building2, "Startup, compliance and corporate support"],
              [Wallet, "Cost-effective bundled pricing"],
              [Clock3, "Timely filings and reminders"],
              [FileText, "Accounting, tax and compliance under one roof"],
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
    "All-in-one compliance solution",
    "Cost-effective pricing",
    "Dedicated CA support",
    "Hassle-free management",
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
              <p className="text-sm font-semibold text-brand">Why Packages</p>
              <h2 className="font-display text-2xl font-bold text-ink">Simple support, better control</h2>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">
            Managing business compliance, taxation, and filings separately can be time-consuming and expensive.
          </p>
          <p className="mt-3 text-sm md:text-base text-foreground/75">
            Focus on your business while we handle everything else.
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
              <CircleDollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Value Promise</p>
              <h2 className="font-display text-2xl font-bold text-ink">Complete service coverage</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "Tax and compliance bundled together",
              "Less coordination with multiple vendors",
              "Clear pricing for predictable planning",
              "A single CA partner for daily support",
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
            <p className="text-sm font-semibold text-brand">Service Packages</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Choose the right package for your business</h2>
          </div>
          <p className="max-w-2xl text-sm md:text-base text-foreground/70">
            Flexible plans for startups, companies and growing businesses that want complete CA support.
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

function BenefitsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
        <article className="rounded-2xl border bg-muted/20 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Why Choose Us</p>
              <h2 className="font-display text-2xl font-bold text-ink">Benefits that matter</h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {BENEFITS.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Common Problems</p>
              <h2 className="font-display text-2xl font-bold text-ink">What businesses struggle with</h2>
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
        </article>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return null;
}

function HelpSection() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">How We Help</p>
              <h2 className="font-display text-2xl font-bold text-ink">Support that removes the burden</h2>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {HELP.map((item) => (
              <div key={item} className="flex items-start gap-2 rounded-xl bg-brand/5 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Clock3 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Why It Works</p>
              <h2 className="font-display text-2xl font-bold text-ink">Designed for busy businesses</h2>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">
            Our package model is built to simplify operations, reduce follow-up stress, and give you a dependable CA partner for day-to-day support.
          </p>
          <div className="mt-6 rounded-2xl bg-ink p-5 text-white">
            <p className="text-sm uppercase tracking-wide text-white/70">Service promise</p>
            <p className="mt-2 text-lg font-semibold">All your tax, accounting and compliance work managed in one place.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-brand">How It Works</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">A simple onboarding flow</h2>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {PROCESS.map((step, index) => (
            <div key={step} className="rounded-2xl border bg-muted/20 p-5 shadow-sm">
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
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Who Should Opt</p>
              <h2 className="font-display text-2xl font-bold text-ink">A fit for many businesses</h2>
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

        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Trust &amp; Experience</p>
              <h2 className="font-display text-2xl font-bold text-ink">Clients value the convenience</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_QUOTES.map((quote) => (
              <blockquote key={quote} className="rounded-2xl bg-brand/5 p-4 text-sm text-foreground/75">
                {quote}
              </blockquote>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-ink p-5 text-white flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/70">Client Rating</p>
              <p className="text-2xl font-bold">4.8/5</p>
            </div>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" /> Consult a CA Today
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Trust &amp; Experience</p>
              <h2 className="font-display text-2xl font-bold text-ink">Clients value the convenience</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_QUOTES.map((quote) => (
              <blockquote key={quote} className="rounded-2xl bg-brand/5 p-4 text-sm text-foreground/75">
                {quote}
              </blockquote>
            ))}
          </div>
        </aside>

        <aside className="rounded-2xl border bg-ink p-6 md:p-8 shadow-sm text-white">
          <p className="text-sm text-white/70">Why this works</p>
          <h2 className="mt-2 font-display text-2xl font-bold">One CA partner for every stage</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "All tax and compliance work in one place",
              "Faster follow-ups and clearer communication",
              "Simple plans that can scale with your business",
              "Dedicated support for filings and reminders",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white/10 p-4 text-sm text-white/90">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white/10 p-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/70">Client Rating</p>
              <p className="text-2xl font-bold">4.8/5</p>
            </div>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-ink"
            >
              <MessageCircle className="h-4 w-4" /> Consult a CA Today
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand">FAQs</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">Common questions about package plans</h2>
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
    <section className="bg-brand py-8 sm:py-12 lg:py-14">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className="rounded-[32px] px-6 py-10 sm:px-10 sm:py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]"
          style={{ backgroundImage: "linear-gradient(135deg, #db1f1f 0%, #d31919 48%, #b71212 100%)" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/95">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Choose the Right Package for Your Business Today
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Simplify compliance, save cost, and grow faster.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              View Packages &amp; Pricing <ArrowRight className="h-4 w-4" />
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

