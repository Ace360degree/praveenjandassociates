import {
  ArrowRight,
  CheckCircle2,
  Star,
  Calculator,
  TrendingUp,
  Building2,
  Receipt,
  Users,
  CheckSquare,
  MessageCircle,
  Phone,
  BookOpen,
  Quote,
  Zap,
  MessageSquareText,
  UserCheck,
  BadgeIndianRupee,
  Landmark,
  Wallet,
  Briefcase,
  ChevronDown,
  FileSpreadsheet,
  ClipboardCheck,
  Headphones,
  Sparkles,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import praveen_about from "@/assets/praveen-about.jpg";
import { ConsultationModal } from "@/components/site/ConsultationModal";

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-8 sm:mb-14 max-w-3xl mx-auto px-2">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand mb-3 sm:mb-4">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] sm:leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function CoreServices() {
  const sections = [
    {
      id: "start",
      title: "START YOUR BUSINESS",
      icon: Building2,
      desc: "Business shuru karna confusing lag sakta hai—LLP ya Pvt Ltd? Compliance kya hoga? Yahin par hum aapko guide karte hain—from idea to registration.",
      benefit: "Right structure choose karna = long-term tax saving + smooth growth",
      links: [
        {
          label: "Private Limited Company Registration",
          href: "/private-limited-company-formation",
        },
        { label: "LLP Formation", href: "/new-llp-formation" },
        { label: "One Person Company (OPC)", href: "/one-person-company-registration" },
        { label: "Section 8 (NGO)", href: "/section-8-company-registration" },
      ],
      cta: "Start Your Business",
    },
    {
      id: "manage",
      title: "MANAGE YOUR COMPLIANCE",
      icon: CheckSquare,
      desc: "Compliance ignore karna = penalties + stress. Hum ensure karte hain ki aapka business fully compliant aur tension-free rahe.",
      benefit: "Timely filing = no penalties + better credibility",
      links: [
        { label: "ROC Compliance", href: "/annual-roc-compliance" },
        { label: "GST Filing & Returns", href: "/gst" },
        { label: "Income Tax Filing", href: "/income-tax/accounting-for-itr-filing" },
        { label: "Annual Compliance", href: "/mca-roc-filing-services-india" },
      ],
      cta: "Manage Compliance",
    },
    {
      id: "grow",
      title: "GROW YOUR BUSINESS",
      icon: TrendingUp,
      desc: "Sirf compliance nahi—growth planning bhi important hai. Hum aapko financial clarity aur tax strategy dete hain.",
      benefit: "Smart planning = more profit + less tax",
      links: [
        { label: "Accounting & Bookkeeping", href: "/complete-accounting-services" },
        { label: "Tax Planning", href: "/gst-special-cases" },
        { label: "Financial Advisory", href: "/accounting-audit-services" },
        { label: "Business Consultation", href: "#lead" },
      ],
      cta: "Grow Your Business",
    },
    {
      id: "update",
      title: "MAKE CHANGES & UPDATES",
      icon: Receipt,
      desc: "Business evolve hota hai—and changes zaruri hote hain. Hum ensure karte hain ki har update legally compliant ho.",
      benefit: "Correct updates = smooth operations",
      links: [
        { label: "Company Name Change", href: "/company-name-change-mca" },
        { label: "Address Change", href: "/company-address-change-mca" },
        { label: "Master Data Update", href: "/change-in-company-master-data" },
        { label: "Partner / Director Changes", href: "/resignation-of-partner-in-llp" },
      ],
      cta: "Update Your Business",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Our Core Services"
          title="Aap growth pe focus karein, compliance hum handle karenge"
        />
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-card border border-primary/10 hover:border-brand/40 hover:shadow-soft transition-all group"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 shadow-md">
                  <sec.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">{sec.title}</h3>
                  <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed">{sec.desc}</p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-brand flex items-start gap-1">
                    <ArrowRight className="h-4 w-4 shrink-0 mt-0.5" /> <span>{sec.benefit}</span>
                  </p>
                  <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sec.links.map((l) => (
                      <Link
                        key={l.label}
                        to={l.href}
                        className="text-xs sm:text-sm text-foreground/80 hover:text-brand flex items-center gap-1.5 transition-colors truncate"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand/30 shrink-0" />
                        <span className="truncate">{l.label}</span>
                      </Link>
                    ))}
                  </div>
                  <a
                    href={sec.links[0].href}
                    className="mt-5 sm:mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary/10 px-4 text-xs sm:text-sm font-semibold text-brand transition-colors hover:bg-[#D92525] hover:text-white group-hover:shadow-md w-full sm:w-auto text-center"
                  >
                    {sec.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessPackages() {
  const pkgs = [
    "Proprietorship Packages",
    "Partnership Firm Packages",
    "LLP Packages",
    "Private Limited Packages",
  ];
  return (
    <section className="py-12 sm:py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground leading-tight">
          All-in-One Compliance Packages – Simple, Affordable &amp; Hassle-Free
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Alag-alag services manage karna mushkil hota hai—isliye humne ready packages banaye hain
          jo complete compliance cover karte hain. <br className="hidden sm:inline" />
          <span className="text-brand font-semibold block mt-1">
            👉 One package = everything sorted
          </span>
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-left">
          {pkgs.map((p) => (
            <div
              key={p}
              className="p-4 sm:p-5 rounded-2xl border border-primary/20 bg-brand-light hover:bg-[#D92525]/10 transition-colors"
            >
              <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-brand mb-2.5 sm:mb-3" />
              <h3 className="font-semibold text-sm sm:text-base text-foreground">{p}</h3>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-foreground/80">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Cost-effective
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Dedicated CA support
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Timely filings
          </span>
        </div>

        <a
          href="#packages"
          className="mt-6 sm:mt-8 inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-gradient-red px-6 sm:px-8 text-xs sm:text-sm font-bold text-white shadow-soft hover:shadow-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto max-w-xs text-center"
        >
          View All Packages
        </a>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-24 bg-foreground text-white rounded-t-2xl sm:rounded-t-[3rem] mt-6 sm:mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-5xl font-bold">Why Choose Us</h2>
          <p className="mt-3 sm:mt-4 text-white/70 text-xs sm:text-lg leading-relaxed">
            Aapko sirf CA nahi, ek long-term business partner chahiye. Humara approach simple
            hai—clarity, speed aur trust.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { title: "Clear guidance", sub: "bina jargon ke" },
            { title: "Fast process", sub: "delays nahi" },
            { title: "Transparent pricing", sub: "no hidden cost" },
            { title: "End-to-end support", sub: "start se scale tak" },
          ].map((w) => (
            <div
              key={w.title}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-white mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold">{w.title}</h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">{w.sub}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10 px-2">
          <p className="text-sm sm:text-lg font-semibold text-brand-light leading-relaxed">
            👉 Hum sirf service nahi dete—aapka business simplify karte hain
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutSnapshot() {
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-10 items-center max-w-5xl">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] shadow-card">
          <img
            src={praveen_about}
            alt="Praveen J & Associates"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">Praveen J &amp; Associates</h3>
            <p className="text-white/80 text-xs sm:text-sm">
              Experience + practical approach = better results
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
            A Trusted CA Firm
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted-foreground leading-relaxed">
            Ek trusted CA firm jo businesses aur individuals ko help karta hai tax, compliance aur
            financial clarity ke saath grow karne mein.
          </p>
          <a
            href="/about"
            className="mt-5 sm:mt-6 inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-primary/20 bg-brand-light px-5 sm:px-6 text-xs sm:text-sm font-semibold text-brand transition-colors hover:bg-[#D92525] hover:text-white w-full sm:w-auto text-center"
          >
            Know More About Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FreeTools() {
  const tools = [
    { title: "Income Tax Calculator", href: "/tools/income-tax" },
    { title: "Capital Gain Calculator", href: "/tools/capital-gain" },
    { title: "Advance Tax Guide", href: "/tools/advance-tax" },
  ];
  return (
    <section className="py-12 sm:py-24 bg-brand-light/50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
          Free Tools &amp; Guides
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-muted-foreground leading-relaxed">
          Tax samajhna mushkil nahi hona chahiye. <br className="hidden sm:inline" />
          <span className="text-brand font-semibold mt-1 inline-block">
            👉 Aap khud calculate karein, phir expert se confirm karein
          </span>
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-left">
          {tools.map((t) => (
            <Link
              key={t.title}
              to={t.href}
              className="group p-4 sm:p-5 rounded-2xl bg-white shadow-soft border border-border hover:border-brand/40 transition-all flex flex-col justify-between min-h-[7.5rem] h-auto"
            >
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-xs sm:text-sm text-foreground group-hover:text-brand transition-colors pr-2">
                  {t.title}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const revs = [
    {
      txt: "Very smooth company registration process. The team guided us perfectly.",
      author: "Rishabh Y.",
      badge: "Private Limited",
    },
    {
      txt: "GST aur compliance completely handled. Sab ekdum tension free.",
      author: "Amit S.",
      badge: "E-commerce",
    },
    {
      txt: "Reliable aur fast CA support. Timely ITR filed without any hassle.",
      author: "Neha K.",
      badge: "Individual",
    },
  ];
  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-5xl mx-auto gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-foreground">
              Social Proof
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />{" "}
              <span className="font-bold text-foreground">5/5</span> Average Client Rating
            </p>
          </div>
          <a
            href="https://wa.me/918169887643"
            className="inline-flex h-9 sm:h-10 items-center justify-center rounded-full border border-border px-4 text-xs sm:text-sm font-semibold transition-colors hover:bg-[#D92525] hover:text-white"
          >
            See all reviews
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {revs.map((r, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl bg-brand-light/30 border border-brand/10 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 h-8 w-8 sm:h-10 sm:w-10 text-brand/10" />
              <div>
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 italic mb-5 leading-relaxed">"{r.txt}"</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-xs sm:text-sm text-foreground">{r.author}</span>
                <span className="text-[10px] sm:text-xs font-semibold text-brand bg-primary/10 px-2 py-0.5 sm:py-1 rounded-full">
                  {r.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConsultationCTA() {
  return (
    <section className="py-12 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
          Confused ho ki kya karna hai?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-5 sm:mb-6 leading-relaxed">
          Koi problem nahi—ek quick consultation mein clarity mil jayegi.
          <br className="hidden sm:inline" />
          <span className="font-semibold text-brand mt-1 sm:mt-2 inline-block">
            👉 15–30 min mein clear direction
          </span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center">
          <ConsultationModal
            defaultService="CA Consultation"
            title="Book Free CA Consultation"
            description="Speak directly with our CA team for clear guidance."
          >
            <button
              type="button"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-gradient-red px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-soft hover:shadow-lg transition-transform hover:-translate-y-0.5 w-full sm:w-auto text-center cursor-pointer"
            >
              Free Consultation Book Karein
            </button>
          </ConsultationModal>
          <a
            href="https://wa.me/918169887643"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#25D366] px-6 sm:px-8 text-sm sm:text-base font-bold text-white hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> WhatsApp pe Baat Karein
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({
  title = "Ab Guesswork Band Karein – Expert Se Baat Karein",
  sub = "Chahe aap business start kar rahe ho ya grow—right guidance aapka time aur paisa dono bachata hai.",
  ctaText = "Book Consultation",
  whatsappText = "Chat on WhatsApp",
  href,
  defaultService = "General CA Consultation",
}: {
  title?: string;
  sub?: string;
  ctaText?: string;
  whatsappText?: string;
  href?: string;
  defaultService?: string;
} = {}) {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden bg-gradient-red">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-5">
          <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
        </div>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          {title}
        </h2>
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center">
          {href ? (
            <a
              href={href}
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-white text-brand px-6 sm:px-8 text-sm sm:text-base font-bold shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              {ctaText}
            </a>
          ) : (
            <ConsultationModal
              defaultService={defaultService}
              title={ctaText ? ctaText.replace(/^[👉🔘\s]+/, "") : "Get a Callback within 24 Hours"}
            >
              <button
                type="button"
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-white text-brand px-6 sm:px-8 text-sm sm:text-base font-bold shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
              >
                {ctaText}
              </button>
            </ConsultationModal>
          )}
          <a
            href="https://wa.me/918169887643"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#25D366] text-white px-6 sm:px-8 text-sm sm:text-base font-bold shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> {whatsappText}
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    { icon: Zap, title: "Fast Support", text: "Quick turnaround on every query." },
    { icon: MessageSquareText, title: "Clear Guidance", text: "Simple language. No jargon." },
    { icon: UserCheck, title: "Dedicated CA Help", text: "Expert handling, end to end." },
    { icon: BadgeIndianRupee, title: "Transparent Pricing", text: "No hidden charges. Ever." },
  ];
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Why People Choose Us" title="Trusted CA support, the way it should be" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl bg-white p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20">
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-bold text-lg">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChooseNeed() {
  const cards = [
    { icon: Building2, badge: "Start Business", title: "Start Business", items: ["Pvt Ltd", "LLP", "Registration"], cta: "Start Now", color: "from-red-50 to-white" },
    { icon: Receipt, badge: "Save Tax & ITR", title: "Save Tax & File ITR", items: ["ITR", "Notices", "Capital Gain"], cta: "File ITR", color: "from-orange-50 to-white" },
    { icon: FileText, badge: "GST & TDS", title: "GST & TDS", items: ["GST", "TDS Property", "TDS Rent"], cta: "Get Help", color: "from-amber-50 to-white" },
    { icon: Landmark, badge: "MCA / ROC", title: "MCA / ROC", items: ["Company Compliance", "ROC Filing", "Amnesty"], cta: "Check Compliance", color: "from-rose-50 to-white" },
  ];
  return (
    <section id="start" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Choose Your Need" title="Aapko kya chahiye? Pick your journey." sub="Aap apna goal chunein. Baaki sab hum dekh lenge." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <a href="#lead" key={c.title} className={`group relative rounded-3xl border border-border bg-gradient-to-br ${c.color} p-6 hover:border-primary hover:shadow-soft hover:-translate-y-1 transition-all`}>
              <div className="h-14 w-14 rounded-2xl bg-white shadow-card flex items-center justify-center mb-5">
                <c.icon className="h-7 w-7 text-brand" />
              </div>
              <h3 className="font-display font-bold text-xl">{c.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                {c.items.map(i => <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}</li>)}
              </ul>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                {c.cta} <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularServices() {
  const items = [
    { icon: FileSpreadsheet, title: "GST Registration", text: "End-to-end GSTIN registration with expert filing.", popular: true },
    { icon: Receipt, title: "Old ITR / Updated ITR", text: "File or revise old returns hassle-free.", popular: true },
    { icon: Wallet, title: "TDS on Property", text: "26QB filing and compliance, fully managed." },
    { icon: Wallet, title: "TDS on Rent", text: "Tenant compliance for high-value rent payments." },
    { icon: Landmark, title: "MCA Amnesty", text: "Resolve old ROC defaults with the amnesty scheme." },
    { icon: Building2, title: "Company Registration", text: "Pvt Ltd / LLP / OPC — incorporation done right." },
    { icon: Briefcase, title: "Accounting", text: "Monthly bookkeeping, P&L, balance sheet ready." },
    { icon: Headphones, title: "CA Consultation", text: "1-on-1 consultation for clarity and direction." },
  ];
  return (
    <section id="services" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Our Most Popular Services" title="Sab kuch ek chhat ke neeche" sub="From registration to filings — pick what you need today." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="group relative rounded-2xl bg-white p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20">
              {it.popular && (
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-gradient-red text-white px-2 py-0.5 rounded-full">Popular</span>
              )}
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-semibold text-base">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              <a href="#lead" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                Know More <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell us your issue", text: "Share your requirement via call, WhatsApp or form." },
    { n: "02", title: "Documents review", text: "We list out exactly what's needed. No back and forth." },
    { n: "03", title: "CA processing", text: "Our team files, registers, and handles compliance." },
    { n: "04", title: "Confirmation & support", text: "You get confirmation + ongoing support." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="How It Works" title="Simple 4-step process" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-6 hover:border-primary/30 hover:shadow-card transition-all">
              <div className="font-display text-5xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-2 font-display font-bold text-lg">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-red opacity-10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-soft">
            <img src={praveen_about} alt="CA Praveen Jain" className="w-full aspect-square object-cover rounded-2xl" />
          </div>
          <div className="absolute -bottom-4 -right-2 sm:right-6 rounded-2xl bg-white shadow-soft p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><Star className="h-5 w-5 fill-amber-400 text-amber-400" /></div>
            <div><div className="font-bold text-sm">5 / 5</div><div className="text-xs text-muted-foreground">500+ happy clients</div></div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
            About Praveen J & Associates
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Business aur tax ko simple banana hi <span className="text-brand">hamara mission</span> hai
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Trusted CA firm helping businesses and individuals with tax, GST, MCA and financial compliance — with clarity, speed, and a human touch.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div><div className="font-display text-2xl font-bold text-brand">7+</div><div className="text-xs text-muted-foreground">Years Exp.</div></div>
            <div><div className="font-display text-2xl font-bold text-brand">500+</div><div className="text-xs text-muted-foreground">Clients Served</div></div>
            <div><div className="font-display text-2xl font-bold text-brand">5000+</div><div className="text-xs text-muted-foreground">Filings Done</div></div>
          </div>
          <a href="#lead" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-red px-6 text-sm font-semibold text-white shadow-soft hover:shadow-lg transition-all">
            Know More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const posts = [
    { tag: "GST", title: "GST Registration in India: A 2026 Guide for Small Businesses", read: "5 min read", color: "from-red-100 to-rose-50" },
    { tag: "ITR", title: "Updated ITR (ITR-U): Who can file & how it works", read: "6 min read", color: "from-amber-100 to-orange-50" },
    { tag: "MCA", title: "MCA Amnesty Scheme: Clearing Old ROC Defaults", read: "4 min read", color: "from-rose-100 to-red-50" },
  ];
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Blog & Knowledge Hub" title="Stay updated on tax, GST & compliance" />
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map(p => (
            <a key={p.title} href="#" className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all">
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <BookOpen className="h-12 w-12 text-brand/40" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-brand px-2 py-0.5 rounded-full">{p.tag}</span>
                  <span className="text-xs text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="font-display font-bold leading-snug group-hover:text-brand transition-colors">{p.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">Read More <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Kya online consultation possible hai?", a: "Bilkul. Hum Pan India online consultation, filings, aur compliance support dete hain via call, WhatsApp ya email." },
    { q: "Documents kaise share karein?", a: "Aap WhatsApp ya secure email par documents share kar sakte hain. Hum aapko ek checklist denge." },
    { q: "Pricing kya hai?", a: "Pricing service ke according vary karti hai. Free consultation par exact quote share karenge — no hidden charges." },
    { q: "Turnaround time kitna hota hai?", a: "Most filings 24–72 hours mein complete ho jaati hain, documents complete hone ke baad." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
