import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GST_SERVICES } from "@/data/gstServices";
import { ITR_SERVICES } from "@/data/incomeTaxServices";
import { MCA_SERVICES } from "@/data/mcaServices";
import { CONSULTATION_SERVICES } from "@/data/consultationServices";
import { COMPLIANCE_BUNDLES } from "@/data/compliancePackages";
import { BANK_LOAN_SERVICES } from "@/data/bankLoanServices";
import { ACCOUNTING_SERVICES } from "@/data/accountingServices";
import { REGISTRATION_SERVICES } from "@/data/registrationServices";
import { TDS_SERVICES } from "@/data/tdsServices";
import logo from "@/assets/logo.png";

const NAV: { label: string; href: string }[] = [];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [gstOpen, setGstOpen] = useState(false);
  const [itOpen, setItOpen] = useState(false);
  const [mcaOpen, setMcaOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const [tdsOpen, setTdsOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-background/90 backdrop-blur-md shadow-card py-2"
          : "bg-background/70 backdrop-blur-sm py-3"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Praveen J & Associates" className={`transition-all ${scrolled ? "h-9" : "h-11"}`} />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          <div className="relative group">
            <Link
              to="/income-tax"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Income Tax <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/income-tax"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Income Tax Services →
                </Link>
                {ITR_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/income-tax/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/gst"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              GST <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/gst"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All GST Services →
                </Link>
                {GST_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/gst/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/mca"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              MCA / ROC <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/mca"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All MCA / ROC Services →
                </Link>
                {MCA_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/mca/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/consultation"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Consultation <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/consultation"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Consultation Services →
                </Link>
                {CONSULTATION_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/consultation/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/compliance"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Compliance <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-72 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/compliance"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Compliance Bundles →
                </Link>
                {COMPLIANCE_BUNDLES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/compliance/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/bank-loan"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Bank Loan <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-80 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/bank-loan"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Bank Loan Services →
                </Link>
                {BANK_LOAN_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/bank-loan/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/registrations"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Registrations <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-80 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/registrations"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Registration Services →
                </Link>
                {REGISTRATION_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/registrations/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/tds-tcs"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              TDS & TCS <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-80 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/tds-tcs"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All TDS & TCS Services →
                </Link>
                {TDS_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/tds-tcs/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors"
            >
              {n.label}
            </a>
          ))}
          <div className="relative group">
            <Link
              to="/accounting-audit-services"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand rounded-md transition-colors inline-flex items-center gap-1"
            >
              Accounting & Audit <ChevronDown className="h-3.5 w-3.5" />
            </Link>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-80 z-50">
              <div className="bg-background border rounded-xl shadow-lg overflow-hidden">
                <Link
                  to="/accounting-audit-services"
                  className="block px-4 py-2.5 text-sm font-semibold text-brand hover:bg-brand-light border-b"
                >
                  All Accounting & Audit Services →
                </Link>
                {ACCOUNTING_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/accounting-audit-services/$slug"
                    params={{ slug: s.slug }}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-brand transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+919999999999" className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-brand-light hover:bg-primary/10 transition">
            <Phone className="h-4 w-4 text-brand" />
          </a>
          <Link
            to="/contact-us"
            className="hidden md:inline-flex h-10 items-center rounded-full bg-gradient-red px-5 text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Book Consultation
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-muted">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            <button
              onClick={() => setItOpen(!itOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Income Tax <ChevronDown className={`h-4 w-4 transition-transform ${itOpen ? "rotate-180" : ""}`} />
            </button>
            {itOpen && (
              <div className="pl-3 border-b">
                <Link to="/income-tax" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Income Tax Services
                </Link>
                {ITR_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/income-tax/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setGstOpen(!gstOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              GST <ChevronDown className={`h-4 w-4 transition-transform ${gstOpen ? "rotate-180" : ""}`} />
            </button>
            {gstOpen && (
              <div className="pl-3 border-b">
                <Link to="/gst" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All GST Services
                </Link>
                {GST_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/gst/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setMcaOpen(!mcaOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              MCA / ROC <ChevronDown className={`h-4 w-4 transition-transform ${mcaOpen ? "rotate-180" : ""}`} />
            </button>
            {mcaOpen && (
              <div className="pl-3 border-b">
                <Link to="/mca" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All MCA / ROC Services
                </Link>
                {MCA_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/mca/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setConsultOpen(!consultOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Consultation <ChevronDown className={`h-4 w-4 transition-transform ${consultOpen ? "rotate-180" : ""}`} />
            </button>
            {consultOpen && (
              <div className="pl-3 border-b">
                <Link to="/consultation" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Consultation Services
                </Link>
                {CONSULTATION_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/consultation/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setCompOpen(!compOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Compliance <ChevronDown className={`h-4 w-4 transition-transform ${compOpen ? "rotate-180" : ""}`} />
            </button>
            {compOpen && (
              <div className="pl-3 border-b">
                <Link to="/compliance" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Compliance Bundles
                </Link>
                {COMPLIANCE_BUNDLES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/compliance/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setLoanOpen(!loanOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Bank Loan <ChevronDown className={`h-4 w-4 transition-transform ${loanOpen ? "rotate-180" : ""}`} />
            </button>
            {loanOpen && (
              <div className="pl-3 border-b">
                <Link to="/bank-loan" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Bank Loan Services
                </Link>
                {BANK_LOAN_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/bank-loan/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setRegOpen(!regOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Registrations <ChevronDown className={`h-4 w-4 transition-transform ${regOpen ? "rotate-180" : ""}`} />
            </button>
            {regOpen && (
              <div className="pl-3 border-b">
                <Link to="/registrations" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Registration Services
                </Link>
                {REGISTRATION_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/registrations/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setAccOpen(!accOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              Accounting & Audit <ChevronDown className={`h-4 w-4 transition-transform ${accOpen ? "rotate-180" : ""}`} />
            </button>
            {accOpen && (
              <div className="pl-3 border-b">
                <Link to="/accounting-audit-services" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All Accounting & Audit Services
                </Link>
                {ACCOUNTING_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/accounting-audit-services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <button
              onClick={() => setTdsOpen(!tdsOpen)}
              className="py-2.5 text-sm font-medium border-b flex items-center justify-between"
            >
              TDS & TCS <ChevronDown className={`h-4 w-4 transition-transform ${tdsOpen ? "rotate-180" : ""}`} />
            </button>
            {tdsOpen && (
              <div className="pl-3 border-b">
                <Link to="/tds-tcs" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-brand">
                  All TDS & TCS Services
                </Link>
                {TDS_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to="/tds-tcs/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-foreground/80"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            {NAV.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium border-b last:border-0">
                {n.label}
              </a>
            ))}
            <Link to="/contact-us" onClick={() => setOpen(false)} className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-gradient-red px-5 text-sm font-semibold text-white">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}