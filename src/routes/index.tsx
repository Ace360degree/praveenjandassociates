import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyUs, ChooseNeed, PopularServices, HowItWorks, FreeTools, About, Reviews, Blog, FAQ, FinalCTA } from "@/components/site/Sections";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praveen J & Associates — Chartered Accountants | ITR, GST, MCA, TDS" },
      { name: "description", content: "Trusted CA support for ITR filing, GST, TDS, MCA/ROC, company registration and accounting. Pan India online support with 1000+ happy clients." },
      { property: "og:title", content: "Praveen J & Associates — Chartered Accountants" },
      { property: "og:description", content: "Expert CA support for tax, GST, MCA and business compliance — stress-free, enquiry-based assistance." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <ChooseNeed />
        <PopularServices />
        <HowItWorks />
        
        <FreeTools />
        <About />
        <Reviews />
        <Blog />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
