import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  CoreServices,
  BusinessPackages,
  WhyChooseUs,
  AboutSnapshot,
  FreeTools,
  Reviews,
  ConsultationCTA,
  FinalCTA,
} from "@/components/site/Sections";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { FadeIn } from "@/components/ui/fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Praveen J & Associates — Chartered Accountants | Tax, Compliance aur Business Setup",
      },
      {
        name: "description",
        content:
          "Apna Business Start, Manage aur Grow Karein. Expert CA support for tax, GST, MCA and business compliance — stress-free, enquiry-based assistance.",
      },
      { property: "og:title", content: "Praveen J & Associates — Chartered Accountants" },
      {
        property: "og:description",
        content:
          "Apna Business Start, Manage aur Grow Karein. Expert CA support for tax, GST, MCA and business compliance — stress-free, enquiry-based assistance.",
      },
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

        <FadeIn direction="up">
          <CoreServices />
        </FadeIn>

        <FadeIn direction="up" delay="delay-75">
          <BusinessPackages />
        </FadeIn>

        <FadeIn direction="up">
          <WhyChooseUs />
        </FadeIn>

        <FadeIn direction="left">
          <AboutSnapshot />
        </FadeIn>

        <FadeIn direction="up" delay="delay-75">
          <FreeTools />
        </FadeIn>

        <FadeIn direction="up">
          <Reviews />
        </FadeIn>

        <FadeIn direction="up">
          <ConsultationCTA />
        </FadeIn>

        <FadeIn direction="up">
          <FinalCTA />
        </FadeIn>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
