import {
  Zap, MessageSquareText, UserCheck, BadgeIndianRupee, ArrowRight, Building2, Receipt, FileText,
  Landmark, Calculator, BookOpen, TrendingUp, Wallet, Briefcase, Star,
  ChevronDown, FileSpreadsheet, ClipboardCheck, Headphones, Sparkles,
} from "lucide-react";
import { useState } from "react";
import praveen from "@/assets/praveen.jpg";

function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p>}
    </div>
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
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-brand flex items-center justify-center group-hover:bg-gradient-red group-hover:text-white transition-colors">
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


export function FreeTools() {
  const tools = [
    { icon: Calculator, title: "Income Tax Calculator", text: "Estimate your tax in seconds." },
    { icon: TrendingUp, title: "Capital Gain Calculator", text: "STCG / LTCG made simple." },
    { icon: BookOpen, title: "Advance Tax Guide", text: "Stay ahead of due dates." },
    { icon: FileText, title: "Tax Blog", text: "Updates, tips & deep dives." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Free Tools" title="Free tools & guides for smart tax planning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map(t => (
            <a key={t.title} href="#" className="group rounded-2xl bg-white border border-border p-6 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-brand flex items-center justify-center">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
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
            <img src={praveen} alt="CA Praveen Jain" className="w-full aspect-square object-cover rounded-2xl" />
          </div>
          <div className="absolute -bottom-4 -right-2 sm:right-6 rounded-2xl bg-white shadow-soft p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><Star className="h-5 w-5 fill-amber-400 text-amber-400" /></div>
            <div><div className="font-bold text-sm">4.8 / 5</div><div className="text-xs text-muted-foreground">1000+ happy clients</div></div>
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
            <div><div className="font-display text-2xl font-bold text-brand">10+</div><div className="text-xs text-muted-foreground">Years Exp.</div></div>
            <div><div className="font-display text-2xl font-bold text-brand">1000+</div><div className="text-xs text-muted-foreground">Clients Served</div></div>
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

export function Reviews() {
  const reviews = [
    { name: "Ankit Sharma", role: "Founder, D2C Brand", text: "Praveen and team handled our Pvt Ltd registration and GST setup. Super smooth, no jargon, very responsive." },
    { name: "Neha Verma", role: "Freelance Designer", text: "Filed my ITR with capital gains in record time. Got all my doubts cleared on a single call. Highly recommend." },
    { name: "Rohit Mehta", role: "Restaurant Owner", text: "Monthly GST + accounting is fully off my plate now. Worth every rupee for the peace of mind." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Client Reviews" title="Loved by founders, freelancers & businesses" />
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div key={r.name} className="rounded-2xl bg-white border border-border p-6 shadow-card hover:shadow-soft transition-all">
              <div className="flex gap-0.5 mb-3">{[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t">
                <div className="h-10 w-10 rounded-full bg-gradient-red text-white flex items-center justify-center font-bold">{r.name[0]}</div>
                <div><div className="font-semibold text-sm">{r.name}</div><div className="text-xs text-muted-foreground">{r.role}</div></div>
              </div>
            </div>
          ))}
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

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-red">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="container mx-auto px-4 relative text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-5">
          <ClipboardCheck className="h-4 w-4" /> Limited consultation slots
        </div>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Guesswork Band Karein — Expert CA Se Baat Karein
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          Business ho ya tax problem — clarity aur compliance dono zaruri hai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:+919999999999" className="inline-flex h-12 items-center gap-2 rounded-full bg-white text-brand font-semibold px-6 shadow-lg hover:-translate-y-0.5 transition-all">
            <Headphones className="h-4 w-4" /> Call Now
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-6 shadow-lg hover:-translate-y-0.5 transition-all">
            WhatsApp
          </a>
          <a href="#lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-ink text-white font-semibold px-6 shadow-lg hover:-translate-y-0.5 transition-all">
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}