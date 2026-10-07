import React, { useState } from "react";
import { ServiceHeroForm } from "@/components/site/ServiceHeroForm";
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  AlertTriangle, 
  FileText, 
  Sparkles, 
  ChevronDown, 
  ShieldCheck, 
  Phone, 
  Star, 
  BadgeCheck, 
  ChevronRight 
} from "lucide-react";

interface DynamicBlockRendererProps {
  blocks: Array<{
    id: string;
    type: "hero" | "problems" | "whatIs" | "whoFor" | "benefits" | "process" | "documents" | "trust" | "faqs" | "moreKeywords" | "finalCta" | "features" | "cta" | string;
    data: any;
  }>;
  pageTitle: string;
}

export const DynamicBlockRenderer: React.FC<DynamicBlockRendererProps> = ({ blocks, pageTitle }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="w-full min-h-screen bg-white text-ink">
      {blocks.map((block) => {
        switch (block.type) {
          // 1. HERO SECTION
          case "hero":
            return (
              <section key={block.id} className="relative overflow-hidden bg-gradient-to-br from-brand/5 via-white to-brand/5 py-12 lg:py-20 border-b">
                <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-2 gap-10 items-center relative">
                  <div>
                    {block.data.badge && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
                        <Sparkles className="h-3.5 w-3.5" /> {block.data.badge}
                      </span>
                    )}
                    <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-ink break-words">
                      {block.data.title || pageTitle}
                    </h1>
                    {block.data.heroLead && (
                      <p className="mt-3 text-lg text-muted-foreground">{block.data.heroLead}</p>
                    )}
                    {block.data.subtitle && (
                      <p className="mt-2 text-muted-foreground">{block.data.subtitle}</p>
                    )}

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href="#lead"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-3 font-semibold shadow-lg shadow-brand/30 hover:bg-brand/90 transition-all text-center"
                      >
                        {block.data.primaryCtaText || "Request Callback"} <ArrowRight className="h-4 w-4" />
                      </a>
                      <a
                        href="https://wa.me/918169887643"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366]/10 text-[#128C7E] px-6 py-3 font-semibold hover:bg-[#25D366]/20 transition-all text-center"
                      >
                        <MessageCircle className="h-4 w-4" /> Chat with CA on WhatsApp
                      </a>
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1 font-semibold text-ink">5/5 Rating</span>
                      </div>
                      <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-600" /> CA Verified</span>
                      <span className="flex items-center gap-1"><BadgeCheck className="h-4 w-4 text-brand" /> 100% Online</span>
                    </div>
                  </div>

                  {block.data.showForm !== false && (
                    <ServiceHeroForm
                      title="Get expert CA help — free callback"
                      subtitle="Share details, our CA will connect within 30 mins."
                      serviceName={pageTitle}
                      ctaText={block.data.primaryCtaText || "Request Callback"}
                      formName="Service Hero Form"
                      ctaLocation="Route Hero Section"
                    />
                  )}
                </div>
              </section>
            );

          // 2. PROBLEMS SECTION
          case "problems":
            return (
              <section key={block.id} className="py-14 bg-white border-b">
                <div className="container mx-auto px-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
                    {block.data.heading || "Common Challenges & Problems Faced:"}
                  </h2>
                  {block.data.subheading && (
                    <p className="text-center text-muted-foreground mt-2">{block.data.subheading}</p>
                  )}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {(block.data.items || []).map((problem: string, idx: number) => (
                      <div key={idx} className="flex gap-3 p-5 rounded-xl border bg-red-50/40 hover:bg-red-50 transition-colors">
                        <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                        <p className="text-sm text-ink">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 3. WHAT IS SECTION
          case "whatIs":
            return (
              <section key={block.id} className="py-14 bg-muted/30 border-b">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{block.data.heading || "Overview & Key Provision"}</h2>
                  <ul className="mt-6 space-y-3">
                    {(block.data.points || []).map((point: string, idx: number) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-ink">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {block.data.note && (
                    <div className="mt-5 rounded-xl bg-brand/5 border border-brand/20 p-4 text-sm text-ink">
                      <span className="font-semibold text-brand">Important Note: </span>{block.data.note}
                    </div>
                  )}
                </div>
              </section>
            );

          // 4. WHO FOR SECTION
          case "whoFor":
            return (
              <section key={block.id} className="py-14 bg-white border-b">
                <div className="container mx-auto px-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
                    {block.data.heading || "WHO SHOULD APPLY?"}
                  </h2>
                  <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {(block.data.items || []).map((item: string, idx: number) => (
                      <div key={idx} className="p-5 rounded-xl border hover:border-brand/40 hover:shadow-md transition-all bg-white">
                        <div className="h-9 w-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3">
                          <BadgeCheck className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium text-ink">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 5. BENEFITS & IMPORTANT POINTS SECTION
          case "benefits":
            return (
              <section key={block.id} className="py-14 bg-muted/30 border-b">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-brand" /> {block.data.benefitsHeading || "KEY BENEFITS"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(block.data.items || []).map((benefit: string, idx: number) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
                    <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-brand" /> {block.data.importantHeading || "IMPORTANT POINTS"}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {(block.data.important || []).map((point: string, idx: number) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <ChevronRight className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );

          // 6. PROCESS SECTION
          case "process":
            return (
              <section key={block.id} className="py-14 bg-white border-b">
                <div className="container mx-auto px-4">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
                    {block.data.heading || "OUR PROCESS"}
                  </h2>
                  <p className="text-center text-muted-foreground mt-2">Simple, transparent, and expert-led steps.</p>
                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {(block.data.steps || []).map((step: string, idx: number) => (
                      <div key={idx} className="relative p-5 rounded-xl border bg-gradient-to-br from-white to-brand/5 hover:shadow-lg transition-all">
                        <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand/30">
                          {idx + 1}
                        </div>
                        <p className="mt-3 text-sm font-medium text-ink">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 7. DOCUMENTS REQUIRED SECTION
          case "documents":
            return (
              <section key={block.id} className="py-14 bg-muted/30 border-b">
                <div className="container mx-auto px-4 max-w-4xl">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
                    {block.data.heading || "DOCUMENTS REQUIRED"}
                  </h2>
                  <p className="text-center text-muted-foreground mt-2">We will guide you step-by-step on documentation.</p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(block.data.items || []).map((doc: string, idx: number) => (
                      <div key={idx} className="flex gap-3 p-4 rounded-xl bg-white border hover:border-brand/40 transition-colors">
                        <FileText className="h-5 w-5 text-brand shrink-0" />
                        <span className="text-sm text-ink">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 8. TRUST & REVIEWS SECTION
          case "trust":
            return (
              <section key={block.id} className="py-14 bg-white border-b">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
                    {block.data.heading || "Trusted by Businesses Across India"}
                  </h2>
                  <div className="mt-3 flex items-center justify-center gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 font-semibold">5/5 Rating on Google</span>
                  </div>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {(block.data.reviews || [
                      "Filed my taxes in two days — accurate and stress-free.",
                      "Got my registration quickly. Excellent CA guidance.",
                      "Notice resolved smoothly. Highly recommended."
                    ]).map((review: string, idx: number) => (
                      <blockquote key={idx} className="p-5 rounded-xl border bg-muted/30 text-sm italic text-ink">
                        "{review}"
                      </blockquote>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 9. FAQ ACCORDION SECTION
          case "faqs":
            return (
              <section key={block.id} className="py-14 bg-muted/30 border-b">
                <div className="container mx-auto px-4 max-w-3xl">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink text-center">
                    {block.data.heading || "Frequently Asked Questions"}
                  </h2>
                  <div className="mt-8 space-y-3">
                    {(block.data.faqs || []).map((faq: any, idx: number) => (
                      <div key={idx} className="rounded-xl border bg-white overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                        >
                          <span className="font-semibold text-ink">{faq.q}</span>
                          <ChevronDown className={`h-5 w-5 text-brand shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                        </button>
                        {openFaq === idx && (
                          <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          // 10. MORE / KEYWORDS TAGS SECTION
          case "moreKeywords":
            return (
              <section key={block.id} className="py-14 bg-muted/30 border-b">
                <div className="container mx-auto px-4 max-w-5xl">
                  <div className="rounded-3xl border bg-white px-6 py-8 lg:px-10 lg:py-10 shadow-sm text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-xs font-semibold">
                      <Sparkles className="h-3.5 w-3.5" /> Quick Topics
                    </span>
                    <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold text-ink">
                      {block.data.title || "Related Topics & Keywords"}
                    </h2>
                    <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
                      {(block.data.keywords || []).map((kw: string, idx: number) => (
                        <span key={idx} className="inline-flex items-center rounded-full border bg-muted/30 px-4 py-2 text-sm font-medium text-ink shadow-sm">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );

          // 11. FINAL CTA BANNER SECTION
          case "finalCta":
          case "cta":
            return (
              <section key={block.id} className="py-16 bg-brand text-white">
                <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl font-bold">
                    {block.data.heading || "Ready to get started with expert CA assistance?"}
                  </h2>
                  <p className="text-white/90">
                    {block.data.text || "Get complete guidance, fast computation, and stress-free compliance."}
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href="#lead"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white text-brand px-6 py-3 font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                      {block.data.buttonText || "Request Callback"} <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="tel:+918169887643"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/30 px-6 py-3 font-semibold hover:bg-white/20 transition-colors"
                    >
                      <Phone className="h-4 w-4" /> Call CA Now
                    </a>
                  </div>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
