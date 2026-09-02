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
  TrendingUp,
  Users,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const FAQS = [
  {
    q: "Is income tax filing mandatory for partnership firm?",
    a: "Yes, annually.",
  },
  {
    q: "Is GST required?",
    a: "Yes, if applicable based on turnover or business type.",
  },
  {
    q: "Are packages customizable?",
    a: "Yes, based on business needs.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes, packages are scalable.",
  },
  {
    q: "Do I get CA support?",
    a: "Yes, expert assistance is included.",
  },
];

const PACKAGES = [
  {
    icon: Sparkles,
    title: "Basic Tax Package",
    note: "Best for small firms with limited transactions",
    text: "Focused support for partnership firm income tax and basic advisory.",
    items: ["Partnership firm ITR filing", "Basic tax advisory", "Compliance reminders"],
  },
  {
    icon: ClipboardCheck,
    title: "GST Package",
    note: "Ideal for partnership firms with GST",
    text: "GST registration and return filing with compliance support.",
    items: ["GST registration", "GST return filing", "Compliance support", "Email assistance"],
  },
  {
    icon: FileText,
    title: "Standard Business Package",
    note: "Perfect for growing partnership firms",
    text: "A balanced plan for tax, GST and accounting support.",
    items: ["ITR filing", "GST returns", "Basic accounting support", "Expense and profit tracking"],
  },
  {
    icon: Briefcase,
    title: "Complete Business Package",
    note: "Best for mature firms needing full handling",
    text: "Complete compliance and advisory for partnership businesses.",
    items: ["ITR + GST filing", "Monthly accounting & bookkeeping", "Financial reports", "Business advisory", "Priority CA support"],
  },
];

const PROBLEMS = [
  "Missing tax or GST deadlines",
  "Poor financial management",
  "Lack of expert guidance",
  "High cost of separate services",
  "Compliance confusion",
];

const HELP = [
  "Manage complete tax and compliance",
  "Handle GST and accounting",
  "Provide expert advisory",
  "Ensure timely filings",
  "Simplify operations",
];

const PROCESS = [
  "Choose your package",
  "Share firm details",
  "Onboard with our team",
  "We manage compliance",
  "You grow your business",
];

const AUDIENCE = [
  "Partnership firms",
  "Traders and wholesalers",
  "Small and medium businesses",
  "Family-run businesses",
  "Service-based partnerships",
];

const TRUST_QUOTES = [
  "Great support for partnership firm compliance.",
  "Affordable and reliable service.",
  "Handled GST and tax filing smoothly.",
];

const SEO_KEYWORDS = [
  "Partnership firm compliance packages India",
  "Partnership firm CA services",
  "Partnership firm tax services",
  "Partnership business tax packages",
  "Partnership firm compliance services",
];

export const Route = createFileRoute("/partnership-firm")({
  head: () => ({
    meta: [
      { title: "Partnership Firm Packages in India | Praveen J & Associates" },
      {
        name: "description",
        content:
          "Partnership firm packages in India for income tax, GST, accounting and ongoing compliance support with expert Chartered Accountant guidance.",
      },
      {
        property: "og:title",
        content: "Partnership Firm Packages in India - Tax & Compliance Services",
      },
      {
        property: "og:description",
        content:
          "Complete compliance and tax solutions for partnership firms with bundled CA support, GST filing and accounting assistance.",
      },
      { property: "og:url", content: "/partnership-firm" },
      {
        name: "keywords",
        content: SEO_KEYWORDS.join(", "),
      },
    ],
    links: [{ rel: "canonical", href: "/partnership-firm" }],
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
          name: "Partnership Firm Packages",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
          description:
            "Partnership firm packages for tax filing, GST, accounting and compliance support.",
        }),
      },
    ],
  }),
  component: PartnershipFirmPackagesPage,
});

function PartnershipFirmPackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero />
        <AboutSection />
        <PackagesSection />
        <ProblemsSection />
        <ProcessSection />
        <AudienceSection />
        <TrustSection />
        <FAQSection />
        <SEOSection />
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
        <li className="font-medium text-ink">Partnership Firm Packages</li>
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
            <Sparkles className="h-3.5 w-3.5" /> Partnership Firm Compliance
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">
            Partnership Firm Packages in India - Tax &amp; Compliance Services
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Complete Compliance &amp; Tax Solutions for Your Partnership Firm.
          </p>
          <p className="mt-2 text-muted-foreground">
            Manage your income tax, GST, and compliance with expert CA support under one package.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
            >
              View Partnership Packages <ArrowRight className="h-4 w-4" />
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
              <BadgeCheck className="h-4 w-4 text-brand" /> Partnership Support
            </span>
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-brand">Package Summary</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink">What partnership firms usually need</h2>
            </div>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Simple</span>
          </div>
          <div className="mt-6 space-y-3">
            {[
              [Building2, "Income tax and GST compliance"],
              [Wallet, "Bundled pricing"],
              [Clock3, "Timely filing support"],
              [FileText, "Accounting and advisory"],
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
    "Income tax filing for firm",
    "GST registration & returns",
    "Accounting support",
    "Compliance advisory",
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
              <p className="text-sm font-semibold text-brand">About Partnership Firm Packages</p>
              <h2 className="font-display text-2xl font-bold text-ink">Everything your partnership business needs</h2>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">
            Partnership firms require proper handling of income tax filing, GST compliance, and accounting to ensure smooth business operations.
          </p>
          <p className="mt-3 text-sm md:text-base text-foreground/75">
            Our packages combine these services in one place so you can avoid penalties and manage compliance efficiently.
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
              "Manage complete tax and compliance",
              "Handle GST and accounting",
              "Provide expert advisory",
              "Ensure timely filings",
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
            <p className="text-sm font-semibold text-brand">Our Partnership Firm Packages</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Choose the right package for your firm</h2>
          </div>
          <p className="max-w-2xl text-sm md:text-base text-foreground/70">
            Flexible plans for partnership firms, traders and small businesses that want complete CA support.
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
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Common Problems Partnership Firms Face</p>
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
              <h2 className="font-display text-2xl font-bold text-ink">Support that keeps firms moving</h2>
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
            Focus on business growth while we manage compliance.
          </p>
        </aside>
      </div>
    </section>
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
      <div className="container mx-auto px-4 max-w-4xl">
        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand">Who Should Opt For This?</p>
              <h2 className="font-display text-2xl font-bold text-ink">A fit for partnership firms at every stage</h2>
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
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
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
              &ldquo;{quote}&rdquo;
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
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand">FAQs</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">Common questions about partnership firm compliance</h2>
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

function SEOSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <p className="text-sm font-semibold text-brand">SEO Alignment</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">Naturally embedded keywords</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {SEO_KEYWORDS.map((keyword) => (
              <span key={keyword} className="rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                {keyword}
              </span>
            ))}
          </div>
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
            Choose the Right Package for Your Partnership Firm
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Simplify compliance and focus on growing your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              View Partnership Packages <ArrowRight className="h-4 w-4" />
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
