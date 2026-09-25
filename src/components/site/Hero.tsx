import { useState } from "react";
import { CheckCircle2, MessageCircle, Phone, Play, Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";
import praveen_home from "@/assets/praveen-home.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const SERVICES = ["ITR Filing", "GST", "TDS", "MCA/ROC", "Registration", "Accounting", "Consultation"];

export function Hero() {
  const [submitted, setSubmitted] = useState(false);

  const videoCardContent = (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft bg-white p-2.5 sm:p-3 border border-border">
      <div className="relative aspect-[16/10] sm:aspect-[16/12] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
        <img src={praveen_home} alt="CA Praveen Jain" className="absolute inset-0 w-full h-full object-cover" />
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute inset-0 m-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/70 backdrop-blur shadow-soft flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" aria-label="Play video">
              <Play className="h-5 w-5 sm:h-6 sm:w-6 text-brand fill-brand ml-0.5 sm:ml-1" />
            </button>
          </DialogTrigger>
          <DialogContent className="w-[95vw] sm:max-w-4xl p-0 border-none bg-transparent shadow-none">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/bpllR6l2A5s?si=EOZ4d4GvSjsPz4yj&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </DialogContent>
        </Dialog>
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Intro Video
        </div>
      </div>
      <div className="px-1.5 sm:px-2 pt-2.5 sm:pt-3 pb-0.5 flex items-center justify-between">
        <div>
          <div className="font-display font-bold text-sm sm:text-base text-foreground">CA Praveen Jain</div>
          <div className="text-[11px] sm:text-xs text-muted-foreground">Founder · 7+ years experience</div>
        </div>
        <div className="flex -space-x-1">
          {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />)}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-hero max-w-full w-full">
      {/* Background orbs safely contained inside overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 -right-20 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-3.5 sm:px-4 pt-6 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10 max-w-full">
        <div className="lg:col-span-7 min-w-0">
          <div className="inline-flex max-w-full items-center gap-2 rounded-2xl sm:rounded-full bg-white border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-brand shadow-card leading-tight">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate sm:whitespace-normal">Apna Business Start, Manage aur Grow Karein – Without Stress</span>
          </div>
          <h1 className="mt-3.5 sm:mt-5 font-display text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-[1.05] text-foreground">
            Tax, Compliance aur Business Setup –{" "}
            <span className="text-brand block sm:inline">Sab Kuch Ek Jagah, Expert CA ke Saath</span>
          </h1>
          <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Business start karna ho, GST handle karna ho ya tax planning karni ho — har step pe expert guidance milegi, bina confusion ke. Aap growth pe focus karein, compliance aur filings hum handle karenge.
          </p>

          {/* Mobile-only Video Card placement: comes FIRST right after heading/subtitle */}
          <div className="mt-4 lg:hidden">
            {videoCardContent}
          </div>

          <ul className="mt-4 space-y-2 text-xs sm:text-sm lg:text-base font-medium text-foreground/80">
            <li className="flex items-start sm:items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" /> Registration se leke annual compliance tak – end-to-end support
            </li>
            <li className="flex items-start sm:items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5 sm:mt-0" /> Startups, business owners aur professionals ka trusted partner
            </li>
          </ul>
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-xs sm:text-sm font-medium">
            <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" /> 4.8/5 Client Rating</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-brand shrink-0" /> 1000+ Businesses Served</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand shrink-0" /> Experienced Chartered Accountants</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-brand shrink-0" /> Pan India Online Support</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 box-border w-full">
            <a href="#lead" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-gradient-red px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all w-full sm:w-auto text-center box-border">
              Free Consultation Book Karein <ArrowRight className="h-4 w-4 shrink-0" />
            </a>
            <a href="https://wa.me/918169887643" target="_blank" rel="noreferrer" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition w-full sm:w-auto text-center box-border">
              <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp pe Baat Karein
            </a>
            <a href="#services" className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-white border border-border px-4 sm:px-6 text-xs sm:text-sm font-semibold text-foreground hover:border-primary hover:text-brand transition w-full sm:w-auto text-center box-border">
              Services Explore Karein
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-w-0">
          {/* Desktop Video Card */}
          <div className="hidden lg:block">
            {videoCardContent}
          </div>

          {/* Lead form */}
          <div id="lead" className="mt-4 sm:mt-5 rounded-2xl sm:rounded-3xl bg-white shadow-soft border border-border p-4 sm:p-6 w-full box-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-base sm:text-lg">Talk to a CA</h3>
              <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-0.5 sm:py-1 rounded-full">Free</span>
            </div>
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
                <p className="mt-2 font-semibold text-sm sm:text-base">Thanks! We'll reach out shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid gap-3 w-full"
              >
                <input required placeholder="Your Name" className="h-10 sm:h-11 rounded-xl border border-border px-3.5 sm:px-4 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-w-0 w-full box-border" />
                <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" className="h-10 sm:h-11 rounded-xl border border-border px-3.5 sm:px-4 text-xs sm:text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-w-0 w-full box-border" />
                <select required className="h-10 sm:h-11 rounded-xl border border-border px-3.5 sm:px-4 text-xs sm:text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 min-w-0 w-full box-border">
                  <option value="">Select Service</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
                <button className="h-11 sm:h-12 rounded-xl bg-gradient-red text-white font-semibold text-sm sm:text-base shadow-soft hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer w-full box-border">
                  Talk To CA <ArrowRight className="h-4 w-4 shrink-0" />
                </button>
                <p className="text-[11px] sm:text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> No spam. Quick CA response.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
