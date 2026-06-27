import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { LegalLayout } from "./privacy-policy";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Legal Disclaimer — Praveen J & Associates" },
      { name: "description", content: "Important information about the use of content and services provided by Praveen J & Associates." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <LegalLayout
      icon={AlertTriangle}
      title="Legal Disclaimer — Praveen J & Associates"
      tagline="Important Information About Our Services"
      subtitle="The information provided by Praveen J & Associates is for general guidance only and should not be considered professional advice without consultation."
      sections={[
        { title: "General Disclaimer", intro: "All content on this website is published in good faith and for general informational purposes only. While we strive for accuracy, we do not guarantee:", bullets: ["Completeness", "Reliability", "Accuracy of information"], note: "Users are advised to seek professional consultation before making decisions." },
        { title: "Professional Advice Disclaimer", intro: "Our services include taxation, compliance, and financial advisory.", bullets: ["Information shared on the website or via communication does not constitute professional advice unless we are formally engaged", "Every financial situation is unique and requires personalized consultation"] },
        { title: "Limitation of Liability", intro: "Praveen J & Associates shall not be held liable for:", bullets: ["Any losses or damages arising from use of this website", "Decisions taken based on general information", "Errors or omissions in content", "Delays or failures due to external factors"], note: "Use of information is at your own risk." },
        { title: "External Links Disclaimer", intro: "Our website may contain links to third-party websites. We provide links for convenience but do not control or guarantee external content. We are not responsible for third-party websites." },
        { title: "Service Disclaimer", bullets: ["Services are provided based on client-provided data", "Accuracy depends on correctness of information shared", "Timelines may vary due to regulatory authorities"] },
        { title: "No Guarantee Disclaimer", intro: "We do not guarantee:", bullets: ["Specific financial outcomes", "Tax savings results", "Approval timelines from authorities"], note: "Professional services are advisory in nature." },
        { title: "Changes to Disclaimer", intro: "We reserve the right to update this disclaimer at any time. Users are advised to review this page periodically." },
      ]}
    />
  ),
});
