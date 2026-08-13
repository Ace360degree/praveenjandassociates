import { Phone, Mail, MapPin, MessageCircle, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-sm">
              <img src={logo} alt="Praveen J & Associates" className="h-11 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm leading-6 text-white/70 max-w-sm">
              Trusted Chartered Accountants helping businesses and individuals with tax, GST, MCA and financial compliance across India.
            </p>
            <div className="mt-5 flex gap-2">
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {([
              {
                h: "Services", items: [
                  { label: "Income Tax", to: "/income-tax" },
                  { label: "GST", to: "/gst" },
                  { label: "TDS & TCS", to: "/tds-tcs" },
                  { label: "MCA / ROC", to: "/mca" },
                  { label: "Registrations", to: "/registrations" },
                  { label: "Accounting", to: "/accounting-audit-services" },
                ]
              },
              {
                h: "About", items: [
                  { label: "Company Profile", to: "/company-profile" },
                  { label: "Contact", to: "/contact-us" },
                  { label: "Consultation", to: "/consultation" },
                  { label: "Compliance", to: "/compliance" },
                ]
              },
              {
                h: "Resources", items: [
                  { label: "Blog", to: "/blog" },
                  { label: "Bank Loan Docs", to: "/bank-loan" },
                  { label: "Full Packages", to: "/our-full-packages-services" },
                ]
              },
              {
                h: "Policies", items: [
                  { label: "Privacy Policy", to: "/privacy-policy" },
                  { label: "Terms & Conditions", to: "/terms-and-conditions" },
                  { label: "Disclaimer", to: "/disclaimer" },
                  { label: "Company Policies", to: "/company-policies" },
                ]
              },
            ] as const).map(col => (
              <div key={col.h}>
                <h4 className="font-display font-semibold mb-3">{col.h}</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  {col.items.map(i => (
                    <li key={i.label}>
                      <Link to={i.to} className="hover:text-white transition-colors">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-brand shrink-0" />
            <span>+91 8169887643</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-brand shrink-0" />
            <span>pjain4069@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 sm:justify-end">
            <MapPin className="h-4 w-4 text-brand shrink-0" />
            <span className="leading-6">
              First Floor, Office no. 19, Evershine Mall, New Link Rd, Malad,
              Ram Nagar, Malad West, Mumbai, Maharashtra 400064.
            </span>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Praveen J & Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918169887643"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}
