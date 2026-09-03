import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Play,
  Star,
  AlertTriangle,
  FileText,
  FileSpreadsheet,
  Receipt,
  RefreshCw,
  Bell,
  Gavel,
  Globe2,
  Briefcase,
  Users,
  TrendingUp,
  Wallet,
  Building2,
  Zap,
  Headphones,
  BadgeCheck,
  ClipboardCheck,
  ChevronDown,
  Calculator,
  Landmark,
  Coins,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import praveen from "@/assets/praveen.jpg";

const FAQS = [
  {
    q: "Which ITR form should I file?",
    a: "The right form depends on your income profile. Salary, one house property, and interest income usually fit ITR-1. Capital gains, multiple house properties, foreign assets, or complex income may need ITR-2. Business, profession, F&O, or partnership income usually needs ITR-3 or ITR-4.",
  },
  {
    q: "Can I file a previous year return?",
    a: "Yes. In eligible cases, an updated return can be filed for earlier assessment years with additional tax and the right disclosures. We help you check whether updated return, revised return, or another correction route is appropriate.",
  },
  {
    q: "What if I received an income tax notice?",
    a: "Do not ignore it. The notice type decides the response timeline and documents needed. We help with notices under sections 143(1), 142(1), 148, 148A, and related proceedings.",
  },
  {
    q: "Do you support NRI taxation?",
    a: "Yes. We handle NRI cases involving rental income, interest income, capital gains, foreign salary, and disclosure requirements with DTAA support where applicable.",
  },
];
const FORM_OPTIONS = [
  "Salary Income ITR",
  "Rent Income ITR",
  "Business Income ITR",
  "Capital Gains ITR",
  "Income Tax Notice Reply",
  "Updated / Revised ITR",
];

const PROBLEMS = [
  {
    icon: FileText,
    title: "Wrong ITR form",
    text: "Choosing the wrong return form can lead to defects, mismatch, or notices.",
  },
  {
    icon: AlertTriangle,
    title: "Filing errors",
    text: "Small mistakes in income, deductions, or disclosure can trigger tax demand.",
  },
  {
    icon: Coins,
    title: "Missed deductions",
    text: "80C, 80D, HRA, and NPS benefits often go unused without proper review.",
  },
  {
    icon: TrendingUp,
    title: "Capital gains confusion",
    text: "Shares, mutual funds, and property gains need correct reporting and schedules.",
  },
  {
    icon: Globe2,
    title: "NRI and foreign income",
    text: "Foreign income, foreign assets, and DTAA rules require careful disclosure.",
  },
  {
    icon: Bell,
    title: "Delayed or revised filing",
    text: "Late returns, revised returns, and updated returns need the right strategy.",
  },
];
const IT_SERVICES = [
  {
    icon: Wallet,
    title: "Salary Income ITR (Sahaj)",
    sub: "Form 16 · Salary · Deductions",
    items: ["Form 16", "Salary income", "Deductions", "ITR-1 Sahaj"],
    cta: "Know More",
    slug: "salary-income-sahaj",
  },
  {
    icon: Wallet,
    title: "Rent Income ITR",
    sub: "Rental income · One house property · Interest & dividend",
    items: ["Rental income", "One house property", "Interest & dividend", "Salary + rent income"],
    cta: "Know More",
    slug: "simple-itr-1-salary",
  },
  {
    icon: Users,
    title: "Retired Person ITR",
    sub: "Pension · Interest · One house property",
    items: ["Pension income", "Bank interest", "Senior citizen deductions", "One house property"],
    cta: "Know More",
    slug: "retired-person-itr",
  },
  {
    icon: Coins,
    title: "Salary + Interest + Dividend ITR",
    sub: "Salary · FD interest · Dividend",
    items: ["Salary income", "FD / savings interest", "Dividend income", "ITR-1 Sahaj"],
    cta: "Know More",
    slug: "salary-interest-dividend-itr",
  },
  {
    icon: Building2,
    title: "Salary + Rent Income ITR",
    sub: "Salary · HRA · Rental income",
    items: ["Salary income", "HRA claim", "Rental income", "Home loan interest"],
    cta: "Know More",
    slug: "salary-rent-income-itr",
  },
  {
    icon: Briefcase,
    title: "Business ITR-4",
    sub: "Presumptive â€” 44AD / 44ADA",
    items: ["Small business 44AD", "Professionals 44ADA", "Composition friendly"],
    cta: "Know More",
    slug: "business-itr-4-presumptive",
  },
  {
    icon: TrendingUp,
    title: "Capital Gain ITR-2",
    sub: "Shares Â· Mutual Funds Â· Property",
    items: ["Equity STCG / LTCG", "Mutual fund gains", "Property sale", "ESOP / RSU"],
    cta: "Know More",
    slug: "capital-gain-itr-2",
  },
  {
    icon: TrendingUp,
    title: "Shares / Mutual Fund Gain-Loss",
    sub: "Stock Market ITR-2",
    items: ["STCG", "LTCG", "Mutual fund gains", "Loss carry-forward"],
    cta: "Know More",
    slug: "shares-mutual-fund-gain-loss-itr-2",
  },
  {
    icon: Calculator,
    title: "Business ITR-3",
    sub: "F&O Â· Intraday Â· Profession Â· Partner",
    items: [
      "F&O / derivatives",
      "Intraday trading",
      "Commission / professional",
      "Partnership income",
    ],
    cta: "Know More",
    slug: "business-itr-3",
  },
  {
    icon: Building2,
    title: "LLP / Firm / Company",
    sub: "ITR-5 Â· ITR-6 Â· Corporate Tax",
    items: [
      "LLP & partnership firm",
      "Private Limited Company",
      "Tax audit u/s 44AB",
      "115BAA / 115BAB regime",
    ],
    cta: "Know More",
    slug: "llp-partnership-firm-itr-5",
  },
  {
    icon: Globe2,
    title: "Foreign Income Tax Filing",
    sub: "Foreign income � DTAA � FTC",
    items: [
      "Global income disclosure",
      "DTAA / FTC support",
      "Global income disclosure",
      "Expert CA support",
    ],
    cta: "Know More",
    slug: "foreign-income-tax-filing-mumbai",
  },
  {
    icon: RefreshCw,
    title: "Updated & Past Year ITR",
    sub: "Belated, revised, ITR-U",
    items: ["Belated returns", "Revised return", "Updated return (ITR-U)", "Past year correction"],
    cta: "Fix Now",
    slug: "updated-past-year-itr-filing-mumbai",
  },
  {
    icon: RefreshCw,
    title: "Updated ITR (ITR-U)",
    sub: "Fix Past 1-4 Years",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "updated-itr-u",
  },
  {
    icon: RefreshCw,
    title: "Last 2 Years ITR Filing",
    sub: "Pending returns · Past year filing",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "last-2-years-itr-filing-mumbai",
  },
  {
    icon: RefreshCw,
    title: "Last 3 Years ITR Filing",
    sub: "Pending returns � Past year filing",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "last-3-years-itr-filing-mumbai",
  },
  {
    icon: RefreshCw,
    title: "Last 4 Years ITR Filing",
    sub: "Pending returns � Past year filing",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "last-4-years-itr-filing-mumbai",
  },
  {
    icon: RefreshCw,
    title: "Last 5 Years ITR Filing",
    sub: "Pending returns � Past year filing",
    items: ["Missed returns", "Disclose extra income", "Voluntary compliance", "Section 139(8A)"],
    cta: "File Now",
    slug: "last-5-years-itr-filing-mumbai",
  },
  {
    icon: FileSpreadsheet,
    title: "Revised ITR (139(5))",
    sub: "Section 139(5)",
    items: [
      "Correct filed return",
      "Revised return support",
      "ITR correction",
      "Wrong form or details",
    ],
    cta: "Revise Now",
    slug: "revised-itr-filing-section-139-5",
  },
  {
    icon: FileSpreadsheet,
    title: "Rectification of ITR",
    sub: "Section 154",
    items: ["Tax credit mismatch", "Refund correction", "AIS / 26AS mismatch", "Demand fix"],
    cta: "Know More",
    slug: "rectification-of-itr-section-154",
  },
  {
    icon: AlertTriangle,
    title: "Defective ITR 139(9)",
    sub: "Fix Invalid Return",
    items: ["Notice response", "Missing details", "Incorrect data", "Re-submit return"],
    cta: "Know More",
    slug: "defective-itr-notice-139-9",
  },
  {
    icon: Bell,
    title: "Income Tax Notice",
    sub: "143(1) Â· 142 Â· 148 Â· 148A",
    items: [
      "143(1) intimation",
      "142 / 143(2) scrutiny",
      "148 / 148A reassessment",
      "245 refund adjustment",
    ],
    cta: "Get Help",
    slug: "income-tax-notice",
  },
  {
    icon: Gavel,
    title: "Appeal & Reply",
    sub: "CIT(A) Â· ITAT Â· Hearing",
    items: ["First appeal CIT(A)", "ITAT appeal", "Stay applications", "Faceless representation"],
    cta: "Talk To CA",
    slug: "appeal-reply",
  },
  {
    icon: FileText,
    title: "Draft Reply to Notice",
    sub: "Professional Letter Drafting",
    items: [
      "139(9) defective ITR",
      "143(1) intimation",
      "142(1) inquiry",
      "148 / 148A reassessment",
    ],
    cta: "Get Drafted",
    slug: "drafting-reply-to-income-tax-notice",
  },
  {
    icon: Gavel,
    title: "Income Tax Appeal & Reply",
    sub: "Form 35 Â· CIT(A) Â· ITAT",
    items: ["Challenge assessment orders", "File Form 35", "ITAT escalation", "Dispute resolution"],
    cta: "File Appeal",
    slug: "income-tax-appeal-and-reply",
  },
  {
    icon: Gavel,
    title: "Appeal & Hearing",
    sub: "CIT(A) Representation u/s 250",
    items: [
      "Hearing preparation",
      "Written submissions",
      "Oral / video representation",
      "Post-order strategy",
    ],
    cta: "Represent Me",
    slug: "appeal-and-hearing-income-tax",
  },
];
const SEGMENTS = [
  { icon: Wallet, label: "Salaried Individuals" },
  { icon: Briefcase, label: "Freelancers & Consultants" },
  { icon: TrendingUp, label: "Traders (F&O / Intraday)" },
  { icon: Building2, label: "Business Owners" },
  { icon: Landmark, label: "Partnership / LLP / Company" },
  { icon: Globe2, label: "NRIs & Foreign Income" },
  { icon: Users, label: "Retired Persons" },
  { icon: Receipt, label: "Rent & Investment Income" },
];
const WHY = [
  {
    icon: BadgeCheck,
    title: "Experienced Chartered Accountant",
    text: "Every return is reviewed by a qualified professional before filing.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate and compliant",
    text: "Income, deductions, AIS, and 26AS are checked carefully to reduce mismatch risk.",
  },
  {
    icon: Zap,
    title: "Quick turnaround time",
    text: "We keep the process fast, simple, and responsive from document collection to filing.",
  },
  {
    icon: Bell,
    title: "Notice support",
    text: "Support continues after filing if you receive a notice, demand, or clarification request.",
  },
  {
    icon: ClipboardCheck,
    title: "Tax planning included",
    text: "We help identify deductions, exemptions, and the right tax regime where applicable.",
  },
  {
    icon: Headphones,
    title: "Clear communication",
    text: "You get simple explanations, transparent guidance, and no confusing jargon.",
  },
];
const INSIGHTS = [
  {
    title: "Choose the right ITR form",
    text: "ITR-1, ITR-2, ITR-3, and ITR-4 cover different income profiles. Selecting the wrong one can delay processing.",
  },
  {
    title: "Keep AIS and 26AS aligned",
    text: "Mismatch between reported income and tax statements often leads to notices or demand adjustments.",
  },
  {
    title: "Handle capital gains properly",
    text: "Shares, mutual funds, and property gains need correct treatment, exemption planning, and disclosure.",
  },
  {
    title: "Watch deadlines carefully",
    text: "Late filing can mean interest, penalties, and loss of certain carry-forward benefits.",
  },
  {
    title: "Updated and revised returns are different",
    text: "A revised return corrects a filed return, while an updated return helps in eligible past year cases.",
  },
  {
    title: "Refunds need validation",
    text: "A pre-validated bank account and correct e-verification help refunds process faster.",
  },
];
const STEPS = [
  {
    n: "01",
    title: "Share Documents",
    text: "Send PAN, Aadhaar, Form 16, bank statements, and any investment or capital gain details.",
  },
  {
    n: "02",
    title: "Income Review",
    text: "We analyze salary, rent, interest, business income, capital gains, and notices if any.",
  },
  {
    n: "03",
    title: "Choose the Right Form",
    text: "ITR-1 to ITR-4 or other applicable return form is selected after a proper review.",
  },
  {
    n: "04",
    title: "File with Accuracy",
    text: "Deductions, schedules, and tax calculations are reviewed before the return is filed.",
  },
  {
    n: "05",
    title: "Ack and Support",
    text: "We share the acknowledgement and stay available for e-verification, refund, or follow-up help.",
  },
];
const DOC_PERSONAL = [
  "PAN card",
  "Aadhaar card",
  "Form 16 or salary proof",
  "Bank statements / passbook",
  "Investment proofs (80C, 80D, NPS)",
];
const DOC_BUSINESS = [
  "Profit and loss statement",
  "Capital gain statement",
  "Rental income details",
  "Foreign income or asset details",
  "GST returns and books of accounts if applicable",
];
const REVIEWS = [
  {
    name: "Rohan Mehta",
    role: "Salaried Employee",
    text: "The team filed my return quickly, explained every step, and made sure my deductions were properly covered.",
  },
  {
    name: "Anjali Verma",
    role: "Freelancer",
    text: "My professional income and ITR-3 filing were handled smoothly. Communication was clear from start to finish.",
  },
  {
    name: "Imran Khan",
    role: "NRI Taxpayer",
    text: "Rental income and capital gains were managed properly, and the support team responded very fast.",
  },
  {
    name: "Neha Shah",
    role: "Business Owner",
    text: "They helped me choose the right ITR and also guided me on future compliance. Very dependable team.",
  },
  {
    name: "Vikram Joshi",
    role: "Trader",
    text: "F&O and intraday income can be tricky, but the filing was handled correctly and on time.",
  },
];
const MORE_TOPICS = [
  { icon: Wallet, label: "Salary Income (Sahaj)", slug: "salary-income-sahaj" },
  { icon: Receipt, label: "Rent Income ITR", slug: "simple-itr-1-salary" },
  { icon: Users, label: "Retired Person ITR", slug: "retired-person-itr" },
  { icon: Coins, label: "Salary + Interest + Dividend", slug: "salary-interest-dividend-itr" },
  { icon: Building2, label: "Salary + Rent Income", slug: "salary-rent-income-itr" },
  { icon: Briefcase, label: "Business ITR-3", slug: "business-itr-3" },
  { icon: Calculator, label: "ITR-4 Sugam", slug: "business-itr-4-presumptive" },
  { icon: TrendingUp, label: "Capital Gain ITR-2", slug: "capital-gain-itr-2" },
  { icon: RefreshCw, label: "Updated & Past Year ITR", slug: "updated-past-year-itr-filing-mumbai" },
    { icon: RefreshCw, label: "Updated ITR", slug: "updated-itr-u" },
  { icon: Bell, label: "Income Tax Notice", slug: "income-tax-notice" },
  { icon: FileSpreadsheet, label: "Revised ITR", slug: "revised-itr-filing-section-139-5" },
  { icon: Gavel, label: "Appeal & Reply", slug: "appeal-reply" },
];

const SERVICE_ICON_MAP: Record<string, any> = {
  "salary-income-sahaj": Wallet,
  "simple-itr-1-salary": Receipt,
  "retired-person-itr": Users,
  "salary-interest-dividend-itr": Coins,
  "salary-rent-income-itr": Building2,
  "business-itr-4-presumptive": Briefcase,
  "capital-gain-itr-2": TrendingUp,
  "shares-mutual-fund-gain-loss-itr-2": TrendingUp,
  "business-itr-3": Calculator,
  "llp-partnership-firm-itr-5": Landmark,
  "foreign-income-tax-filing-mumbai": Globe2,
  "updated-past-year-itr-filing-mumbai": RefreshCw,
  "updated-itr-u": RefreshCw,
  "last-2-years-itr-filing-mumbai": RefreshCw,
  "last-3-years-itr-filing-mumbai": RefreshCw,
  "last-4-years-itr-filing-mumbai": RefreshCw,
  "last-5-years-itr-filing-mumbai": RefreshCw,
  "revised-itr-filing-section-139-5": FileSpreadsheet,
  "rectification-of-itr-section-154": FileSpreadsheet,
  "defective-itr-notice-139-9": AlertTriangle,
  "income-tax-notice": Bell,
  "appeal-reply": Gavel,
  "drafting-reply-to-income-tax-notice": FileText,
  "income-tax-appeal-and-reply": Gavel,
  "appeal-and-hearing-income-tax": Gavel,
};

export const Route = createFileRoute("/income-tax/")({
  head: () => ({
    meta: [
      {
        title:
          "Income Tax Filing Services in Mumbai by Expert Chartered Accountant | Praveen J & Associates",
      },
      {
        name: "description",
        content:
          "Income tax filing services in Mumbai for salaried individuals, freelancers, businesses, capital gains, NRI income, updated returns, and tax notices by expert Chartered Accountants.",
      },
      {
        name: "keywords",
        content:
          "Income Tax Filing Services, ITR Filing, Income Tax Consultant, Chartered Accountant, Updated ITR, Income Tax Notice, Business ITR, Capital Gain Tax, NRI Tax Filing",
      },
      {
        property: "og:title",
        content: "Income Tax Filing Services in Mumbai | Praveen J & Associates",
      },
      {
        property: "og:description",
        content:
          "Expert CA support for income tax filing, deductions, capital gains, business income, NRI cases, updated returns, and tax notice handling.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/income-tax" },
    ],
    links: [{ rel: "canonical", href: "/income-tax" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Income Tax Return Filing",
          provider: { "@type": "Organization", name: "Praveen J & Associates" },
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: IncomeTaxPage,
});

function ItHero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-xs font-semibold text-brand shadow-card">
            <Sparkles className="h-3.5 w-3.5" /> Income Tax Filing
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
            Income Tax Filing Services in Mumbai by Expert Chartered Accountant
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Filing your income tax return does not have to be stressful. At Praveen J & Associates,
            we provide accurate, compliant, and hassle-free ITR filing services in Mumbai for
            individuals, professionals, and businesses.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" /> ITR-1 to ITR-4
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" /> Tax planning support
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand" /> Notice and scrutiny help
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand" /> NRI and complex income support
            </span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#it-lead"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-red px-6 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Start Your ITR Filing <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#it-lead"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white border border-border px-6 text-sm font-semibold text-foreground hover:border-primary hover:text-brand transition"
            >
              Talk to CA
            </a>
            <a
              href="https://wa.me/918169887643"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-soft bg-white p-3">
            <div className="relative aspect-[16/12] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-light to-white">
              <img
                src={praveen}
                alt="CA Praveen Jain - Income Tax Expert"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 backdrop-blur shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Play income tax intro video"
              >
                <Play className="h-6 w-6 text-brand fill-brand ml-1" />
              </button>
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" /> Expert CA
                Support
              </div>
            </div>
          </div>

          <div
            id="it-lead"
            className="mt-5 rounded-3xl bg-white shadow-soft border border-border p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-lg">Talk to Our CA Today</h3>
              <span className="text-xs font-semibold text-brand bg-primary/10 px-2 py-1 rounded-full">
                Free Call
              </span>
            </div>
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto" />
                <p className="mt-2 font-semibold">
                  Thanks! Our CA team will connect with you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-3"
              >
                <input
                  required
                  placeholder="Your Name"
                  className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  required
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="Mobile Number"
                  className="h-11 rounded-xl border border-border px-4 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <select
                  required
                  className="h-11 rounded-xl border border-border px-4 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Income Tax Requirement</option>
                  {FORM_OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button className="h-12 rounded-xl bg-gradient-red text-white font-semibold shadow-soft hover:shadow-lg transition-all inline-flex items-center justify-center gap-2">
                  Request Callback <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center inline-flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Quick response - No spam - Expert CA
                  support
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-brand px-3 py-1 text-xs font-semibold mb-3">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </div>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base sm:text-lg text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function Problems() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Common Tax Problems"
          title="Why Income Tax Filing Often Goes Wrong"
          sub="These are the issues people face most often. We help you avoid them before they become a notice."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl bg-white p-5 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center group-hover:bg-gradient-red group-hover:text-white transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItServices() {
  return (
    <section id="it-services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Our Income Tax Services"
          title="Income Tax Cases Handled Under One Roof"
          sub="From salary and rent income to capital gains, business income, notices, and appeals - we support all major filing needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IT_SERVICES.map((s) => {
            const Icon = SERVICE_ICON_MAP[s.slug] ?? Briefcase;
            return (
              <Link
                key={s.slug}
                to="/income-tax/$slug"
                params={{ slug: s.slug }}
                className="group relative rounded-3xl border border-border bg-white p-6 hover:border-primary hover:shadow-soft hover:-translate-y-1 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 text-brand flex items-center justify-center mb-5 group-hover:bg-gradient-red group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-xl">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.sub}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Segments() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Who Needs This Service"
          title="This Income Tax Service Fits Your Profile If..."
          sub="If any of these apply to you, we can help you file correctly and on time."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {SEGMENTS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white p-5 text-center shadow-card hover:shadow-soft hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20"
            >
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-3 font-semibold text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Why Choose Us" title="Why Clients Trust Praveen J & Associates" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl bg-white p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display font-bold">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="py-16 sm:py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Important Tax Insights"
          title="A Few Things Every Taxpayer Should Know"
          sub="These points help you file correctly and avoid common mistakes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INSIGHTS.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl bg-white p-6 border-l-4 border-brand shadow-card"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold">{i.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle eyebrow="Simple Process" title="How We File Your Return" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-white p-6 hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="font-display text-4xl font-bold text-brand/15">{s.n}</div>
              <h3 className="mt-2 font-display font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Documents() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Document Checklist"
          title="Documents Required for ITR Filing"
          sub="Keep these ready and we will take care of the filing process."
        />
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { title: "Personal Documents", icon: BadgeCheck, items: DOC_PERSONAL },
            { title: "Business / Income Documents", icon: FileSpreadsheet, items: DOC_BUSINESS },
          ].map((g) => (
            <div
              key={g.title}
              className="rounded-3xl bg-white border border-border p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{g.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItReviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="Google Reviews"
          title="Trusted by Individuals and Businesses"
          sub="4.8/5 rating and 120+ verified client reviews"
        />
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white border border-border p-6 shadow-card hover:shadow-soft transition-all"
            >
              <div className="flex gap-0.5 mb-3">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t">
                <div className="h-10 w-10 rounded-full bg-gradient-red text-white flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Learning() {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <SectionTitle
          eyebrow="More to Explore"
          title="More Income Tax Services"
          sub="Quick links to related filing, correction, notice, and appeal support pages."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MORE_TOPICS.map((item) => (
            <Link
              key={item.slug}
              to="/income-tax/$slug"
              params={{ slug: item.slug }}
              className="group rounded-2xl bg-white border border-border p-4 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-brand flex items-center justify-center group-hover:bg-gradient-red group-hover:text-white transition-colors shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-sm leading-snug">{item.label}</div>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                  View page <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ItFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 sm:py-24">
      {" "}
      <div className="container mx-auto px-4 max-w-3xl">
        {" "}
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Income Tax Questions" />{" "}
        <div className="space-y-3">
          {" "}
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-white overflow-hidden">
              {" "}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                {" "}
                <span className="font-display font-semibold">{f.q}</span>{" "}
                <ChevronDown
                  className={`h-5 w-5 text-brand transition-transform ${open === i ? "rotate-180" : ""}`}
                />{" "}
              </button>{" "}
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
              )}{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function ItFinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-red">
      {" "}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />{" "}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />{" "}
      <div className="container mx-auto px-4 relative text-center text-white">
        {" "}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold mb-5">
          {" "}
          <ClipboardCheck className="h-4 w-4" /> Limited consultation slots{" "}
        </div>{" "}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          {" "}
          Need help with your Income Tax Return? Talk to our CA today.{" "}
        </h2>{" "}
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
          {" "}
          Start your filing with expert support for salary, rent, business, capital gains, NRI, and
          notice cases.{" "}
        </p>{" "}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {" "}
          <a
            href="#it-lead"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-brand hover:shadow-lg transition-all"
          >
            {" "}
            Start ITR Filing <ArrowRight className="h-4 w-4" />{" "}
          </a>{" "}
          <a
            href="#it-lead"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 border border-white/40 backdrop-blur px-7 text-sm font-bold text-white hover:bg-white/20 transition-all"
          >
            {" "}
            Book Consultation{" "}
          </a>{" "}
          <a
            href="https://wa.me/918169887643"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-bold text-white hover:opacity-90 transition"
          >
            {" "}
            <MessageCircle className="h-4 w-4" /> WhatsApp{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function IncomeTaxPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ItHero />
        <Problems />
        <ItServices />
        <Segments />
        <WhyChoose />
        <Insights />
        <Process />
        <Documents />
        <ItReviews />
        <Learning />
        <ItFAQ />
        <ItFinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}






