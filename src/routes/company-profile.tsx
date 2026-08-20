import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, MessageCircle, Phone, ShieldCheck, Sparkles, Star, BadgeCheck,
  Target, Eye, Award, Users, MapPin, CheckCircle2, Building2, Briefcase,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/company-profile")({
  head: () => ({
    meta: [
      { title: "About Praveen J & Associates — Trusted CA Firm in India" },
      {
        name: "description",
        content:
          "Praveen J & Associates — Mumbai-based Chartered Accountant firm offering tax, GST, MCA, accounting and compliance services pan-India.",
      },
      { property: "og:title", content: "About Praveen J & Associates — Trusted CA Firm in India" },
      {
        property: "og:description",
        content: "Tax, GST, MCA & compliance experts. Honest, accurate, growth-focused CA services.",
      },
      { property: "og:url", content: "/company-profile" },
    ],
    links: [{ rel: "canonical", href: "/company-profile" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Praveen J & Associates",
          areaServed: "IN",
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          description:
            "Chartered Accountant firm offering tax, GST, MCA, accounting and compliance services across India.",
          founder: { "@type": "Person", name: "CA Praveen Jain" },
        }),
      },
    ],
  }),
  component: CompanyProfile,
});

function CompanyProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutFirm />
        <Founder />
        <MissionVision />
        <Values />
        <ServicesGrid />
        <Team />
        <Presence />
        <WhyUs />
        <Testimonials />
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
      <div className="container mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> About Us
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight text-ink">
            Your Trusted Partner for Tax, Compliance & Business Growth
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            At Praveen J & Associates, we help individuals and businesses navigate taxation,
            compliance and financial management with confidence.
          </p>
          <p className="mt-2 text-muted-foreground">
            Expert CA services with a focus on accuracy, transparency and growth.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all"
            >
              Consult a CA Today <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-5 py-3 font-semibold hover:bg-[#25D366]/20 transition-all"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 font-semibold text-ink">5/5</span>
            </div>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified
            </span>
            <span className="flex items-center gap-1">
              <BadgeCheck className="h-4 w-4 text-brand" /> Pan-India
            </span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border p-8">
          <div className="grid grid-cols-2 gap-6">
            {[
              { k: "1000+", v: "Clients Served" },
              { k: "9+", v: "Years Experience" },
              { k: "50+", v: "Services Offered" },
              { k: "Pan-India", v: "Coverage" },
            ].map((s) => (
              <div key={s.v} className="p-4 rounded-xl bg-gradient-to-br from-brand/5 to-white border">
                <div className="font-display text-3xl font-bold text-brand">{s.k}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutFirm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">About the Firm</h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Praveen J & Associates is a Mumbai-based Chartered Accountant firm offering comprehensive
          tax, GST, accounting and compliance services. Founded with a vision to simplify financial
          and legal processes, we've built a reputation for professional excellence, reliability
          and client-centric solutions.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
          {["Income Tax & GST", "Company & LLP Compliance", "Business Registration", "Financial Advisory"].map((s) => (
            <div key={s} className="flex items-center gap-2 p-3 rounded-lg bg-brand/5">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-ink">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-10 items-center max-w-5xl">
        <div className="flex justify-center">
          <div className="h-44 w-44 rounded-full bg-gradient-to-br from-brand to-brand/70 flex items-center justify-center shadow-2xl">
            <span className="font-display text-5xl font-bold text-white">PJ</span>
          </div>
        </div>
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
            <Award className="h-3.5 w-3.5" /> Founder & Lead Consultant
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink">CA Praveen Jain</h2>
          <p className="mt-3 text-muted-foreground">
            An accomplished Chartered Accountant with deep expertise in taxation, compliance and
            financial advisory.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              "Qualified CA with strong academic background",
              "Extensive experience in tax and compliance",
              "Diverse client base across industries",
              "Practical, result-oriented solutions",
            ].map((p) => (
              <li key={p} className="flex gap-2 items-start text-ink">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 italic text-muted-foreground">
            "Honest, efficient and growth-driven financial services for every client."
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 max-w-5xl">
        {[
          {
            icon: Target,
            title: "Our Mission",
            body:
              "To simplify taxation and compliance for businesses and individuals through expert guidance, transparent processes and reliable service.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            body:
              "To become a trusted and leading financial advisory firm in India, empowering businesses with clarity, compliance and growth.",
          },
        ].map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border bg-gradient-to-br from-brand/5 to-white p-8">
            <div className="h-12 w-12 rounded-xl bg-brand text-white flex items-center justify-center shadow-md">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { t: "Integrity", d: "Honest and ethical practices" },
    { t: "Accuracy", d: "Error-free and compliant solutions" },
    { t: "Client-Centric", d: "Focus on client success" },
    { t: "Timeliness", d: "On-time delivery of services" },
    { t: "Expertise", d: "Continuous learning and improvement" },
  ];
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center">
          Our Core Values
        </h2>
        <p className="text-center text-muted-foreground mt-2">How we work and serve our clients.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {values.map((v) => (
            <div key={v.t} className="p-5 rounded-xl border bg-white text-center hover:shadow-lg transition-all">
              <div className="mx-auto h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold text-ink">{v.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const services = [
    { t: "Income Tax", to: "/income-tax" as const },
    { t: "GST", to: "/gst" as const },
    { t: "MCA / ROC", to: "/mca" as const },
    { t: "TDS & TCS", to: "/tds-tcs" as const },
    { t: "Registrations", to: "/registrations" as const },
    { t: "Accounting & Audit", to: "/accounting-audit-services" as const },
    { t: "Bank Loan Support", to: "/bank-loan" as const },
    { t: "Consultation", to: "/consultation" as const },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          End-to-end financial and compliance solutions under one roof.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.t}
              to={s.to}
              className="group p-5 rounded-xl border bg-white hover:border-brand/40 hover:shadow-lg transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold text-ink group-hover:text-brand transition-colors">
                {s.t}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Our Team</h2>
        <p className="mt-3 text-muted-foreground">
          A team of qualified professionals working together to ensure accurate execution, timely
          delivery and expert guidance.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {["Chartered Accountants", "Tax Consultants", "Compliance Experts", "Accounting Professionals"].map((t) => (
            <div key={t} className="p-5 rounded-xl border bg-white">
              <div className="mx-auto h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <p className="mt-3 font-medium text-ink">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Presence() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-2xl border bg-gradient-to-br from-brand/5 to-white p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="h-20 w-20 rounded-2xl bg-brand text-white flex items-center justify-center shadow-lg">
              <Building2 className="h-10 w-10" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">Our Presence</h2>
            <p className="mt-3 text-muted-foreground">
              Based in <span className="font-semibold text-ink">Mumbai</span>, we serve clients
              across India with both offline and online consultation.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" /> Mumbai · Pan-India · Online & Offline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    "Experienced Chartered Accountants",
    "Transparent process & clear communication",
    "Personalised solutions",
    "Quick turnaround time",
    "End-to-end support",
    "Long-term client relationships",
  ];
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink text-center">
          Why Choose Us
        </h2>
        <p className="text-center text-muted-foreground mt-2">
          We don't just file taxes — we build long-term relationships.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i} className="flex gap-3 p-5 rounded-xl border bg-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-ink font-medium">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    "Very professional and reliable CA firm.",
    "Helped us manage compliance easily.",
    "Great support and quick response.",
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 font-semibold text-ink">5/5 Client Rating</span>
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-ink">Client Trust</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {items.map((t) => (
            <div key={t} className="p-6 rounded-xl border bg-gradient-to-br from-brand/5 to-white">
              <p className="text-ink italic">"{t}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand to-brand/80 text-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Let's Simplify Your Tax & Compliance
        </h2>
        <p className="mt-3 text-white/90">Partner with experts who understand your business.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Consult a CA Today <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+918169887643"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
