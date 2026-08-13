import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, Phone, ShieldCheck, Sparkles, Star, BadgeCheck,
  MapPin, Mail, Clock, CheckCircle2, Users, Building2, Briefcase,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

const PHONE = "+91 8169887643";
const PHONE_TEL = "+918169887643";
const WA = "918169887643";
const EMAIL = "info@praveenjandassociates.com";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Praveen J & Associates — Expert Tax & CA Services in India" },
      {
        name: "description",
        content:
          "Talk to expert Chartered Accountants for tax, GST, MCA, compliance & business setup. Quick callback, WhatsApp & call support. Mumbai-based, pan-India service.",
      },
      { property: "og:title", content: "Contact Praveen J & Associates — Expert CA Help" },
      {
        property: "og:description",
        content: "Free callback within 24 hours. Call, WhatsApp or fill the form — trusted CA support.",
      },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Praveen J & Associates",
          email: EMAIL,
          telephone: PHONE,
          areaServed: "IN",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          openingHours: "Mo-Sa 10:00-19:00",
          url: "/contact-us",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <GetInTouch />
        <ContactDetails />
        <MapSection />
        <QuickForm />
        <WhyContact />
        <WhoCan />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5">
      <div className="container mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Free Consultation
          </span>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
            Contact Praveen J &amp; Associates — Expert Tax &amp; CA Services in India
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Let&apos;s solve your tax &amp; business queries today.
          </p>
          <p className="mt-2 text-muted-foreground">
            Get in touch with experienced Chartered Accountants for expert help in tax, GST, compliance, and business setup. Quick response. Expert guidance. Trusted support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-5 py-3 font-semibold hover:opacity-90 transition-all">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-1 font-semibold text-ink">4.8/5</span>
            </div>
            <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
            <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> Trusted by 5000+ Clients</span>
          </div>
        </div>
        <HeroForm />
      </div>
    </section>
  );
}

function HeroForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  return (
    <div id="lead" className="bg-white rounded-2xl shadow-xl border p-6 lg:p-8">
      <h3 className="font-display text-xl font-bold text-ink">Get a Callback within 24 Hours</h3>
      <p className="text-sm text-muted-foreground mt-1">Tell us what you need — our CA team will reach out.</p>
      <form
        className="mt-5 space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          const msg = `Hi, I need CA assistance.%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
          window.open(`https://wa.me/${WA}?text=${msg}`, "_blank");
        }}
      >
        <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
        <input required type="tel" maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
        <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
        <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30 bg-white">
          <option value="">Service Required</option>
          <option>Income Tax / ITR</option>
          <option>GST</option>
          <option>TDS / TCS</option>
          <option>MCA / ROC</option>
          <option>Accounting &amp; Audit</option>
          <option>Registrations</option>
          <option>Bank Loan Documentation</option>
          <option>Compliance Package</option>
          <option>CA Consultation</option>
          <option>Other</option>
        </select>
        <textarea maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message (optional)" rows={3} className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
        <button type="submit" className="w-full rounded-lg bg-brand text-white font-semibold py-3 shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all flex items-center justify-center gap-2">
          Request Callback <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs text-muted-foreground text-center">No spam. 100% confidential.</p>
      </form>
    </div>
  );
}

function GetInTouch() {
  const items = [
    "Tax consultation",
    "GST services",
    "Company registration",
    "Compliance support",
    "Business advisory",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Get in Touch</h2>
        <p className="mt-2 text-muted-foreground">Have a question or need professional assistance? Reach out to us for:</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {items.map((t) => (
            <div key={t} className="p-4 rounded-xl border bg-brand/5 flex items-center justify-center text-sm font-medium text-ink">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 shrink-0" /> {t}
            </div>
          ))}
        </div>
        <p className="mt-6 font-semibold text-ink">We&apos;re here to help you at every step.</p>
      </div>
    </section>
  );
}

function ContactDetails() {
  const cards = [
    { icon: MapPin, title: "Office Address", lines: ["Praveen J & Associates", "Mumbai, India"] },
    { icon: Phone, title: "Phone", lines: [PHONE], href: `tel:${PHONE_TEL}` },
    { icon: Mail, title: "Email", lines: [EMAIL], href: `mailto:${EMAIL}` },
    { icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"] },
  ];
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Contact Details</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => {
            const Inner = (
              <>
                <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-muted-foreground mt-1">{l}</p>
                ))}
              </>
            );
            return c.href ? (
              <a key={c.title} href={c.href} className="p-6 rounded-2xl bg-white border hover:shadow-lg hover:-translate-y-0.5 transition-all block">
                {Inner}
              </a>
            ) : (
              <div key={c.title} className="p-6 rounded-2xl bg-white border">
                {Inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Find Us on Map</h2>
        <p className="text-center text-muted-foreground mt-2">Visit our office or connect with us online for quick support.</p>
        <div className="mt-8 rounded-2xl overflow-hidden border shadow-sm aspect-[16/9]">
          <iframe
            title="Praveen J & Associates — Mumbai Office"
            src="https://www.google.com/maps?q=PRAVEEN+J+and+ASSOCIATES+(Chartered+Accountants)&output=embed"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function QuickForm() {
  return (
    <section className="py-14 bg-gradient-to-br from-brand/5 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Quick Contact Form</h2>
        <p className="text-center text-muted-foreground mt-2">Fill out the form and our team will get back to you shortly.</p>
        <div className="mt-8">
          <HeroForm />
        </div>
      </div>
    </section>
  );
}

function WhyContact() {
  const items = [
    "Experienced Chartered Accountants",
    "Fast response time",
    "Personalized solutions",
    "Affordable services",
    "Trusted by clients pan-India",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Why Contact Us</h2>
        <p className="text-center text-muted-foreground mt-2">Your business deserves expert guidance.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t) => (
            <div key={t} className="p-4 rounded-xl border bg-emerald-50/50 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm text-ink">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoCan() {
  const items = [
    { icon: Users, t: "Individuals & salaried professionals" },
    { icon: Briefcase, t: "Business owners" },
    { icon: Sparkles, t: "Startups & entrepreneurs" },
    { icon: Building2, t: "Companies & LLPs" },
    { icon: BadgeCheck, t: "Freelancers & consultants" },
  ];
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">Who Can Contact Us?</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="p-5 rounded-2xl bg-white border text-center">
              <Icon className="h-6 w-6 text-brand mx-auto" />
              <p className="mt-3 text-sm font-medium text-ink">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const quotes = [
    "Very responsive and helpful.",
    "Got quick support for GST issues.",
    "Professional and reliable CA firm.",
  ];
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
          <span className="ml-2 font-semibold text-ink">4.8/5 Client Rating</span>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {quotes.map((q) => (
            <blockquote key={q} className="p-6 rounded-2xl border bg-brand/5 text-sm text-ink italic">
              “{q}”
            </blockquote>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/consultation" className="rounded-full border px-4 py-2 hover:bg-muted">CA Consultation</Link>
          <Link to="/compliance" className="rounded-full border px-4 py-2 hover:bg-muted">Compliance Bundles</Link>
          <Link to="/income-tax" className="rounded-full border px-4 py-2 hover:bg-muted">Income Tax</Link>
          <Link to="/gst" className="rounded-full border px-4 py-2 hover:bg-muted">GST</Link>
          <Link to="/company-profile" className="rounded-full border px-4 py-2 hover:bg-muted">About Us</Link>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Talk to a CA Today — Get Expert Help Instantly</h2>
        <p className="mt-3 text-white/90">Don&apos;t wait — solve your tax and compliance issues now.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:bg-white/90 transition-all">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-6 py-3 font-semibold hover:opacity-90 transition-all">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

