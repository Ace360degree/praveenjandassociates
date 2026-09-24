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
  Play,
} from "lucide-react";
import praveen_about from "@/assets/praveen-about.jpg";
import { Link } from "@tanstack/react-router";

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>}
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
    <section id="services" className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Our Core Services"
          title="Aap growth pe focus karein, compliance hum handle karenge"
        />
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-primary/10 hover:border-brand/40 hover:shadow-soft transition-all group"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="h-14 w-14 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 shadow-md">
                  <sec.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground">{sec.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{sec.desc}</p>
                  <p className="mt-3 text-sm font-semibold text-brand flex items-start gap-1">
                    <ArrowRight className="h-4 w-4 shrink-0 mt-0.5" /> {sec.benefit}
                  </p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-2">
                    {sec.links.map((l) => (
                      <Link
                        key={l.label}
                        to={l.href}
                        className="text-sm text-foreground/80 hover:text-brand flex items-center gap-1.5 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand/30 shrink-0" /> {l.label}
                      </Link>
                    ))}
                  </div>
                  <a
                    href={sec.links[0].href}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary/10 px-4 text-sm font-semibold text-brand transition-colors hover:bg-[#D92525] hover:text-white group-hover:shadow-md"
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
    <section className="py-16 sm:py-24 bg-white border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          All-in-One Compliance Packages – Simple, Affordable & Hassle-Free
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Alag-alag services manage karna mushkil hota hai—isliye humne ready packages banaye hain
          jo complete compliance cover karte hain. <br />
          <span className="text-brand font-semibold block mt-1">
            👉 One package = everything sorted
          </span>
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {pkgs.map((p) => (
            <div
              key={p}
              className="p-5 rounded-2xl border border-primary/20 bg-brand-light hover:bg-[#D92525]/10 transition-colors"
            >
              <CheckCircle2 className="h-6 w-6 text-brand mb-3" />
              <h3 className="font-semibold text-foreground">{p}</h3>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold text-foreground/80">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Cost-effective
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Dedicated CA support
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Timely filings
          </span>
        </div>

        <a
          href="#packages"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-red px-8 text-sm font-bold text-white shadow-soft hover:shadow-lg transition-transform hover:-translate-y-0.5"
        >
          View All Packages
        </a>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-foreground text-white rounded-t-3xl sm:rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-white/70 sm:text-lg">
            Aapko sirf CA nahi, ek long-term business partner chahiye. Humara approach simple
            hai—clarity, speed aur trust.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Clear guidance", sub: "bina jargon ke" },
            { title: "Fast process", sub: "delays nahi" },
            { title: "Transparent pricing", sub: "no hidden cost" },
            { title: "End-to-end support", sub: "start se scale tak" },
          ].map((w) => (
            <div
              key={w.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <CheckCircle2 className="h-7 w-7 text-white mb-4" />
              <h3 className="text-lg font-bold">{w.title}</h3>
              <p className="text-white/60 text-sm mt-1">{w.sub}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-brand-light">
            👉 Hum sirf service nahi dete—aapka business simplify karte hain
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutSnapshot() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden aspect-square sm:aspect-[4/3] shadow-card">
          <img
            src={praveen_about}
            alt="Praveen J & Associates"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold text-white mb-2">Praveen J & Associates</h3>
            <p className="text-white/80 text-sm">
              Experience + practical approach = better results
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            A Trusted CA Firm
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Ek trusted CA firm jo businesses aur individuals ko help karta hai tax, compliance aur
            financial clarity ke saath grow karne mein.
          </p>
          <a
            href="/about"
            className="mt-6 inline-flex h-12 items-center gap-2 rounded-full border border-primary/20 bg-brand-light px-6 text-sm font-semibold text-brand transition-colors hover:bg-[#D92525] hover:text-white"
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
    <section className="py-16 sm:py-24 bg-brand-light/50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
          Free Tools & Guides
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Tax samajhna mushkil nahi hona chahiye. <br />
          <span className="text-brand font-semibold mt-1 inline-block">
            👉 Aap khud calculate karein, phir expert se confirm karein
          </span>
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-left">
          {tools.map((t) => (
            <Link
              key={t.title}
              to={t.href}
              className="group p-5 rounded-2xl bg-white shadow-soft border border-border hover:border-brand/40 transition-all flex flex-col justify-between h-32"
            >
              <Calculator className="h-6 w-6 text-brand" />
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-foreground group-hover:text-brand transition-colors">
                  {t.title}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-1 transition-all" />
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Social Proof
            </h2>
            <p className="mt-2 text-muted-foreground flex items-center gap-1.5">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />{" "}
              <span className="font-bold text-foreground">4.8/5</span> Average Client Rating
            </p>
          </div>
          <a
            href="https://wa.me/918169887643"
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold transition-colors hover:bg-[#D92525] hover:text-white"
          >
            See all reviews
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {revs.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-brand-light/30 border border-brand/10 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-brand/10" />
              <div className="flex gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/90 italic mb-5 leading-relaxed">"{r.txt}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-foreground">{r.author}</span>
                <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-1 rounded-full">
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
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-display text-4xl font-bold text-foreground mb-4">
          Confused ho ki kya karna hai?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Koi problem nahi—ek quick consultation mein clarity mil jayegi.
          <br />
          <span className="font-semibold text-brand mt-2 inline-block">
            👉 15–30 min mein clear direction
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#lead"
            className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-red px-8 text-base font-bold text-white shadow-soft hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Free Consultation Book Karein
          </a>
          <a
            href="https://wa.me/918169887643"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#25D366] px-8 text-base font-bold text-white hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp pe Baat Karein
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-brand relative overflow-hidden">
      <div className="container mx-auto px-4 relative text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Ab Guesswork Band Karein – Expert Se Baat Karein
        </h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
          Chahe aap business start kar rahe ho ya grow—right guidance aapka time aur paisa dono
          bachata hai.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#lead"
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-brand shadow-lg hover:scale-105 transition-transform group"
          >
            <Phone className="mr-2 h-5 w-5" /> Call Now
          </a>
          <a
            href="https://wa.me/918169887643"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-black/20 border border-white/20 backdrop-blur px-8 text-base font-bold text-white hover:bg-black/30 transition-colors"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
