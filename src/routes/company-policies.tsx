import { createFileRoute } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";
import {
  ArrowRight,
  AlertTriangle,
  FileText,
  LockKeyhole,
  MessageCircle,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

function Link({
  to,
  params,
  ...props
}: {
  to: string;
  params?: Record<string, string | number>;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  let href = to;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      href = href.replace("$" + key, String(value));
    }
  }
  return <a href={href} {...props} />;
}

export const Route = createFileRoute("/company-policies")({
  head: () => ({
    meta: [
      { title: "Company Policies - Praveen J & Associates" },
      {
        name: "description",
        content:
          "Read the Company Policies of Praveen J & Associates, including Privacy Policy, Terms & Conditions, and Disclaimer.",
      },
    ],
    links: [{ rel: "canonical", href: "/company-policies" }],
  }),
  component: CompanyPolicies,
});

const policyCards = [
  {
    icon: Shield,
    title: "Privacy Policy",
    desc: "Understand how we collect, use, store, and protect your personal and financial data.",
    covers: [
      "Data collection and usage",
      "Data protection measures",
      "User rights and confidentiality",
    ],
    to: "/privacy-policy" as const,
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    desc: "Learn the terms governing the use of our website and professional services.",
    covers: ["User responsibilities", "Service terms", "Payment and usage policies"],
    to: "/terms-and-conditions" as const,
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer",
    desc: "Know the limitations of information and services provided on our website.",
    covers: [
      "General information disclaimer",
      "Limitation of liability",
      "Professional advice guidelines",
    ],
    to: "/disclaimer" as const,
  },
];

const seoTerms = [
  "Data protection policy India",
  "Website terms and privacy India",
  "Financial services privacy policy",
  "CA firm terms and conditions",
  "Tax consultancy policies",
];

function CompanyPolicies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              <LockKeyhole className="h-4 w-4" />
              Company Policies
            </p>
            <h1 className="mt-5 font-display text-3xl font-bold text-ink md:text-5xl">
              Company Policies - Praveen J &amp; Associates
            </h1>
            <p className="mt-4 text-xl font-semibold text-brand">
              Transparency, Trust &amp; Compliance - Our Commitment to You
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              At Praveen J &amp; Associates, we believe in maintaining complete transparency in how
              we operate, protect your data, and deliver our services.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Explore our policies to understand your rights, responsibilities, and our commitment
              to professional standards.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {policyCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 font-display text-2xl font-bold text-ink">{card.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {card.covers.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                          <Sparkles className="mt-0.5 h-4 w-4 flex-none text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={card.to}
                      className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition hover:text-brand/80"
                    >
                      View {card.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
                  <ShieldCheck className="h-4 w-4" />
                  About Our Policies
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold text-ink">
                  What these policies are designed to ensure
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Transparency in services",
                    "Protection of client data",
                    "Clear communication of terms",
                    "Legal and ethical compliance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border bg-brand/5 p-4 text-sm font-medium text-ink"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                  We prioritize trust, security, and professionalism in every interaction.
                </p>
              </div>
              <div className="rounded-3xl border bg-brand/5 p-6">
                <p className="text-sm font-semibold text-brand">Our Commitment</p>
                <ul className="mt-5 space-y-4">
                  {[
                    "Protecting your data and privacy",
                    "Delivering transparent and ethical services",
                    "Maintaining compliance with legal standards",
                    "Providing accurate and reliable information",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink">
                      <Shield className="mt-0.5 h-5 w-5 flex-none text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Why These Policies Matter",
                  points: [
                    "Understand how your data is handled",
                    "Know your rights and responsibilities",
                    "Make informed decisions",
                    "Build trust with our services",
                  ],
                },
                {
                  title: "Who Should Read This?",
                  points: [
                    "Website users",
                    "Clients and customers",
                    "Businesses and individuals",
                    "Anyone using our services",
                  ],
                },
                {
                  title: "Trusted by Clients",
                  points: [
                    "Transparent and professional service.",
                    "Clear policies and trustworthy firm.",
                    "Reliable and ethical practices.",
                  ],
                },
                {
                  title: "Client Rating",
                  points: [
                    "4.8/5 Rating on Google",
                    "Simple explanations",
                    "Quick support",
                    "Professional guidance",
                  ],
                },
              ].map((card) => (
                <article key={card.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {card.points.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Star className="mt-0.5 h-4 w-4 flex-none fill-amber-400 text-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="rounded-3xl border bg-slate-50 p-8">
              <p className="text-sm font-semibold text-brand">SEO Alignment</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">
                Target keywords covered naturally in this page
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {seoTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border bg-white px-4 py-2 text-sm text-ink shadow-sm"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-display text-2xl font-bold md:text-4xl">
              Have Questions About Our Policies?
            </h2>
            <p className="mt-3 text-white/90">We’re here to help clarify any concerns.</p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand transition hover:bg-white/90"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/918169887643"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
