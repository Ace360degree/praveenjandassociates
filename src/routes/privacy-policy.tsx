import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Praveen J & Associates" },
      { name: "description", content: "How Praveen J & Associates collects, uses and protects your personal and financial information." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS: { title: string; intro?: string; bullets?: string[]; note?: string }[] = [
  { title: "Introduction", intro: "This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services. By accessing our website, you agree to the terms outlined in this policy." },
  { title: "Information We Collect", intro: "We may collect:", bullets: ["Personal — Name, phone number, email address", "Business & Financial — Business details and financial data required for services", "Technical — IP address, browser type, website usage data"], note: "We only collect information necessary to provide our services." },
  { title: "How We Use Your Information", bullets: ["Provide tax, GST and financial services", "Respond to queries and consultations", "Improve our services and user experience", "Send updates or service-related communication"], note: "We do not sell, rent or misuse your personal data." },
  { title: "Data Security", bullets: ["Secure storage systems", "Restricted access to sensitive information", "Protection against unauthorized access"], note: "Your information is handled with strict confidentiality." },
  { title: "Data Sharing Policy", intro: "We do not share your personal information with third parties except:", bullets: ["When required by law", "With authorized professionals for service delivery", "With your consent"] },
  { title: "Cookies Policy", intro: "Our website may use cookies to enhance user experience, analyze website performance and personalize content. You can disable cookies through your browser settings." },
  { title: "Your Rights", bullets: ["Access your personal data", "Request correction of information", "Request deletion (subject to legal requirements)"] },
  { title: "Policy Updates", intro: "We may update this Privacy Policy from time to time. Users are advised to review this page periodically." },
];

function PrivacyPage() {
  return <LegalLayout icon={Shield} title="Privacy Policy — Praveen J & Associates" tagline="Your Data is Safe with Us" subtitle="We are committed to protecting your personal and financial information with the highest standards of security and confidentiality." sections={SECTIONS} />;
}

export function LegalLayout({ icon: Icon, title, tagline, subtitle, sections }: { icon: any; title: string; tagline: string; subtitle: string; sections: typeof SECTIONS }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand/5 via-white to-brand/5 py-14 lg:py-20">
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
            {sections.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl border bg-white hover:shadow-md transition">
                <h2 className="font-display text-xl font-bold text-ink">{s.title}</h2>
                {s.intro && <p className="mt-3 text-foreground/80 leading-relaxed">{s.intro}</p>}
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-1 shrink-0" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.note && <p className="mt-4 text-sm text-brand font-medium">{s.note}</p>}
              </div>
            ))}
            <div className="p-6 rounded-2xl bg-ink text-white">
              <h3 className="font-display text-lg font-bold">Contact Us</h3>
              <p className="text-sm text-white/80 mt-1">For any related concerns, reach out:</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="mailto:info@praveenjandassociates.com" className="flex items-center gap-2 hover:text-brand"><Mail className="h-4 w-4" /> info@praveenjandassociates.com</a>
                <a href="tel:+918169887643" className="flex items-center gap-2 hover:text-brand"><Phone className="h-4 w-4" /> +91 8169887643</a>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground">Last updated: 2026</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Link to="/contact-us" className="rounded-full border px-4 py-2 text-sm hover:bg-muted">Contact</Link>
              <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] text-white px-4 py-2 text-sm font-semibold inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
