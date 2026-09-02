import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  FileSearch,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Shield,
  ShieldCheck,
  Star,
  UserCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Praveen J & Associates" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Praveen J & Associates to understand how we collect, use and protect your personal and financial information.",
      },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const dataTypes = [
    {
      title: "Personal Information",
      items: ["Name", "Phone number", "Email address"],
    },
    {
      title: "Business & Financial Information",
      items: ["Business details if shared", "Financial data required for services"],
    },
    {
      title: "Technical Information",
      items: ["IP address", "Browser type", "Website usage data"],
    },
  ];

  const useCases = [
    "Provide tax, GST, and financial services",
    "Respond to queries and consultations",
    "Improve our services and user experience",
    "Send updates or service-related communication",
  ];

  const securityPoints = [
    "Secure storage systems",
    "Restricted access to sensitive information",
    "Protection against unauthorized access",
  ];

  const sharingPoints = [
    "When required by law",
    "With authorized professionals for service delivery",
    "With your consent",
  ];

  const rightsPoints = [
    "Access your personal data",
    "Request correction of information",
    "Request deletion subject to legal requirements",
  ];

  const seoPhrases = [
    "Data protection policy India",
    "Website privacy policy India",
    "Financial services data privacy",
    "Personal information security",
    "Secure financial services",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
              <Shield className="h-7 w-7" />
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
              <LockKeyhole className="h-4 w-4" />
              Privacy Policy
            </p>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink">
              Privacy Policy - Praveen J &amp; Associates
            </h1>
            <p className="mt-4 text-xl font-semibold text-brand">Your Data is Safe with Us</p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              At Praveen J &amp; Associates, we are committed to protecting your personal and financial information
              with the highest standards of security and confidentiality.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">Introduction</p>
                  <h2 className="font-display text-2xl font-bold text-ink">How we handle your information</h2>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/75">
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our
                website or use our services. By accessing our website, you agree to the terms outlined in this policy.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Transparent handling of personal and financial data",
                  "Use of security controls for sensitive information",
                  "No sale or misuse of customer data",
                  "Clear communication about how data is used",
                ].map((point) => (
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
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">What This Covers</p>
                  <h2 className="font-display text-2xl font-bold text-ink">Key privacy themes</h2>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  "Personal information security",
                  "Secure financial services",
                  "Website privacy policy India",
                  "Financial services data privacy",
                  "Data protection policy India",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold text-brand">Policy Sections</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Everything you need to know</h2>
              </div>
              <p className="max-w-2xl text-sm md:text-base text-foreground/70">
                The sections below summarize how we manage the information you share with us.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <FileSearch className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Information We Collect</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">
                  We may collect the following types of information:
                </p>
                <div className="mt-4 space-y-4">
                  {dataTypes.map((group) => (
                    <div key={group.title} className="rounded-xl bg-brand/5 p-4">
                      <p className="font-semibold text-ink">{group.title}</p>
                      <ul className="mt-3 space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-brand">
                  We only collect information necessary to provide our services.
                </p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">How We Use Your Information</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">Your information is used to:</p>
                <ul className="mt-4 space-y-2">
                  {useCases.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-brand">
                  We do not sell, rent, or misuse your personal data.
                </p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Data Security</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">
                  We implement appropriate security measures to protect your data:
                </p>
                <ul className="mt-4 space-y-2">
                  {securityPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-brand">
                  Your information is handled with strict confidentiality.
                </p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Data Sharing Policy</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">
                  We do not share your personal information with third parties except:
                </p>
                <ul className="mt-4 space-y-2">
                  {sharingPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-brand">Your privacy is our priority.</p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Cookies Policy</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">
                  Our website may use cookies to enhance user experience, analyze website performance, and personalize
                  content. You can disable cookies through your browser settings.
                </p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <LockKeyhole className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Your Rights</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">You have the right to:</p>
                <ul className="mt-4 space-y-2">
                  {rightsPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-brand">Contact us for any data-related requests.</p>
              </article>

              <article className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-ink">Policy Updates</h3>
                </div>
                <p className="mt-4 text-sm md:text-base text-foreground/75">
                  We may update this Privacy Policy from time to time. Users are advised to review this page
                  periodically.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-6">
            <article className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">Final Note</p>
                  <h2 className="font-display text-2xl font-bold text-ink">We keep your trust at the center</h2>
                </div>
              </div>
              <p className="mt-5 text-sm md:text-base text-foreground/75">
                We are committed to maintaining trust, transparency, and data security in all our services.
              </p>
              <div className="mt-6 rounded-xl bg-brand/5 p-4">
                <p className="text-sm font-semibold text-brand">Last Updated</p>
                <p className="mt-1 text-sm text-foreground/75">August 29, 2026</p>
              </div>
            </article>

            <article className="rounded-2xl border bg-muted/20 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">Contact Us</p>
                  <h2 className="font-display text-2xl font-bold text-ink">For privacy-related concerns</h2>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-foreground/75">
                <a
                  href="mailto:info@praveenjandassociates.com"
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm transition hover:text-brand"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  info@praveenjandassociates.com
                </a>
                <a
                  href="tel:+918169887643"
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm transition hover:text-brand"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  +91 8169887643
                </a>
              </div>

              <p className="mt-5 text-sm text-foreground/70">
                Contact us for data-related requests, corrections, or deletion requests subject to legal requirements.
              </p>
            </article>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-semibold text-ink">4.8/5 Client Rating</span>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {[
                "Transparent and professional service.",
                "Clear privacy standards and trustworthy firm.",
                "Reliable and ethical practices.",
              ].map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-2xl border bg-brand/5 p-5 text-sm italic text-ink"
                >
                  "{quote}"
                </blockquote>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border bg-muted/20 p-5 md:p-6">
              <p className="text-sm font-semibold text-brand">SEO alignment</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {seoPhrases.map((phrase) => (
                  <span
                    key={phrase}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-sm"
                  >
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-brand to-brand/80 py-16 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold">Need Help With Privacy Questions?</h2>
            <p className="mt-3 text-white/90">We are here to help clarify any concerns.</p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand transition hover:bg-white/90"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918169887643"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
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

export function LegalLayout({
  icon: Icon,
  title,
  tagline,
  subtitle,
  sections,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  subtitle: string;
  sections: { title: string; intro?: string; bullets?: string[]; note?: string }[];
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-display text-3xl md:text-5xl font-bold text-ink">{title}</h1>
            <p className="mt-3 text-xl font-semibold text-brand">{tagline}</p>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="p-6 rounded-2xl border bg-white hover:shadow-md transition">
                <h2 className="font-display text-xl font-bold text-ink">{section.title}</h2>
                {section.intro && <p className="mt-3 text-foreground/80 leading-relaxed">{section.intro}</p>}
                {section.bullets && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-brand mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.note && <p className="mt-4 text-sm text-brand font-medium">{section.note}</p>}
              </div>
            ))}
            <div className="p-6 rounded-2xl bg-ink text-white">
              <h3 className="font-display text-lg font-bold">Contact Us</h3>
              <p className="text-sm text-white/80 mt-1">For any related concerns, reach out:</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="mailto:info@praveenjandassociates.com" className="flex items-center gap-2 hover:text-brand">
                  <Mail className="h-4 w-4" /> info@praveenjandassociates.com
                </a>
                <a href="tel:+918169887643" className="flex items-center gap-2 hover:text-brand">
                  <Phone className="h-4 w-4" /> +91 8169887643
                </a>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground">Last updated: 2026</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a href="/contact-us" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Contact</a>
              <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] text-white px-4 py-2 text-sm font-semibold inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
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

