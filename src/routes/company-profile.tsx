import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Star, Quote } from "lucide-react";
import capraveenjain from "@/assets/capraveenjain.webp";
import staff from "@/assets/staff.webp";
import outsideoffice from "@/assets/outsideoffice.webp";


export const Route = createFileRoute("/company-profile")({
  component: CompanyProfile,
});

function CompanyProfile() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-brand/20 selection:text-brand">


      <meta
        name="description"
        content="Praveen J & Associates is a Chartered Accountant firm based in Mumbai offering comprehensive tax, GST, accounting, and compliance services. Experienced tax consultant firm."
      />


      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5 opacity-50"></div>
          <div className="container mx-auto px-4 relative max-w-4xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-brand mb-6 shadow-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>About Praveen J & Associates</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Your Trusted Partner for <span className="text-brand">Tax, Compliance & Business Growth</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                At Praveen J & Associates, we help individuals and businesses navigate taxation, compliance, and financial management with confidence.
                <span className="block mt-4 text-brand font-medium text-lg sm:text-xl">👉 Delivering expert CA services with a focus on accuracy, transparency, and growth</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-red px-8 text-base font-bold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all w-full sm:w-auto">
                  Consult a CA Today <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white shadow-soft hover:-translate-y-0.5 hover:opacity-90 transition-all w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat with Us on WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT THE FIRM */}
        <section className="py-20 bg-brand-light relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn direction="up">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-primary/10">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">About the Firm</h2>
                <div className="prose prose-lg prose-primary max-w-none text-muted-foreground">
                  <p>
                    <strong>Praveen J & Associates</strong> is a Chartered Accountant firm based in Mumbai, offering comprehensive tax, GST, accounting, and compliance services.
                  </p>
                  <p>
                    Founded with a vision to simplify financial and legal processes, the firm has built a reputation for professional excellence, reliability, and client-centric solutions.
                  </p>
                  <div className="mt-8 bg-brand-light rounded-2xl p-6 sm:p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-display">👉 We specialize in:</h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {["Income Tax & GST", "Company & LLP Compliance", "Business Registration", "Financial Advisory"].map((spec) => (
                        <li key={spec} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                          <span className="font-medium text-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-8 text-xl text-center text-foreground font-medium italic">
                    <span className="text-brand">👉 Our goal is simple</span> – help clients stay compliant and grow confidently.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT THE FOUNDER & OUR TEAM */}
        <section className="py-20 sm:py-32 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Founder */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <FadeIn direction="left">
                <div className="relative rounded-3xl overflow-hidden shadow-card group aspect-[4/5] max-w-md mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                  <img src={capraveenjain} alt="CA Praveen Jain" className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent pt-20 z-20">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">CA Praveen Jain</h3>
                    <p className="text-brand font-medium">Founder & Lead Consultant</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">About the Founder</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    CA Praveen Jain is a highly accomplished Chartered Accountant with strong expertise in taxation, compliance, and financial advisory.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4">👉 Key highlights:</h3>
                  <ul className="space-y-4 mb-8">
                    {["Qualified CA with strong academic background", "Extensive experience in tax and compliance", "Worked with diverse clients across industries", "Known for practical and result-oriented solutions"].map((hl, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                        <span className="text-lg text-muted-foreground">{hl}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand">
                    <p className="text-lg font-medium text-foreground italic">
                      "His vision is to provide honest, efficient, and growth-driven financial services to clients."
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Team */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" className="lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-card group aspect-[16/9]">
                  <img src={staff} alt="Our Team" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
              <FadeIn direction="right" className="lg:order-1">
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Team</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our team consists of qualified professionals including:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {["Chartered Accountants", "Tax Consultants", "Compliance Experts", "Accounting Professionals"].map((hl, i) => (
                      <li key={i} className="flex items-center gap-3 bg-brand-light p-4 rounded-xl border border-primary/5 shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                        <span className="text-base font-semibold text-foreground">{hl}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-medium text-foreground">
                    <span className="text-brand font-bold">👉 Together, we ensure</span> accurate execution, timely delivery, and expert guidance.
                  </h3>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 bg-gradient-red text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <FadeIn direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/20 h-full">
                  <h2 className="font-display text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    To simplify taxation and compliance for businesses and individuals through expert guidance, transparent processes, and reliable service.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/20 h-full">
                  <h2 className="font-display text-4xl font-bold mb-6">Our Vision</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    To become a trusted and leading financial advisory firm in India, empowering businesses with clarity, compliance, and growth.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 sm:py-32 bg-brand-light">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Core Values</h2>
              <p className="text-xl text-brand font-medium">👉 These values define how we work and serve our clients.</p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Integrity", p: "Honest and ethical practices" },
                { t: "Accuracy", p: "Error-free and compliant solutions" },
                { t: "Client-Centric Approach", p: "Focus on client success" },
                { t: "Timeliness", p: "On-time delivery of services" },
                { t: "Expertise", p: "Continuous learning and improvement" },
              ].map((val, i) => (
                <FadeIn key={i} direction="up">
                  <div className="bg-white p-8 rounded-3xl shadow-card border border-primary/10 h-full hover:-translate-y-1 transition-transform">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{val.t}</h3>
                    <p className="text-muted-foreground">{val.p}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Services</h2>
              <p className="text-xl text-muted-foreground">We provide a wide range of services</p>
            </FadeIn>
            <FadeIn direction="up">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  "Income Tax Filing & Planning",
                  "GST Registration & Returns",
                  "Company & LLP Registration",
                  "ROC Compliance",
                  "Accounting & Bookkeeping",
                  "Business Advisory"
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-light p-4 rounded-xl border border-primary/5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span className="font-medium text-foreground text-sm">{s}</span>
                  </div>
                ))}
              </div>
              <div className="text-center text-xl font-bold text-brand bg-gradient-to-r from-transparent via-brand/5 to-transparent py-4 rounded-xl">
                👉 End-to-end financial and compliance solutions under one roof.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PRESENCE AND WHY US */}
        <section className="py-20 bg-brand-light overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="left">
                <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
                  <img src={outsideoffice} alt="Our Office" className="w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent pt-32">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">Our Presence 🏢</h3>
                    <p className="text-white/90 font-medium">Based in Mumbai, we serve clients across India with both offline and online consultation services.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-8">Why Choose Us</h2>
                <ul className="space-y-6 mb-10">
                  {["Experienced Chartered Accountants", "Affordable and transparent pricing", "Personalized solutions", "Quick turnaround time", "End-to-end support"].map((s, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-brand-light flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-brand" />
                      </div>
                      <span className="font-medium text-lg text-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-brand/10 p-6 rounded-2xl border-l-4 border-brand">
                  <p className="text-xl font-bold text-brand italic">
                    👉 We don’t just file taxes—we build long-term relationships.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CLIENT TRUST */}
        <section className="py-20 sm:py-32 bg-white text-center">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn direction="up">
              <h2 className="font-display text-4xl font-bold text-foreground mb-12">Client Trust</h2>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-amber-50 px-6 py-3 text-lg font-bold text-amber-600 mb-12 shadow-sm">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                4.8/5 Client Rating
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Very professional and reliable CA firm.",
                  "Helped us manage compliance easily.",
                  "Great support and quick response."
                ].map((q, i) => (
                  <div key={i} className="bg-brand-light p-8 rounded-3xl border border-primary/5 shadow-sm text-left relative">
                    <Quote className="h-8 w-8 text-brand/20 absolute top-6 right-6" />
                    <p className="text-lg text-foreground font-medium italic mt-4">{q}</p>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex text-amber-400"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FINAL CTA */}
        <FadeIn direction="up">
          <section className="py-20 sm:py-28 bg-gradient-red relative overflow-hidden">
            <div className="container mx-auto px-4 relative text-center">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Let’s Simplify Your Tax & Compliance
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Partner with experts who understand your business.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="/consultation" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-brand shadow-lg hover:scale-105 transition-transform group">
                  <Phone className="mr-2 h-5 w-5" /> Consult a CA Today
                </a>
                <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center rounded-full bg-black/20 border border-white/20 backdrop-blur px-8 text-base font-bold text-white hover:bg-black/30 transition-colors">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat with Us on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* INTERNAL LINKS GRID (Trust Builder / SEO Integration) */}
        <section className="py-12 bg-background border-t border-primary/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <p className="text-sm font-medium text-muted-foreground mb-4">Chartered accountant firm profile | CA firm profile India | Financial services company India | Tax consultancy company profile | Business tax advisory firm | Experienced tax consultant firm</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <a href="/consultation" className="text-brand hover:underline">Consultation</a>
              <a href="/our-full-packages-services" className="text-brand hover:underline">Packages</a>
              <a href="/gst-registration-return-filing-services" className="text-brand hover:underline">GST Services</a>
              <a href="/income-tax-return-filing-advisory-services-india" className="text-brand hover:underline">Income Tax Services</a>
              <a href="/mca-roc-filing-services-india" className="text-brand hover:underline">MCA/ROC Compliance</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default CompanyProfile;

