import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { LegalLayout } from "./privacy-policy";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Praveen J & Associates" },
      { name: "description", content: "Terms governing the use of Praveen J & Associates website and professional CA services." },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: () => (
    <LegalLayout
      icon={FileText}
      title="Terms & Conditions — Praveen J & Associates"
      tagline="Please Read Our Terms Before Using Our Services"
      subtitle="By accessing our website or services, you agree to comply with the following terms — ensuring transparency, trust and professional service standards."
      sections={[
        { title: "Introduction", intro: "These Terms & Conditions govern your use of the website and services provided by Praveen J & Associates. By using our services, you acknowledge that you have read, understood, and agreed to these terms." },
        { title: "Use of Services", intro: "By using our services, you agree:", bullets: ["To provide accurate and complete information", "Not to misuse our services or website", "To comply with applicable laws and regulations"], note: "Any misuse may result in termination of services." },
        { title: "Scope of Services", intro: "We provide professional services including:", bullets: ["Tax consultation and filing", "GST and compliance services", "Business registration and advisory", "Accounting and financial support"], note: "Services are delivered based on information provided by the client." },
        { title: "Client Responsibilities", bullets: ["Providing correct and complete data", "Sharing documents on time", "Responding to queries promptly", "Reviewing submissions before approval"], note: "Delays or errors from the client side may affect service timelines." },
        { title: "Fees & Payments", bullets: ["Fees will be communicated before starting work", "Payments must be made as agreed", "Additional services may incur extra charges"], note: "No hidden charges policy is followed." },
        { title: "Limitation of Liability", intro: "Praveen J & Associates shall not be liable for:", bullets: ["Decisions made without professional consultation", "Incorrect or incomplete information provided by clients", "Delays caused by government portals or third parties"] },
        { title: "Confidentiality", bullets: ["All client information is kept strictly confidential", "Data is used only for service delivery", "No unauthorized sharing of client data"] },
        { title: "Prohibited Use", intro: "Users must not:", bullets: ["Use the website for unlawful purposes", "Attempt to breach website security", "Misrepresent identity or information"] },
        { title: "Cancellation & Termination", bullets: ["Services may be terminated in case of non-payment or misuse", "Clients can request cancellation as per agreed terms", "Refunds (if applicable) depend on service stage"] },
        { title: "Changes to Terms", intro: "We reserve the right to update these Terms & Conditions at any time. Continued use of the website implies acceptance of updated terms." },
        { title: "Governing Law", intro: "These terms are governed by the laws of India. Any disputes shall be subject to jurisdiction of Mumbai courts." },
      ]}
    />
  ),
});
