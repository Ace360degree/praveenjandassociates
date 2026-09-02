import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type Dispatch, type SetStateAction } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
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
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { getComplianceBundle, type ComplianceBundle } from "@/data/compliancePackages";

type FormState = { name: string; phone: string; email: string; pkg: string };

const FAQS = [
  { q: "Are packages customizable?", a: "Yes, based on your business needs." },
  { q: "What is included in compliance package?", a: "ROC filings, GST, accounting, and tax services." },
  { q: "Do I get dedicated CA support?", a: "Yes, in higher-tier packages." },
  { q: "Can I upgrade later?", a: "Yes, packages are scalable." },
  { q: "Are these packages cost-effective?", a: "Yes, compared to individual services." },
];

const WHY_CHOOSE = [
  "All-in-one compliance solution",
  "Cost-effective compared to individual services",
  "Expert CA support",
  "Timely filing and reminders",
  "Scalable packages",
];

const PROBLEMS = [
  "Missing ROC deadlines",
  "Managing multiple vendors",
  "High compliance costs",
  "Lack of financial clarity",
  "Disorganized accounting",
];

const HELP = [
  "Manage complete compliance lifecycle",
  "Handle accounting and tax filings",
  "Provide expert advisory support",
  "Ensure timely filings",
  "Simplify business operations",
];

const PROCESS = [
  "Choose a package",
  "Share company details",
  "Onboard with our team",
  "We manage compliance and filings",
  "You grow your business",
];

const AUDIENCE = [
  "Private Limited Companies",
  "Startups and SMEs",
  "Growing businesses",
  "Companies needing full compliance support",
  "Businesses looking for cost-effective solutions",
];

const TRUST_QUOTES = [
  "All compliance handled in one package.",
  "Great support and timely filings.",
  "Affordable and reliable service.",
];

export const Route = createFileRoute("/private-limited-company")({
  loader: () => {
    const bundle = getComplianceBundle("private-limited-company");
    if (!bundle) throw notFound();
    return { bundle };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.bundle as ComplianceBundle | undefined;
    if (!b) return {};
    return {
      meta: [
        { title: b.metaTitle },
        { name: "description", content: b.metaDescription },
        { name: "keywords", content: b.keywords.join(", ") },
        { property: "og:title", content: b.metaTitle },
        { property: "og:description", content: b.metaDescription },
        { property: "og:url", content: "/private-limited-company" },
      ],
      links: [{ rel: "canonical", href: "/private-limited-company" }],
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
            name: "Private Limited Company Packages",
            provider: { "@type": "Organization", name: "Praveen J & Associates" },
            areaServed: "IN",
            description: "Private limited company packages for ROC, GST, accounting, tax and secretarial compliance.",
          }),
        },
      ],
    };
  },
  component: PrivateLimitedCompanyPage,
});

function PrivateLimitedCompanyPage() {
  const { bundle: b } = Route.useLoaderData() as { bundle: ComplianceBundle };
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", pkg: "" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Breadcrumbs />
        <Hero b={b} form={form} setForm={setForm} />
        <AboutSection b={b} />
        <PackagesSection b={b} form={form} setForm={setForm} />
        <WhyChooseSection />
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
        <li><Link to="/" className="hover:text-brand">Home</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li><Link to="/compliance" className="hover:text-brand">Compliance</Link></li>
        <ChevronRight className="h-3 w-3" />
        <li className="font-medium text-ink">Private Limited Company Packages</li>
      </ol>
    </nav>
  );
}

function Hero({ b, form, setForm }: { b: ComplianceBundle; form: FormState; setForm: Dispatch<SetStateAction<FormState>> }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto grid gap-10 px-4 py-12 relative lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Company Compliance Packages
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">{b.h1}</h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">{b.heroHeadline}</p>
          <p className="mt-2 text-muted-foreground">{b.heroLead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#packages" className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90">
              View Company Packages <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 px-5 py-3 font-semibold text-[#128C7E] transition-all hover:bg-[#25D366]/20">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> Annual Compliance</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur-sm">
          <h3 className="font-display text-2xl font-bold text-ink">Request a Custom Quote</h3>
          <p className="mt-2 text-sm text-muted-foreground">Share your details - CA will call within 30 mins.</p>
          <form
            className="mt-5 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = "Hi, I'm interested in Private Limited Company compliance package.%0AName: " + form.name + "%0APhone: " + form.phone + "%0AEmail: " + form.email + "%0APreferred package: " + (form.pkg || "Not sure");
              window.open("https://wa.me/918169887643?text=" + msg, "_blank");
            }}
          >
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <select value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30">
              <option value="">Preferred package (optional)</option>
              {b.packages.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
            <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
              Request Callback <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground text-center">No payment online. CA discusses scope and quote first.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ b }: { b: ComplianceBundle }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">
        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><ShieldCheck className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">About Packages</p>
              <h2 className="font-display text-2xl font-bold text-ink">All-in-one compliance for your company</h2>
            </div>
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">Managing compliance for a Private Limited Company involves multiple filings, deadlines, and legal requirements.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {b.about.map((point) => (
              <div key={point} className="flex items-start gap-2 rounded-xl bg-brand/5 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-foreground/80">{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm md:text-base text-foreground/75">Our packages combine ROC compliance, GST and tax filings, accounting and bookkeeping, and ongoing advisory. Everything your company needs - handled in one place.</p>
        </article>

        <aside className="rounded-2xl border bg-muted/20 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Wallet className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">What You Get</p>
              <h2 className="font-display text-2xl font-bold text-ink">One package, complete control</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "ROC compliance and filings",
              "GST and tax services",
              "Accounting and bookkeeping",
              "Ongoing advisory support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center"><CheckCircle2 className="h-4 w-4" /></div>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function PackagesSection({ b, form, setForm }: { b: ComplianceBundle; form: FormState; setForm: Dispatch<SetStateAction<FormState>> }) {
  return (
    <section id="packages" className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-brand">Our Private Limited Company Packages</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Choose the right package for your company</h2>
          </div>
          <p className="max-w-2xl text-sm md:text-base text-foreground/70">Pick a starting point - final scope and quote tailored to your business.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {b.packages.map((pkg, idx) => (
            <article key={pkg.name} className={"rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow " + (idx === b.packages.length - 1 ? "border-brand/40" : "") }>
              <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                {idx === 0 ? <Building2 className="h-6 w-6" /> : idx === 1 ? <ClipboardCheck className="h-6 w-6" /> : idx === 2 ? <FileText className="h-6 w-6" /> : <Briefcase className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{pkg.name}</h3>
              <p className="mt-2 text-xs font-semibold text-brand">{pkg.tagline}</p>
              <ul className="mt-4 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-foreground/70 border-t pt-3"><span className="font-semibold text-ink">Best for:</span> {pkg.bestFor}</p>
              <button type="button" onClick={() => setForm({ ...form, pkg: pkg.name })} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand/10 text-brand font-semibold py-2.5 hover:bg-brand hover:text-white transition-all">
                Enquire <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
        <article className="rounded-2xl border bg-muted/20 p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><TrendingUp className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">Why Choose Our Company Packages</p>
              <h2 className="font-display text-2xl font-bold text-ink">Benefits that matter</h2>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {WHY_CHOOSE.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center"><CheckCircle2 className="h-4 w-4" /></div>
                <span className="text-sm font-medium text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><AlertTriangle className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">Common Problems Companies Face</p>
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
        </article>
      </div>
    </section>
  );
}

function HelpSection() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Users className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">How We Help You</p>
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
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <aside className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Building2 className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">Who Should Opt For This?</p>
              <h2 className="font-display text-2xl font-bold text-ink">A fit for many companies</h2>
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

        <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><BadgeCheck className="h-6 w-6" /></div>
            <div>
              <p className="text-sm font-semibold text-brand">Trust Section</p>
              <h2 className="font-display text-2xl font-bold text-ink">Companies trust our bundled support</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TRUST_QUOTES.map((quote) => (
              <blockquote key={quote} className="rounded-2xl bg-brand/5 p-4 text-sm text-foreground/75">?{quote}?</blockquote>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-ink p-5 text-white flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-white/70">Client Rating</p>
              <p className="text-2xl font-bold">4.8/5</p>
            </div>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-ink">
              <MessageCircle className="h-4 w-4" /> Consult a CA Today
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function TrustSection() { return null; }

function FAQSection() {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold text-brand">FAQ Section</p>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-ink">Frequently Asked Questions</h2>
        </div>
        <div className="mt-8 space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-ink flex items-center justify-between gap-4">
                <span>{faq.q}</span>
                <ChevronDown className="h-5 w-5 text-brand transition-transform group-open:rotate-180" />
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
        <div className="rounded-[32px] px-6 py-10 sm:px-10 sm:py-14 text-center text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)]" style={{ backgroundImage: "linear-gradient(135deg, #db1f1f 0%, #d31919 48%, #b71212 100%)" }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white/95">
            <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
          </div>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Choose the Right Package for Your Company</h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">Simplify compliance and grow your business with expert support.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#packages" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5">
              View Company Packages <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
