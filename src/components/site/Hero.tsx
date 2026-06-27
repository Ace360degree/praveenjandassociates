import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone, Play, Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";
import praveen from "@/assets/praveen.jpg";

const SERVICES = ["ITR Filing", "GST", "TDS", "MCA/ROC", "Registration", "Accounting", "Consultation"];

export function Hero() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs font-semibold text-brand shadow-card">
            <Sparkles className="h-3.5 w-3.5" /> Trusted CA Support
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Tax, GST, MCA aur Business Compliance —{" "}
            <span className="text-brand">Sab Kuch Ek Jagah</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Business start karna ho, GST handle karna ho, ITR file karna ho ya company compliance manage karna ho — expert CA support ke saath stress-free process.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8 Rated Support</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand" /> 1000+ Clients</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand" /> Pan India Online Support</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#lead" className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-red px-6 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all">
              Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white hover:opacity-90 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="#services" className="inline-flex h-12 items-center gap-2 rounded-full bg-white border border-border px-6 text-sm font-semibold text-foreground hover:border-primary hover:text-brand transition">
              Explore Services
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          {/* Video / Praveen card */}
          <div className="relative rounded-3xl overflow-hidden shadow-soft bg-white p-3">
            <div className="relative aspect-[4/5] sm:aspect-[16/12] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
              <img src={praveen} alt="CA Praveen Jain" className="absolute inset-0 w-full h-full object-cover" />
              <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 backdrop-blur shadow-soft flex items-center justify-center hover:scale-110 transition-transform" aria-label="Play video">
                <Play className="h-6 w-6 text-brand fill-brand ml-1" />
              </button>
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Intro Video
              </div>
            </div>
            <div className="px-2 pt-3 pb-1 flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-foreground">CA Praveen Jain</div>
                <div className="text-xs text-muted-foreground">Founder · 10+ years experience</div>
              </div>
              <div className="flex -space-x-1">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              </div>
            </div>
          </div>
          {/* Lead form */}
          <div id="lead" className="mt-5 rounded-3xl bg-white shadow-soft border border-border p-5 sm:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg">Talk to a CA</h3>
              <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-1 rounded-full">Free</span>
            </div>
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
                <p className="mt-2 font-semibold">Thanks! We'll reach out shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid gap-3"
              >
                <input required placeholder="Your Name" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                <select required className="h-11 rounded-xl border border-border px-4 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Select Service</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="h-12 rounded-xl bg-gradient-red text-white font-semibold shadow-soft hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Talk To CA <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> No spam. Quick CA response.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}